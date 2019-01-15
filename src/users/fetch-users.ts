import { UserDS } from './types';
import { sortUser } from './utils';

const satisfiesFilter = (filterOption: UserDS.FilterOption, user: UserDS.User) => {
  return (
    (filterOption.userId ? user.userId === filterOption.userId : true) &&
    (filterOption.name ? user.name.match(filterOption.name) : true) &&
    (filterOption.favColor
      ? filterOption.favColor.findIndex(f => f === user.favColor) !== -1
      : true) &&
    (filterOption.city
      ? filterOption.city.findIndex(c => c === user.city) !== -1
      : true) &&
    (filterOption.dob && filterOption.dob.from
      ? user.dob >= filterOption.dob.from
      : true) &&
    (filterOption.dob && filterOption.dob.to
      ? user.dob <= filterOption.dob.to
      : true)
  );
};

export const fetchUsers = (
  dataSet: UserDS.User[],
  opts?: UserDS.QueryOption
): UserDS.DataSourceResponse => {
  let list: UserDS.User[] = [];

  // handle filters
  const filter = opts && opts.filter;
  if (filter && Object.keys(filter).length > 0) {
    list = dataSet.filter(u => satisfiesFilter(filter, u));
  } else {
    list = dataSet;
  }

  // handle sort
  const sort = opts && opts.sort;
  if (sort) {
    list = sortUser(list, sort.key);
    if (sort.order === 'desc') {
      list = list.reverse();
    }
  }

  const totalItemsMatchingFilter = list.length;

  // handle pagination
  list =
    opts && opts.pagination
      ? list.slice(
        opts.pagination.offset,
        opts.pagination.offset + opts.pagination.size
      )
      : list;

  return {
    total: totalItemsMatchingFilter,
    opts,
    list
  };
};
