import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from "./user-input/user-input.component";
import { Investmentinput } from './investment-input.model';
import { InvestResultComponent } from "./invest-result/invest-result.component";
@Component({
  selector: 'app-root',
  // standalone: true,
  templateUrl: './app.component.html',
  // imports: [HeaderComponent, UserInputComponent, InvestResultComponent],
})
export class AppComponent {
  // result?:{ without signols
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  
  // }[];
  // result = signal<{
  //     year: number,
  //     interest: number,
  //     valueEndOfYear: number,
  //     annualInvestment: number,
  //     totalInterest: number,
  //     totalAmountInvested: number,
    
  //   }[] | undefined>(undefined);
}
