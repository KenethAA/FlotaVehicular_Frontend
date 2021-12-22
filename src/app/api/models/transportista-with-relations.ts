/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: TransportistaWithRelations, schemaOptions: { includeRelations: true })
 */
export interface TransportistaWithRelations {
  id?: string;
  identidad: string;
  licencia: 'liviana' | 'pesada';
  nombre: string;

  [key: string]: any;
}
