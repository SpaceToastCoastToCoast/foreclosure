'use strict';
var steve;
var stevesLoan;
var month = 0;
var monthsUntilEvicted;

function loan() {
  let account = {
    borrowed: 550000,
    balance: 286000,
    monthlyPayment: 1700,
    defaulted: 0,
    defaultsToForeclose: 5,
    foreclosed: false
  };
  function missPayment() {
    account.defaulted++;
    if(account.defaulted >= account.defaultsToForeclose){
      account.foreclosed = true;
    }
  }
  return {
    getBalance: (function(){
      return account.balance;
    }),
    receivePayment: (function(amount){

    }),
    getMonthlyPayment: (function(){
      return account.monthlyPayment;
    }),
    isForeclosed: (function(){
      return account.foreclosed;
    })
  };
}

function borrower(loan){
  let account = {
    monthlyIncome: 1350,
    funds: 2800,
    loan: loan
  };
  return {
    getFunds: function(){
      return account.funds;
    },
    makePayment: function(){
      if(account.funds > loan.getMonthlyPayment())
      {
        account.funds -= loan.getMonthlyPayment();
        loan.receivePayment(loan.getMonthlyPayment());
      }
    }
  };
}

stevesLoan = loan();
steve = borrower(stevesLoan);