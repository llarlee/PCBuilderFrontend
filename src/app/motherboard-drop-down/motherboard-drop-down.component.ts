import { Component } from '@angular/core';
import { MotherboardService } from '../services/motherboard.service';
import { Motherboard } from '../motherboard';

@Component({
  selector: 'app-motherboard-drop-down',
  templateUrl: './motherboard-drop-down.component.html',
  styleUrls: ['./motherboard-drop-down.component.css']
})
export class MotherboardDropDownComponent {  

  constructor(private motherboardService: MotherboardService){
    
  }

  lstMotherboards:Motherboard[];

  ngOnInit() {
    this.motherboardService.getMotherboardList()
    .subscribe(
      data =>
      {
        this.lstMotherboards = data;
      }
    )
  }
}