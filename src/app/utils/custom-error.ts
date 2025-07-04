import { AxiosError } from 'axios';
import { UNKNOWN_ERROR_MSG } from '../constants';

export class CustomError {
    static fromUnknown(error: unknown) {
        if (error instanceof CustomError) {
            return error;
        }
        if (error instanceof AxiosError) {
            if (error.response?.data && 'message' in error.response.data) {
                return new CustomError(error.response.data.message, null);
            }
            return new CustomError(error.message, null);
        }
        return new CustomError('Unknown error', UNKNOWN_ERROR_MSG);
    }
    constructor(readonly summary: string, readonly message: string | null) {}
}
