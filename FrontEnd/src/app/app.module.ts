import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './components/cards/cards.component';
import { CreditCardComponent } from './components/cards/credit-card/credit-card.component';
import { CreditCardListComponent } from './components/cards/credit-card-list/credit-card-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    CreditCardComponent,
    CreditCardListComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
