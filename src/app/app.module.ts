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
import {HomeComponent} from './home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { Error404Component } from './error404/error404.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'jokes', component: JokeListComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    CardHoverDirective,
    HomeComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
