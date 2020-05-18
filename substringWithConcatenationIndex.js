var findSubstring = (s, words) => {
  let array = perm(words);
  let result = [];
  array.forEach(element => {
    let index = s.indexOf(element);
    if (index > -1) {
      result.push(index);
    }
  });
  return result;
};

function perm(xs) {
  let ret = [];

  for (let i = 0; i < xs.length; i = i + 1) {
    let rest = perm(xs.slice(0, i).concat(xs.slice(i + 1)));

    if (!rest.length) {
      ret.push([xs[i]]);
    } else {
      for (let j = 0; j < rest.length; j = j + 1) {
        let string = [xs[i]] + rest[j];
        if (ret.indexOf(string) == -1) {
          ret.push(string);
        }
      }
    }
  }
  return ret;
}

console.log(findSubstring("foobarfoobar", ["foo", "bar"]));
