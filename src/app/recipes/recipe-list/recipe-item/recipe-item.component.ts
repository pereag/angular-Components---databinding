import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input('recipeInput') recipe: Recipe;
  @Output('currentRecipeOutput') recipeOutput = new EventEmitter<Recipe>();

  constructor() {}

  onRecipeItemClick(recipe: Recipe) {
    this.recipeOutput.emit(recipe);
  }

  ngOnInit() {}
}
