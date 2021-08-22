function microtasks() {
    Promise.resolve()
        .then(() => console.log("Promise 1️⃣  - ✅"))
        // these will be resolved right after all the promises are resolved but before nested nextTicks
        .then(() => console.log("Some message after the first promise"))
        .then(() => console.log("One more message after the fist promise"));

    Promise.resolve().then(() => console.log("Promise 2️⃣ - ✅"));

    Promise.resolve().then(() => {
        console.log("promise 3️⃣ - ✅");

        // these were added  during promises microtask processing, so they will be resolved after all the promises are resolved  .

        process.nextTick(() =>
            console.log("next tick inside promise 4 resolve handler")
        );
        process.nextTick(() =>
            console.log("and one more next tick inside promise resolve handler")
        );
    });

    Promise.resolve().then(() => console.log("promise 4️⃣ - ✅"));
    Promise.resolve().then(() => {
        process.nextTick(() =>
            console.log("next tick inside promise 5 resolve handler")
        );
        console.log("promise 5️⃣ - ✅");
    });

    process.nextTick(() => console.log("🥇 next tick1"));

    process.nextTick(() => console.log("🥇 next tick3"));
}

module.exports = microtasks;