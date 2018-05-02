import { Component } from '@angular/core';
import { Recipe } from './models/recipe.model';
import { RECIPES } from './seed-recipes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recipe List';
  recipes: Recipe[] = [
    new Recipe(RECIPES[0].name, RECIPES[0].description, RECIPES[0].ingredients, RECIPES[0].instructions),
    new Recipe(RECIPES[1].name, RECIPES[1].description, RECIPES[1].ingredients, RECIPES[1].instructions),
    new Recipe(RECIPES[2].name, RECIPES[2].description, RECIPES[2].ingredients, RECIPES[2].instructions)
  ];
  selectRecipe = null;

  displayRecipe(recipe) {
    this.selectRecipe = recipe;
  }

  hideRecipe(recipe) {
    this.selectRecipe = null;
  }
}
