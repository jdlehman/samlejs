function totalWeight(collection) {
  return Object.keys(collection).reduce((sum, key) => {
    return sum + collection[key];
  }, 0);
}

function normalizeWeights(collection) {
  var total = totalWeight(collection);
  var newCollection = {};
  Object.keys(collection).map(key => {
    newCollection[key] = collection[key] / total;
  });
  return newCollection;
}

export default function sampleObject(collection) {
  var random = Math.random();
  var normCollection = normalizeWeights(collection);
  var current = 0;
  var found = false;
  return Object.keys(normCollection).filter(key => {
    current += normCollection[key];
    if (!found && random <= current) {
      found = true;
      return key;
    }
  })[0] || null;
}
