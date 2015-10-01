[![npm version](https://badge.fury.io/js/samplejs.svg)](http://badge.fury.io/js/samplejs)
[![Build Status](https://secure.travis-ci.org/jdlehman/samplejs.svg?branch=master)](http://travis-ci.org/jdlehman/samplejs)
[![Dependency Status](https://david-dm.org/jdlehman/samplejs.svg)](https://david-dm.org/jdlehman/samplejs)

# samplejs

`samplejs` can randomly sample elements from an array as well as keys of an object (where the value of the key is the weight).

## Installation

- `npm install samplejs`

## Sample Arrays

```js
import sample from 'samplejs';

// test has 2/5 chance of being picked
// all other elements have a 1/5 chance
var array = ['test', 'another', 'test', 'more', 'element'];
sample(array); //=> 'test' | 'another' | 'more' | 'element'

sample([]); //=> null
```

## Sample Weighted Objects

```js
import sample from 'samplejs';

// key1 has 0.5/4.5 chance of being picked
// key2 has 3/4.5 chance of being picked
// key3 has 1/4.5 chance of being picked
var obj = {
  key1: 0.5,
  key2: 3,
  key3: 1
};
sample(obj); //=> 'key1' | 'key2' | 'key3'

sample({}); //=> null
```
