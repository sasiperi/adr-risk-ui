import { InjectionToken } from '@angular/core';

export const BASE_PATH = new InjectionToken<string>('basePath');
export const COLLECTION_FORMATS = {
    'csv': ',',
    'tsv': '   ',
    'ssv': ' ',
    'pipes': '|'
}
export const ADR_DATA_ENDPOINT:string = "https://virtserver.swaggerhub.com/SP-ORG/ADR-API/1.0.3";
export const ADR_PREDICTION_ENDPOINT:string = "https://virtserver.swaggerhub.com/SP-ORG/ADR-API/1.0.3";

/* export const ACCESS_TOKEN_ENDPOINT:string = "https://dev-696450.okta.com/oauth2/default/v1/token";
export const CLIENT_ID = "0oa5uqvykjmN2UtkC357";
export const CLIENT_SECRET = "c947iTlXAkx4jGS6P_AHsf2t5axJ7Cknv2SInwto";
export const GRANT_TYPE = "client_credentials";
export const SCOPES = "sp-api-doc.read"; */

export const OAUTH_ENABLE = true;

export const ACCESS_TOKEN_ENDPOINT:string = "https://dev-696450.okta.com/oauth2/aus12x7gstdigyVlZ357/v1/token";
export const CLIENT_ID = "0oa6ynwlriQNxoIzP357";
export const CLIENT_SECRET = "6ssA9nwcPbgyRXMiKBt1fG2R--UIyYq2Uwj5avQl";
export const GRANT_TYPE = "client_credentials";
export const SCOPES = "sp-api-doc.read";


//angular-jwt
    //oidc-client*/