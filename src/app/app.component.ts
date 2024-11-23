import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './flipkart/navbar/navbar.component';
import { HeaderComponent } from './flipkart/header/header.component';
import { CarouselComponent } from './flipkart/carousel/carousel.component';
import { FooterComponent } from './flipkart/footer/footer.component';
import { DatabindingComponent } from './components/databinding/databinding.component';
import { ProductdisplayComponent } from './product/productdisplay/productdisplay.component';
import { ProductListPaginationComponent } from './components/product-list-pagination/product-list-pagination.component';
import { CommonModule } from '@angular/common';
import { PrefixPipe } from './pipes/prefix.pipe';
import { OrdinalPipe } from './pipes/ordinal.pipe';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './commumnication/parent/parent.component';
import { MathComponent } from './components/math/math.component';
import { EmployeeCRUDComponent } from './components/employee-crud/employee-crud.component';
import { ObservableDemo1Component } from './components/observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from './components/observable-demo2/observable-demo2.component';
import { SubjectDemo1Component } from './components/subject-demo-1/subject-demo-1.component';
import { MessageDemo1Component } from './components/message-demo-1/message-demo-1.component';
import { MessageDemo2Component } from './components/message-demo-2/message-demo-2.component';
import { RegistrationTemplateDrivenComponent } from './forms/registration-template-driven/registration-template-driven.component';
import { Databinding1Component } from './components/databinding1/databinding1.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { UserslistComponent } from './users/userslist/userslist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, CarouselComponent, 
    FooterComponent, DatabindingComponent,ProductdisplayComponent,ProductListPaginationComponent
    ,FormsModule,CommonModule,PrefixPipe,OrdinalPipe,ParentComponent,MathComponent,EmployeeCRUDComponent,ObservableDemo1Component,ObservableDemo2Component,SubjectDemo1Component,
  MessageDemo1Component,MessageDemo2Component,RegistrationTemplateDrivenComponent,Databinding1Component,DirectivesComponent,UserslistComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-17-workshop';
  flag: boolean = true;
  darkTheme = "background-color:black";
  num:number=1;

  employees : any[]= [
    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '25/6/1988' },
    { code: 'emp102', name: 'Jerry', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
    { code: 'emp103', name: 'Dotty', gender: 'Female', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '14/10/1980' },
    { code: 'emp105', name: 'Catherine', gender: 'Female', annualSalary: 6600.826, dateOfBirth: '24/10/1980' }
];
  
  toggleTheme() {
    this.flag = !this.flag;
  }

}
