// Your code here
function saturdayFun(activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;

}

function mondayWork(activity="go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(wrapper="*"){
    return function (adjective="special"){
        return `You are ${wrapper}${adjective}${wrapper}!`;
    }
}

let Calculator = {
    add: function(x,y){
        return x + y;
    },
    subtract: function (x,y){
        return x - y;
    },
    multiply: function (x,y){
        return x * y;
    },
    divide: function (x,y){
        return x / y;
    }
}

function actionApplyer(startInteger, arrayOfFunctions){
    if (arrayOfFunctions.length === 0){
        return startInteger;
    }
    for (let i = 0; i < arrayOfFunctions.length; i++){
        startInteger = arrayOfFunctions[i](startInteger);
    }
    return startInteger;
}