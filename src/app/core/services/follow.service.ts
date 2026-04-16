import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowService {
  // For now, use in-memory storage
  private following = signal<Set<number>>(new Set());
  private followerCounts = signal<Map<number, number>>(new Map());
  private followingCount = signal(0);

  constructor() {
    // Initialize with some mock data
    const initialFollowerCounts = new Map<number, number>();
    initialFollowerCounts.set(1, 123);
    initialFollowerCounts.set(2, 89);
    this.followerCounts.set(initialFollowerCounts);

    const initialFollowing = new Set<number>();
    initialFollowing.add(2); // Following user ID 2
    this.following.set(initialFollowing);

    this.followingCount.set(1);
  }

  isFollowing(userId: number): boolean {
    return this.following().has(userId);
  }

  toggleFollow(userId: number): void {
    const isCurrentlyFollowing = this.isFollowing(userId);
    const currentFollowing = new Set(this.following());

    if (isCurrentlyFollowing) {
      currentFollowing.delete(userId);
      this.following.set(currentFollowing);
      this.followingCount.update(count => count - 1);
    } else {
      currentFollowing.add(userId);
      this.following.set(currentFollowing);
      this.followingCount.update(count => count + 1);
    }
  }

  getFollowerCount(userId: number): number {
    return this.followerCounts().get(userId) ?? 0;
  }

  getFollowingCount(): number {
    return this.followingCount();
  }
}