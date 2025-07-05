import { Component, Input, signal } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  name:string='Sowjanya';
  inputType='checkbox';
  designation:string='student';
  firstName=signal("Gonthi");
  setDesignation(){
    this.designation='teacher';
  }
  showAlert(message:string){
    alert(message);
  }
  courseName:string='Angular';
  changeCoursename(){
    this.courseName='reactJS';
    this.firstName.set('nalamati');
  }
}
