// Creating Classes and Factories

//class Hamster
class Hamster {
    constructor (owner, name, price = 15) {
        this.owner = owner,
        this.name = name,
        this.price = price
    }
//Hamster methods
    wheelRun() {
        console.log("squeak squeak")
    }

    eatFood() {
        console.log("nibble nibble")
    }

    getPrice() {
        return this.price
    }
}

//class Person
class Person {
    constructor (name, age, height, weight, mood, hamsters, bankAccount) {
        this.name = name,
        this.age = 0,
        this.height = 0,
        this.weight = 0,
        this.mood = 0,
        this.hamsters = [],
        this.bankAccount = 0
    }
//methods
    getName() {
        return this.name
    }

    getAge() {
        return this.age
    }

    getWeight() {
        return this.weight
    }

    greet() {
        console.log(`Hello ${this.name}!`)
    }

    eat(num) {
        if (num) {
            this.weight = this.weight + num
            this.mood = this.mood + num
        } else {
            this.weight++
            this.mood++
        }
    }

    exercise(number) {
        if (number) {
            this.weight = this.weight - number
        } else {
            this.weight--
        }
    }

    ageUp(number) {
        if (number) {
            this.age = this.age + number
            this.height = this.height + number
            this.weight = this.weight + number
            this.mood = this.mood - number
            this.bankAccount += (number * 10)
        } else {
            this.age++
            this.height++
            this.weight++
            this.mood--
            this.bankAccount += 10
        }
    }

    buyHamster(hamster) {
        this.hamsters.push(hamster)
        this.mood += 10
        this.bankAccount = this.bankAccount - hamster.getPrice()
    }
}

//Create a Story with your Person class

//1.
const timmy = new Person("Timmy")
console.log(timmy)

//2.
timmy.ageUp(5)
console.log(timmy)

//3.
timmy.eat(5)
console.log(timmy)

//4.
timmy.exercise(5)
console.log(timmy)

//5. 
timmy.ageUp(9)
console.log(timmy)

//6.
let gus = new Hamster
gus.name = "Gus"
console.log(gus)

//7.
gus.owner = "Timmy"
console.log(gus)

//8.
timmy.buyHamster(gus)
console.log(timmy)

//9.
timmy.ageUp(15)
console.log(timmy)

//10.
timmy.eat(2)
console.log(timmy)

//11.
timmy.exercise(2)
console.log(timmy)


// Chef Make Dinners

class Dinner {
    constructor(appetizer, entree, dessert) {
        this.appetizer = appetizer,
        this.entree = entree,
        this.dessert = dessert
    }
}

class Chef {
    cooksNewDinner(myAppetizer,myEntree,myDessert) {
        let restaurantDinner = new Dinner(myAppetizer,myEntree,myDessert)
        console.log(restaurantDinner)
    }
}

const mainChef = new Chef

mainChef.cooksNewDinner("Teriyaki Pineapple Meatballs","Antipasto platter","Cheesecake")
mainChef.cooksNewDinner("Hot Spinach Artichoke Dip and Hummus","Chicken and spinach dumplings", "Ice cream")
mainChef.cooksNewDinner("Chicken Parmesan Slider Bake", "Grilled seafood platter", "Boston cream pie")
