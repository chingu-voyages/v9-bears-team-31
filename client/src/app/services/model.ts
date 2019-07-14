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

export interface Review {
  userPhoneNumber: string;
  taxiPlateNumber: string;
  userReview: number;
  createdAt: string;
  updatedAt: string;
}

export interface Taxi {
  averageReview: number;
  imageURL: string;
  imageID: string;
  plateNumber: string;
  model: string;
  createdAt: string;
  updatedAt: string;
  review: Review;
}

export interface TaxiResolved {
  taxi: Taxi;
  error?: any;
}
