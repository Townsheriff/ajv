(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{375:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"execution-environments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#execution-environments"}},[t._v("#")]),t._v(" Execution environments")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#server-side-node-js"}},[t._v("Server-side Node.js")])]),s("li",[s("a",{attrs:{href:"#short-lived-environments"}},[t._v("Short-lived environments")])]),s("li",[s("a",{attrs:{href:"#browsers"}},[t._v("Browsers")])]),s("li",[s("a",{attrs:{href:"#es5-environments"}},[t._v("ES5 environments")])]),s("li",[s("a",{attrs:{href:"#other-javascript-environments"}},[t._v("Other JavaScript environments")])]),s("li",[s("a",{attrs:{href:"#command-line-interface"}},[t._v("Command line interface")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"server-side-node-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-side-node-js"}},[t._v("#")]),t._v(" Server-side Node.js")]),t._v(" "),s("p",[t._v("The main consideration for using Ajv server-side is to "),s("a",{attrs:{href:"./managing-schemas"}},[t._v("manage compiled schemas")]),t._v(" correctly, ensuring that the same schema is not compiled more than once.")]),t._v(" "),s("h2",{attrs:{id:"short-lived-environments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#short-lived-environments"}},[t._v("#")]),t._v(" Short-lived environments")]),t._v(" "),s("p",[t._v('Depending on the life-time of the environments, the benefits from "compile once - validate many times" model can be limited - you can consider using '),s("a",{attrs:{href:"../standalone"}},[t._v("standalone validation code")]),t._v(".")]),t._v(" "),s("p",[t._v("If you have a pre-defined set of schemas, you can:")]),t._v(" "),s("ol",[s("li",[t._v("compile all schemas in the build step - you can either write your own script or use "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-cli"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("li",[t._v("generate and beautify standalone validation code - you can have all your schemas exported from one file.")]),t._v(" "),s("li",[t._v("additionally, you can inline all dependencies on Ajv or ajv-formats using any bundling tools.")]),t._v(" "),s("li",[t._v("deploy compiled schemas as part of your application or library (with or without dependency on Ajv, depending on whether you did step 3 and which validation keywords are used in the schemas)")])]),t._v(" "),s("p",[t._v("Please see "),s("a",{attrs:{href:"https://github.com/gajus/table",target:"_blank",rel:"noopener noreferrer"}},[t._v("gajus/table"),s("OutboundLink")],1),t._v(" package that pre-compiles schemas in this way.")]),t._v(" "),s("p",[t._v("Even if your schemas need to be stored in the database, you can still compile schemas once and store your validation functions alongside schemas in the database as well, loading them on demand.")]),t._v(" "),s("h2",{attrs:{id:"browsers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#browsers"}},[t._v("#")]),t._v(" Browsers")]),t._v(" "),s("p",[t._v("See "),s("RouterLink",{attrs:{to:"/security.html#content-security-policy"}},[t._v("Content Security Policy")]),t._v(" to decide how best to use Ajv in the browser for your use case.")],1),t._v(" "),s("p",[t._v("Whether you compile schemas in the browser or use "),s("a",{attrs:{href:"../standalone"}},[t._v("standalone validation code")]),t._v(", it is recommended that you bundle them together with your application code.")]),t._v(" "),s("p",[t._v("If you need to use Ajv in several application bundles you can create a separate UMD bundles of Ajv using "),s("code",[t._v("npm run bundle")]),t._v(" script.")]),t._v(" "),s("p",[t._v("In this case you need to load Ajv using the correct bundle, depending on which schema language and which version you need to use:")]),t._v(" "),s("code-group",[s("code-block",{attrs:{title:"JSON Schema (draft-07)"}},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bundle/ajv7.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Ajv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ajv7"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("code-block",{attrs:{title:"JSON Schema (draft-2019-09)"}},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bundle/ajv2019.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Ajv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ajv2019"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])]),t._v(" "),s("code-block",{attrs:{title:"JSON Type Definition"}},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("bundle/ajvJTD.min.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}},[s("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" Ajv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ajvJTD"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("default\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],1),t._v(" "),s("p",[t._v("This bundle can be used with different module systems; it creates global "),s("code",[t._v("ajv")]),t._v("/"),s("code",[t._v("ajv2019")]),t._v("/"),s("code",[t._v("ajvJTD")]),t._v(" if no module system is found.")]),t._v(" "),s("p",[t._v("The browser bundles are available on "),s("a",{attrs:{href:"https://cdnjs.com/libraries/ajv",target:"_blank",rel:"noopener noreferrer"}},[t._v("cdnjs"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"custom-block-title"},[t._v("Please note")]),t._v(" "),s("p",[t._v("Some frameworks, e.g. Dojo, may redefine global require in a way that is not compatible with CommonJS module format. In this case Ajv bundle has to be loaded before the framework and then you can use global "),s("code",[t._v("ajv")]),t._v(" (see issue "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv/issues/234",target:"_blank",rel:"noopener noreferrer"}},[t._v("#234"),s("OutboundLink")],1),t._v(").")])]),t._v(" "),s("h2",{attrs:{id:"es5-environments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es5-environments"}},[t._v("#")]),t._v(" ES5 environments")]),t._v(" "),s("p",[t._v("You need to:")]),t._v(" "),s("ul",[s("li",[t._v("recompile Typescript to ES5 target - it is set to 2018 in the bundled compiled code.")]),t._v(" "),s("li",[t._v("generate ES5 validation code:")])]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ajv "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Ajv")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("code"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("es5"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("See "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv/blob/master/docs/api.md#advanced-options",target:"_blank",rel:"noopener noreferrer"}},[t._v("Advanced options"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"other-javascript-environments"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#other-javascript-environments"}},[t._v("#")]),t._v(" Other JavaScript environments")]),t._v(" "),s("p",[t._v("Ajv is used in other JavaScript environments, including Electron apps, WeChat mini-apps and many others, where the same considerations apply as above:")]),t._v(" "),s("ul",[s("li",[t._v("compilation performance")]),t._v(" "),s("li",[t._v("restrictive content security policy")]),t._v(" "),s("li",[t._v("bundle size")])]),t._v(" "),s("p",[t._v("If any of this is important, you may have better results with pre-compiled "),s("a",{attrs:{href:"../standalone"}},[t._v("standalone validation code")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"command-line-interface"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#command-line-interface"}},[t._v("#")]),t._v(" Command line interface")]),t._v(" "),s("p",[t._v("Ajv can be used from the terminal in any operating system supported by Node.js")]),t._v(" "),s("p",[t._v("CLI is available as a separate npm package "),s("a",{attrs:{href:"https://github.com/ajv-validator/ajv-cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("ajv-cli"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("It supports:")]),t._v(" "),s("ul",[s("li",[t._v("compiling JSON Schemas to test their validity")]),t._v(" "),s("li",[t._v("generating "),s("RouterLink",{attrs:{to:"/guide/docs/standalone.html"}},[t._v("standalone validation code")]),t._v(" that exports validation function(s)")],1),t._v(" "),s("li",[t._v("migrating schemas to draft-07 and draft-2019-09 (using "),s("a",{attrs:{href:"https://github.com/epoberezkin/json-schema-migrate",target:"_blank",rel:"noopener noreferrer"}},[t._v("json-schema-migrate"),s("OutboundLink")],1),t._v(")")]),t._v(" "),s("li",[t._v("validating data file(s) against JSON Schema")]),t._v(" "),s("li",[t._v("testing expected validity of data against JSON Schema")]),t._v(" "),s("li",[t._v("referenced schemas")]),t._v(" "),s("li",[t._v("user-defined meta-schemas, validation keywords and formats")]),t._v(" "),s("li",[t._v("files in JSON, JSON5, YAML, and JavaScript format")]),t._v(" "),s("li",[t._v("all Ajv options")]),t._v(" "),s("li",[t._v("reporting changes in data after validation in "),s("a",{attrs:{href:"https://datatracker.ietf.org/doc/rfc6902/",target:"_blank",rel:"noopener noreferrer"}},[t._v("JSON-patch"),s("OutboundLink")],1),t._v(" format")])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);