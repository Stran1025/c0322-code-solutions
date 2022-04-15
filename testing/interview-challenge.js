function getRangeReport(start, end) {
  var output = {
    total: 0,
    odds: [],
    evens: [],
    range: [],
    average: 0
  };
  for (var i = start; i <= end; i++) {
    output.total += i;
    output.range.push(i);
    if (i % 2) {
      output.odds.push(i);
    } else {
      output.evens.push(i);
    }
  }
  output.average = output.total / output.range.length;
  return output;
}

getRangeReport(1, 10);
