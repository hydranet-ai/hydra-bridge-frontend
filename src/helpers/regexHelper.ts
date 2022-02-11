export const getOnlyNumbersAndDecimalNumbersRegex = () =>
  new RegExp(/^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)$/);
