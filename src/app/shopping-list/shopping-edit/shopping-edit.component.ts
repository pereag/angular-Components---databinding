import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredientOutput = new EventEmitter<Ingredient>();
  @Output() clearOutput = new EventEmitter<void>();
  @Output() removeIngredient = new EventEmitter<void>();
  @ViewChild('amountInput') amountInputRef: ElementRef;
  constructor() {}

  onAddIngredient(name: HTMLInputElement) {
    const amount = Number(this.amountInputRef.nativeElement.value);
    this.ingredientOutput.emit(
      new Ingredient(
        name.value.charAt(0).toUpperCase() + name.value.slice(1).trim(),
        amount === 0 ? 1 : amount
      )
    );
  }

  onClear() {
    this.clearOutput.emit();
  }

  onRemove() {
    this.removeIngredient.emit();
  }

  ngOnInit() {}
}
