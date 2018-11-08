export class PersonaTs {
/* 
    public nombre: string
    public edad:number
    constructor(nombre: string, edad: number) {
        this.nombre = nombre
        this.edad = edad
    }
*/
    constructor(
        public nombre: string, 
        public edad: number) { }

    saludar () {
        console.log(`Hola soy ${this.nombre}`)
    }
}

let o = new PersonaTs('Andrés', 54)
//o.profesion = 'Informatico'
o.saludar()
console.log(o)

class AlumnoTs extends PersonaTs {
    public curso: string
    constructor(nombre: string, edad:number, curso:string) {
        super(nombre, edad)
        this.curso = curso
    }

    public saludar () {
        super.saludar()
        console.log(`Voy al curso de ${this.curso}`)
    }
}

let a = new AlumnoTs ('Luis', 21, 'Angular')
a.saludar()
//a.turno = 'Tarde'
console.log(a)