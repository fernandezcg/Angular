import {PersonaTs} from './clases'

let nombre: string
let apellido = 'Perez'
let edad: number
let isAlumno: boolean

let algo: any

let otroAlgo: string | number

let aDatos: Array<any> //[]  mejor Array
let aNumbers: Array<number> // [number] mejor Array

aNumbers = []
aNumbers.push(3)

let oPersona: PersonaTs

oPersona = new PersonaTs('César', 43)

interface ILibro {
    titulo: string
    autor: PersonaTs
    fecha: Date
    mostrar: Function
}

class Libro implements ILibro {
    constructor(public titulo:string, public autor:PersonaTs, public fecha: Date) {}
    mostrar: () => {}
}

let libro1: ILibro

libro1 = {
    titulo: 'Angular',
    autor: new PersonaTs('César', 43),
    fecha: new Date(),
    mostrar: () => {}
}