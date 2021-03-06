import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
    constructor(private shoppingListService: ShoppingListService) { }

    ngOnInit() {
    }

    onAddItem(itemName, itemAmount){
        this.shoppingListService.addIngredient(new Ingredient(itemName.value, itemAmount.value)) 
    }
}
