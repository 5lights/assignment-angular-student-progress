import { Injectable } from '@angular/core';
import { StudentRow } from './studentRow'
import { AppComponent } from './app.component'

@Injectable()
export class StudentService {

  constructor() { }
  overallPerformance = {
    pPossible: 0,
    pScored: 0,
    percent: 0
  };
  
  assignValue: StudentRow[] = [];

  getStudentValue(aName: string, pScored: number, pPossible: number): StudentRow[] {
   
    
    let assignRow: StudentRow;
    
    
      
      assignRow = {
            
        aName: aName,
        
        pScored: pScored,
        
        pPossible: pPossible,

        aPercent: pScored/pPossible
            
      };
      
          
    this.assignValue.push(assignRow);

    this.overallPerformance.pPossible += assignRow.pPossible;
    this.overallPerformance.pScored += assignRow.pScored;
    this.overallPerformance.percent = this.overallPerformance.pScored/this.overallPerformance.pPossible;
    return this.assignValue;
  }

}
