import { Component } from '@angular/core';
import { CpuService } from '../services/cpu.service';
import { CPU } from '../cpu';

@Component({
  selector: 'app-cpu-drop-down',
  templateUrl: './cpu-drop-down.component.html',
  styleUrls: ['./cpu-drop-down.component.css']
})
export class CpuDropDownComponent {

  constructor(private cpuService: CpuService){
    
  }

  lstcpu:CPU[];

  ngOnInit() {
    this.cpuService.getCPUList()
    .subscribe(
      data =>
      {
        this.lstcpu = data;
      }
    )
  }
}
