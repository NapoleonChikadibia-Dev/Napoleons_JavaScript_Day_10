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
