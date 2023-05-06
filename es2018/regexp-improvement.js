/**
 * RegExp improvements: Several enhancements were made to the RegExp (regular expression) objects to improve their functionality and make them more powerful:
 *
 * Named capture groups: This feature allows you to assign names to capture groups in a regular expression pattern, making it easier to work with and understand complex patterns.
 * Unicode property escapes: This feature allows you to match characters based on their Unicode properties, such as script, general category, or binary properties, which can be helpful when working with international text.
 * Lookbehind assertions: Lookbehind assertions extend the existing lookahead assertions, enabling you to match a pattern based on what precedes it.
 * s (dotAll) flag: The s flag changes the behavior of the dot (.) metacharacter in regular expressions, allowing it to match any character, including newline characters.
 */

// Named capture groups
const re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const result = re.exec("2015-01-02");

console.log(result.groups.year); // 2015

// Unicode property escapes
// @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape
const re2 = /\p{Script=Hiragana}/u;
const result2 = re2.test("あ");

console.log(result2); // true

// Lookbehind assertions
// /(?<=\$)\d+/ 해석
// $로 시작하는 문자열을 찾고, 그 뒤에 숫자가 1개 이상 있는 문자열을 찾는다.
// 핵심은 $는 찾는 문자열에 포함되지 않는다.
const re3 = /(?<=\$)\d+/;
const result3 = re3.exec("$123.89");

console.log(result3[0]); // 123
