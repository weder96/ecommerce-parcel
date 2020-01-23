export const TOKEN_KEY = "@key-token";
export const TOKEN_USER = "@key-user";
export const TOKEN_PREVILEGE = "@key-privelege";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUser = () => localStorage.getItem(TOKEN_USER);
export const getPrivilege = () => localStorage.getItem(TOKEN_PREVILEGE);

export const login =(token , username, privilege) => {
  localStorage.setItem(TOKEN_KEY, token);
  localStorage.setItem(TOKEN_USER, username);
  localStorage.setItem(TOKEN_PREVILEGE, privilege);
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(TOKEN_USER);
  localStorage.removeItem(TOKEN_PREVILEGE);
};
