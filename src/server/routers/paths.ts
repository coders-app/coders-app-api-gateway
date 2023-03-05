export const partialPaths = {
  users: {
    base: "/users",
    login: "/login",
    logout: "/logout",
  },
};

export const paths = {
  root: "/",
  users: {
    login: `${partialPaths.users.base}${partialPaths.users.login}`,
    logout: `${partialPaths.users.base}${partialPaths.users.logout}`,
  },
  apiDocs: {
    base: "/api-docs",
  },
};
