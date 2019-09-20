import { Component, OnInit } from '@angular/core';

import { Ingredient, ingredient } from '../shared/ingredient.model'

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"]
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new ingredient("Apples", 5),
    new ingredient("Tomatoes", 10),
  ];

  constructor() {}

  ngOnInit() {}
}
