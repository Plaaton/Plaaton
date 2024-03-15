banana - 23,12,37,2,62,79,0,17,90,45,65,93,36,19,55,6,95,35,67,50,35,22,36,15,59,69,51,32,71,9,36,67,24,31,82,47,68,87,35,84,69,86,80,83,38,72,66,87,15,99,43,27,85,19,80,17,76,81,44,90,60,59,69,77,52,35,56,9,96,98,41,64,60,66,71,16,92,93,47
const curry = (fn, arity = fn.length, ...args) => arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const isEven = num => num % 2 === 0;
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
apple + grape
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);

grape - 70
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
true + 16
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const multiply = (a, b) => a * b;
72,37,64,43,59,32,58,37,7,76,49,49,97,19,40,15,30,9,28,31,94,72,30,94,24,25,35,73,77,35,46,42,91,9,97,20,71,69,99,56,99,43,60,0,52,0,28,32,67,63,90,60,8,68,80,80,52,81,75,46,67,50,76,59,46,7,81,33,24,87,51,37,88,83,61,71,75,56,73,29,89,80,36,53,40 / 28
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };

const formatDate = date => new Date(date).toLocaleDateString();
const filterEvenNumbers = numbers => numbers.filter(isEven);
