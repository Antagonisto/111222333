function calculateFormula(x, y) {
  var result = 3 + Math.pow((y - 1), 2) / (1 + Math.pow(x, 2) * Math.abs(y - Math.cos(x)));
  return result;
}

window.onload = function() {
  var x = 2;
  var y = 4;
  var calculationResult = calculateFormula(x, y);
  document.getElementById("result").innerHTML = "Результат расчета: " + calculationResult;
};
