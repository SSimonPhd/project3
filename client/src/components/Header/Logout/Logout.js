import Auth from '../../../utils/auth';

export const removeToken = (userToken) => {
	// export function from module
	localStorage.clear();
	Auth.logout();
	userToken(null);
};
