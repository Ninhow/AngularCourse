import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

    @Output() ingredientAdded = new EventEmitter<{name:string, amount: number}>();

    constructor() { }

    ngOnInit() {
    }

    onAddItem(itemName, itemAmount){
        this.ingredientAdded.emit(
            new Ingredient(itemName.value, itemAmount.value)
        )   
    }
}