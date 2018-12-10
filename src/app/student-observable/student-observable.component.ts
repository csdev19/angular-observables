import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, reduce } from 'rxjs/operators'

@Component({
  selector: 'app-student-observable',
  templateUrl: './student-observable.component.html',
  styleUrls: ['./student-observable.component.css']
})
export class StudentObservableComponent implements OnInit {
  item: any = [];
  totalObs(totalObs: any): any {
    throw new Error("Method not implemented.");
  }
  students_obs;
  students = [
    {id: 1, name: 'cris'},
    {id: 2, name: 'fabrizio'},
    {id: 3, name: 'sotomayor'}
  ];
  total: number;
  alumnosTotal: number;
  id: number = 3;
  studentsObservable: Observable<any>;
  studentsTotal;


  constructor() { 
   
    //   map( item => {
    //     return item.id
    //   })
    // ).subscribe(res=> {
    //   console.log(res)
    //   this.students_obs = res;
    //   console.log(this.studentsObservable)
    // });
    // this.studentsTotal = this.getTotalStudents();
    // this.studentsTotal.subscribe( (st) => {
    //   this.total = st
    // })
    console.log(this.studentsObservable)

    // console.log('item');
    // console.log(this.item);
    // this.totalObs = this.getStudents().subscribe().pipe(
    //   map( item => item )
    // )
    
    // console.log(this.totalObs);
    // this.calcularTotal();   
    // this.calcularAlumnos();
  }

  ngOnInit() {
    this.studentsObservable = this.getStudents();
    this.studentsObservable.subscribe((studentsData) => {
      this.students_obs = studentsData;
      console.log('entrar')
      this.calcularTotal();   
      this.calcularAlumnos(); 
      
    });
    
  }

  getStudents(): Observable<any> {
    const studentsObservable = new Observable(observer => {
      observer.next(this.students);
    });

     return studentsObservable;
  }

  getTotalStudents(): any {
    const studentsObservable = new Observable(observer => {
      observer.next(
        this.students
          .map( item => item.id)
          .reduce( (accum, val) => accum + val)
      );
    });

     return studentsObservable;
  }

  calcularTotal(){
    this.total = this.students_obs
    .map( (item) => item.id)
    .reduce( (acc,val) => acc + val,0);
    // .pipe(
    //   map( (item) => item ),
    //   reduce( (acc, val) => acc + val, 0)
    // )
  }

  calcularAlumnos() {
    this.alumnosTotal = this.students_obs
    .reduce( acc => acc + 1, 0)
  }
  
  agregar(){
    this.id++;
    this.students.push({
      id: this.id,
      name: 'cristian '+this.id
    })
    // console.log(this.totalObs);
    this.calcularTotal();  
    this.calcularAlumnos();
  }

  printer() {
    // console.log(this.item)
    // console.log(this.alumnosTotal)
  }

  eliminarFinal() {
    this.id--;
    this.students_obs.pop();
    this.calcularTotal();
    this.calcularAlumnos();
  }
  
}
