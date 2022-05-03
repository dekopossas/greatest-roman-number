const findNumber = (text) => {
  const arrayText = text.split('');
  // console.log('texto: ', arrayText);
  const finalArray = [];
  const indexArray = [];
  const numberArray = [];
  const obj = {
    number: '',
    value: '',
  };

  arrayText.forEach((letter, index) => {
    if (
      letter === 'I' ||
      letter === 'V' ||
      letter === 'X' ||
      letter === 'L' ||
      letter === 'C' ||
      letter === 'D' ||
      letter === 'M'
    ) {
      indexArray.push(index);
    }
  });
  // console.log('indexArray: ', indexArray);

  for (i = 0; i < indexArray.length; i++) {
    if (indexArray[i] === indexArray[i - 1] + 1) {
      finalArray.push(arrayText[indexArray[i - 1]] + arrayText[indexArray[i]]);
    } else {
      finalArray.push(arrayText[indexArray[i]]);
    }
  }

  finalArray.forEach((number) => {
    let sum = 0;
    number.split('').forEach((n) => {
      if (n === 'I') {
        sum += 1;
      } else if (n === 'V') {
        sum += 5;
      } else if (n === 'X') {
        sum += 10;
      } else if (n === 'L') {
        sum += 50;
      } else if (n === 'C') {
        sum += 100;
      } else if (n === 'D') {
        sum += 500;
      } else if (n === 'M') {
        sum += 1000;
      }
    });
    numberArray.push(sum);
  });

  const arr = numberArray.map(Number);
  const maior = Math.max.apply(null, arr);
  const indexOfMaxValue = arr.indexOf(maior);

  obj.number = finalArray[indexOfMaxValue];
  obj.value = numberArray[indexOfMaxValue];

  return obj;
};

console.log(findNumber('AXXBLXQ'));
