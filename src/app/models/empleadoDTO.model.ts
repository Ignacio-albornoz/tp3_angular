import { EmpleadoModel } from "./empleado.model";

//DTO que omite valores generados por el backend
export interface CreateEmpleadoDTOModel extends Omit<EmpleadoModel, 'id' | 'fechaCreacion'> {

}

//DTO que permite actualizar uno o varios campos
export interface UpdateEmpleadoDTOModel extends Partial<EmpleadoModel>{
    
}

