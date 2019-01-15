import { address, date, internet, name } from 'faker';
import { UserDS } from './types';
import { sortUser } from './utils';

// min and max included
const randomIntFromInterval = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export function createUserData(
  size = 2000
): {
  users: UserDS.User[];
  domain: {
    cities: string[];
    colors: string[];
  };
} {
  const colors = new Array(20).fill(0).map(n => internet.color());
  const cities = new Array(20).fill(0).map(n => address.city());
  const users: UserDS.User[] = [];
  for (let i = 0; i < size; i++) {
    users.push({
      userId: 10000 + i,
      name: name.findName(),
      dob: date.between(new Date(1965), new Date()),
      favColor: colors[randomIntFromInterval(0, colors.length - 1)],
      city: cities[randomIntFromInterval(0, cities.length - 1)]
    });
  }
  return {
    users: sortUser(users, 'name'),
    domain: {
      cities,
      colors
    }
  };
}
