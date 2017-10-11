import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GradePipe } from './grade.pipe';
import { FormsModule } from '@angular/forms'
import { StudentService } from './student.service'

@NgModule({
  declarations: [
    AppComponent,
    GradePipe
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
