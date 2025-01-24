import { RouterModule, Routes } from '@angular/router';



import { LandingPageComponent} from './landing-page/landing-page.component'
import { PhotoDetailComponent } from './photo-detail/photo-detail.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    
    
    {path:'', component: LandingPageComponent },
    { path: 'photo-detail/:id', component: PhotoDetailComponent },
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule],
})
export class AppRoutingModule {}
