function typeConsole(type = "log") {
    const message = `Đây là type: ${type}`;

    if (type === "log") {
        console.log(message);
    } else if (type === "warn") {
        console.warn(message);
    } else if (type === "error") {
        console.error(message);
    } else {
        console.log(message);
    }
}
typeConsole("warn");  
typeConsole();       
typeConsole("helo");