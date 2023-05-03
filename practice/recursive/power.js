function power(num, exponent) {
  if (exponent < 1) {
    return 1;
  }
  return num * power(num, exponent - 1);
}
