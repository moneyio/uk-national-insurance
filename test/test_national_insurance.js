/*
    Test that we are calculating student loans correctly
*/

var sys = require('sys'),
    NationalInsuranceCalculator = require("../lib/national_insurance"),
    testCase = require('nodeunit').testCase;

module.exports = {
    'National Insurance for 15000 in 2009_10' : testCase({
        setUp: function (callback) {
            var income = 15000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2009_10');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(1020.80, this.nationalInsuranceDeduction);
            test.done();
        }
    }),
    
    'National Insurance for 150000 in 2009_10' : testCase({
        setUp: function (callback) {
            var income = 150000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2009_10');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(5259.60, this.nationalInsuranceDeduction);
            test.done();
        }
    }),
    
    'National Insurance for 15000 in 2010_11' : testCase({
        setUp: function (callback) {
            var income = 15000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2010_11');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(1020.80, this.nationalInsuranceDeduction);
            test.done();
        }
    }),
    
    'National Insurance for 150000 in 2010_11' : testCase({
        setUp: function (callback) {
            var income = 150000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2010_11');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(5259.60, this.nationalInsuranceDeduction);
            test.done();
        }
    }),
    
    'National Insurance for 15000 in 2011_12' : testCase({
        setUp: function (callback) {
            var income = 15000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2011_12');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(932.64, this.nationalInsuranceDeduction);
            test.done();
        }
    }),
    
    'National Insurance for 150000 in 2011_12' : testCase({
        setUp: function (callback) {
            var income = 150000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2011_12');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(6381.04, this.nationalInsuranceDeduction);
            test.done();
        }
    }),

    'National Insurance for 15000 in 2012_13' : testCase({
        setUp: function (callback) {
            var income = 15000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2012_13');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(this.nationalInsuranceDeduction, 1132.32);
            test.done();
        }
    }),

    'National Insurance for 150000 in 2012_13' : testCase({
        setUp: function (callback) {
            var income = 150000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2012_13');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(this.nationalInsuranceDeduction, 6580.72);
            test.done();
        }
    }),

    'National Insurance for 15000 in 2013_14' : testCase({
        setUp: function (callback) {
            var income = 15000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2013_14');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(this.nationalInsuranceDeduction, 1119.84);
            test.done();
        }
    }),

    'National Insurance for 150000 in 2013_14' : testCase({
        setUp: function (callback) {
            var income = 150000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2013_14');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(this.nationalInsuranceDeduction, 6464.24);
            test.done();
        }
    }),

    'National Insurance for 15000 in 2014_15' : testCase({
        setUp: function (callback) {
            var income = 15000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2014_15');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(this.nationalInsuranceDeduction, 1107.36);
            test.done();
        }
    }),

    'National Insurance for 150000 in 2014_15' : testCase({
        setUp: function (callback) {
            var income = 150000;
            this.nationalInsuranceDeduction = NationalInsuranceCalculator(income, '2014_15');

            callback();
        },
        tearDown: function (callback) {
            delete this.nationalInsuranceDeduction;

            callback();
        },

        testDeduction : function(test) {
            test.equals(this.nationalInsuranceDeduction, 6493.36);
            test.done();
        }
    })
}