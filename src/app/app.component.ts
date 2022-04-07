import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pa-starter-angular';
  recipeName = '';
  recipeInstructions = '';
  addParameter:boolean=false;
  addRecipe:boolean=false;
  recipeArray = new Array();
  recipeForm = new FormGroup({
    Recipe: new FormControl(''),
    Instructions: new FormControl('')
  })

  toggleForm() {
    this.addParameter = !this.addParameter
  }

  onSubmit() {
    this.toggleForm()
    this.recipeForm.addControl
    this.recipeArray.push(this.recipeForm.value.Recipe)
    this.recipeForm.reset()

    console.log(this.recipeArray.toString())
    console.log(this.recipeArray.length)
    console.log(this.recipeForm)

    
  }
}