"use strict";(self.webpackChunkgfdoc=self.webpackChunkgfdoc||[]).push([[1264],{85114:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var r=t(85893),c=t(11151);const l={title:"\u6b63\u5219\u8868\u8fbe\u5f0f-\u65b9\u6cd5\u4ecb\u7ecd",sidebar_position:1},s=void 0,i={id:"\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-\u65b9\u6cd5\u4ecb\u7ecd",title:"\u6b63\u5219\u8868\u8fbe\u5f0f-\u65b9\u6cd5\u4ecb\u7ecd",description:"\u4ee5\u4e0b\u5e38\u7528\u65b9\u6cd5\u5217\u8868\uff0c\u6587\u6863\u66f4\u65b0\u53ef\u80fd\u6ede\u540e\u4e8e\u4ee3\u7801\u65b0\u7279\u6027\uff0c\u66f4\u591a\u7684\u65b9\u6cd5\u53ca\u793a\u4f8b\u8bf7\u53c2\u8003\u4ee3\u7801\u6587\u6863\uff1a https://pkg.go.dev/github.com/gogf/gf/v2/text/gregex",source:"@site/docs/5-\u7ec4\u4ef6\u5217\u8868/2-\u6587\u672c\u5904\u7406/1-\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/1-\u6b63\u5219\u8868\u8fbe\u5f0f-\u65b9\u6cd5\u4ecb\u7ecd.md",sourceDirName:"5-\u7ec4\u4ef6\u5217\u8868/2-\u6587\u672c\u5904\u7406/1-\u6b63\u5219\u8868\u8fbe\u5f0f-gregex",slug:"/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-\u65b9\u6cd5\u4ecb\u7ecd",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-\u65b9\u6cd5\u4ecb\u7ecd",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f-\u65b9\u6cd5\u4ecb\u7ecd",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u6b63\u5219\u8868\u8fbe\u5f0f-\u57fa\u672c\u4f7f\u7528",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u6587\u672c\u5904\u7406/\u6b63\u5219\u8868\u8fbe\u5f0f-gregex/\u6b63\u5219\u8868\u8fbe\u5f0f-\u57fa\u672c\u4f7f\u7528"},next:{title:"\u7f16\u7801\u89e3\u7801",permalink:"/docs/\u7ec4\u4ef6\u5217\u8868/\u7f16\u7801\u89e3\u7801/"}},a={},d=[{value:"<code>IsMatch/IsMatchString</code>",id:"ismatchismatchstring",level:2},{value:"<code>Match/MatchString</code>",id:"matchmatchstring",level:2},{value:"<code>MatchAll/MatchAllString</code>",id:"matchallmatchallstring",level:2},{value:"<code>Quote</code>",id:"quote",level:2},{value:"<code>           Replace/ReplaceString</code>",id:"-----------replacereplacestring",level:2},{value:"<code>ReplaceFunc/ReplaceStringFunc</code>",id:"replacefuncreplacestringfunc",level:2},{value:"<code>ReplaceFuncMatch/ReplaceStringFuncMatch</code>",id:"replacefuncmatchreplacestringfuncmatch",level:2},{value:"<code>Split</code>",id:"split",level:2},{value:"<code>Validate</code>",id:"validate",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["\u4ee5\u4e0b\u5e38\u7528\u65b9\u6cd5\u5217\u8868\uff0c\u6587\u6863\u66f4\u65b0\u53ef\u80fd\u6ede\u540e\u4e8e\u4ee3\u7801\u65b0\u7279\u6027\uff0c\u66f4\u591a\u7684\u65b9\u6cd5\u53ca\u793a\u4f8b\u8bf7\u53c2\u8003\u4ee3\u7801\u6587\u6863\uff1a ",(0,r.jsx)(n.a,{href:"https://pkg.go.dev/github.com/gogf/gf/v2/text/gregex",children:"https://pkg.go.dev/github.com/gogf/gf/v2/text/gregex"})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["\u5f53\u51fd\u6570\u540d\u4e2d\u6709 ",(0,r.jsx)(n.code,{children:"All"})," \u7684\u65f6\u5019,\u5b83\u4f1a\u7ee7\u7eed\u67e5\u627e\u975e\u91cd\u53e0\u7684\u540e\u7eed\u5e76\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"slice"})]}),"\n",(0,r.jsxs)(n.p,{children:["\u5f53\u51fd\u6570\u540d\u4e2d\u6709 ",(0,r.jsx)(n.code,{children:"String"})," \u7684\u65f6\u5019,\u53c2\u6570\u53ca\u8fd4\u56de\u503c\u90fd\u662f ",(0,r.jsx)(n.code,{children:"string"}),"\uff0c\u5426\u5219\u4e3a ",(0,r.jsx)(n.code,{children:"[]byte"})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"ismatchismatchstring",children:(0,r.jsx)(n.code,{children:"IsMatch/IsMatchString"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8bf4\u660e\uff1a ",(0,r.jsx)(n.code,{children:"IsMatch()"})," \u65b9\u6cd5\u53ef\u4ee5\u6d4b\u8bd5\u5b57\u7b26\u4e32\uff0c\u5224\u65ad\u662f\u5426\u5339\u914d\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u6a21\u5f0f\u3002\u5982\u679c\u53d1\u73b0\u4e00\u6b21\u5339\u914d\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"true"}),"\uff0c\u5426\u5219\u8fd4\u56de ",(0,r.jsx)(n.code,{children:"false"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"IsMatch(pattern string, src []byte) bool\nIsMatchString(pattern string, src string) bool\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Tip: ",(0,r.jsx)(n.code,{children:" regexp"})," \u5df2\u7ecf\u5728\u5e95\u5c42\u5904\u7406\u5e76\u7f13\u5b58\u4e86 ",(0,r.jsx)(n.code,{children:"Regex"})," \u5bf9\u8c61\uff0c\u4ee5\u6781\u5927\u5730\u63d0\u9ad8\u6267\u884c\u6548\u7387\uff0c\u65e0\u9700\u6bcf\u6b21\u663e\u5f0f\u91cd\u65b0\u521b\u5efa\uff0c\u4e0b\u540c\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func ExampleIsMatch() {\n  \tpatternStr := `\\d+`\n  \tg.Dump(gregex.IsMatch(patternStr, []byte("hello 2022! hello GoFrame!")))\n  \tg.Dump(gregex.IsMatch(patternStr, nil))\n  \tg.Dump(gregex.IsMatch(patternStr, []byte("hello GoFrame!")))\n\n  \t// Output:\n  \t// true\n  \t// false\n  \t// false\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"matchmatchstring",children:(0,r.jsx)(n.code,{children:"Match/MatchString"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8bf4\u660e\uff1a\u7528\u6765\u5339\u914d\u5b50\u5b57\u7b26\u4e32\uff0c ",(0,r.jsx)(n.code,{children:"Match"})," \u53ea\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5339\u914d\u7684\u7ed3\u679c\u3002\u533a\u522b\u4e8e\u539f\u751f\u7684\u6b63\u5219\u65b9\u6cd5\uff0c ",(0,r.jsx)(n.code,{children:"gregex"})," \u662f\u5bf9 ",(0,r.jsx)(n.code,{children:"FindSubmatch"})," \u8fdb\u884c\u5c01\u88c5\uff0c\u76f4\u63a5\u8fd4\u56de\u7b2c\u4e00\u4e2a\u5305\u62ec\u5b50\u6a21\u5f0f\u7ed3\u679c\u7684 ",(0,r.jsx)(n.code,{children:"slice"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u5f0f"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Match(pattern string, src []byte) ([][]byte, error)\nMatchString(pattern string, src string) ([]string, error)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u793a\u4f8b\uff1a\u5339\u914d ",(0,r.jsx)(n.code,{children:"url"})," \u4e2d\u7684\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func ExampleMatch() {\n  \tpatternStr := `(\\w+)=(\\w+)`\n  \tmatchStr := "https://goframe.org/pages/viewpage.action?pageId=1114219&searchId=8QC5D1D2E!"\n  \t// This method looks for the first match index\n  \tresult, err := gregex.Match(patternStr, []byte(matchStr))\n  \tg.Dump(result)\n  \tg.Dump(err)\n\n  \t// Output:\n  \t// [\n  \t//     "pageId=1114219",\n  \t//     "pageId",\n  \t//     "1114219",\n  \t// ]\n  \t// <nil>\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"matchallmatchallstring",children:(0,r.jsx)(n.code,{children:"MatchAll/MatchAllString"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8bf4\u660e\uff1a\u7528\u6765\u5339\u914d\u5b50\u5b57\u7b26\u4e32\uff0c ",(0,r.jsx)(n.code,{children:"MatchAll"})," \u8fd4\u56de\u5168\u90e8\u7684\u7ed3\u679c\u3002\u533a\u522b\u4e8e\u539f\u751f\u7684\u6b63\u5219\u65b9\u6cd5\uff0c ",(0,r.jsx)(n.code,{children:"gregex"}),"\u7684 ",(0,r.jsx)(n.code,{children:"MatchAll"})," \u662f\u5bf9 ",(0,r.jsx)(n.code,{children:"FindAllSubmatch"})," \u65b9\u6cd5\u8fdb\u884c\u5c01\u88c5\uff0c\u8fd4\u56de\u6240\u6709\u7ed3\u679c\u96c6\u7684 ",(0,r.jsx)(n.code,{children:"slice"}),"\uff0c\u5305\u62ec\u7ed3\u679c\u96c6\u4e2d\u7684\u5b50\u6a21\u5f0f\u7684\u7ed3\u679c\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"MatchAllString(pattern string, src string) ([][]string, error)\nMatchAll(pattern string, src []byte) ([][][]byte, error)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u793a\u4f8b\uff1a\u4e0b\u9762\u8fd9\u4e2a\u4f8b\u5b50\u662f\u5339\u914d ",(0,r.jsx)(n.code,{children:"url"})," \u4e2d\u7684\u53c2\u6570\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func ExampleMatchAll() {\n  \tpatternStr := `(\\w+)=(\\w+)`\n  \tmatchStr := "https://goframe.org/pages/viewpage.action?pageId=1114219&searchId=8QC5D1D2E!"\n  \tresult, err := gregex.MatchAll(patternStr, []byte(matchStr))\n  \tg.Dump(result)\n  \tg.Dump(err)\n\n  \t// Output:\n  \t//  [\n  \t//     [\n  \t//         "pageId=1114219",\n  \t//         "pageId",\n  \t//         "1114219",\n  \t//     ],\n  \t//     [\n  \t//         "searchId=8QC5D1D2E",\n  \t//         "searchId",\n  \t//         "8QC5D1D2E",\n  \t//     ],\n  \t// ]\n  \t// <nil>\n}\n\nfunc ExampleMatchAllString() {\n  \tpatternStr := `(\\w+)=(\\w+)`\n  \tmatchStr := "https://goframe.org/pages/viewpage.action?pageId=1114219&searchId=8QC5D1D2E!"\n  \tresult, err := gregex.MatchAllString(patternStr, matchStr)\n  \tg.Dump(result)\n  \tg.Dump(err)\n\n  \t// Output:\n  \t// [\n  \t//     [\n  \t//         "pageId=1114219",\n  \t//         "pageId",\n  \t//         "1114219",\n  \t//     ],\n  \t//     [\n  \t//         "searchId=8QC5D1D2E",\n  \t//         "searchId",\n  \t//         "8QC5D1D2E",\n  \t//     ],\n  \t// ]\n  \t// <nil>\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"quote",children:(0,r.jsx)(n.code,{children:"Quote"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8bf4\u660e\uff1a\u5c06\u6307\u5b9a\u6b63\u5219\u8868\u8fbe\u5f0f\u4e2d\u7684\u7279\u5b9a\u7b26\u53f7\u8fdb\u884c\u8f6c\u4e49\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Quote(s string) string\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func ExampleQuote() {\n  \tresult := gregex.Quote(`[1-9]\\d+`)\n  \tg.Dump(result)\n\n  \t// Output:\n  \t// "\\[1-9\\]\\\\d\\+"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"-----------replacereplacestring",children:(0,r.jsx)(n.code,{children:"           Replace/ReplaceString"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u8bf4\u660e\uff1a\u7528\u6765\u66ff\u6362\u6240\u6709\u5339\u914d\u7684\u5b57\u7b26\u4e32\u5e76\u8fd4\u56de\u4e00\u4e2a\u6e90\u5b57\u7b26\u4e32\u7684\u62f7\u8d1d\u3002"}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u5f0f:"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Replace(pattern string, replace, src []byte) ([]byte, error)\nReplaceString(pattern, replace, src string) (string, error)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u793a\u4f8b"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func ExampleReplace() {\n  \tvar (\n  \t\tpatternStr  = `\\d+`\n  \t\tstr         = "hello GoFrame 2020!"\n  \t\trepStr      = "2021"\n  \t\tresult, err = gregex.Replace(patternStr, []byte(repStr), []byte(str))\n  \t)\n  \tg.Dump(err)\n  \tg.Dump(result)\n\n  \t// Output:\n  \t// <nil>\n  \t// "hello GoFrame 2021!"\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"replacefuncreplacestringfunc",children:(0,r.jsx)(n.code,{children:"ReplaceFunc/ReplaceStringFunc"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8bf4\u660e\uff1a\u7528\u6765\u66ff\u6362\u6240\u6709\u5339\u914d\u7684\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u4e00\u4e2a\u6e90\u5b57\u7b26\u4e32\u7684\u62f7\u8d1d\u3002\u4e0e ",(0,r.jsx)(n.code,{children:"Replace"}),"\xa0\u65b9\u6cd5\u7684\u533a\u522b\u5728\u4e8e\uff0c\u8be5\u65b9\u6cd5\u53ef\u4ee5\u5728\u95ed\u5305\u4e2d\u5bf9\u67e5\u8be2\u8fdb\u884c\u4e8c\u6b21\u5224\u65ad\u6216\u5904\u7406\uff0c\u800c\u975e\u7b80\u5355\u7684\u66ff\u6362\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ReplaceFunc(pattern string, src []byte, replaceFunc func(b []byte) []byte) ([]byte, error)\nReplaceStringFunc(pattern string, src string, replaceFunc func(s string) string) (string, error)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func ExampleReplaceFunc() {\n  \tvar (\n  \t\tpatternStr = `(\\d+)~(\\d+)`\n  \t\tstr        = "hello GoFrame 2018~2020!"\n  \t)\n  \t// In contrast to [ExampleReplace]\n  \tresult, err := gregex.ReplaceFunc(patternStr, []byte(str), func(match []byte) []byte {\n  \t\tg.Dump(match)\n  \t\treturn bytes.Replace(match, []byte("2020"), []byte("2023"), -1)\n  \t})\n  \tg.Dump(result)\n  \tg.Dump(err)\n\n  \t// ReplaceStringFunc\n  \tresultStr, _ := gregex.ReplaceStringFunc(patternStr, str, func(match string) string {\n  \t\tg.Dump(match)\n  \t\treturn strings.Replace(match, "2020", "2023", -1)\n  \t})\n  \tg.Dump(resultStr)\n  \tg.Dump(err)\n\n     \t// Output:\n  \t// "2018~2020"\n  \t// "hello gf 2018~2023!" // ReplaceFunc result\n  \t// <nil>\n  \t// "2018~2020"\n  \t// "hello gf 2018-2023!" // ReplaceStringFunc result\n  \t// <nil>\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"replacefuncmatchreplacestringfuncmatch",children:(0,r.jsx)(n.code,{children:"ReplaceFuncMatch/ReplaceStringFuncMatch"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ReplaceFuncMatch"})," \u8fd4\u56de ",(0,r.jsx)(n.code,{children:"src"})," \u7684\u62f7\u8d1d\uff0c\u5176\u4e2d ",(0,r.jsx)(n.code,{children:"regexp"})," \u7684\u6240\u6709\u5339\u914d\u90fd\u88ab\u5e94\u7528\u4e8e\u5339\u914d\u5b57\u8282\u5207\u7247\u7684\u51fd\u6570\u7684\u8fd4\u56de\u503c\u66ff\u6362\u3002 \u8fd4\u56de\u7684\u66ff\u6362\u76f4\u63a5\u66ff\u6362\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8bf4\u660e\uff1a\u7528\u6765\u66ff\u6362\u6240\u6709\u5339\u914d\u7684\u5b57\u7b26\u4e32\uff0c\u8fd4\u56de\u4e00\u4e2a\u6e90\u5b57\u7b26\u4e32\u7684\u62f7\u8d1d\u3002\u8be5\u65b9\u6cd5\u7684\u5f3a\u5927\u4e4b\u5904\u5728\u4e8e\u53ef\u4ee5\u5728\u95ed\u5305\u4e2d\u5bf9\u67e5\u8be2\u8fdb\u884c\u4e8c\u6b21\u5224\u65ad\u6216\u5904\u7406\uff0c\u4e14 ",(0,r.jsx)(n.code,{children:"MatchString"})," \u51fd\u6570\u5305\u542b\u4e86\u6240\u6709\u5b50\u6a21\u5f0f\u7684\u67e5\u8be2\u7ed3\u679c\uff0c\u800c\u975e\u7b80\u5355\u7684\u66ff\u6362\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"ReplaceFuncMatch(pattern string, src []byte, replaceFunc func(match [][]byte) []byte) ([]byte, error)\nReplaceStringFuncMatch(pattern string, src string, replaceFunc func(match []string) string) (string, error)\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func ExampleReplaceStringFuncMatch() {\n   \tvar (\n  \t\tpatternStr = `([A-Z])\\w+`\n  \t\tstr        = "hello Golang 2018~2021!"\n  \t)\n  \t// In contrast to [ExampleReplaceFunc]\n  \t// the result contains the `pattern\' of all subpatterns that use the matching function\n  \tresult, err := gregex.ReplaceFuncMatch(patternStr, []byte(str), func(match [][]byte) []byte {\n  \t\tg.Dump(match)\n  \t\treturn []byte("GoFrame")\n  \t})\n  \tg.Dump(result)\n  \tg.Dump(err)\n\n  \t// ReplaceStringFuncMatch\n  \tresultStr, err := gregex.ReplaceStringFuncMatch(patternStr, str, func(match []string) string {\n  \t\tg.Dump(match)\n  \t\tmatch[0] = "Gf"\n  \t\treturn match[0]\n  \t})\n  \tg.Dump(resultStr)\n  \tg.Dump(err)\n\n  \t// Output:\n  \t// [\n  \t// \t"Golang",\n  \t// \t"G",\n  \t// ]\n  \t// "hello GoFrame 2018~2021!" // ReplaceFuncMatch result\n  \t// <nil>\n  \t// [\n  \t// \t"Golang",\n  \t// \t"G",\n  \t// ]\n  \t// "hello Gf 2018~2021!" // ReplaceStringFuncMatch result\n  \t// <nil>\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"split",children:(0,r.jsx)(n.code,{children:"Split"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8bf4\u660e\uff1a\u5c06\u6587\u672c\u5185\u5bb9\u7531\u6307\u5b9a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u8fdb\u884c\u5207\u5272\u3002\u4e0d\u5305\u542b\u5143\u5b57\u7b26\uff0c\u76f8\u5f53\u4e8e ",(0,r.jsx)(n.code,{children:"strings.SplitN"}),"\u3002"]}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Split(pattern string, src string) []string\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func ExampleSplit() {\n  \tpatternStr := `\\d+`\n  \tstr := "hello2020GoFrame"\n  \tresult := gregex.Split(patternStr, str)\n  \tg.Dump(result)\n\n  \t// Output:\n  \t// [\n  \t//     "hello",\n  \t//     "GoFrame",\n  \t// ]\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"validate",children:(0,r.jsx)(n.code,{children:"Validate"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u8bf4\u660e\uff1a\u57fa\u4e8e\u539f\u751f\u65b9\u6cd5 ",(0,r.jsx)(n.code,{children:"compile"})," \u5c01\u88c5\uff0c\u68c0\u67e5\u7ed9\u5b9a\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\u662f\u5426\u6709\u6548"]}),"\n",(0,r.jsx)(n.li,{children:"\u683c\u5f0f\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"Validate(pattern string) error\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"\u793a\u4f8b\uff1a"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'func ExampleValidate() {\n  \t// Valid match statement\n  \tg.Dump(gregex.Validate(`\\d+`))\n  \t// Mismatched statement\n  \tg.Dump(gregex.Validate(`[a-9]\\d+`))\n\n  \t// Output:\n  \t// <nil>\n  \t// {\n  \t//     Code: "invalid character class range",\n  \t//     Expr: "a-9",\n  \t// }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const c={},l=r.createContext(c);function s(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);