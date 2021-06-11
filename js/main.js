const display = document.querySelector('.screen')
const buttons = document.querySelector('.button-container')


let add = (num1, num2) => num1 + num2;

let subtract = (num1, num2) => num1 - num2;

let multiply = (num1, num2) => num1 * num2;

let divide = (num1, num2) => num1 / num2;
 

let operate = (a, b, operator) => {
    switch(operator) {
        case 'add':
            return add(a,b);
            break;
        case 'subtract':
            return subtract(a,b);
            break;
        case 'multiply':
            return multiply(a,b);
            break;
        case 'divide':
            return divide(a,b);
    }
}

//event delegation for all calc buttons
buttons.addEventListener('click', e => {
    
    if (e.target.matches('.calc-btn')) {
        // const key = e.target;
        // const action = key.dataset.action;
        // const keyContent = key.textContent;
        const currentDisplay = display.textContent;

        console.log(e.target.textContent)
        // switch (action) {
        //     case 'add':
        //         console.log('add');
        //         break;
        //     case 'subtract':
        //         console.log('subtract');
        //         break;
        //     case 'multiply':
        //         console.log('multiply');
        //         break;
        //     case 'divide':
        //         console.log('divide');
        //         break;
        //     case 'percent':
        //         console.log('percent');
        //         break;
        //     case 'clear':
        //         console.log('clear');
        //         break;
        //     case 'delete':
        //         console.log('delete');
        //         break;
        //     case 'decimal':
        //         console.log('decimal');
        //         break;
        //     case 'equal':
        //         console.log('equal');
        //         break;
        //     case !action:
        //         console.log('number');
            
        // }
    }
    // if (!action) {
    //     console.log('number key!')
    // }
    // if (
    //     action === 'add' || 
    //     action === 'subtract' || 
    //     action === 'multiply' || 
    //     action === 'divide' || 
    //     action === 'percent'
    //     ) {
    //         console.log('operator key!')
    //     }
});

