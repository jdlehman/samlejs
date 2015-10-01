function randomIndex(length) {
  return Math.floor(Math.random() * length);
}

export default function sampleArray(collection) {
  return collection[randomIndex(collection.length)] || null;
}
