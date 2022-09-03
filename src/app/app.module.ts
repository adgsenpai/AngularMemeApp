import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MemeComponent } from './app.component';

@NgModule({
  declarations: [
    MemeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [MemeComponent]
})
export class AppModule { }
