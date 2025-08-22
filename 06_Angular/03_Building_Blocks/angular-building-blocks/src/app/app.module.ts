import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    WelcomeComponent,
    AppComponent // ✅ Import standalone component here
  ],
  declarations: [
    //AppComponent // ✅ Only non-standalone components go here
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {}