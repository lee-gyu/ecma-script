const defaultValue = "N/A";
const userInput = null;

// undefined 또는 null인 경우에만 defaultValue를 사용
const result = userInput ?? defaultValue;
console.log(result); // "N/A"
