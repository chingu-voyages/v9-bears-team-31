export interface User  {
  data: {
    userData: {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      password: string;
      isAdmin: boolean;
    },
    token: string;
  };
}

export interface LoginContext {
  phoneNumber: string;
  password: string;
  remember?: boolean;
}
