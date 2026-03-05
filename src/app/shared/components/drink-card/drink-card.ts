import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingComponent } from '../rating/rating';
import { Drink } from '../../../core/models/drink.model';

@Component({
  selector: 'app-drink-card',
  standalone: true,
  imports: [CommonModule, RatingComponent],
  templateUrl: './drink-card.component.html',
  styleUrls: ['./drink-card.component.scss']
})
export class DrinkCardComponent {
  // Signal input for drink data
  readonly drink = input.required<Drink>();
}
