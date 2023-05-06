# Promise vs Async function

async function은 주로, Promise를 반환하는 함수를 간결하게 작성하기 위해 사용한다.\
이를 이용해서 동기적인 흐름의 스타일로 코드를 작성할 수 있다.

promise의 경우 then을 이용해서 다음 작업을 수행한다.\
한번에 다중의 비동기 작업을 호출할 수도 있다.\
이때는 Promise.all을 이용해서 모든 작업이 끝날 때를 비동기적으로 기다릴 수 있다.

Async function은 try...catch를 이용해서 에러를 처리할 수 있다.\
Promise의 경우 then의 두번째 인자로 에러를 처리하는 함수를 넘기고,\
catch를 이용해서 에러를 처리할 수 있다.
