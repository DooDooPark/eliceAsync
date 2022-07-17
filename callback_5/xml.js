const getJson = (resource, callback) => {
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
    request.open('GET', resource);  //==> 예제 3
    request.send();
}

// 순차적으로 진행하기 위한 콜백.

getJson('jsondata/luigi.json', (err, data) => {
    console.log(data);
    getJson('jsondata/mario.json', (err, data) => {
        console.log(data);
        getJson('jsondata/shaun.json', (err, data) => {
            console.log(data);
        });
    });
})


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





