/* tslint:disable */
/* eslint-disable */
export interface Transportista {
  id?: string;
  identidad: string;
  licencia: 'liviana' | 'pesada';
  nombre: string;

  [key: string]: any;
}
