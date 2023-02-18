export const createUserAdapter = (user: any) => ({
  name: user.data.name,
  lastName: user.data.lastName,
  status: user.data.status,
});
