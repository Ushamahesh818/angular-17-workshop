import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-career',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './career.component.html',
  styleUrl: './career.component.css'
})
export class CareerComponent {
 constructor(private router:Router){

 }

 goToHomePage(){
  console.log("Your logic to do something before routing")
  this.router.navigate(['/home'])
 }
}
