"use strict";(self.webpackChunkdsl_gamification=self.webpackChunkdsl_gamification||[]).push([[370],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(s,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,r=new Array(l);r[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,r[1]=o;for(var u=2;u<l;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),i=n(6010);const l="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(l,r),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>C});var a=n(7462),i=n(7294),l=n(6010),r=n(2466),o=n(6550),s=n(1980),u=n(7392),d=n(12);function c(e){return function(e){return i.Children.map(e,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:i}}=e;return{value:t,label:n,attributes:a,default:i}}))}function p(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(l),(0,i.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=p(e),[r,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[s,u]=g({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,d.Nk)(n);return[a,(0,i.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),f=(()=>{const e=s??c;return m({value:e,tabValues:l})?e:null})();(0,i.useEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var f=n(2389);const b="tabList__CuJ",k="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},r,{className:(0,l.Z)("tabs__item",k,null==r?void 0:r.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;if(t){const e=n.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function B(e){const t=h(e);return i.createElement("div",{className:(0,l.Z)("tabs-container",b)},i.createElement(v,(0,a.Z)({},e,t)),i.createElement(N,(0,a.Z)({},e,t)))}function C(e){const t=(0,f.Z)();return i.createElement(B,(0,a.Z)({key:String(t)},e))}},6861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=n(7462),i=(n(7294),n(3905)),l=n(4866),r=n(5162);const o={sidebar_position:2},s="Rule Simulation",u={unversionedId:"getting-started/usage/rule-simulation",id:"getting-started/usage/rule-simulation",title:"Rule Simulation",description:"",source:"@site/docs/getting-started/usage/rule-simulation.md",sourceDirName:"getting-started/usage",slug:"/getting-started/usage/rule-simulation",permalink:"/DSL4GaR/docs/getting-started/usage/rule-simulation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/usage/rule-simulation.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Right Hand Side (RHS)",permalink:"/DSL4GaR/docs/getting-started/usage/rule-definition/rhs"},next:{title:"Rule Deployment",permalink:"/DSL4GaR/docs/getting-started/usage/rule-deployment"}},d={},c=[{value:"Fact Builders",id:"fact-builders",level:2},{value:"Expectations Definition",id:"expectations-definition",level:2},{value:"Scenario Definition",id:"scenario-definition",level:2},{value:"Graph",id:"graph",level:2}],p={toc:c};function m(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rule-simulation"},"Rule Simulation"),(0,i.kt)("p",null,"The rule simulation process is a fundamental phase to verify the correctness of the generated rules \ud83e\uddea.",(0,i.kt)("br",null),"\nThis process can be decomposed into four steps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Facts definition"),": This steps consists of the definition of the facts (through the so-called ",(0,i.kt)("em",{parentName:"li"},"fact builders"),") that will be inserted inside the Drools working memory during the simulation phase."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Expectations definition"),": In this step all the expected outcome in terms of game state changes are defined; basically a list of assertion is defined."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scenario definition"),": This step consists of defining the order the rules and the facts that will be inserted in the Drools production memory and the Drools working memory respectively. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Actual simulation"),": This final step allows to simulate the pre-defined scenarios and verify if the assertions satisfied.")),(0,i.kt)("h2",{id:"fact-builders"},"Fact Builders"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"GameFactBuilder")," instance allows to fluently instantiate a fact representing a gamification element. Each gamification element has its corresponding fact builder:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Action")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"ActionFactBuilderImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BadgeCollectionConcept")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"BadgeCollectionFactBuilderImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Challenge")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"ChallengeFactBuilderImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Classification")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"ClassificationFactBuilderImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CustomData")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"CustomDataFactBuilderImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Game")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"GameFactBuilderImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"InputData")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"InputDataFactBuilderImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Player")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"PlayerFactBuilderImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"PointConcept")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"PointConceptFactBuilderImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Propagation")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"PropagationFactBuilderImpl")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Reward")," \u27a1\ufe0f ",(0,i.kt)("inlineCode",{parentName:"li"},"RewardFactBuilderImpl"))),(0,i.kt)("p",null,"The fact builders can be used as follow:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Simulation.java"',title:'"Simulation.java"'},'public static void main(String[] args) {\n  // The following builder instantiates a PointConcept\n  // named "green leaves" and associated to a score of 10 points.\n  final PointFactBuilderImpl pointFact = PointFactBuilderImpl.builder()\n    .name("green leaves")\n    .score(10.0)\n    .build();\n\n  // The following builder instantiates a Game with a name of "game1".\n  final GameFactBuilderImpl gameFact = GameFactBuilderImpl.builder().id("game1").build();\n\n  // The following builder instantiates a Player with "player1" as id.\n  final PlayerFactBuilderImpl playerFact = PlayerFactBuilderImpl.builder().id("player1").build();\n\n  // The following builder instantiates a BadgeCollectionConcept named "green_leaves_badge".\n  final BadgeCollectionFactBuilderImpl badgeCollectionFact = BadgeCollectionFactBuilderImpl.builder()\n    .name("green_leaves_badge")\n    .build();\n\n  // The following builder instantiates an InputData with an \n  // associated map containing the key "sustainable" valued as true.\n  final InputDataFactBuilderImpl inputDataFact = InputDataFactBuilderImpl.builder()\n    .data(new HashMap<>() {{ put("sustainable", true); }})\n    .build();\n}\n')),(0,i.kt)("h2",{id:"expectations-definition"},"Expectations Definition"),(0,i.kt)("p",null,"When a simulation is run we want to be sure that the outcome matches what we expect; the ",(0,i.kt)("inlineCode",{parentName:"p"},"CheckExpectationLambda")," interface allows to define a callback that permits to verify if the state of the game has evolved as planned during the simulation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Simulation.java"',title:'"Simulation.java"'},'public static void main(String[] args) {\n  // Fact builders definition here ...\n\n  // The expectation is to have the badge "10-point-green" inside the badgeCollectionFact\n  CheckExpectationLambda doesContain10PointGreenBadge = () -> Assert.assertTrue(\n    "The \'10-point-green\' badge has been assigned",\n    badgeCollectionFact.getBadgeEarned().contains("10-point-green")\n  );\n\n  // The expectation is to have 70 points associated to the pointFact\n  CheckExpectationLambda has70Points = () -> Assert.assertEquals(\n    "Has 70 points",\n    70.0, \n    pointFact.getScore(),\n    0.0\n  );\n\n  // The expectation is to have the badge "50-point-green" inside the badgeCollectionFact\n  CheckExpectationLambda doesContain50PointGreenBadge = () -> Assert.assertTrue(\n    "The \'50-point-green\' badge has been assigned",\n    badgeCollectionFact.getBadgeEarned().contains("50-point-green")\n  );\n}\n')),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Each expectation can be associated to a message (i.e. ",(0,i.kt)("inlineCode",{parentName:"p"},"\"The '10-point-green' badge has been assigned\""),") that will be displayed on the graph generated during the simulation.")),(0,i.kt)("h2",{id:"scenario-definition"},"Scenario Definition"),(0,i.kt)("p",null,"Once the facts and the expectations are defined, the DSL4GaR allows to simulate a scenario through the ",(0,i.kt)("inlineCode",{parentName:"p"},"SimulationBuilder")," interface:"),(0,i.kt)(l.Z,{mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"Simulation",label:"Simulation",default:!0,mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Simulation.java" {9-21}',title:'"Simulation.java"',"{9-21}":!0},"import game.rules.GreenBadgeRules;\nimport game.rules.GreenPointsRules;\n\npublic static void main(String[] args) {\n  // Fact builders definition here ...\n\n  // Expectations definition here ...\n\n  new SimulationBuilderImpl()\n    .addFacts(pointFact, gameFact, playerFact, badgeCollectionFact, inputDataFact)\n    .addRules(\n      GreenPointsRules.getGreenSustainableBonusRule(),\n      GreenBadgeRules.getGreenBadge10Rule(),\n      GreenBadgeRules.getGreenBadge50Rule()\n    )\n    .addExpectations(\n      has70Points,\n      doesContain10PointGreenBadge, \n      doesContain50PointGreenBadge\n    )\n    .simulateAndClose();\n}\n"))),(0,i.kt)(r.Z,{value:"GreenPointsRules",label:"GreenPointsRules",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GreenPointsRules.java"',title:'"GreenPointsRules.java"'},'package game.rules;\n\nimport eu.trentorise.game.model.*;\nimport game.concepts.Point;\nimport game.declared.PRItinerary;\nimport it.univaq.gamification.dsl.binders.PointBind;\nimport it.univaq.gamification.dsl.builders.impl.PackageDescrBuilderImpl;\nimport it.univaq.gamification.dsl.builders.lhs.PackageDescr;\n\nimport static it.univaq.gamification.dsl.builders.lhs.ConstraintType.EQ;\n\npublic class GreenPointsRules {\n\n  public static PackageDescr getGreenSustainableBonusRule() {\n    final PointBind POINT_BIND = new PointBind("pc");\n\n    return new PackageDescrBuilderImpl()\n      .name("eu.trentorise.game.model")\n      .newImport(InputData.class).end()\n      .newImport(PointConcept.class).end()\n      .newDeclare().type().name(PRItinerary.class).end()\n      .newRule()\n      .name("green sustainable bonus")\n          .attribute("salience", "1")\n          .when()\n              .inputData().fromData(EQ, "sustainable", true).end()\n              .not()\n                  .pattern(PRItinerary.class.getSimpleName()).end()\n              .end()\n              .point(POINT_BIND).name(EQ, "green leaves").end()\n          .end()\n          .then()\n              .increaseScore(POINT_BIND, 60.0)\n          .end()\n      .end()\n      .getDescr();\n  }\n\n}\n'))),(0,i.kt)(r.Z,{value:"GreenBadgeRules",label:"GreenBadgeRules",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GreenBadgeRules.java"',title:'"GreenBadgeRules.java"'},'package game.rules;\n\nimport game.concepts.Badge;\nimport game.concepts.BadgeCollection;\nimport game.concepts.Point;\nimport game.rules.templates.GenericBadgeRuleTemplate;\nimport it.univaq.gamification.dsl.builders.lhs.PackageDescr;\n\npublic class GreenBadgeRules {\n  public static PackageDescr getGreenBadge10Rule() {\n    return GenericBadgeRuleTemplate.getBadgeTemplate(\n      -1000,\n      "10 point green badge",\n      "green leaves",\n      "green leaves",\n      "10-points-green",\n      10.0\n    );\n  }\n\n  public static PackageDescr getGreenBadge50Rule() {\n    return GenericBadgeRuleTemplate.getBadgeTemplate(\n      -1000,\n      "50 point green badge",\n      "green leaves",\n      "green leaves",\n      "50-point-green",\n      50.0\n    );\n  }\n}\n'))),(0,i.kt)(r.Z,{value:"GenericBadgeRuleTemplate",label:"GenericBadgeRuleTemplate",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GenericBadgeRuleTemplate.java"',title:'"GenericBadgeRuleTemplate.java"'},'package game.rules.templates;\n\nimport eu.trentorise.game.model.BadgeCollectionConcept;\nimport eu.trentorise.game.model.Game;\nimport eu.trentorise.game.model.Player;\nimport eu.trentorise.game.model.PointConcept;\nimport eu.trentorise.game.notification.BadgeNotification;\nimport it.univaq.gamification.dsl.binders.BadgeCollectionBind;\nimport it.univaq.gamification.dsl.binders.Bind;\nimport it.univaq.gamification.dsl.builders.impl.PackageDescrBuilderImpl;\nimport it.univaq.gamification.dsl.builders.lhs.PackageDescr;\n\nimport static it.univaq.gamification.dsl.builders.lhs.ConstraintType.EQ;\nimport static it.univaq.gamification.dsl.builders.lhs.ConstraintType.GTE;\n\npublic class GenericBadgeRuleTemplate {\n  public static PackageDescr getBadgeTemplate(\n    Integer salience,\n    String ruleName,\n    String pointName,\n    String badgeCollectionName,\n    String badgeName,\n    Double scoreThreshold\n  ) {\n    final Bind GAME_ID_BIND = new Bind("gameId");\n    final Bind PLAYER_ID_BIND = new Bind("playerId");\n    final BadgeCollectionBind BADGE_COLLECTION_BIND = new BadgeCollectionBind("bc");\n\n    return new PackageDescrBuilderImpl()\n      .name("eu.trentorise.game.model")\n      .newImport(PointConcept.class).end()\n      .newImport(Game.class).end()\n      .newImport(Player.class).end()\n      .newImport(BadgeCollectionConcept.class).end()\n      .newImport(BadgeNotification.class).end()\n      .newRule()\n        .name(ruleName)\n        .attribute("salience", String.valueOf(salience))\n        .when()\n          .point()\n            .name(EQ, pointName)\n            .score(GTE, scoreThreshold)\n          .end()\n          .badgeCollection(BADGE_COLLECTION_BIND)\n            .name(EQ, badgeCollectionName)\n            .badgeEarnedNotContains(badgeName)\n          .end()\n          .game().bindId(GAME_ID_BIND).end()\n          .player().bindId(PLAYER_ID_BIND).end()\n        .end()\n        .then()\n          .addBadgeWithNotification(BADGE_COLLECTION_BIND, GAME_ID_BIND, PLAYER_ID_BIND, badgeName)\n        .end()\n      .end()\n      .getDescr();\n  }\n}\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"addFacts"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"addRules")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"addExpectations")," methods can be called multiple times and in different orders during the same simulation; this allows to verify more complex and dynamic scenarios. Also partial simulations (where the graph is not generated) are allowed through to the ",(0,i.kt)("inlineCode",{parentName:"p"},"simulate")," method:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Simulation.java" {5}',title:'"Simulation.java"',"{5}":!0},"new SimulationBuilderImpl()\n  .addFacts(pointFact, gameFact, playerFact, badgeCollectionFact, inputDataFact)\n  .addRules(GreenPointsRules.getGreenSustainableBonusRule(), GreenBadgeRules.getGreenBadge10Rule())\n  .addExpectations(has70Points, doesContain10PointGreenBadge)\n  .simulate()\n  .addRules(GreenBadgeRules.getGreenBadge50Rule())\n  // All previous expectations are no longer valid\n  .addExpectations(doesContain50PointGreenBadge)\n  .simulateAndClose();\n"))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Every time the ",(0,i.kt)("inlineCode",{parentName:"p"},"simulate")," method is called all the expectations are cleared, thus you need to eventually add them again before calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"simulate")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"simulateAndClose")," methods.")),(0,i.kt)("h2",{id:"graph"},"Graph"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"simulateAndClose")," method produces a filtrable graph where the game state transitions are shown:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"graph_success",src:n(1897).Z,width:"3840",height:"2160"})),(0,i.kt)("p",null,"If during the simulation not all the expectations are successfully verified an error message reporting the assertion message and the related rules are displayed:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"graph_success",src:n(8549).Z,width:"3837",height:"2160"})))}m.isMDXComponent=!0},8549:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graph_error-e228f2476a0f33a4657867383f1502d0.png"},1897:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/graph_success-2fcc02170da0f7b377f43df84fa8affa.png"}}]);