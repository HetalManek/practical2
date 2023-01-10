import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { DatabindService } from '../databind.service';
import { ActiveProjectDataitem, budgetitem, Programitem, Selecteddata } from './data';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  
  Selecteddata : any[]=[];
  myselectedvalues !: FormGroup;
  Selecteddataobj: Selecteddata = new Selecteddata();


  budgetdata!: budgetitem[];
  budgetobj: budgetitem = new budgetitem();

  programdata!: Programitem[];
  programobj: Programitem = new Programitem();

  activeprojectdata!: ActiveProjectDataitem[];
  activeprojectobj: ActiveProjectDataitem = new ActiveProjectDataitem();

 


  getbudgetitem(e: any) {
    console.log(e.target.value);

  }

  constructor(private databindservice: DatabindService, private fb: FormBuilder) { }

  ngOnInit(): void {

    this.myselectedvalues = this.fb.group({
      "budget": [''],
      "program": [''],
      "activePeoject": [''],
    })
    this.getAllData()

  }

  getAllData() {
    this.databindservice.getBudgetData().subscribe((res: any) => {
      this.budgetdata = res.budgetItem;
      console.log(this.budgetdata)
    });

    this.databindservice.getProgramData().subscribe((result: any) => {
      this.programdata = result.programs;
      console.log(this.programdata)
    });

    this.databindservice.getactiveprojectata().subscribe((response: any) => {
      this.activeprojectdata = response.activeProjectList.table;
      console.log(this.activeprojectdata)
    });

  }

  //get selected data with post api

  getDropdownData() {
    this.Selecteddataobj.budget = this.myselectedvalues.value.budget;
    this.Selecteddataobj.program = this.myselectedvalues.value.program;
    this.Selecteddataobj.activePeoject = this.myselectedvalues.value.activePeoject;
    console.log(this.Selecteddataobj);
    this.databindservice.postDropdownData(this.myselectedvalues.value).subscribe((res) => {
     console.log(res.reportData);

  this.Selecteddata .push(this.myselectedvalues.value);
  console.log(this.Selecteddata);
  
  
    })



  }

}

