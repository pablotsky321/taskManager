export interface Task {
    id:                 string;
    titulo:             string;
    descripcion:        string;
    fecha_creacion:     string;
    fecha_finalizacion: string;
    finalizada:         boolean;
    estado:             string;
    userEntity:         null;
}
