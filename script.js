// minimum
function min(first, second) {
  if (first < second) {
    return first;
  } else {
    return second;
  }
}

//recursion
function isEven(number) {
  if (number < 0) {
    number = number * (-1);
  }
  if (number == 0) {
    return true;
  } else if (number == 1) {
    return false;
  } else {
    return isEven(number - 2);
  }
}

//char counting
function countChar(string, char) {
  var counter = 0;
  for (i = 0; i < string.length; i++) {
    if (string[i] == char) {
      counter++;
    }
  }

  return counter;
}

var bMinimum = document.getElementById("bMinimum");
var bRecursion = document.getElementById("bRecursion");
var bBeanCounting = document.getElementById("bBeanCounting");

bMinimum.addEventListener(
        "click",
        function(){
          var firstNo = Number(document.getElementById("iMinimumFirst").value);
          var secondNo = Number(document.getElementById("iMinimumSecond").value);

          console.log(min(firstNo,secondNo));
        });

bRecursion.addEventListener(
        "click",
        function(){
          var numberValue = Number(document.getElementById("iRecursion").value);

          console.log(isEven(numberValue));
        });

bBeanCounting.addEventListener(
        "click",
        function(){
          var stringValue = document.getElementById("iString").value;
          var charValue = document.getElementById("iChar").value;

          console.log(countChar(stringValue, charValue));
        });
