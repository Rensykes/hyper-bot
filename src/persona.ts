class Persona {
    private _nome: string;

    constructor(nome: string){
        this._nome = nome;
    }
    
    public get nome(): string {
        return this._nome;
    }
    public set nome(value: string) {
        this._nome = value;
    }

    public static hello(){
        console.log("Hello!");
    }

    static greeting:string = "hello";

    public gimmeNumbers(seed:number):number{
        return seed;
    }
    
}

export default Persona;