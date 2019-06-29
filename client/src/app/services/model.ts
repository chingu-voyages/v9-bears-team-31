export interface User  {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  password: string;
  role: boolean;
}

export interface LoginContext {
  phoneNumber: string;
  password: string;
  remember?: boolean;
}
