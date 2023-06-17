const romanToInt = (s) => {
    const romanValues = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000]
    ]);
  
    let result = 0;
    let prevValue = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      const current = romanValues.get(s[i]);
      if (current >= prevValue) {
        result += current;
      } else {
        result -= current;
      }
      prevValue = current;
    }
  
    return result;
  };