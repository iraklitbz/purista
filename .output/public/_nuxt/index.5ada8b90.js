import{T as $,m as C,q as G,s as X,v as H,x as j,y as S,K as a,O as y,L as Z,z as M}from"./entry.924b29e5.js";function ee(t){return typeof t=="object"&&t!==null}function te(t,e){if(!!!t)throw new Error(e??"Unexpected invariant triggered.")}const ne=/\r\n|[\n\r]/g;function R(t,e){let n=0,i=1;for(const s of t.body.matchAll(ne)){if(typeof s.index=="number"||te(!1),s.index>=e)break;n=s.index+s[0].length,i+=1}return{line:i,column:e+1-n}}function se(t){return K(t.source,R(t.source,t.start))}function K(t,e){const n=t.locationOffset.column-1,i="".padStart(n)+t.body,s=e.line-1,r=t.locationOffset.line-1,c=e.line+r,h=e.line===1?n:0,l=e.column+h,E=`${t.name}:${c}:${l}
`,p=i.split(/\r\n|[\n\r]/g),x=p[s];if(x.length>120){const m=Math.floor(l/80),D=l%80,f=[];for(let T=0;T<x.length;T+=80)f.push(x.slice(T,T+80));return E+B([[`${c} |`,f[0]],...f.slice(1,m+1).map(T=>["|",T]),["|","^".padStart(D)],["|",f[m+1]]])}return E+B([[`${c-1} |`,p[s-1]],[`${c} |`,x],["|","^".padStart(l)],[`${c+1} |`,p[s+1]]])}function B(t){const e=t.filter(([i,s])=>s!==void 0),n=Math.max(...e.map(([i])=>i.length));return e.map(([i,s])=>i.padStart(n)+(s?" "+s:"")).join(`
`)}function ie(t){const e=t[0];return e==null||"kind"in e||"length"in e?{nodes:e,source:t[1],positions:t[2],path:t[3],originalError:t[4],extensions:t[5]}:e}class P extends Error{constructor(e,...n){var i,s,r;const{nodes:c,source:h,positions:l,path:E,originalError:p,extensions:x}=ie(n);super(e),this.name="GraphQLError",this.path=E??void 0,this.originalError=p??void 0,this.nodes=U(Array.isArray(c)?c:c?[c]:void 0);const m=U((i=this.nodes)===null||i===void 0?void 0:i.map(f=>f.loc).filter(f=>f!=null));this.source=h??(m==null||(s=m[0])===null||s===void 0?void 0:s.source),this.positions=l??(m==null?void 0:m.map(f=>f.start)),this.locations=l&&h?l.map(f=>R(h,f)):m==null?void 0:m.map(f=>R(f.source,f.start));const D=ee(p==null?void 0:p.extensions)?p==null?void 0:p.extensions:void 0;this.extensions=(r=x??D)!==null&&r!==void 0?r:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),p!=null&&p.stack?Object.defineProperty(this,"stack",{value:p.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,P):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+=`

`+se(n.loc));else if(this.source&&this.locations)for(const n of this.locations)e+=`

`+K(this.source,n);return e}toJSON(){const e={message:this.message};return this.locations!=null&&(e.locations=this.locations),this.path!=null&&(e.path=this.path),this.extensions!=null&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function U(t){return t===void 0||t.length===0?void 0:t}function d(t,e,n){return new P(`Syntax Error: ${n}`,{source:t,positions:[e]})}var w;(function(t){t.QUERY="QUERY",t.MUTATION="MUTATION",t.SUBSCRIPTION="SUBSCRIPTION",t.FIELD="FIELD",t.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",t.FRAGMENT_SPREAD="FRAGMENT_SPREAD",t.INLINE_FRAGMENT="INLINE_FRAGMENT",t.VARIABLE_DEFINITION="VARIABLE_DEFINITION",t.SCHEMA="SCHEMA",t.SCALAR="SCALAR",t.OBJECT="OBJECT",t.FIELD_DEFINITION="FIELD_DEFINITION",t.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",t.INTERFACE="INTERFACE",t.UNION="UNION",t.ENUM="ENUM",t.ENUM_VALUE="ENUM_VALUE",t.INPUT_OBJECT="INPUT_OBJECT",t.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"})(w||(w={}));var o;(function(t){t.SOF="<SOF>",t.EOF="<EOF>",t.BANG="!",t.DOLLAR="$",t.AMP="&",t.PAREN_L="(",t.PAREN_R=")",t.SPREAD="...",t.COLON=":",t.EQUALS="=",t.AT="@",t.BRACKET_L="[",t.BRACKET_R="]",t.BRACE_L="{",t.PIPE="|",t.BRACE_R="}",t.NAME="Name",t.INT="Int",t.FLOAT="Float",t.STRING="String",t.BLOCK_STRING="BlockString",t.COMMENT="Comment"})(o||(o={}));class re{constructor(e){const n=new $(o.SOF,0,0,0,0);this.source=e,this.lastToken=n,this.token=n,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){return this.lastToken=this.token,this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==o.EOF)do if(e.next)e=e.next;else{const n=ae(this,e.end);e.next=n,n.prev=e,e=n}while(e.kind===o.COMMENT);return e}}function oe(t){return t===o.BANG||t===o.DOLLAR||t===o.AMP||t===o.PAREN_L||t===o.PAREN_R||t===o.SPREAD||t===o.COLON||t===o.EQUALS||t===o.AT||t===o.BRACKET_L||t===o.BRACKET_R||t===o.BRACE_L||t===o.PIPE||t===o.BRACE_R}function A(t){return t>=0&&t<=55295||t>=57344&&t<=1114111}function b(t,e){return Y(t.charCodeAt(e))&&q(t.charCodeAt(e+1))}function Y(t){return t>=55296&&t<=56319}function q(t){return t>=56320&&t<=57343}function N(t,e){const n=t.source.body.codePointAt(e);if(n===void 0)return o.EOF;if(n>=32&&n<=126){const i=String.fromCodePoint(n);return i==='"'?`'"'`:`"${i}"`}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function u(t,e,n,i,s){const r=t.line,c=1+n-t.lineStart;return new $(e,n,i,r,c,s)}function ae(t,e){const n=t.source.body,i=n.length;let s=e;for(;s<i;){const r=n.charCodeAt(s);switch(r){case 65279:case 9:case 32:case 44:++s;continue;case 10:++s,++t.line,t.lineStart=s;continue;case 13:n.charCodeAt(s+1)===10?s+=2:++s,++t.line,t.lineStart=s;continue;case 35:return ce(t,s);case 33:return u(t,o.BANG,s,s+1);case 36:return u(t,o.DOLLAR,s,s+1);case 38:return u(t,o.AMP,s,s+1);case 40:return u(t,o.PAREN_L,s,s+1);case 41:return u(t,o.PAREN_R,s,s+1);case 46:if(n.charCodeAt(s+1)===46&&n.charCodeAt(s+2)===46)return u(t,o.SPREAD,s,s+3);break;case 58:return u(t,o.COLON,s,s+1);case 61:return u(t,o.EQUALS,s,s+1);case 64:return u(t,o.AT,s,s+1);case 91:return u(t,o.BRACKET_L,s,s+1);case 93:return u(t,o.BRACKET_R,s,s+1);case 123:return u(t,o.BRACE_L,s,s+1);case 124:return u(t,o.PIPE,s,s+1);case 125:return u(t,o.BRACE_R,s,s+1);case 34:return n.charCodeAt(s+1)===34&&n.charCodeAt(s+2)===34?fe(t,s):ue(t,s)}if(C(r)||r===45)return he(t,s,r);if(G(r))return Ee(t,s);throw d(t.source,s,r===39?`Unexpected single quote character ('), did you mean to use a double quote (")?`:A(r)||b(n,s)?`Unexpected character: ${N(t,s)}.`:`Invalid character: ${N(t,s)}.`)}return u(t,o.EOF,i,i)}function ce(t,e){const n=t.source.body,i=n.length;let s=e+1;for(;s<i;){const r=n.charCodeAt(s);if(r===10||r===13)break;if(A(r))++s;else if(b(n,s))s+=2;else break}return u(t,o.COMMENT,e,s,n.slice(e+1,s))}function he(t,e,n){const i=t.source.body;let s=e,r=n,c=!1;if(r===45&&(r=i.charCodeAt(++s)),r===48){if(r=i.charCodeAt(++s),C(r))throw d(t.source,s,`Invalid number, unexpected digit after 0: ${N(t,s)}.`)}else s=L(t,s,r),r=i.charCodeAt(s);if(r===46&&(c=!0,r=i.charCodeAt(++s),s=L(t,s,r),r=i.charCodeAt(s)),(r===69||r===101)&&(c=!0,r=i.charCodeAt(++s),(r===43||r===45)&&(r=i.charCodeAt(++s)),s=L(t,s,r),r=i.charCodeAt(s)),r===46||G(r))throw d(t.source,s,`Invalid number, expected digit but got: ${N(t,s)}.`);return u(t,c?o.FLOAT:o.INT,e,s,i.slice(e,s))}function L(t,e,n){if(!C(n))throw d(t.source,e,`Invalid number, expected digit but got: ${N(t,e)}.`);const i=t.source.body;let s=e+1;for(;C(i.charCodeAt(s));)++s;return s}function ue(t,e){const n=t.source.body,i=n.length;let s=e+1,r=s,c="";for(;s<i;){const h=n.charCodeAt(s);if(h===34)return c+=n.slice(r,s),u(t,o.STRING,e,s+1,c);if(h===92){c+=n.slice(r,s);const l=n.charCodeAt(s+1)===117?n.charCodeAt(s+2)===123?pe(t,s):le(t,s):de(t,s);c+=l.value,s+=l.size,r=s;continue}if(h===10||h===13)break;if(A(h))++s;else if(b(n,s))s+=2;else throw d(t.source,s,`Invalid character within String: ${N(t,s)}.`)}throw d(t.source,s,"Unterminated string.")}function pe(t,e){const n=t.source.body;let i=0,s=3;for(;s<12;){const r=n.charCodeAt(e+s++);if(r===125){if(s<5||!A(i))break;return{value:String.fromCodePoint(i),size:s}}if(i=i<<4|k(r),i<0)break}throw d(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+s)}".`)}function le(t,e){const n=t.source.body,i=V(n,e+2);if(A(i))return{value:String.fromCodePoint(i),size:6};if(Y(i)&&n.charCodeAt(e+6)===92&&n.charCodeAt(e+7)===117){const s=V(n,e+8);if(q(s))return{value:String.fromCodePoint(i,s),size:12}}throw d(t.source,e,`Invalid Unicode escape sequence: "${n.slice(e,e+6)}".`)}function V(t,e){return k(t.charCodeAt(e))<<12|k(t.charCodeAt(e+1))<<8|k(t.charCodeAt(e+2))<<4|k(t.charCodeAt(e+3))}function k(t){return t>=48&&t<=57?t-48:t>=65&&t<=70?t-55:t>=97&&t<=102?t-87:-1}function de(t,e){const n=t.source.body;switch(n.charCodeAt(e+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:`
`,size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw d(t.source,e,`Invalid character escape sequence: "${n.slice(e,e+2)}".`)}function fe(t,e){const n=t.source.body,i=n.length;let s=t.lineStart,r=e+3,c=r,h="";const l=[];for(;r<i;){const E=n.charCodeAt(r);if(E===34&&n.charCodeAt(r+1)===34&&n.charCodeAt(r+2)===34){h+=n.slice(c,r),l.push(h);const p=u(t,o.BLOCK_STRING,e,r+3,X(l).join(`
`));return t.line+=l.length-1,t.lineStart=s,p}if(E===92&&n.charCodeAt(r+1)===34&&n.charCodeAt(r+2)===34&&n.charCodeAt(r+3)===34){h+=n.slice(c,r),c=r+1,r+=4;continue}if(E===10||E===13){h+=n.slice(c,r),l.push(h),E===13&&n.charCodeAt(r+1)===10?r+=2:++r,h="",c=r,s=r;continue}if(A(E))++r;else if(b(n,r))r+=2;else throw d(t.source,r,`Invalid character within String: ${N(t,r)}.`)}throw d(t.source,r,"Unterminated string.")}function Ee(t,e){const n=t.source.body,i=n.length;let s=e+1;for(;s<i;){const r=n.charCodeAt(s);if(H(r))++s;else break}return u(t,o.NAME,e,s,n.slice(e,s))}const me=globalThis.process?function(e,n){return e instanceof n}:function(e,n){if(e instanceof n)return!0;if(typeof e=="object"&&e!==null){var i;const s=n.prototype[Symbol.toStringTag],r=Symbol.toStringTag in e?e[Symbol.toStringTag]:(i=e.constructor)===null||i===void 0?void 0:i.name;if(s===r){const c=j(e);throw new Error(`Cannot use ${s} "${c}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};class z{constructor(e,n="GraphQL request",i={line:1,column:1}){typeof e=="string"||S(!1,`Body must be a string. Received: ${j(e)}.`),this.body=e,this.name=n,this.locationOffset=i,this.locationOffset.line>0||S(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||S(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}function xe(t){return me(t,z)}function Ne(t,e){return new Te(t,e).parseDocument()}class Te{constructor(e,n={}){const i=xe(e)?e:new z(e);this._lexer=new re(i),this._options=n,this._tokenCounter=0}parseName(){const e=this.expectToken(o.NAME);return this.node(e,{kind:a.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:a.DOCUMENT,definitions:this.many(o.SOF,this.parseDefinition,o.EOF)})}parseDefinition(){if(this.peek(o.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),n=e?this._lexer.lookahead():this._lexer.token;if(n.kind===o.NAME){switch(n.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw d(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(n.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(n)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(o.BRACE_L))return this.node(e,{kind:a.OPERATION_DEFINITION,operation:y.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const n=this.parseOperationType();let i;return this.peek(o.NAME)&&(i=this.parseName()),this.node(e,{kind:a.OPERATION_DEFINITION,operation:n,name:i,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(o.NAME);switch(e.value){case"query":return y.QUERY;case"mutation":return y.MUTATION;case"subscription":return y.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(o.PAREN_L,this.parseVariableDefinition,o.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:a.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(o.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(o.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(o.DOLLAR),this.node(e,{kind:a.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:a.SELECTION_SET,selections:this.many(o.BRACE_L,this.parseSelection,o.BRACE_R)})}parseSelection(){return this.peek(o.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,n=this.parseName();let i,s;return this.expectOptionalToken(o.COLON)?(i=n,s=this.parseName()):s=n,this.node(e,{kind:a.FIELD,alias:i,name:s,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(o.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const n=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(o.PAREN_L,n,o.PAREN_R)}parseArgument(e=!1){const n=this._lexer.token,i=this.parseName();return this.expectToken(o.COLON),this.node(n,{kind:a.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(o.SPREAD);const n=this.expectOptionalKeyword("on");return!n&&this.peek(o.NAME)?this.node(e,{kind:a.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:a.INLINE_FRAGMENT,typeCondition:n?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),this._options.allowLegacyFragmentVariables===!0?this.node(e,{kind:a.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:a.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if(this._lexer.token.value==="on")throw this.unexpected();return this.parseName()}parseValueLiteral(e){const n=this._lexer.token;switch(n.kind){case o.BRACKET_L:return this.parseList(e);case o.BRACE_L:return this.parseObject(e);case o.INT:return this.advanceLexer(),this.node(n,{kind:a.INT,value:n.value});case o.FLOAT:return this.advanceLexer(),this.node(n,{kind:a.FLOAT,value:n.value});case o.STRING:case o.BLOCK_STRING:return this.parseStringLiteral();case o.NAME:switch(this.advanceLexer(),n.value){case"true":return this.node(n,{kind:a.BOOLEAN,value:!0});case"false":return this.node(n,{kind:a.BOOLEAN,value:!1});case"null":return this.node(n,{kind:a.NULL});default:return this.node(n,{kind:a.ENUM,value:n.value})}case o.DOLLAR:if(e)if(this.expectToken(o.DOLLAR),this._lexer.token.kind===o.NAME){const i=this._lexer.token.value;throw d(this._lexer.source,n.start,`Unexpected variable "$${i}" in constant value.`)}else throw this.unexpected(n);return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:a.STRING,value:e.value,block:e.kind===o.BLOCK_STRING})}parseList(e){const n=()=>this.parseValueLiteral(e);return this.node(this._lexer.token,{kind:a.LIST,values:this.any(o.BRACKET_L,n,o.BRACKET_R)})}parseObject(e){const n=()=>this.parseObjectField(e);return this.node(this._lexer.token,{kind:a.OBJECT,fields:this.any(o.BRACE_L,n,o.BRACE_R)})}parseObjectField(e){const n=this._lexer.token,i=this.parseName();return this.expectToken(o.COLON),this.node(n,{kind:a.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}parseDirectives(e){const n=[];for(;this.peek(o.AT);)n.push(this.parseDirective(e));return n}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const n=this._lexer.token;return this.expectToken(o.AT),this.node(n,{kind:a.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let n;if(this.expectOptionalToken(o.BRACKET_L)){const i=this.parseTypeReference();this.expectToken(o.BRACKET_R),n=this.node(e,{kind:a.LIST_TYPE,type:i})}else n=this.parseNamedType();return this.expectOptionalToken(o.BANG)?this.node(e,{kind:a.NON_NULL_TYPE,type:n}):n}parseNamedType(){return this.node(this._lexer.token,{kind:a.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(o.STRING)||this.peek(o.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("schema");const i=this.parseConstDirectives(),s=this.many(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);return this.node(e,{kind:a.SCHEMA_DEFINITION,description:n,directives:i,operationTypes:s})}parseOperationTypeDefinition(){const e=this._lexer.token,n=this.parseOperationType();this.expectToken(o.COLON);const i=this.parseNamedType();return this.node(e,{kind:a.OPERATION_TYPE_DEFINITION,operation:n,type:i})}parseScalarTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("scalar");const i=this.parseName(),s=this.parseConstDirectives();return this.node(e,{kind:a.SCALAR_TYPE_DEFINITION,description:n,name:i,directives:s})}parseObjectTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("type");const i=this.parseName(),s=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(e,{kind:a.OBJECT_TYPE_DEFINITION,description:n,name:i,interfaces:s,directives:r,fields:c})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(o.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseFieldDefinition,o.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,n=this.parseDescription(),i=this.parseName(),s=this.parseArgumentDefs();this.expectToken(o.COLON);const r=this.parseTypeReference(),c=this.parseConstDirectives();return this.node(e,{kind:a.FIELD_DEFINITION,description:n,name:i,arguments:s,type:r,directives:c})}parseArgumentDefs(){return this.optionalMany(o.PAREN_L,this.parseInputValueDef,o.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,n=this.parseDescription(),i=this.parseName();this.expectToken(o.COLON);const s=this.parseTypeReference();let r;this.expectOptionalToken(o.EQUALS)&&(r=this.parseConstValueLiteral());const c=this.parseConstDirectives();return this.node(e,{kind:a.INPUT_VALUE_DEFINITION,description:n,name:i,type:s,defaultValue:r,directives:c})}parseInterfaceTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("interface");const i=this.parseName(),s=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),c=this.parseFieldsDefinition();return this.node(e,{kind:a.INTERFACE_TYPE_DEFINITION,description:n,name:i,interfaces:s,directives:r,fields:c})}parseUnionTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("union");const i=this.parseName(),s=this.parseConstDirectives(),r=this.parseUnionMemberTypes();return this.node(e,{kind:a.UNION_TYPE_DEFINITION,description:n,name:i,directives:s,types:r})}parseUnionMemberTypes(){return this.expectOptionalToken(o.EQUALS)?this.delimitedMany(o.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("enum");const i=this.parseName(),s=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();return this.node(e,{kind:a.ENUM_TYPE_DEFINITION,description:n,name:i,directives:s,values:r})}parseEnumValuesDefinition(){return this.optionalMany(o.BRACE_L,this.parseEnumValueDefinition,o.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,n=this.parseDescription(),i=this.parseEnumValueName(),s=this.parseConstDirectives();return this.node(e,{kind:a.ENUM_VALUE_DEFINITION,description:n,name:i,directives:s})}parseEnumValueName(){if(this._lexer.token.value==="true"||this._lexer.token.value==="false"||this._lexer.token.value==="null")throw d(this._lexer.source,this._lexer.token.start,`${O(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("input");const i=this.parseName(),s=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();return this.node(e,{kind:a.INPUT_OBJECT_TYPE_DEFINITION,description:n,name:i,directives:s,fields:r})}parseInputFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseInputValueDef,o.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===o.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const n=this.parseConstDirectives(),i=this.optionalMany(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);if(n.length===0&&i.length===0)throw this.unexpected();return this.node(e,{kind:a.SCHEMA_EXTENSION,directives:n,operationTypes:i})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const n=this.parseName(),i=this.parseConstDirectives();if(i.length===0)throw this.unexpected();return this.node(e,{kind:a.SCALAR_TYPE_EXTENSION,name:n,directives:i})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const n=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(i.length===0&&s.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:a.OBJECT_TYPE_EXTENSION,name:n,interfaces:i,directives:s,fields:r})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const n=this.parseName(),i=this.parseImplementsInterfaces(),s=this.parseConstDirectives(),r=this.parseFieldsDefinition();if(i.length===0&&s.length===0&&r.length===0)throw this.unexpected();return this.node(e,{kind:a.INTERFACE_TYPE_EXTENSION,name:n,interfaces:i,directives:s,fields:r})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const n=this.parseName(),i=this.parseConstDirectives(),s=this.parseUnionMemberTypes();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:a.UNION_TYPE_EXTENSION,name:n,directives:i,types:s})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const n=this.parseName(),i=this.parseConstDirectives(),s=this.parseEnumValuesDefinition();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:a.ENUM_TYPE_EXTENSION,name:n,directives:i,values:s})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const n=this.parseName(),i=this.parseConstDirectives(),s=this.parseInputFieldsDefinition();if(i.length===0&&s.length===0)throw this.unexpected();return this.node(e,{kind:a.INPUT_OBJECT_TYPE_EXTENSION,name:n,directives:i,fields:s})}parseDirectiveDefinition(){const e=this._lexer.token,n=this.parseDescription();this.expectKeyword("directive"),this.expectToken(o.AT);const i=this.parseName(),s=this.parseArgumentDefs(),r=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const c=this.parseDirectiveLocations();return this.node(e,{kind:a.DIRECTIVE_DEFINITION,description:n,name:i,arguments:s,repeatable:r,locations:c})}parseDirectiveLocations(){return this.delimitedMany(o.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,n=this.parseName();if(Object.prototype.hasOwnProperty.call(w,n.value))return n;throw this.unexpected(e)}node(e,n){return this._options.noLocation!==!0&&(n.loc=new Z(e,this._lexer.lastToken,this._lexer.source)),n}peek(e){return this._lexer.token.kind===e}expectToken(e){const n=this._lexer.token;if(n.kind===e)return this.advanceLexer(),n;throw d(this._lexer.source,n.start,`Expected ${Q(e)}, found ${O(n)}.`)}expectOptionalToken(e){return this._lexer.token.kind===e?(this.advanceLexer(),!0):!1}expectKeyword(e){const n=this._lexer.token;if(n.kind===o.NAME&&n.value===e)this.advanceLexer();else throw d(this._lexer.source,n.start,`Expected "${e}", found ${O(n)}.`)}expectOptionalKeyword(e){const n=this._lexer.token;return n.kind===o.NAME&&n.value===e?(this.advanceLexer(),!0):!1}unexpected(e){const n=e??this._lexer.token;return d(this._lexer.source,n.start,`Unexpected ${O(n)}.`)}any(e,n,i){this.expectToken(e);const s=[];for(;!this.expectOptionalToken(i);)s.push(n.call(this));return s}optionalMany(e,n,i){if(this.expectOptionalToken(e)){const s=[];do s.push(n.call(this));while(!this.expectOptionalToken(i));return s}return[]}many(e,n,i){this.expectToken(e);const s=[];do s.push(n.call(this));while(!this.expectOptionalToken(i));return s}delimitedMany(e,n){this.expectOptionalToken(e);const i=[];do i.push(n.call(this));while(this.expectOptionalToken(e));return i}advanceLexer(){const{maxTokens:e}=this._options,n=this._lexer.advance();if(e!==void 0&&n.kind!==o.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw d(this._lexer.source,n.start,`Document contains more that ${e} tokens. Parsing aborted.`)}}function O(t){const e=t.value;return Q(t.kind)+(e!=null?` "${e}"`:"")}function Q(t){return oe(t)?`"${t}"`:t}var v=new Map,F=new Map,J=!0,g=!1;function W(t){return t.replace(/[\s,]+/g," ").trim()}function Ae(t){return W(t.source.body.substring(t.start,t.end))}function Ie(t){var e=new Set,n=[];return t.definitions.forEach(function(i){if(i.kind==="FragmentDefinition"){var s=i.name.value,r=Ae(i.loc),c=F.get(s);c&&!c.has(r)?J&&console.warn("Warning: fragment with name "+s+` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`):c||F.set(s,c=new Set),c.add(r),e.has(r)||(e.add(r),n.push(i))}else n.push(i)}),M(M({},t),{definitions:n})}function ke(t){var e=new Set(t.definitions);e.forEach(function(i){i.loc&&delete i.loc,Object.keys(i).forEach(function(s){var r=i[s];r&&typeof r=="object"&&e.add(r)})});var n=t.loc;return n&&(delete n.startToken,delete n.endToken),t}function _e(t){var e=W(t);if(!v.has(e)){var n=Ne(t,{experimentalFragmentVariables:g,allowLegacyFragmentVariables:g});if(!n||n.kind!=="Document")throw new Error("Not a valid GraphQL document.");v.set(e,ke(Ie(n)))}return v.get(e)}function _(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];typeof t=="string"&&(t=[t]);var i=t[0];return e.forEach(function(s,r){s&&s.kind==="Document"?i+=s.loc.source.body:i+=s,i+=t[r+1]}),_e(i)}function ye(){v.clear(),F.clear()}function Oe(){J=!1}function ve(){g=!0}function Ce(){g=!1}var I={gql:_,resetCaches:ye,disableFragmentWarnings:Oe,enableExperimentalFragmentVariables:ve,disableExperimentalFragmentVariables:Ce};(function(t){t.gql=I.gql,t.resetCaches=I.resetCaches,t.disableFragmentWarnings=I.disableFragmentWarnings,t.enableExperimentalFragmentVariables=I.enableExperimentalFragmentVariables,t.disableExperimentalFragmentVariables=I.disableExperimentalFragmentVariables})(_||(_={}));_.default=_;export{_ as g};
