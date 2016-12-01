import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: 'app/home/home.module'}
];

export default RouterModule.forRoot(routes);
