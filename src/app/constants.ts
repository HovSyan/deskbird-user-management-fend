export const LOGOUT_FAILED_ERROR_MSG = 'We are sorry, but it seems we failed to log you out! If it is essential to log out try deleting browser cookies by cleaning browser history'
export const UNKNOWN_ERROR_MSG = 'We are so sorry! But an unknown error occurred :(';
export const PASSWORD_TOOLTIP = `Ideally this wouldn't be here. It seems weird nowadays setting up a password for somebody else especially if we don't have password change functionality 😅. \n\nSo this is here to test the app easily.`
export const DELETE_USER_CONFIRM_MSG = 'Are you sure that you want to delete this user? This can\'t be reverted!';

export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const enum UserRoles {
    ADMIN = 1,
    REGULAR = 2,
}