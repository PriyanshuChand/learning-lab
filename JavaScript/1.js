import {readFile} from 'fs/promises';
let hel = await readFile("hello.txt", "utf-8");
console.log(hel);