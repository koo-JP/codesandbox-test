/**
 * テンプレート文字列
 */

const name1 = "abc";
const age1 = 30;

// 従来
const msg1 = "私の名前は" + name1 + "です。年齢は" + age1 + "です。";
console.log(msg1);

const name2 = "def";
const age2 = 35;
// テンプレート文字列
const msg2 = `私の名前は${name2}です。年齢は${age2}です。`;
console.log(msg2);
