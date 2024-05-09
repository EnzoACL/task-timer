import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskCardComponent } from './task-card/task-card.component';

const routes: Routes = [
  { path: '', component: TaskCardComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
