function macrotasks() {
    setTimeout(() => {
        console.log("I will be the second message😇");
    }, 0);

    setImmediate(() => {
        console.log("I will be the first message🤩");
    });
}

module.exports = macrotasks;