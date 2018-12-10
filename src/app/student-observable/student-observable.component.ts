import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-student-observable',
  templateUrl: './student-observable.component.html',
  styleUrls: ['./student-observable.component.css']
})
export class StudentObservableComponent implements OnInit {
  students_obs;
  students = [
    {id: 1, name: 'cris'},
    {id: 2, name: 'fabrizio'},
    {id: 3, name: 'sotomayor'}
  ];
  total: number;
  alumnosTotal: number;
  id: number = 3;
  studentsObservable: any;

  constructor() { 
    this.studentsObservable = this.getStudents();
    this.studentsObservable.subscribe((studentsData) => {
      this.students_obs = studentsData;
    });

    this.calcularTotal();   
    this.calcularAlumnos();
  }

  ngOnInit() {
  }

  getStudents(): any {
    const studentsObservable = new Observable(observer => {
      observer.next(this.students);
    });

     return studentsObservable;
  }

  calcularTotal(){
    this.total = this.students_obs
    .map( (item) => item.id)
    .reduce( (acc,val) => acc + val,0);
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
    this.calcularTotal();  
    this.calcularAlumnos();
  }

  eliminarFinal() {
    this.id--;
    this.students_obs.pop();
    this.calcularTotal();
    this.calcularAlumnos();
  }
  
}
