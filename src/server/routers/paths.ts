export const partialPaths = {
  users: {
    base: "/users",
    login: "/login",
  },
};

export const paths = {
  root: "/",
  users: {
    login: `${partialPaths.users.base}${partialPaths.users.login}`,
  },
  apiDocs: {
    base: "/api-docs",
  },
};
