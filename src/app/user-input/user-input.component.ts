import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Investmentservice } from '../investment.service';
// import { Investmentinput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  // standalone: true,
  // imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<Investmentinput>();
  // calculate = output<Investmentinput>(); if not used service
  // enterinvest ='0';
  // annualinvest ='0';
  // expectreturn ='5';
  // enterduration ='10';
  enterinvest =signal('0');
  annualinvest =signal('0');
  expectreturn =signal('5');
  enterduration =signal('10');
  constructor(private investService: Investmentservice){}
  onSubmit(){
    this.investService.calculateInvestmentResults({initialInvestment: +this.enterinvest(),duration:+this.enterduration(),expectedReturn:+this.expectreturn(),annualInvestment:+this.annualinvest()});
  //  this.calculate.emit({initialInvestment: +this.enterinvest(),duration:+this.enterduration(),expectedReturn:+this.expectreturn(),annualInvestment:+this.annualinvest()});
   this.enterinvest.set('0');
   this.annualinvest.set('0');
   this.expectreturn.set('5');
   this.enterduration.set('10');
  }

}
