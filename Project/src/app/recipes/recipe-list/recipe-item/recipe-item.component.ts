import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { } from 'protractor';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
    @Input() recipe: Recipe;
    @Output() recipeClicked = new EventEmitter<void>();

    constructor() { }

    ngOnInit() {
    }

    onSelected(){
        this.recipeClicked.emit();
    }

}
