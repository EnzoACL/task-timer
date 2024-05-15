import { Component } from '@angular/core';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

  taskName!: string;
  taskTimer!: number;
  cards: {
    id: number;
    name: string;
    time: number;
    active: boolean;
  }[] = [];
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
          id: this.cards.length,
          name: cardTitle,
          time: 0,
          active: false,
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

  buttonActionPlay(index: number) {
    this.cards[index].active = true;
    let cardIntervals = setInterval(()=>{
      this.cards[index]?.active  ? this.addSecond(index) : clearInterval(cardIntervals);
    },1000);
  }
  buttonActionStop(index: number) {
    this.cards[index].active = false;      
  }

  buttonActionDelete(index: number) {
    console.log(index);
    console.log(this.cards[index]);
    this.cards.splice(index,1);
  }

  addSecond(index: number) {
    this.cards[index].time++
  }
}
