/*
* Ejercicio 3:
* Utilizar lo aprendido y crear una Clase, la cual tenga metedos y atributos,
* una instancia de dicha clase, y por ultimo aplicar lo aprendido de Herencia 
* y crear una clase que la herede.
*/
/* 
*   Creo la clase Empleado con metodos y atributos 
*/
class Empleado {
    private nombre: string;
    private apellido: string;
    private documento: string;
    protected categoria: number;
    protected adicionales: number;
    protected descuentos: number;
    /* Constructor de Clase*/
    public constructor (nombre: string, apellido: string,documento: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.documento = documento;
        this.categoria = 1;
        this.adicionales = 3;
        this.descuentos = 13;
    }
    /* Funciones Getters*/
    public getNombre():string {
        return this.nombre;
    }
    public getApellido():string {
        return this.apellido;
    }
    public getDocumento():string {
        return this.documento;
    }
    public getCategoria():number{
        return this.categoria;
    }
    public getAdicionales():number {
        return this.adicionales;
    }
    public getDescuentos():number {
        return this.descuentos;
    }
    /* Funcionalidad de calcular el sueldo del Empleado */
    /* Calcula el sueldo haciendo uso de la categoria, adicionales  y descuentos */
    public sueldo(): number {
        return ((this.categoria * 83000) + (this.adicionales*1500) - ((this.categoria * 83000) + (this.adicionales*1500)/this.descuentos)); 
    }
}

/* 
*   Creo una instancia de la clase Empleado de acuerdo a lo requerido 
*/
let empleado1 = new Empleado("Andres","Fernadez","14756789");

/* 
*   Creo la clase Supervisor que hereda de Empleado teniendo otros valores categoria, adicionales y descuentos. 
*/

class Supervisor extends Empleado {

    public constructor (nombre: string, apellido: string,documento: string){
        super(nombre,apellido,documento);
        this.categoria = 2;
        this.adicionales = 3;
        this.descuentos = 15;
    }
    /* Funcionalidad de calcular el sueldo del Supervisor */
    /* Calcula el sueldo haciendo uso de la categoria, adicionales  y descuentos de la clase */
    public sueldo(): number {
        return ((this.categoria * 83000) + (this.adicionales*1500) - ((this.categoria * 83000) + (this.adicionales*1500)/this.descuentos)); 
    }
}





