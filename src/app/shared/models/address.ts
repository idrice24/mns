// Ref
// https://www.aviacommerce.org/docs/addresses-api.html
// See Parameters section

import { AppUser } from './app-user';

export interface Address {
  addressLine1?: string;
  addressLline2?: string;
  zipCode?: number;
  stateId?: number;
  countryId?: number;
  city?: string;
  phone?: number;
  alternatePhone?: number;
  relationships?: AppUser;
}
