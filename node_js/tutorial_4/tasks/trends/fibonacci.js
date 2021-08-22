// Solution without promises

// function FB(number) {
//     let arr = [0, 1];
//     let fib = 0;

//     for (let i = 1; i < number; i++) {
//         fib = arr[1] + arr[0];
//         arr = [arr[1], fib];
//     }

//     return fib;
// }

// console.log(FB(0));
// console.log(FB(1));
// console.log(FB(2));
// console.log(FB(3));
// console.log(FB(4));
// console.log(FB(6));
// console.log(FB(49));

function fibonacci(number) {
    function FB(number) {
        new Promise((resolve) => {
            let arr = [0, 1];
            let fib = 0;

            for (let i = 1; i < number; i++) {
                fib = arr[1] + arr[0];
                arr = [arr[1], fib];
            }

            resolve(fib);
        }).then((res) => {
            console.log("F(" + number + ") = " + res);
        });
    }
}

fibonacci(50);