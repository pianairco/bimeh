import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {AuthGuard} from "./guards/auth.guard";
import {LoginComponent} from "./views/login/login.component";
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: '', canActivate:[AuthGuard], children: [
      { path: '', children: [
          { path: '', redirectTo: '/tile', pathMatch: 'full' },
          // { path: 'tile', component: TileComponent, children:[
          { path: 'tile', component: HomeComponent, children:[
              // { path: '', redirectTo: '/home', pathMatch: 'full' },
              // { path: 'login', component: LoginComponent },
              /*{ path: 'sejam',
                loadChildren: () => import('./views/sejam/sejam.module').then((m) => { return m.SejamModule }).catch( err => console.log('Oh no!') )
              },*/
            ]
          },
        ]
      },
      { path: 'login', component: LoginComponent, canActivate:[AuthGuard] },
      { path: 'logout', component: LoginComponent, canActivate:[AuthGuard] },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
