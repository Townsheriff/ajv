import {CodeKeywordDefinition} from "../../types"
import KeywordCxt from "../../compile/context"
import {_, str, operators} from "../../compile/codegen"

const def: CodeKeywordDefinition = {
  keyword: ["maxProperties", "minProperties"],
  type: "object",
  schemaType: "number",
  $data: true,
  code(cxt: KeywordCxt) {
    const {keyword, data, schemaCode} = cxt
    const op = keyword === "maxProperties" ? operators.GT : operators.LT
    cxt.fail$data(_`Object.keys(${data}).length ${op} ${schemaCode}`)
  },
  error: {
    message({keyword, schemaCode}) {
      const comp = keyword === "maxProperties" ? "more" : "fewer"
      return str`should NOT have ${comp} than ${schemaCode} items`
    },
    params: ({schemaCode}) => _`{limit: ${schemaCode}}`,
  },
}

module.exports = def