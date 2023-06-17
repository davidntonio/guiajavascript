const plusOne = (digits) => {
    const n = digits.length;
  
    for (let i = n - 1; i >= 0; i--) {
      if (digits[i] !== 9) {
        digits[i]++;
        return digits;
      } else {
        digits[i] = 0;
      }
    }
  
    // If all digits are 9, add 1 at the beginning
    digits.unshift(1);
    return digits;
  };