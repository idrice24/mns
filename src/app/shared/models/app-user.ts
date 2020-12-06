// https://github.com/mosh-hamedani/organic-shop/blob/master/src/app/shared/models/app-user.ts

export interface AppUser {
  id: number;
  username?: string;
  fName?: string; // First name of user
  lName?: string; // Last name of user
  email?: string; // User email
  password?: string; // User Password
  passwordConfirmation?: string;  // User Password Config
  isAdmin?: boolean; // Indicate Admin role
  avatar?: string; // Indicate Admin role if Photo missing
  token?: string; // For Token Based Authentication
  description?: string; // For what? maek sens??
}

// API Reference
// https://www.aviacommerce.org/docs/auth-api.html
