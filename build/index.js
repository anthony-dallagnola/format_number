"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var formatter_1 = require("./formatter");
try {
    var result = formatter_1.formatNumber(process.stdout.columns, process.argv.slice(2)).result;
    console.log(result);
}
catch (err) {
    console.error('format number failed: ', err);
}
;
//# sourceMappingURL=index.js.map