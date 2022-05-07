export type UserType = 'User' | 'Admin';

export interface User {
  uid: string;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  type: UserType;
}
