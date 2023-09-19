import { NgModule } from "@angular/core";
import { RouterModule, Routes} from "@angular/router"

import { HomePageComponent } from "./pages/home/home-page.component";
import { EmpleadoPageComponent } from "./pages/empleado/empleado-page.component";
import { JornadaPageComponent } from "./pages/jornada/jornada-page.component";

const routes: Routes = [
    {
        path: '', component: HomePageComponent
    },
    {
        path: 'empleado/:id', component: EmpleadoPageComponent
    },
    {
        path: 'jornada', component: JornadaPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
