const btn = document.querySelector('.main-btn');

function logMessage(message: string): void {
    console.log(message);
}

function greet(name: string, greeting: string = 'Привет'): string {
    return `${greeting}, ${name}!`;
}

function createPerson(name: string, age: number): { name: string, age: number } {
    return { name, age };
}
function divideNumbers(a: string | number, b: string | number)  {
    if (typeof a === 'string' || typeof b === 'string') {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

btn.addEventListener('click',()=> {
    console.log('тест')
    console.log(greet('Petter'))
    console.log(createPerson('Mark',12))
    console.log(divideNumbers(4,1))
    logMessage('Привет')
})
