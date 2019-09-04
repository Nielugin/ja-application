import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'badges', loadChildren: './badges/badges.module#BadgesPageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'category-list', loadChildren: './badges/category-list/category-list.module#CategoryListPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
