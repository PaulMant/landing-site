import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomePageComponent} from "./pages/welcome-page/welcome-page.component";
import {ContactPageComponent} from "./pages/contact-page/contact-page.component";
import {AProposPageComponent} from "./pages/a-propos-page/a-propos-page.component";
import {MatrixEffectComponent} from "./ui-components/matrix-effect/matrix-effect.component";
import { ProjectsComponent } from './pages/projects/projects.component';

const routes: Routes = [
  { path: 'home', component: WelcomePageComponent },
  { path: '', redirectTo:'home', pathMatch:'full' },
  { path: 'a-propos', component: AProposPageComponent },
  { path: 'contact', component: ContactPageComponent},
  { path: 'matrix', component: MatrixEffectComponent},
  { path: 'projects', component: ProjectsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
