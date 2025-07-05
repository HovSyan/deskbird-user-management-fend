export type Credentials = {
  email: string;
  password: string;
};

export type User = {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: {
    id: number;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type EditUser = Pick<User, 'email' | 'firstName' | 'lastName'>;

export type CreateNewUser = EditUser & {
    password: string;
}

