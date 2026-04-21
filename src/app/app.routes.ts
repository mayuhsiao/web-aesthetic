import { Routes } from '@angular/router';
import { NoticesComponent } from './notices/notices'; 

export const routes: Routes = [
  // 當網址是 /notices 時，載入 NoticesComponent
  { path: 'notices', component: NoticesComponent }
];