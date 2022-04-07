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
  formData!: FormGroup;

  ngOnInit() {
    this.formData = new FormGroup({
      Name: new FormControl('Al Pastor Tacos'),
      Instructions: new FormControl('1. Cook Pork, 2. Heat Tortillas')
    })
  }

  toggleForm() {
    // hides form, initially, for inputting new recipes
    // also used for hiding 'Add Recipe' button after click
    this.addParameter = !this.addParameter
  }

  onSubmit() {
    console.log("recipe form submitted!!!")
    
    console.log(this.formData.value)
    
    this.formData.setValue

    console.log(this.formData.value)
  }

}
