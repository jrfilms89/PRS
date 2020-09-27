import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { E404Component } from './core/e404/e404.component';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { RequestListComponent } from './request/request-list/request-list.component';
import { RequestCreateComponent } from './request/request-create/request-create.component';
import { RequestDetailComponent } from './request/request-detail/request-detail.component';
import { RequestEditComponent } from './request/request-edit/request-edit.component';
import { RequestLinesComponent } from './request/request-lines/request-lines.component';
import { RequestitemCreateComponent } from './requestitem/requestitem-create/requestitem-create.component';
import { RequestitemEditComponent } from './requestitem/requestitem-edit/requestitem-edit.component';
import { HomeComponent } from './core/home/home.component';
import { AboutComponent } from './core/about/about.component';
import { ReviewComponent } from './request/review/review.component';

const routes: Routes = [
  { path: '', redirectTo: '/users/list', pathMatch: 'full'},
  { path: 'users/list', component: UserListComponent},
  { path: 'users/create', component: UserCreateComponent},
  { path: 'users/detail/:id', component: UserDetailComponent},
  { path: 'users/edit/:id', component: UserEditComponent},
  { path: 'users/login', component: UserLoginComponent},
  { path: 'vendors/list', component: VendorListComponent},
  { path: 'vendors/create', component: VendorCreateComponent},
  { path: 'vendors/detail/:id', component: VendorDetailComponent},
  { path: 'vendors/edit/:id', component: VendorEditComponent},
  { path: 'products/list', component: ProductListComponent},
  { path: 'products/create', component: ProductCreateComponent},
  { path: 'products/edit/:id', component: ProductEditComponent},
  { path: 'products/detail/:id', component: ProductDetailComponent},
  { path: 'requests/list', component: RequestListComponent},
  { path: 'requests/create/:id', component: RequestCreateComponent},
  { path: 'requests/detail/:id', component: RequestDetailComponent},
  { path: 'requests/edit/:id', component: RequestEditComponent},
  { path: 'requests/lines/:id', component: RequestLinesComponent},
  { path: 'requestitems/create/:id', component: RequestitemCreateComponent},
  { path: 'requestitems/edit/:id', component: RequestitemEditComponent},
  { path: 'review/:id', component: ReviewComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: '**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
