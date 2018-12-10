var React = require("react");
var babel = require("@babel/core");
import { transform } from "@babel/core";
import * as babel from "@babel/core";

function pack(componentJsxString, dependencies, variables) {
  babel.transform(componentJsxString, "_", function(err, result) {
    console.log(result); // => { code, map, ast }
  });
}

str = `
<Form action={action}>
<h1>{title}</h1>
<Input name={name} placeholder={name} />
<Button>Submit</Button>
</Form>
`;

pack(str, "", "");
