UK National Insurance Calculator
=============

[![Build Status](https://travis-ci.org/moneyio/uk-national-insurance.png?branch=master)](https://travis-ci.org/moneyio/uk-national-insurance)

A basic standalone UK National Insurance calculator. See http://www.hmrc.gov.uk/rates/nic.htm for more details on rates.

Usage options:

    var NationalInsuranceCalculator = require('uk-national-insurance');
    var annualNationalInsuranceRepayment = NationalInsuranceCalculator(40000, '2013_14');

Resulting in `annualNationalInsuranceRepayment`:

    4119.84
