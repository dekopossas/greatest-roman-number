const groupConsecutive = (arr, textArr) => {
  const result = arr.reduce(
    (res, n) => {
      if (n - res.prev === 1) {
        return {
          prev: n,
          current: [...res.current, n.toString()],
          total: res.total,
        };
      }
      return {
        prev: n,
        current: [n.toString()],
        total: [...res.total, res.current],
      };
    },
    { prev: '', current: [], total: [] },
  );

  const final = [...result.total, result.current];
  const letterArray = [];
  final.forEach((arr) => {
    const newArr = [];
    arr.forEach((number) => {
      newArr.push(textArr[number]);
    });
    letterArray.push(newArr);
  });
  return letterArray.flatMap((n) => n.join(''));
};

const findNumber = (text) => {
  const arrayText = text.split('');
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

  const finalArray = groupConsecutive(indexArray, arrayText);
  // console.log(indexArray);

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
