import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-math',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './math.component.html',
  styleUrl: './math.component.css'
})
export class MathComponent {

  number1:number=0;
  number2:number=0;
  resultMsg:string='';
  result:number=0;
 constructor(private mathService:MathService){

 }
 add(){
  this.result=this.mathService.add(this.number1,this.number2);
  this.resultMsg=`The Addition of ${this.number1} and ${this.number2} =${this.result}`;
 }
 sub(){
  this.result=this.mathService.sub(this.number1,this.number2);
  this.resultMsg=`The Subtraction of ${this.number1} and ${this.number2} =${this.result}`;
 }
 mul(){
  this.result=this.mathService.mul(this.number1,this.number2)
  this.resultMsg=`The Multiplication of ${this.number1} and ${this.number2} =${this.result}`;
 }
}
