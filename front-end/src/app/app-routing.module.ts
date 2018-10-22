import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ArtigoListComponent } from './artigo/artigo-list/artigo-list.component';
import { ArtigoFormComponent } from
  './artigo/artigo-form/artigo-form.component';

const routes: Routes = [
  { path: 'artigo', component: ArtigoListComponent },
  { path: 'artigo/novo', component: ArtigoFormComponent },
  { path: 'artigo/:id', component: ArtigoFormComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
