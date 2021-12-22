/* tslint:disable */
/* eslint-disable */

/**
 * (tsType: Partial<Transportista>, schemaOptions: { partial: true })
 */
export interface TransportistaPartial {
  id?: string;
  identidad?: string;
  licencia?: 'liviana' | 'pesada';
  nombre?: string;

  [key: string]: any;
}
