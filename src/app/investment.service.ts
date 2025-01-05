import { Injectable, signal } from "@angular/core";
import { Investmentinput } from "./investment-input.model";

@Injectable({providedIn:'root'})
export class Investmentservice{
 result = signal<{
      year: number,
      interest: number,
      valueEndOfYear: number,
      annualInvestment: number,
      totalInterest: number,
      totalAmountInvested: number,
    
    }[] | undefined>(undefined);
  //    result?:{ without signal
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  
  // }[];
    calculateInvestmentResults(data:Investmentinput) {
        const {initialInvestment,annualInvestment,expectedReturn,duration }=data;
        const annualData = [];
        let investmentValue = initialInvestment;
      
        for (let i = 0; i < duration; i++) {
          const year = i + 1;
          const interestEarnedInYear = investmentValue * (expectedReturn / 100);
          investmentValue += interestEarnedInYear + annualInvestment;
          const totalInterest =
            investmentValue - annualInvestment * year - initialInvestment;
          annualData.push({
            year: year,
            interest: interestEarnedInYear,
            valueEndOfYear: investmentValue,
            annualInvestment: annualInvestment,
            totalInterest: totalInterest,
            totalAmountInvested: initialInvestment + annualInvestment * year,
          });
        }
      
        // return annualData;
        // console.log(annualData);
        this.result.set(annualData);
      }

}