'use strict';
const expect = require('chai').expect;
const fakeDataSource = require('../dist/index.js');

describe('Test fetchUsers', () => {
  const dataSetSize = 1000;
  const userDataSet = fakeDataSource
    .createUserData(dataSetSize).users;

  it('should return all users by default', () => {
    const response = fakeDataSource.fetchUsers(userDataSet);
    expect(response.total).to.equal(dataSetSize);
    expect(response.list.length).to.equal(dataSetSize);
  });

  it('should sort users based on their date of birth (eldest to youngest)', () => {
  
    const pagination = {
      offset: 100,
      size: 800
    };

    const opts = {
      sort: {
        key: 'dob',
        order: 'asc'
      },
      pagination
    };

    const response = fakeDataSource.fetchUsers(userDataSet, opts);
    expect(response.total).to.be.equal(dataSetSize);
    expect(response.list.length).to.be.equal(pagination.size);
    expect(response.opts).to.deep.equal(opts);

    for (let i = 0; i < response.list.length - 1; i++) {
      expect(response.list[i + 1].dob.getTime()).to.be.gte(
        response.list[i].dob.getTime()
      );
    }
  });
});
