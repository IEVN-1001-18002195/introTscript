

interface Alumno{
    matricula:number;
    nombre:string;
    edad:number;
    email:string;
}



const alumno: Alumno = {
    nombre: 'Diana',
    edad: 23,
    email: 'dianagz@gmail.com',
    matricula: 0
}

console.table(alumno)

let mascotas=['perro','gato','perico'];

mascotas[1]='Nuevo gato';
mascotas.push()

console.log(mascotas);

let tem: (number|string)[]=[];

tem.push(11);
tem.push('Nombre');
console.log(tem);