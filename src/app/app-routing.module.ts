import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router"

import { HomePageComponent } from "./pages/home/home-page.component";
import { EmpleadoPageComponent } from "./pages/empleado/empleado-page.component";
import { JornadaPageComponent } from "./pages/jornada/jornada-page.component";
import { NewEmpleadosPageComponent } from "./pages/new-empleados/new-empleados-page.component";

//Routing

const routes: Routes = [
    {
        path: 'home', component: HomePageComponent
    },
    {
        path: 'empleado/:id', component: EmpleadoPageComponent
    },
    {
        path: 'empleado', component: NewEmpleadosPageComponent
    },
    {
        path: 'jornada', component: JornadaPageComponent
    },
    {
        path: 'jornada/:id', component: JornadaPageComponent
    },
    {
        path: '**',
        redirectTo: 'home',
        
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
