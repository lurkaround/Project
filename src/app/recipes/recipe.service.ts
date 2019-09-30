import { Recipe } from './recipe.model'
import { EventEmitter } from '@angular/core';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

private recipes: Recipe[] = [
    new Recipe(
        "A Test Recipe",
        "Test description",
        "http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg"
    ),
    new Recipe(
        "Another Test Recipe",
        "Test description",
        "http://technicallyteamann.com/wp-content/uploads/2017/03/Recipe_logo-1.jpeg"
    )
    ];

    getRecipes() {
        return this.recipes.slice();
    }
}