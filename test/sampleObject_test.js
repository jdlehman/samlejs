import {assert} from 'chai';
import sampleObject from '../src/sampleObject';

describe('sampleObject', () => {
  it('an empty object returns null', () => {
    var pick = sampleObject({});
    assert.isNull(pick);
  });

  it('can sample an object', () => {
    var pick = sampleObject({
      test: 0.2,
      control: 0.5,
      another: 0.3
    });
    assert.match(pick, /^test|control|another/);
  });

  it('normalizes the weights when it samples', () => {
    var pick = sampleObject({
      test: 2,
      control: 0.5,
      another: 0.3
    });
    assert.match(pick, /^test|control|another/);
  });
});
