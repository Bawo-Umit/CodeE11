const expect = require('chai').expect;

//Sample JUnit test
function sum(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i];
    }
    return res;
}

function kelToCel(i) {
    let res = 0;
    if (i<0){
        i = 666666+273.15;
    }
    res = i - 273.15;
    return res;
}

function tempInc(i) {
    let res = 0;
    res = i + 1;
    return res;
}
function tempDec(i) {
    let res = 0;
    res = i - 1;
    return res;
}

describe('#sum()', function () {

    //  if needed logic before each test run
    beforeEach(function () {

    })

    // test a functionality
    it('should add numbers', function () {
        expect(sum([1, 2, 3, 4, 5])).to.equal(15);
    })

});

describe('#kelToCel()', function () {
    it('should convert Kelvin to Celsius correctly', function () {
        expect(kelToCel(273.15)).to.be.closeTo(0, 0.01);
        expect(kelToCel(0)).to.equal(-273.15);
        expect(kelToCel(373.15)).to.be.closeTo(100, 0.01);
        expect (kelToCel(-1)).to.equal(666666)
    });
});

describe('#tempInc()', function () {
    it('add one degree to the enterd value', function () {
        expect(tempInc(0)).to.equal(1);

    });
});

describe('#tempDec()', function () {
    it('subrtracts one degree to the enterd value', function () {
        expect(tempDec(0)).to.equal(-1);

    });
});