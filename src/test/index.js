'use strict';

import {expect} from 'mai-chai';
import {add} from '../index.js';

describe ('Maths', () => {
  describe ('add()', () => {
    it ('adds two numbers', () => {
      expect (add (1, 2)).to.equal (3);
    });
  });
});
