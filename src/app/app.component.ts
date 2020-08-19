import { Component } from '@angular/core';

interface Employee {
  id: number;
  name: string;
  score: number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'test';
  employees = [{
    id: 1,
    name: 'Pranay',
    score: 1.00001
  }, {
    id: 2,
    name: 'Gopal',
    score: 2.00001
  }, {
    id: 3,
    name: 'Venkat',
    score: 3.00001
  }, {
    id: 4,
    name: 'Venkatesh',
    score: 4.00001
  }, {
    id: null,
    name: 'Divya',
    score: 5.00001
  }, {
    id: null,
    name: 'Sajeed',
    score: 6.00001
  }];

  add() {
    this.employees.push({id: 7, name: 'test', score: 1.00001});
    this.employees = JSON.parse(JSON.stringify(this.employees));
  }

  delete(emp: Employee) {
    this.employees.splice(this.employees.indexOf(emp), 1);
    this.employees = JSON.parse(JSON.stringify(this.employees));
  }

  update(emp: Employee) {
    // emp.id = emp.id + 10;
    emp.name = emp.name.split(" ")[0] + ' updated ' + Math.random();
    this.employees = JSON.parse(JSON.stringify(this.employees));
  }

  move(emp: Employee) {
    const i = this.employees.indexOf(emp);
    this.employees.splice(i, 1);
    this.employees.splice(i-1, 0, emp);
    this.employees = JSON.parse(JSON.stringify(this.employees));
  }

  trackById(index: number, employee: Employee): number {
    console.log('inside trackby id');
    return employee.id;
  }

  test(name) {
    console.log('name>>', name);
  }
}
