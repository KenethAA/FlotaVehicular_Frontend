/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: VehiculosWithRelations, schemaOptions: { includeRelations: true })
 */
export interface VehiculosWithRelations {
  color: string;
  id?: string;
  marca: string;
  placa: string;
  tipo: 'pickup' | 'camion';

  [key: string]: any;
}
