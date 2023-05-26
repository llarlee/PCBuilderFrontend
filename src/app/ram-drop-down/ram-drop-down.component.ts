import { Component } from '@angular/core';
import { RamService } from '../services/ram.service';
import { RAM } from '../ram';

@Component({
  selector: 'app-ram-drop-down',
  templateUrl: './ram-drop-down.component.html',
  styleUrls: ['./ram-drop-down.component.css']
})
export class RamDropDownComponent {

  constructor(private ramService: RamService){}

  lstram:RAM[];

  ngOnInit() {
    this.ramService.getCPUList()
    .subscribe(
      data =>
      {
        this.lstram = data;
      }
    )
  }
}
