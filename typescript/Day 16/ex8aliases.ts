// now one type is created called aphanumerics
type alphanumerics = string | number;

let strNum : alphanumerics;
strNum = "hello world";
document.write(`<p>Str Num = ${strNum}</p>`);
strNum = 300;
document.write(`<p>Str Num = ${strNum}</p>`);