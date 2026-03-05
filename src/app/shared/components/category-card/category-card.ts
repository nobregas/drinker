import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../../core/models/category.model';

@Component({
  selector: 'app-category-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss']
})
export class CategoryCardComponent {
  // Signal input for category data
  readonly category = input.required<Category>();
}
