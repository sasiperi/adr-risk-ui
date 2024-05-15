import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from "@angular/forms";
import { Validators } from "@angular/forms";
import { FormArray } from "@angular/forms";

import { ADRPredictionService } from '../service/adrprediction.service';
import { ADRDataService } from '../service/adrdata.service';
import { Condition } from '../model/condition';
import { Drug } from '../model/drug';



@Component({
  selector: 'adr-adr-data-in',
  templateUrl: './adr-data-in.component.html',
  styleUrls: ['./adr-data-in.component.css']
})
export class AdrDataInComponent implements OnInit {

  pageTitle = 'ADR Data - Input Fields';  
  errorMessage = '';
  public conditionData: Condition[] = [];
  public drugData: Drug[] = []; 

  constructor(private router:Router, private fb: FormBuilder, private adrPredictionService:ADRPredictionService, private adrDataService: ADRDataService) { }

  adrDataForm = this.fb.group({
    age: ["", Validators.required],
    gender: [""],
    drugs: this.fb.array([this.fb.control("")]),
    conditions: this.fb.array([this.fb.control("")])
    
  });

 
  get conditions() {
    return this.adrDataForm.get("conditions") as FormArray;
  }

  get drugs() {
    return this.adrDataForm.get("drugs") as FormArray;
  }

  ngOnInit(): void {    
   
    this.adrDataService.conditonDataCache$
      .subscribe({
      next: conditions => {        
        this.conditionData = conditions;       
      },
      error: err => this.errorMessage = err
    });  

    this.adrDataService.drugDataCache$
      .subscribe({
      next: drugs => {        
        this.drugData = drugs;       
      },
      //error: err => this.errorMessage = err
      error: err => this.errorMessage = err + this.errorMessage
    });  

  }

  addCondition() {    
    this.conditions.push(this.fb.control(""));    
  }

  addDrug() {    
    this.drugs.push(this.fb.control(""));
  }

    
  onSubmit()
  {
    //console.log("IN SUBMIT ^^^^^^");
    this.adrPredictionService.setAdrData(this.adrDataForm.value);      
    this.router.navigateByUrl('/adrprediction')        

  }


}
