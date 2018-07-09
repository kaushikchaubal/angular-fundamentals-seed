import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {CommonModule} from '@angular/common'
import {PassengerDashboardModule} from './passenger-dashboard/passenger-dashboard.module'
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path:'**', component: NotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent 
  ], 
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    PassengerDashboardModule
  ]
})
export class AppModule {}
