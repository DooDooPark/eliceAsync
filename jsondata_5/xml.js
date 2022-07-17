const getJson = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            console.log(request.responseText);  //데이터가 들어오는 것을 확인할 수 있다.
            // callback();
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            // callback();
            callback('데이터를 받을 수 없습니다.', undefined);
        }
    });

    // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');  //==> 예제 3
    request.open('GET', './example.json');  //==> 예제 3
    request.send();
}

// blocking, non-blockning

console.log(1);
console.log(2);


getJson((err, result) => {
    // console.log('call back fired');
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
});

console.log(3);
console.log(4);

// function getJson(callback) {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             console.log(request.responseText);  //데이터가 들어오는 것을 확인할 수 있다.
//             callback();
//         } else if (request.readyState === 4) {
//             callback();
//         }
//     });

//     request.open('GET', 'https://jsonplaceholder.typicode.com/todooos/');  //==> 예제 3
//     request.send();
// }

// getJson(function () {
//     console.log('call back fired');
// });





