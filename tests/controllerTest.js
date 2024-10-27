const expect = require('chai').expect;
const apiTemperature = require('../public/js/auxiliaryAPI')

//TODO Unit Tests to implement
describe("fahrenheitToCelsius()", function(){
    it("test below 32", function(){
        expect(Math.round(apiTemperature.fahrenheitToCelcius(20)*100)/100).to.equal(-6.67);
    })
    it("test is 32", function(){
        expect(Math.round(apiTemperature.fahrenheitToCelcius(32)*100)/100).to.equal(0);
    })
    it("test above 32", function(){
        expect(Math.round(apiTemperature.fahrenheitToCelcius(40)*100)/100).to.equal(4.44);
    })
    
});

describe("celsiusToFahrenheit()", function(){
    it("test below 0", function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(-10)*100)/100).to.equal(14);
    })
    it("test is 0", function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(0)*100)/100).to.equal(32);
    })
    it("test above 0", function(){
        expect(Math.round(apiTemperature.celsiusToFahrenheit(100)*100)/100).to.equal(212);
    })
}); 

describe("getGreetingDependOnTime()", function(){
    const vorSechs = new Date('2022-01-01T03:00:00');
    const genauSechs = new Date('2022-01-01T06:00:00');
    const nachSechs = new Date('2022-01-01T10:00:00');
    const genauZehn = new Date('2022-01-01T22:00:00');
    it("before 6am", function(){
        expect(apiTemperature.getGreetingDependOnTime(vorSechs)).to.equal("Guten Abend")
    })
    it("exact 6am", function(){
        expect(apiTemperature.getGreetingDependOnTime(genauSechs)).to.equal("Guten Morgen")
    })
    it("after 8am", function(){
        expect(apiTemperature.getGreetingDependOnTime(nachSechs)).to.equal("Guten Morgen")
    })
    it("exact 10pm", function(){
        expect(apiTemperature.getGreetingDependOnTime(genauZehn)).to.equal("Guten Abend")
    })
    
    
});