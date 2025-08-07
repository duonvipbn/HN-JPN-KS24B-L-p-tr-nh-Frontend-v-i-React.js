function handleUnionType(value: string | number): void {
    if (typeof value === "string") {
        console.log(`${value.length} ky tu`);
    } else if (typeof value === "number") {
        if (value % 2 === 0) {
            console.log("chan");
        } else {
            console.log("le");
        }
    }
}
handleUnionType("de");
handleUnionType(1330);
handleUnionType(9);         