import AxiosTryout from './axios-tryout';
import Persona from './persona';

AxiosTryout();

let persona = new Persona("Pippo");

console.log(persona.nome)
Persona.hello();
console.log(Persona.greeting)
console.log(persona.gimmeNumbers(5))
console.log("Ciao")