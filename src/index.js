import sampleArray from './sampleArray';
import sampleObject from './sampleObject';

export default function sample(collection) {
  if (Array.isArray(collection)) {
    return sampleArray(collection);
  } else if (typeof collection === 'object') {
    return sampleObject(collection);
  } else {
    return null;
  }
}
