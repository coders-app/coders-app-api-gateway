export const partialPaths = {
  users: {
    base: "/users",
    login: "/login",
    logout: "/logout",
    verifyToken: "/verify-token",
  },
};

export const paths = {
  root: "/",
  users: {
    login: `${partialPaths.users.base}${partialPaths.users.login}`,
    logout: `${partialPaths.users.base}${partialPaths.users.logout}`,
    verifyToken: `${partialPaths.users.base}${partialPaths.users.verifyToken}`,
  },
  apiDocs: {
    base: "/api-docs",
  },
};
