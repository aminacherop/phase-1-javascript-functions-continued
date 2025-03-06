// code your solution here

function saturdayFun( activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());


const mondayWork = function(activity ="go to the office"){
    return `This Monday, I will ${activity}.`

}
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(flair = "*"){
    return function(adjective = "special"){
        return `You are ${flair}${adjective}${flair}!`;

    }
}
const result1 = wrapAdjective("%")("a dedicated programmer");
const result2 = wrapAdjective("*")("a hard worker")


console.log(result1);
console.log(result2)
