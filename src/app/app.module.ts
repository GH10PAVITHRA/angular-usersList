import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,
  RouterModule.forRoot([
    {path :"", component :UserListComponent}
  ])
  ],
  declarations: [ AppComponent, HelloComponent ,TopBarComponent,UserListComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
