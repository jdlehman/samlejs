import {assert} from 'chai';
import sampleArray from '../src/sampleArray';

describe('sampleArray', () => {
  it('an empty array returns null', () => {
    var pick = sampleArray([]);
    assert.isNull(pick);
  });

  it('can sample an array', () => {
    var pick = sampleArray(['test', 'control', 'test', 'more']);
    assert.match(pick, /^test|control|more$/);
  });
});
