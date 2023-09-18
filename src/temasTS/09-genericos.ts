//colecciones, se pueden hacer sin duplicar la estructura con TS

class PilaGenerica <T> { //admite tipo de datos genericos y el tipo de datos se cambia po una T
    private vec: T []=[];
    insertar (x:T){

        this.vec.push(x);
    }

    extraer(){
        if(this.vec.length>0)
            return this.vec.pop();
        else
            return null
    }
}

class PilaString {
    private vec: string [] = [];
    insertar(x: string) {

        this.vec.push(x);
    }

    extraer() {
        if (this.vec.length > 0)
            return this.vec.pop();
        else
            return null
    }
}

//reestructurar para que deje de ser generico y evitar duplicidad de instancias
//transpilación

let pila1=new PilaGenerica();
pila1.insertar(20);
pila1.insertar(23);
pila1.insertar(2);
console.log(pila1.extraer());

let pila2 = new PilaString();
pila2.insertar('Juan');
pila2.insertar('Ana');
pila2.insertar('Luis');
console.log(pila1.extraer());

///////////////////////////////////////////////////////////////////////
//clases genericas


class PilaEnteros {
    private vec: number [] = [];
    insertar(x: number) {

        this.vec.push(x);
    }

    extraer() {
        if (this.vec.length > 0)
            return this.vec.pop();
        else
            return null
    }
}


let pila3 = new PilaGenerica <number>;
pila3.insertar(20);
pila3.insertar(23);
pila3.insertar(2);
console.log(pila3.extraer());

let pila4 = new PilaGenerica<string>;
pila4.insertar('Juan');
pila4.insertar('Ana');
pila4.insertar('Luis');
console.log(pila4.extraer());
