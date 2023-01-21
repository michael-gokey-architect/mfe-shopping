import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'basket', loadChildren: () => import('mfeCart/Module').then(m => m.BasketModule) },
  // { path: 'profile', loadChildren: () => import('mfeProfile/Module').then(m => m.ProfileModule)},
  // { path: 'login/callback', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
