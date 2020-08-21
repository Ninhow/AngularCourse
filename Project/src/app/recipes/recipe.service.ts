import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
    
    constructor(private shoppingListService: ShoppingListService){

    }
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super-tasty Schnitzel - just awesome!', 
            'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
            [
                new Ingredient('Meat', 1), 
                new Ingredient('French Fries', 10)
            ]
        ),
        new Recipe(
            'A Test Recipe', 
            'This is simply ', 
            'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/1200px-RedDot_Burger.jpg',
            [
                new Ingredient('Meat', 1), 
                new Ingredient('Tomato', 1), 
                new Ingredient('Onion', 1)
            ]
        )
    ];

    getRecipes(){
        return this.recipes.slice();
    }

    sendShoppingList(ingredients: Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }
}