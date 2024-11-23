import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { CareerComponent } from './routes/career/career.component';
import { AboutusComponent } from './routes/aboutus/aboutus.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { ProductdisplayComponent } from './product/productdisplay/productdisplay.component';
import { ProductdetailsComponent } from './product/productdetails/productdetails.component';
import { UserslistComponent } from './users/userslist/userslist.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { PermanentJobComponent } from './routes/permanent-job/permanent-job.component';
import { ContractJobComponent } from './routes/contract-job/contract-job.component';
import { productDetailsResolver } from './resolver/product-details.resolver';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {
        path:'careers',
        component:CareerComponent,
        children:[
            {path:'permanent',component:PermanentJobComponent },
            {path:'contract',component:ContractJobComponent} 
        ]
    },
    {path:'aboutus',component:AboutusComponent},
    {path:'products',component:ProductdisplayComponent},
    {
        path:'productDetails/:id',
        component:ProductdetailsComponent,
        resolve:{product:productDetailsResolver}
    },
    {path:'userList',component:UserslistComponent},
    {path:'userDetail',component:UserDetailComponent},
    {path:'**',component:NotFoundComponent}

];
