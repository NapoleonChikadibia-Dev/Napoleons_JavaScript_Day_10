const studentNapoleon = {
    name: 'Napoleon',
    age: 30,
    isPresent: true,
    greet(){
        console.log('Hi, I am ' + this.name);
        
    }
}

console.log(studentNapoleon.name);
console.log(studentNapoleon['age']);
studentNapoleon.greet();


// Factory Function 

function createProduct(name, price) {
    return {
        name,
        price,
        showPrice() {
            return name + ' costs ' + this.price;
        }
    }
}

const polo = createProduct('Black polo xxl', 12000);
console.log(polo.showPrice());


// Constructor Functions:
function Food (name, nutrition) {
    this.nameFood = name,
    this.nutritionFood = nutrition,
    this.showNutrition = function () {
        return 'The amount of '+ this.nameFood + ' i ate cost ' + this.nutritionFood
    };
}

const stan = new Food ('fufu', 3000);
console.log(stan.showNutrition());


