import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  currentIngredient: string;

  onGetIngredient(ingredient: Ingredient) {
    const ingredientsNamesArray = this.ingredients.map((element) => {
      return element.name;
    });

    !ingredientsNamesArray.includes(ingredient.name) &&
      this.ingredients.push(ingredient);
  }

  onClear() {
    this.ingredients = [];
  }

  onClickIngredient(ingredient: { target: { textContent: string } }) {
    this.currentIngredient = ingredient.target.textContent
      .replace(/\s*\(\d+\)/, '')
      .toLowerCase()
      .trim();
  }

  onRemove() {
    let anyResult = true;
    const currentIngredientsIndex = this.ingredients.findIndex((element) => {
      if (
        element.name
          .replace(/\s*\(\d+\)/, '')
          .toLowerCase()
          .trim() === this.currentIngredient
      ) {
        anyResult = false;
        return true;
      } else {
        return false;
      }
    });

    !anyResult && this.ingredients.splice(currentIngredientsIndex, 1);
  }

  constructor() {}

  ngOnInit() {}
}
