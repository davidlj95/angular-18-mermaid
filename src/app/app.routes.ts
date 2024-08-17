import { Routes } from '@angular/router';
import { MermaidComponent } from "./mermaid/mermaid.component";

export const routes: Routes = [{
  path: '', pathMatch: 'full', component: MermaidComponent
}];
