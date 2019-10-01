import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
         recipeSelected = new EventEmitter<Recipe>();

         private recipes: Recipe[] = [
           new Recipe(
             "Firecracker Vegan Lettuce",
             "Hello YUM",
             "https://pinchofyum.com/wp-content/uploads/Tofu-Lettuce-Wraps-Recipe.jpg",
             [new Ingredient("Lettuce", 2), new Ingredient("Tofu", 3)]
           ),
           new Recipe(
             "Vegan Bowl",
             "Stuff in a bowl!",
             "https://detoxinista.com/wp-content/uploads/2017/03/instant-pot-vegan-burrito-bowls.jpg",
             [new Ingredient('Bowl', 1), 
             new Ingredient('Avocado', 3)]
           )
         ];

         constructor(private slService: ShoppingListService) {}

         getRecipes() {
           return this.recipes.slice();
         }

         addIngredientsToShoppingList(ingredients: Ingredient[]) {
            this.slService.addIngredients(ingredients);
         }
       }