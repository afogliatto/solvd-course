const math = require("./modules/math")
const String = new math.Operations()

console.log(
  String.add(
    '39870000000000000000000000000000000000',
    '3987000000000000000000000000000000000',
  ),
);
console.log(String.subs('30000000000000000000000000000000000', '2'));
console.log(String.mult('30000000000000000000000000000000000000', '50000000000000000000000000000000000000000'));
console.log(String.div('39870000000000000000000000000000000000', '40000000000000000000'));
