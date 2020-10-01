module.exports = function toReadable (number) {

  if (number == 0) {
    return 'zero';
  }

  const oneDigit = (num) => {
    switch (num) {
      case 1:
        return 'one';
      case 2:
        return 'two';
      case 3:
        return 'three';
      case 4:
        return 'four';
      case 5:
        return 'five';
      case 6:
        return 'six';
      case 7:
        return 'seven';
      case 8:
        return 'eight';
      case 9:
        return 'nine';
      default:
        return ' ';
    }
  }

  const upToTwenty = (num) => {
    switch (num) {
      case 10:
        return 'ten';
      case 11:
        return 'eleven';
      case 12:
        return 'twelve';
      case 13:
        return 'thirteen';
      case 14:
        return 'fourteen';
      case 15:
        return 'fifteen';
      case 16:
        return 'sixteen';
      case 17:
        return 'seventeen';
      case 18:
        return 'eighteen';
      case 19:
        return 'nineteen';
    }
  }

  const overTwenty = (num) => {
    switch (num) {
      case 2:
        return 'twenty';
      case 3:
        return 'thirty';
      case 4:
        return 'forty';
      case 5:
        return 'fifty';
      case 6:
        return 'sixty';
      case 7:
        return 'seventy';
      case 8:
        return 'eighty';
      case 9:
        return 'ninety';
    }
  }

  const twoDigits = (num) => {
    if (num < 20) {
      return upToTwenty(num);
    } else {
      return (overTwenty(Math.trunc(num/10)) + ' ' + oneDigit(num%10)).trim();
    }
  }
  
  const threeDigits = (num) => {
    return oneDigit(num) + ' hundred';
  }

 
  if (number < 10) {
    // для однозначных чисел
    return oneDigit(number);
  } else if (number >= 10 && number < 100) {
    // для двухзначных чисел
    return twoDigits(number);
  } else if (number >= 100) {
    // для трехзначных чисел
    if (number%100 == 0) {
      return threeDigits(Math.trunc(number/100));
    } else if (number%100 > 9) {
      return threeDigits(Math.trunc(number/100)) + ' ' + twoDigits(number%100);
    } else if (number%100 < 10) {
      return (threeDigits(Math.trunc(number/100)) + ' ' + oneDigit(number%100)).trim();
    }
  }
}