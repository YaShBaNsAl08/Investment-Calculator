import { CurrencyPipe } from '@angular/common';
import { Component, computed, input, Input } from '@angular/core';
import { Investmentservice } from '../investment.service';

@Component({
  selector: 'app-invest-result',
  // standalone: true,
  // imports: [CurrencyPipe],
  templateUrl: './invest-result.component.html',
  styleUrl: './invest-result.component.css'
})
export class InvestResultComponent {
  constructor(private investService: Investmentservice){}
  // get res(){ one way
  //   return this.investService.result;
  // }
  res = computed(()=> this.investService.result()) //unsing computed
  // res = this.investService.result.asReadonly();
  //  res= input<{ using signals
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  
  // }[]>();
  // @Input() res?:{
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  
  // }[];

}
