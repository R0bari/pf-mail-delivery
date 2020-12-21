import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { GreetingPageComponent } from './components/greeting-page/greeting-page.component';
import { MessagesPageComponent } from './components/messages/messages-page/messages-page.component';
import { NewMessagePageComponent } from './components/messages/new-message-page/new-message-page.component';

const routes: Routes = [
  { path: '', component: GreetingPageComponent },
  { path: 'messages', component: MessagesPageComponent },
  { path: 'new-message', component: NewMessagePageComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
