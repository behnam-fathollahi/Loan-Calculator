
    
    



function calculateLoan(){
    loanAmountValue = document.getElementById("loan-amount").value;  
   intrestRateValue =  document.getElementById("intrest-rate").value;
   MonthsTopayValue = document.getElementById("months-to-pay").value;
   intrest = (loanAmountValue * (intrestRateValue * 0.01)) /  MonthsTopayValue
   
   monthlyPayment = (loanAmountValue / MonthsTopayValue + intrest).toFixed(2);
   
const payment = document.getElementById("payment");

payment.innerHTML = `
Monthly Payment: ${monthlyPayment} `
payment.style.color = 'yellow';

}
