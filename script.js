// Calculator application

// App variable
const calcData={
    number1:'',
    number2:'',
    operator:'',
    result:'',
    step:1,
}
console.log(calcData);

// Create eventListener in all number and operator buttons
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
    console.log(`step: ${calcData.step} entry of: ${element.id}`)
    if(calcData.step == 1){// enter number #1
        if (element.classList == 'btn number'){inputData(element,'1')};//update #1
        if (element.classList == 'btn operator' && calcData.number1 !=''){ // make sure #1 exist before entering the operator
            inputData(element,'operator'); // update operator
            calcData.step = 2;//move step selector for next step
        };
        screenUpdate(calcData.number1);
    }else if(calcData.step == 2){//ready to enter number 2 in same if so it cannot enter #1 and #2 on the same entry    
        if (element.classList == 'btn number'){inputData(element,'2')};//update #2
        if (element.classList == 'btn operator' && calcData.number2 != ''){calcData.step=3}; // here we go see next if
        screenUpdate(calcData.number2);
    };
    // if we get step=3 that mean we can now display the result
    if(calcData.step == 3){
        console.log(`we are now at step 3`);
        execute(); // get the result calculated
        screenUpdate(calcData.result); //update the screen with the result
        if(element.id == 'Eq'){
            calcData.operator= ''; //rest operator
            calcData.number1=''; // reset number 1
            calcData.number2 = ''; //reset
            calcData.step=1; // reset step to beginning
        }else{
            calcData.number1 = calcData.result; // get #number 1 updated for next calculation
            calcData.operator = element.textContent; //the new operator is now in base
            calcData.step=2; // waiting for entry of number #2
            calcData.number2 = ''; // reset for entry
        };
    };  
    console.log(calcData);
};

// Display function to update the screen content
const screenUpdate =function(content){
    console.log(`Screen updated with ${content}`);
    document.getElementById('screen').textContent= content.toString();
};

// Number function used to type and update the content of calcData
const inputData = function(content,number){
    console.log(`data entry to ${number} : ${content.id}`);
    if(number=='1'){
        if (content.textContent == '.' && !calcData.number1.includes('.') || content.textContent != '.'){
            calcData.number1= calcData.number1 + content.textContent
        };
    };
    if(number=='2'){
        if (content.textContent == '.' && !calcData.number2.includes('.') || content.textContent != '.'){
            calcData.number2= calcData.number2 + content.textContent
        };
    };
        if(number=='operator'){calcData.operator= content.textContent};
};

// Execute function that return the result of the operation
const execute = function(){
    number1=parseFloat(calcData.number1);
    number2=parseFloat(calcData.number2);
    // that all data are there
    if (calcData.number1 != '' && calcData.number2 != '' && calcData.operator != ''){
    //check that we are not dividing by 0
        if(number2 == 0 && calcData.operator == '/'){calcData.result='ERROR, NO DIV/0'};
        if(calcData.operator == '+'){calcData.result = number1 + number2};
        if(calcData.operator == '-'){calcData.result = number1 - number2};
        if(calcData.operator == '*'){calcData.result = number1 * number2};
        if(calcData.operator == '/'){calcData.result = number1 / number2};
        console.log(`calculation executed successfully ${calcData.number1} ${calcData.operator} ${calcData.number2 } = ${calcData.result}`)
        //update number 1 as the result in case the user want to continue his operations
    }else{console.log(`error data missing in calcData ${calcData}`)};
};

// allClear function
const clearAll = function(){
    calcData.number1 = '';
    calcData.number2 = '';
    calcData.operator = '';
    calcData.result = '';
    calcData.step = 1;
    console.log(`clearAll Function called`);
    console.log(calcData);
};

// Clear function
const characterClear = function(){
    console.log(`function clear called`);
    if ( calcData.step == 1 && calcData.number1!= ''){
        console.log(`step1 and non nul`);
        calcData.number1 = calcData.number1.slice(0, calcData.number1.length - 1)
        screenUpdate(calcData.number1);
    };
    if ( calcData.step == 2 && calcData.number2!= ''){
        console.log(`step2 and non nul`);
        calcData.number2 = calcData.number2.slice(0, calcData.number2.length - 1)
        screenUpdate(calcData.number2);
    };
};
