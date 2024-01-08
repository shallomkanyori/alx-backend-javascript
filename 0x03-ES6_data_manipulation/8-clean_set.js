export default function cleanSet(set, startString) {
  if (!set || !startString) {
    return '';
  }

  if (!(set instanceof Set) || (typeof startString !== 'string')) {
    return '';
  }

  const res = [];
  set.forEach((el) => {
    if (el && el.startsWith(startString)) {
      res.push(el.replace(startString, ''));
    }
  });

  return res.join('-');
}
