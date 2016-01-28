'use strict';

import {expect} from 'mai-chai';

import {fact} from '../index.js';

describe ('Factorial', () => {
  it ('Returns correct results', () => {
    expect (fact (1)).to.be.equal (1);
    expect (fact (2)).to.be.equal (2);
    expect (fact (3)).to.be.equal (6);
  });
});
