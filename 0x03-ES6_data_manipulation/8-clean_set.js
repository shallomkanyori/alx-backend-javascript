export default function cleanSet(set, startString) {
  const res = [];
  if (startString) {
    set.forEach((el) => {
      if (el.startsWith(startString)) {
        res.push(el.replace(startString, ''));
      }
    });
  }

  return res.join('-');
}
