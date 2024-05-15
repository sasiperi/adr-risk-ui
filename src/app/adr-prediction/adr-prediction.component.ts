import { Component,  OnInit } from '@angular/core';
import { AdrRiskPredictionData, ImportantAdr, Prediction } from '../model/models';
import { ADRPredictionService } from '../service/adrprediction.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

import { BAR_CHART_TYPE, CHART_OPTIONS, CHART_LEGEND, CHART_PLUGINS, CHART_LABELS_TOTAL_RISK, CHART_COLORS_TOTAL_RISK, CHART_LABELS_STRATIFIED_RISK, CHART_COLORS_STRATIFIED_RISK } from './prediction-variables'



@Component({
  selector: 'adr-adr-prediction',
  templateUrl: './adr-prediction.component.html',
  styleUrls: ['./adr-prediction.component.css']
})
export class AdrPredictionComponent implements OnInit {
  
  pageTitle = 'Prediction Result';
  errorMessage = '';
    
  constructor(private adrPredictionService:ADRPredictionService) { }

  // bar chart common config
  readonly barChartType = BAR_CHART_TYPE;
  readonly barChartOptions = CHART_OPTIONS;  
  readonly barChartLegend = CHART_LEGEND;
  readonly barChartPlugins = CHART_PLUGINS;
  
  // Total risk chart options
  readonly barChartLabels = CHART_LABELS_TOTAL_RISK;
  readonly barChartColors = CHART_COLORS_TOTAL_RISK;

  // Total risk chart options
  readonly barChartLabelsStratified = CHART_LABELS_STRATIFIED_RISK;
  readonly barChartColorsStratified = CHART_COLORS_STRATIFIED_RISK;

  //{ "totalAdrRisk": { "totalRisk": 51.91, "hospitalRisk": 60, "mortalityRisk": 40.91 },
  // "stratifiedAdrRisk": { "totalRisk": 81.91, "adrGrpOneRisk": 11.91, "adrGrpTwoRisk": 21.91, "adrGrpThreeRisk": 31.91, "adrGrpFourRisk": 41.91, "adrGrpFiveeRisk": 51.91 } }

  
  //bar chart data total risk
  public barChartData:ChartDataSets[]  = [];

  //bar chart data stratified risk
  public barChartDataStratified:ChartDataSets[]  = [];

  //important adrs (to look for)
  public importantAdrs:ImportantAdr[] = [];
  

  // events
    public chartClicked(e:any):void {
      console.log(e);
    }
  
    public chartHovered(e:any):void {
      console.log(e);
    }
  
    
   

  ngOnInit(): void {

    console.log("TESTING PRED ****" + this.adrPredictionService.getAdrData()?.gender);

    let adrdata: AdrRiskPredictionData = this.adrPredictionService.getAdrData();

    

    this.adrPredictionService.makePrediction(adrdata, undefined, true)
      .subscribe({
      next: prediction => {
        //this.prediction = prediction,
        this.barChartData = [ {data: [prediction.totalAdrRisk.totalRisk, prediction.totalAdrRisk.hospitalRisk, prediction.totalAdrRisk.mortalityRisk], label: 'Total Risk'} ];
        this.barChartDataStratified = [{data:[prediction.stratifiedAdrRisk.totalRisk, prediction.stratifiedAdrRisk.adrGrpOneRisk, prediction.stratifiedAdrRisk.adrGrpTwoRisk, prediction.stratifiedAdrRisk.adrGrpThreeRisk, prediction.stratifiedAdrRisk.adrGrpFourRisk, prediction.stratifiedAdrRisk.adrGrpFiveeRisk], label: 'Stratified Risk'}];
        this.importantAdrs = prediction.importantAdrData.importantAdr;
      },
      error: err => this.errorMessage = err
    });  
      

  }

}
