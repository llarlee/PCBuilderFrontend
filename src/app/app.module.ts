import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotherboardDropDownComponent } from './motherboard-drop-down/motherboard-drop-down.component';
import { MotherboardService } from './services/motherboard.service';
import { CpuDropDownComponent } from './cpu-drop-down/cpu-drop-down.component';
import { RamDropDownComponent } from './ram-drop-down/ram-drop-down.component'
import { RamService } from './services/ram.service';
import { CpuService } from './services/cpu.service';

@NgModule({
  declarations: [
    AppComponent,
    MotherboardDropDownComponent,
    CpuDropDownComponent,
    RamDropDownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [MotherboardService, CpuService, RamService],
  bootstrap: [AppComponent]
})
export class AppModule { }
