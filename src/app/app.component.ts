import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
  formData = new FormGroup({
    Recipe: new FormControl(''),
    Instructions: new FormControl('')
  })

  toggleForm() {
    this.addParameter = !this.addParameter
  }

  onSubmit() {
    this.formData.setValue
    this.recipeArray.push(this.formData.value.Recipe)
    // var str = this.recipeArray.toString()
    // console.log(this.recipeArray.toString())
    // console.log("recipe form submitted!!!")
    // console.log(this.recipeArray.length)
    // console.log(this.formData.value)

    if (this.recipeArray.length > 1 ) {
      this.addRecipe = !this.addRecipe
    } 
  }
}