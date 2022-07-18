const request = new XMLHttpRequest();

// request.addEventListener('readystatechange', () => {
//     console.log(request, request.readyState);
// });  ==> 여기가 1번 예제.

// request.addEventListener('readystatechange', () => {
//     if (request.readyState === 4) {
//         console.log(request.responseText);  //데이터가 들어오는 것을 확인할 수 있다.
//     }
// }); ==> 2번째 예제.

request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);  //데이터가 들어오는 것을 확인할 수 있다.
    } else if (request.readyState === 4) {
        console.log('네트워크 에러가 발생했습니다.');
    }
}); 

// 예제3 주소 틀려주기.

// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/'); ==> 예제 1, 2
request.open('GET', 'https://jsonplaceholder.typicode.com/todooos/');  //==> 예제 3
request.send();

