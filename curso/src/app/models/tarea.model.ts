export interface ITarea {
    nombre: string;
    isCompleted: boolean;
}

export class Tarea implements ITarea {
  constructor(
    public nombre: string = '',
    public isCompleted: boolean = false
  ) {}
}
