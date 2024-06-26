/**
 * ADR Prediction API
 * This is a API to expose Adverse Drug Reaction (ADR) preditions
 *
 * OpenAPI spec version: 1.0.3
 * Contact: sasiperis
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { ImportantAdrData } from './importantAdrData';
import { StratifiedAdrRisk } from './stratifiedAdrRisk';
import { TotalAdrRisk } from './totalAdrRisk';

export interface Prediction { 
    totalAdrRisk: TotalAdrRisk;
    stratifiedAdrRisk: StratifiedAdrRisk;
    importantAdrData: ImportantAdrData;
}