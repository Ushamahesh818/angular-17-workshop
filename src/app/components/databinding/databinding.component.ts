import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  password:string="";
  inputType="password"
  passwordText:string="Show Password";
  msg:string="";
  state:string="Karnataka";
  num1:number=0;
  num2:number=0;
  showORHidePassword(){
    if(this.inputType == "password"){
      this.inputType="text";
      this.passwordText="Hide Password";
    }else{
      this.inputType="password"
     this.passwordText="Show Password"
    }
  }
 
 
}
