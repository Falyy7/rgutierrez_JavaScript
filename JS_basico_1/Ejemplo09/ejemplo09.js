class Estudiante {
    constructor (nombre, correo){
        this.nombre = nombre;
        this.correo = correo;
        this.asignaturas = [];
    }
    get correoElectrónico(){
        return this.correo + "@ilernaonline.com";
    }
    muestraAsignaturas(){
        return this.asignaturas;
    }
    matricular(asignatura){
        this.asignaturas.push(asignatura);
        return "Lista de asignaturas: " + this.asignaturas;
    }
    aprobar(asignatura){
        var posicion = this.asignaturas.indexOf(asignatura);
        this.asignaturas.splice(posicion, 1);
        return "Lista de asignaturas: " + this.asignaturas;
    }
    limpiarAsignaturas(){
        this.asignaturas = [];
        return "Se han vaciado las asignaturas"
    }
}