import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./main/main.component";
import {CatalogComponent} from "./catalog/catalog.component";

const routes: Routes = [
  {path: "main", component: MainComponent},
  {path: "catalog", component: CatalogComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
