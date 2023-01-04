// falsy value remove form array 
let falsyValue = ['rakib', false, 'hasan', NaN, 0 , 'arif', undefined, '', null];

const result = falsyValue.filter(Boolean)
console.log({result});

// Boolean e convert karte hole je kno vlaue !! use karte hobe 

console.log(!!'Rakib'); // true
console.log(!!0); // false
console.log(!!undefined); //  false

// resizing array 
const test = ['rakib', 'arif', 'hasan', 5, 6, 8];
// const resizing = (test.length)=4;
// console.log({resizing});
test.length = 4;
console.log(test);

//  performance test kara function 

const startTime  = performance.now();

for (let i = 0; i<50; i++){
    console.log(i);
}

const endTime = performance.now();

console.log(`performance tiem ${startTime - endTime}`);

// 2 ta array soman kina ta check karte hobe

const checkEqualArray = (a,b)=>{
    return a.length === b.length && a.every((v,i)=>{
        return v === b[i]
    })
}

console.log(checkEqualArray([1,2],[1,4]));

// shuffling ba aloemo sorting kara 

const arrOne = [2,1,4,2,7,4,8,2];
const resultOne = arrOne.sort(()=> Math.random() - 0.5)
console.log(resultOne);

// coma operator  ( er kag hosse last er value ta excute kara)

const comaX = (6,4)
console.log({comaX}); // ans 4

const arr2 = [[1,2,3,4],[5,6],[7,8],[9]]
for(let i = 0, j=3; i <3; i++,j--){
    console.log("a + [" + i +"]["+j+"]" + arr2[i][j]);
}

// importan question 
// javaScript er String Constuctor sob kisu age  String e convert kare fele.

console.log([] + []); // blank asbe karon sob gula re String e convert kare fele tai 1st asbe '' + '' = '' nane blank
console.log({}+''); // boject object asbe karon {} Sting e convert karle obejct obejct ase tai object boject = '' so = object boject 
console.log(String({}));
console.log(String(2));
console.log(String(false));
console.log(String(true));
console.log(String('rakib'));

// jodi true false value karo sathy add kore taile true hisabe 1 and false hisabe 0 add karbe
console.log(true + 4); // 5
console.log(undefined +3); // NaN
console.log(NaN + 2); // NaN
console.log(null + 2); // 2 asbe karon null 0 o na abr kisu na ta o na

// 
function Bangladesh(){
    return 'Rakib hasan'
}
const callbangladesh = Bangladesh `hello`;
console.log(callbangladesh); // Rakib Hasan asbe karo `hello` ta function ta call diye dise and hello argumenst hisabe gase function er 

// website er sob text element k editable kara jabe
document.body.contentEditable = true; // ai code er maddome



