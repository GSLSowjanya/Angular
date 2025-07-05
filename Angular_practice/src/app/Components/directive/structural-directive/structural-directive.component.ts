import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-structural-directive',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './structural-directive.component.html',
  styleUrl: './structural-directive.component.css'
})
export class StructuralDirectiveComponent {
  num1:string='';
  num2:string='';
  isActive:boolean=false;
  isDiv1Visible:boolean=false;
  isDiv2Visible:boolean=false;
  selectedState:string='';
  showDiv1(){
    this.isDiv1Visible=true;
  }
  hideDiv1(){
    this.isDiv1Visible=false;
  }
  toggleDiv2(){
    this.isDiv2Visible=!this.isDiv2Visible
    // if(this.isDiv2Visible==true){
    //   this.isDiv2Visible=false;
    // }else{
    //   this.isDiv2Visible=true;
    // }
  }
  // setNum1(num:string){
  //   this.num1=num;
  // }
  // setNum2(num:string){
  //   this.num2=num;
  // }
  isDiv3visible:boolean=false;
  compareNumbers(){
    if(this.num1==this.num2){
      this.isDiv3visible=true;
    }else{
      this.isDiv3visible=false;
    }
  }
  

}
