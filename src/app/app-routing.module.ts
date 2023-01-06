import { UsersComponent } from './main-ui/users/users.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainUiComponent } from './main-ui/main-ui.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  {path: 'mainUI',component:MainUiComponent},
  {path:'mainUI/users', component:UsersComponent},
  {path : '' ,redirectTo:'mainUI',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
