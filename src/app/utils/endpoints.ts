/* "Barrel" of Http Interceptors */
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { BasicAuthInterceptor } from './auth.interceptor';

/** Http interceptor providers in outside-in order */
//export const BASE_URI = 'http://localhost:5000';
export const BASE_URI = 'https://apacwebappprd.azurewebsites.net';
export const API_VERSION = 'apac_api_v2';

export const Endpoints = {
      Seguridad : `${BASE_URI}/${API_VERSION}/autorizar`,
      Alumnos : `${BASE_URI}/${API_VERSION}/alumnos`,
      Centros : `${BASE_URI}/${API_VERSION}/centros`,
      Alumnosxcentro : `${BASE_URI}/${API_VERSION}/alumnosxcentro`,
      evaluadores : `${BASE_URI}/${API_VERSION}/evaluadores`
};
