import {assert} from 'chai';
import sample from '../src';

describe('sample', () => {
  it('returns null if not an array or object', () => {
    var pick = sample(2);
    assert.isNull(pick);
    var pick2 = sample();
    assert.isNull(pick2);
  });

  it('can sample an array', () => {
    var pick = sample(['test', 'control']);
    assert.match(pick, /^test|control$/);
  });

  it('can sample an object', () => {
    var pick = sample({
      test: 0.2,
      control: 0.3,
      another: 0.5
    });
    assert.match(pick, /^test|control|another$/);
  });
});
