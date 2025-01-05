import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestResultComponent } from "./invest-result/invest-result.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        UserInputComponent,
        InvestResultComponent,
    ],
    imports: [BrowserModule,FormsModule],
    bootstrap:[AppComponent]
})
export class AppModule{}