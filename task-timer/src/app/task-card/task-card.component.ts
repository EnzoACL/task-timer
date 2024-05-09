import { Component } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

  taskName!: string;
  taskTimer!: number;
  cards: any[] = [
  {
    index: 0,
    name: 'Test task 1',
    time: 120,
  },
  {
    index: 1,
    name: 'Test task 2',
    time: 600,
  }
];
  modal: boolean = false;
  cardTitle: string = '';

  constructor () {}

  newTask() {
    console.log('new task button');
    this.modal = !this.modal
  }

  createTask(cardTitle: string) {
    if (cardTitle) {
      this.cards.push(
        {
          index: this.cards.length,
          name: cardTitle,
          time: 0,
        }
      );
      this.modal = false;
    } else {
      window.alert('task name required')
    }

  }

  cancelTask() {
    this.modal = false;
  }

}
