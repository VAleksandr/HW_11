//---1-------------------------------
const arr = [5, 8, 1, 6, 10, 7, 5, 3, 9, 8];

const getFirst_1 = (array, n) => array.slice(0, n);

console.log(getFirst_1(arr, 3));

//---

const getFirst_2 = (array, n) => {
  const array_new = [];
  array.map((item, index) => {
    if (index < n) {
      array_new.push(item);
    }
  });
  
  return array_new;
}

console.log(getFirst_2(arr, 3));

//---2-------------------------------

const getLast_1 = (array, n) => array.slice(array.length - n, array.length + 1);

console.log(getLast_1(arr, 2));

//---

const getLast_2 = (array, n) => {
  const array_new = [];
  array.map((item, index) => {
    if (index > array.length - 1 - n) {
      array_new.push(item);
    }
  });
  
  return array_new;
}

console.log(getLast_2(arr, 2));


//---3-------------------------------

const arrayFilled = (len, value) => {
  const array_new = [];

  for (let i = 0; i < len; i++) {
    array_new.push(value);
  }

  return array_new;
}

console.log(arrayFilled(4, 'mane'));

//---.from---

const arrayFilled_2 = (len, value) => Array.from({length: len}, e => e = value);

console.log(arrayFilled_2(4, '555ff'));

//---4-------------------------------

const generateNumbers = (start, len) => {
  const array = [];

    for (let i = 0; i < len; i++) {
      i === 0 ? array.push(start) : array.push(start + i);
    }

  return array;
}

console.log(generateNumbers(5, 10));

//---5-------------------------------

const str = 'Каждый охотник желает знать, где сидит фазан.';
const arr0 = str.split(' ');

const result = arr0.map(item => item = item[0]);

console.log(result);
