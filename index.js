"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var Calculator = exports.Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.calculate = function (firstOperand, secondOperand, operator) {
        switch (operator) {
            case this.ADDITION:
                return firstOperand + secondOperand;
            case this.SUBTRACTION:
                return firstOperand - secondOperand;
            case this.MULTIPLICATION:
                return firstOperand * secondOperand;
            case this.DIVISION:
                if (secondOperand != 0)
                    return firstOperand / secondOperand;
                else
                    console.log("Can not divide by 0");
            default:
                console.log("Unsupported operation");
        }
    };
    Calculator.ADDITION = '+';
    Calculator.SUBTRACTION = '-';
    Calculator.MULTIPLICATION = '*';
    Calculator.DIVISION = '/';
    return Calculator;
}());
