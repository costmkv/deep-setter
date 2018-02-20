const deepSet = require('./');
const expect = require('expect.js');

describe('deep set', () => {
  const testObject = {
    elem1: [{
      elem2: '',
    }, {
      elem3: '',
    }],
  };

  it('should set in root (without object param)', () => {
    const object = deepSet({
      valueToSet: { test: 1 },
      path: 'elem1',
    });

    expect(object).to.be.eql({ elem1: { test: 1 } });
  });

  it('should set in array', () => {
    const object = deepSet({
      object: testObject,
      valueToSet: { test: 1 },
      path: 'elem1.$0',
    });

    expect(object).to.be.eql({
      elem1: [{
        test: 1,
      }, {
        elem3: '',
      }],
    });
  });

  it('should set in object', () => {
    const object = deepSet({
      object: testObject,
      valueToSet: { test: 1 },
      path: 'elem1.$0.elem2',
    });

    expect(object).to.be.eql({
      elem1: [{
        elem2: { test: 1 },
      }, {
        elem3: '',
      }],
    });
  });
});
