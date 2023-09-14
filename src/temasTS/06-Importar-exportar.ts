
import { Producto, calcularIVA2 } from "./05-desestructuracion-funciones";

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio:899
    },
    {
        desc: 'Telefono2',
        precio: 400
    },
    {
        desc: 'Telefono3',
        precio: 798
    }
]

const [total,iva]=calcularIVA2(carrito);
console.log(`Total: ${total}`);
console.log(`IVA: ${iva}`);