# The Odin Project - Calculator

## Target

Create calculator with an HTML interface that provided the following features:
- [x] Input number #1
- [x] Input number #2
- [x] Input the operator `- + * ?`
- [x] Pres `=` to get the result
- [x] display the number as they are being type on the screen
- [x] display the result on the screen
- [x] display an error message when divide by 0
- [x] Round answer to fit the screen
- [x] Add a `.` function to enter float number max 1 float
- [x] Sequence calculation, consider second operator as `=` and use the result as number #1
- [x] ClearAll button clear the calculator data
- [x] Clear button clear current entry number
- [ ] Add keyboard support

## Point to consider

**DOM manipulation**
- [x] create event listener on number
- [x] create event listener on operator
- [x] function call on `=` `C` `AC`

**Functions**
- [x] Enter number #1 and #2 // Enter operator
- [x] Calculation result
- [x] Display on screen
- [x] ClearAll
- [x] ClearCurrent

## Variables

- Object calcData { number1, number 2, operator, result}