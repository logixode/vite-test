const {parse} = require("acorn");
const {transform} = require("es-iife");
const code = 
// require('src/lib/main.js');
`
import foo from "./foo.js";
const main = (value) => return foo(value);
export default main;
`;
const result = transform({
  code,
  parse,
  name: "doFoo",
  resolveGlobal: (name) => {
    if (name === "./foo.js") {
      return "FOO";
    }
  }
})
console.log(result.code);
/* ->
var doFoo = (function () {

const main = (value) => return FOO(value);

return main;
})();
*/