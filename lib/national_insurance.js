// Allow us to call JSON files
require('./json_include');

var nationalInsuranceRates = require('./data/national_insurance_rates.json'),
    NationalInsuranceCalculator;

// National Insurance Calc
// See: http://www.direct.gov.uk/en/MoneyTaxAndBenefits/Taxes/BeginnersGuideToTax/NationalInsurance/IntroductiontoNationalInsurance/DG_190048

NationalInsuranceCalculator = function(income, taxYear, NIClass){
    if(isNaN(parseFloat(income, 10))){
        throw new Error('Specify an income to calculate National Insurance');
    }
    
    var getCurrentTaxYear = function(){
        var date = new Date();
        var thisYear = date.getFullYear();
        var nextYear = date.getFullYear() + 1;
        var taxYearDateFormat = thisYear + '_' + String(nextYear).substr(2);
        return taxYearDateFormat;
    };
    
    // National insurance figures are based on a weekly amount.
    var annualToWeekly = function(annualAmount){
        if(isNaN(parseFloat(annualAmount, 10))){
            throw new Error('An annual ammount is needed to calculate a weekly amount');
        }
        var weeklyAmount = annualAmount / 52;
        return weeklyAmount;
    };
    
    var getLowerFigure = function(a,b)
    {
        if(a <= b){
            return a;
        } else {
            return b;
        }
    };
    
    if(!taxYear){
        taxYear = getCurrentTaxYear();
    }
    
    if(!NIClass){
        NIClass = 'class1';
    }
    
    var weeklyIncome = annualToWeekly(income),
        bands = nationalInsuranceRates['year'+taxYear][NIClass],
        deduction = 0,
        bandDeductions = 0,
        deductableAmount = 0;
        
    for(var i in bands){
        if((bands[i].start || bands[i].end) && bands[i].rate){
            band = bands[i];
        
            if(band.end === null){
                band.end = 9999999999999999999;
            }
        
            if(weeklyIncome > band.start){
                if(band.end && band.end > 0){
                    deductableAmount = getLowerFigure(weeklyIncome, band.end) - band.start;
                } else {
                    deductableAmount = weeklyIncome - band.start;
                }
                bandDeductions += (deductableAmount / 100) * band.rate;
            }
        }
    }
    
    deduction += bandDeductions;
    deduction = deduction * 52;
    
    return Math.round(deduction * 100) / 100;
};

module.exports = NationalInsuranceCalculator;