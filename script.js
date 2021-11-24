// Calculator application

// App variable
const calcData={
    number1:'',
    number2:'',
    operator:'',
    result:'',
    step:0,
}
console.log(calcData);

// Create eventlistner in all number and operator buttons
const calculator = document.getElementById('calculator');
const allButtons = calculator.querySelectorAll('.btn');
console.log(allButtons);
allButtons.forEach((button)=> {
    button.addEventListener('click', ()=>{
        console.log(`${button.id} pressed`)
        calcProcess(button);
    });
    console.log(`EventListener added for ${button.id}`);
});



// Main function called when event listener are activated
const calcProcess = function (element){
    // what type of button had been pressed
    switch (calcData.step){// the step variable help to know at which stage of the process we are
        case 0: // enter number #1
            if (element.classList=='number'){inputData(element,1);};//update #1
            if (element.classList=='operator'){};//select operator
            break;
        case 1: // enter number #2
            if (element.classList='number'){inputData(element,2)};//update #2
            break;
        case 2: // calculate result and return on display
            break;
    };
    console.log(calcData);
};

// Display function to update the screen content
const screenUpdate =function(content){

};

// Number function used to type and update the content of calcData
const inputData = function(content,number){
    console.log(content.id);
    if(number=1){calcData.number1= calcData.number1 + content.textContent};
    if(number=2){calcData.number2=+ content};
};

// Execute function that return the result of the operation
const execute = function(number1,number2,operator){

};

// allClear function
const clearAll = function(){

};

// Clear function
const clear= function(){

};

