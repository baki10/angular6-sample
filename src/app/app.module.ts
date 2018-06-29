import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {JokeFormComponent} from './jokes/joke-form/joke-form.component';
import {JokeComponent} from './jokes/joke/joke.component';
import {JokeListComponent} from './jokes/joke-list/joke-list.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CardHoverDirective} from './directives/card-hover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CardHoverDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
