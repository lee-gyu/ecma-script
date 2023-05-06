// ES2019 이전의 JSON.stringify()는 유니코드 이스케이프 시퀀스를 생성한다.
// ES2019 이후의 JSON.stringify()는 유니코드 이스케이프 시퀀스를 생성하지 않는다.

const input = {
  text: "\uD800\uDC00", // Surrogate pair for the Unicode character U+10000
};

const jsonString = JSON.stringify(input);
console.log(jsonString); // '{"text":"\uD800\uDC00"}'
