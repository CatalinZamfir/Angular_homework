import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
// @ts-ignore
import {ClothesListComponent} from './clothes-list/clothes-list.component';
import {NewClothesComponent} from './new-clothes/new-clothes.component';
import {RouterLink} from '@angular/router';



export const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'new-clothes', component: NewClothesComponent},
];



@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
