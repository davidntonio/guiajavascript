const isPalindrome = (x) => {
    if (x < 0) {
      return false;
    }
  
    let num = x;
    let reverse = 0;
  
    while (x > 0) {
      const digit = x % 10;
      reverse = reverse * 10 + digit;
      x = Math.floor(x / 10);
    }
  
    return num === reverse;
  };