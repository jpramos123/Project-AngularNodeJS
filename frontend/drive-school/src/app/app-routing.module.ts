import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AlunosComponent} from './alunos/alunos.component';

const routes: Routes = [
  { path: 'alunos', component: AlunosComponent}
];


@NgModule({
  exports : [
    RouterModule,
  ],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
