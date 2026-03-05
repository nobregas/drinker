import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrinkCardComponent } from '../drink-card/drink-card';
import { Drink } from '../../../core/models/drink.model';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, DrinkCardComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  // Signal input for drinks array
  readonly drinks = input.required<Drink[]>();
}
