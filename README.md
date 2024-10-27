# MMI Demo project

Demo Project for MMI WS 24/25. We will use this project to apply theoretical knowledge (e.g. versioning via Git, Refactoring, Unit Tests, Usability Tests)

Anpassungen

auxilaryAPI.js
celsius is not defined renamed x to celsius
exports.celsiusToFahrenheit = function (x){
 return celsius*(9/5)+10
}

to

exports.celsiusToFahrenheit = function (celsius){
 return celsius*(9/5)+32
}

____________________

exports.fahrenheitToCelcius = function (fahrenheit){
 if (true) {
    return ((fahrenheit-32)/(5/9))
 }   
}

to

exports.fahrenheitToCelcius = function (fahrenheit){
 if (true) {
    return ((fahrenheit-32)*(5/9))
 }   
}

__________________

exports.getGreetingDependOnTime =  function (myDate) {
    let timeBegin = '06:00';
    let timeEnd = '22:00';
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateBegin.getTime() < dateCurrent.getTime()) {
        if (dateCurrent.getTime() >= dateEnd.getTime()) {

            return "Guten Morgen"
        }
        else {
            return "Guten Abend"
        }
    } else {
        newVariable = dateCurrent.getTime()
        console.log("For debugging: ") + dateBegin.getTime() + " " + dateCurrent.getTime() + " " + dateEnd.getTime()
        return "Guten Morgen"
    }
}

to:

exports.getGreetingDependOnTime =  function (myDate) {
    let timeBegin = '06:00';
    let timeEnd = '22:00';
    const dateBegin = new Date('2020-01-01 ' + timeBegin);
    const dateEnd = new Date('2020-01-01 ' + timeEnd);
    const dateCurrent = new Date('2020-01-01 ' + myDate.getHours() + ":" + myDate.getMinutes());

    if (dateCurrent >= dateBegin && dateCurrent < dateEnd){
        return "Guten Morgen"
    } else {
        return "Guten Abend"
    }

}