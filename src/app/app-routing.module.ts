import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ContentLayoutComponent } from './layout/components/content-layout/content-layout.component';


const routes: Routes = [
  {
    path:'',
    component: ContentLayoutComponent,
    children: [
      {
        path:'',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home', 
        //component: HomeComponent
        // Ya no se carga el componente, se carga el modulo mediante un dynamic import de js nativo
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
          path: '**',
          redirectTo: 'home',
          pathMatch: 'full',
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
