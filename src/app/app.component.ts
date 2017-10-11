import { Component } from '@angular/core';
import { StudentService } from './student.service'
import { GradePipe } from './grade.pipe'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Assignment Generator';
  aName;
  pScored;
  pPossible;
  
  overallPerformance;


    assignValue = [];
  constructor(private studentService: StudentService){ this.overallPerformance = this.studentService.overallPerformance }
  calculate() {
    
        this.assignValue = this.studentService.getStudentValue(
    
          this.aName,
    
          this.pScored,
    
          this.pPossible);
    
    
    
        console.log(this.assignValue);
    
      }
  
}  


  
  
   


