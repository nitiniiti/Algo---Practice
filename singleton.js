let instance;
function Singleton() {
    function SingletonMethod() {

    }

    if (!instance) {
        instance = new SingletonMethod();
    }
    return instance
}

let instance1 = new Singleton();
let instance2 = new Singleton();
console.log(instance1 === instance2);