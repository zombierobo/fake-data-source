# fake-data-source
npm module containing helper functions which can be used to mock rest endpoints.
## Installation 
```sh
npm install fake-data-source --save
yarn add fake-data-source
bower install fake-data-source --save
```
## Usage
### Javascript
```javascript
var fakeDataSource = require('fake-data-source');
var dataSetSize = 1000;
var userDataSet = fakeDataSource.createUserData(dataSetSize).users;
console.log(
  fakeDataSource.fetchUsers(userDataSet, {
    sort: {
      key: 'dob',
      order: 'asc'
    },
    pagination: {
      offset: 5,
      size: 8
    },
    filter: {
      name: '^A'
    }
  })
);
```
#### Output
```json
{
  "total": 88,
  "opts": {
    "sort": {
      "key": "dob",
      "order": "asc"
    },
    "pagination": {
      "offset": 5,
      "size": 8
    },
    "filter": {
      "name": "^A"
    }
  },
  "list": [
    {
      "userId": 10758,
      "name": "Amani Lindgren",
      "dob": "1972-07-29T23:09:28.492Z",
      "favColor": "#215e18",
      "city": "Cadeton"
    },
    {
      "userId": 10321,
      "name": "Americo Auer",
      "dob": "1972-07-30T14:31:40.253Z",
      "favColor": "#541880",
      "city": "Feeneyborough"
    },
    {
      "userId": 10436,
      "name": "Amara Hagenes",
      "dob": "1972-10-05T23:14:26.469Z",
      "favColor": "#794538",
      "city": "Feeneyborough"
    },
    {
      "userId": 10811,
      "name": "Alvera Reichert III",
      "dob": "1973-10-27T21:39:25.838Z",
      "favColor": "#052633",
      "city": "Jarredview"
    },
    {
      "userId": 10760,
      "name": "Annie Casper",
      "dob": "1974-03-08T04:38:58.342Z",
      "favColor": "#572877",
      "city": "Melynaburgh"
    },
    {
      "userId": 10115,
      "name": "Adrien Klocko",
      "dob": "1974-04-30T05:19:19.610Z",
      "favColor": "#572877",
      "city": "Littletown"
    },
    {
      "userId": 10702,
      "name": "Alyce Bradtke",
      "dob": "1974-06-28T06:10:53.665Z",
      "favColor": "#434f30",
      "city": "New Toney"
    },
    {
      "userId": 10277,
      "name": "Alvera Stokes DDS",
      "dob": "1975-09-14T04:22:25.043Z",
      "favColor": "#215e18",
      "city": "East Glennabury"
    }
  ]
}
```
### TypeScript
```typescript
const fakeDataSource = require('fake-data-source');
import { createUserData, fetchUsers } from 'fake-data-source';
const dataSetSize = 1000;
const userDataSet = createUserData(dataSetSize).users;
console.log(
  fetchUsers(userDataSet, {
    sort: {
      key: 'dob',
      order: 'asc'
    },
    pagination: {
      offset: 5,
      size: 8
    },
    filter: {
      name: '^A'
    }
  })
);
```
#### Output
```json
{
  "total": 88,
  "opts": {
    "sort": {
      "key": "dob",
      "order": "asc"
    },
    "pagination": {
      "offset": 5,
      "size": 8
    },
    "filter": {
      "name": "^A"
    }
  },
  "list": [
    {
      "userId": 10758,
      "name": "Amani Lindgren",
      "dob": "1972-07-29T23:09:28.492Z",
      "favColor": "#215e18",
      "city": "Cadeton"
    },
    {
      "userId": 10321,
      "name": "Americo Auer",
      "dob": "1972-07-30T14:31:40.253Z",
      "favColor": "#541880",
      "city": "Feeneyborough"
    },
    {
      "userId": 10436,
      "name": "Amara Hagenes",
      "dob": "1972-10-05T23:14:26.469Z",
      "favColor": "#794538",
      "city": "Feeneyborough"
    },
    {
      "userId": 10811,
      "name": "Alvera Reichert III",
      "dob": "1973-10-27T21:39:25.838Z",
      "favColor": "#052633",
      "city": "Jarredview"
    },
    {
      "userId": 10760,
      "name": "Annie Casper",
      "dob": "1974-03-08T04:38:58.342Z",
      "favColor": "#572877",
      "city": "Melynaburgh"
    },
    {
      "userId": 10115,
      "name": "Adrien Klocko",
      "dob": "1974-04-30T05:19:19.610Z",
      "favColor": "#572877",
      "city": "Littletown"
    },
    {
      "userId": 10702,
      "name": "Alyce Bradtke",
      "dob": "1974-06-28T06:10:53.665Z",
      "favColor": "#434f30",
      "city": "New Toney"
    },
    {
      "userId": 10277,
      "name": "Alvera Stokes DDS",
      "dob": "1975-09-14T04:22:25.043Z",
      "favColor": "#215e18",
      "city": "East Glennabury"
    }
  ]
}
```
## Test 
```sh
npm run test
```