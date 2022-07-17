const getJson = (resource, callback) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                console.log(request.responseText);  //데이터가 들어오는 것을 확인할 수 있다.
                // callback();
                const data = JSON.parse(request.responseText);
                // callback(undefined, data);
                resolve(data);
            } else if (request.readyState === 4) {
                // callback();
                // callback('데이터를 받을 수 없습니다.', undefined);
                reject('could not fetch the data');
            }
        });

        // request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');  //==> 예제 3
        request.open('GET', resource);  //==> 예제 3
        request.send();
    });
}

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }, err => {
//   console.log('promise rejected:', err);
// });

// getSomething().then(data => {
//   console.log('promise resolved:', data);
// }).catch(err => {
//   console.log('promise rejected:', err);
// });

getJson('jsondata/luigi.json').then(data => {
    console.log('promise 1 resolved:', data);
    return getJson('jsondata/mario.json');
}).then(data => {
    console.log('promise 2 resolved:', data);
    return getJson('jsondata/shaun.json');
}).then(data => {
    console.log('promise 3 resolved:', data);
}).catch(err => {
    console.log('promise rejected:', err);
});

// 순차적으로 진행하기 위한 콜백.

// getJson('jsondata/luigi.json', (err, data) => {
//     console.log(data);
//     getJson('jsondata/mario.json', (err, data) => {
//         console.log(data);
//         getJson('jsondata/shaun.json', (err, data) => {
//             console.log(data);
//         });
//     });
// })


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





