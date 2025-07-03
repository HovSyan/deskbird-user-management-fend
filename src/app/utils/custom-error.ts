import { AxiosError } from 'axios';

export class CustomError {
  static fromUnknown(error: unknown) {
    if (error instanceof AxiosError) {
      if (error.response?.data && 'message' in error.response.data) {
        return new CustomError(error.response.data.message);
      }
      return new CustomError(error.message);
    }
    return new CustomError('We are so sorry! But an unknown error occurred :(');
  }
  constructor(readonly message: string) {}
}
