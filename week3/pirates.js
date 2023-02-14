class Pirate {
    constructor(name, weapon, rank){
        this.name = name;
        this.weapon = weapon;
        this.rank = rank;
    }

    setName(){
        return this.name;
    }

    chooseWeapon(){
        return this.weapon;
    }

    getRank(){
        return this.rank;   }   } 
let captainJolly = new Pirate("Captain Jolly", "sword", "captain")
let admiralStorm = new Pirate("Admiral Storm", "cannon", "admiral")
let redBeard = new Pirate("Red Beard", "musket", "master gunner")
let grayMoustache = new Pirate("Gray Moustache", "sabre", "first mate")
let toothlessTim = new Pirate("Toothless Tim", "cutlass", "second mate")
let thunderTom = new Pirate("Thunder Tom", "hook", "sailingmaster")

const jollyRoger = [captainJolly, toothlessTim, redBeard];
const blackPearl = [grayMoustache, admiralStorm, thunderTom];


//console.log(captainJolly.chooseWeapon())
//console.log(admiralStorm.chooseWeapon())

// //const pirates = {
//     name: ["Captain Jolly, Admiral Storm, Sir John Winters"],
//     weapon: ["sword", "cannon", "musket"],
//     ship: ["jollyRoger", "blackPearl"]
// }

//console.log(pirates.name)

