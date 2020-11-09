import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {RouterLink} from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClothesListComponent } from './clothes-list/clothes-list.component';
import { NewClothesComponent } from './new-clothes/new-clothes.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ClothesListComponent,
    NewClothesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
