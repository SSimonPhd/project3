export const removeToken = (userToken) => { // export function from module 
    localStorage.clear();
    userToken(null);
  }