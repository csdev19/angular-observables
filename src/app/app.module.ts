import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentObservableComponent } from './student-observable/student-observable.component';
import { SimpleObserverComponent } from './simple-observer/simple-observer.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentObservableComponent,
    SimpleObserverComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
