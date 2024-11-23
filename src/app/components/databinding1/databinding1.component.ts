import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding1.component.html',
  styleUrl: './databinding1.component.css'
})
export class Databinding1Component {
 name:string="Sachin Tendulkar";
 img_src:string="../../../assets/images/google-icon.png";
 flag:boolean=false;
 msg:string="";
 state:string=""
result=""
 toggleButton(){
  alert("This is toggle function")
 }

 toggle(){
  this.flag=!this.flag;
 }

 addition(a:string,b:string){
 this.result=`The result is {+a + +b}`
 }
}
