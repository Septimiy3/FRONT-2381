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
function divideNumbers(a: number, b: number):number | never   {
    if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b) || b === 0) {
            throw new Error("Неверные параметры или деление на ноль не допускается.")
    }
    return a / b;
}

btn.addEventListener('click',()=> {
    console.log('тест')
    console.log(greet('Petter'))
    console.log(createPerson('Mark',12))
    console.log(divideNumbers(true,1))
    logMessage('Привет')
})
