import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkspaceComponent } from './workspace/workspace.component';
import { LayoutComponent } from './layout/layout.component';


const routes: Routes = [
  {
    path:'',
    component: LayoutComponent,
    children: [
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home', 
        component: HomeComponent
      },
      {
        path: 'workspace', 
        component: WorkspaceComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
