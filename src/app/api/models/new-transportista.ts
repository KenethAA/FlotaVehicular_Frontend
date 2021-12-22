/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Omit<Transportista, 'id'>, schemaOptions: { title: 'NewTransportista', exclude: [ 'id' ] })
 */
export interface NewTransportista {
  identidad: string;
  licencia: 'liviana' | 'pesada';
  nombre: string;

  [key: string]: any;
}
