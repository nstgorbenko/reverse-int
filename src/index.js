module.exports = function reverse (n) {
    const stringNumber = String(Math.abs(n));
    let reverseString = '';
  
    for (let i = stringNumber.length - 1; i >= 0; i--) {
      reverseString += stringNumber[i];
    }
  
    return Number(reverseString);
}
