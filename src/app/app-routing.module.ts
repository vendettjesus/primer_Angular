import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { BlogComponent } from './blog/blog.component';
import { ClonesComponent } from './clones/clones.component';
import { FormularioComponent } from './formulario/formulario.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {path:'',component: InicioComponent},
  {path:'inicio', component: InicioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'clones', component: ClonesComponent},
  {path: 'order', component: OrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
