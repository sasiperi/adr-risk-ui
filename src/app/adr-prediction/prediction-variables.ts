import { ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';


//Common chart variables
export const CHART_OPTIONS:ChartOptions = {    
    responsive: true,
    rotation:0
};


export const BAR_CHART_TYPE:ChartType = 'horizontalBar';
export const CHART_LEGEND:boolean = true;
export const CHART_PLUGINS = [];

//total risk graph constants
export const CHART_LABELS_TOTAL_RISK:Label[] = ['Total', 'Hospital', 'Mortality'];
export const CHART_COLORS_TOTAL_RISK:Array<any> = [
    {
      backgroundColor: '#94b8b8',//'#74a9d8',
      borderColor: '#3d5c5c', //'#224f77',
      pointBackgroundColor: '#3d5c5c',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    }
  ];

//stratified risk graph constants

export const CHART_LABELS_STRATIFIED_RISK:Label[] = ['Total', 'Adr Group-1', 'Adr Group-2', 'Adr Group-3', 'Adr Group-4', 'Adr Group-5'];
export const CHART_COLORS_STRATIFIED_RISK:Array<any> = [
    {
      backgroundColor: '#ffd9b3',
      borderColor: '#cc6600',
      pointBackgroundColor: '#cc6600',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    }
  ];

/* public barChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(105,159,177,0.2)',
      borderColor: 'rgba(105,159,177,1)',
      pointBackgroundColor: 'rgba(105,159,177,1)',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fafafa',
      pointHoverBorderColor: 'rgba(105,159,177)'
    },
    { 
      backgroundColor: 'rgba(77,20,96,0.3)',
      borderColor: 'rgba(77,20,96,1)',
      pointBackgroundColor: 'rgba(77,20,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,20,96,1)'
    } 
  ]; */
  /* public barChartColors:Array<any> = [
    {
      backgroundColor: ' #337AB7',
      borderColor: '#007bff',
      pointBackgroundColor: '#007bff',
      pointBorderColor: '#fafafa',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(105,159,177)'
    }
  ]; */
  
  //public barChartData:ChartDataSets[] = [ {data: [65, 91.1, 80], label: 'Total Risk'} ];

