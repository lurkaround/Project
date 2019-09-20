import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a test description', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fminimalistbaker.com%2Fwp-content%2Fuploads%2F2015%2F08%2FAMAZING-HEALTHY-Vegan-Fried-Rice-with-Crispy-Tofu-vegan-glutenfree-recipe-chinese-friedrice-minimalistbaker-plantbased.jpg&f=1&nofb=1')
  ];

  constructor() {}

  ngOnInit() {}
}
