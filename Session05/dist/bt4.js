"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleUnionType(value) {
    if (typeof value === "string") {
        console.log(`${value.length} ky tu`);
    }
    else if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log("chan");
        }
        else {
            console.log("le");
        }
    }
}
handleUnionType("de");
handleUnionType(1330);
handleUnionType(9);
//# sourceMappingURL=bt4.js.map