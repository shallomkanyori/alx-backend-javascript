export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const arr = new Int8Array(buff);

  if (position >= length || position < 0) {
    throw RangeError('Position outside range');
  }

  arr[position] = value;

  return new DataView(buff);
}
