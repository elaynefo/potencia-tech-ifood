
class hero {
    constructor(name, age, type) {
        this.name = name
        this.age = age
        this.type = type
    }

    ataque(){

        let attack
        switch (this.type) {

            case "Mago":
                attack = "Magia";
                console.log(`O ${this.type} atacou usando ${attack}`);
                break;
            
            case "Guerreiro":
                attack = "Espada";
                console.log(`O ${this.type} atacou usando ${attack}`);
                break;
            
            case "Monge":
                attack = "Artes Marciais";
                console.log(`O ${this.type} atacou usando ${attack}`);
                break;

            case "Ninja":
                attack = "Shuriken";
                console.log(`O ${this.type} atacou usando ${attack}`);
                break;
        }
    }

}

let theMage = new hero("Noondin", 287, "Mago")
let theWarrior = new hero("Damon", 28, "Guerreiro")
let theNinja = new hero("Yoo-jin", 35, "Ninja")
let theMonk = new hero("Mestre Ysu", 76, "Monge")

theMage.ataque()
theWarrior.ataque()
theNinja.ataque()
theMonk.ataque()

