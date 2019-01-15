import { UserDS } from './types';

export const sortUser = (
  userList: UserDS.User[],
  key: UserDS.UserKeySet
): UserDS.User[] => {
  let sortFn;
  if (key === 'city' || key === 'name' || key === 'favColor') {
    sortFn = (a: UserDS.User, b: UserDS.User) =>
      a[key].toString().localeCompare(b[key].toString());
  } else {
    sortFn = (a: UserDS.User, b: UserDS.User) => (a[key] as number) - (b[key] as number);
  }
  return userList.sort(sortFn);
};
