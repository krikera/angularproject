import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes:Recipe[] = [
    new Recipe('A test Recipe','This is simply a test','https://www.whiskaffair.com/wp-content/uploads/2021/10/Paneer-Lababdar-2-1.jpg'),
    
  ];

}
