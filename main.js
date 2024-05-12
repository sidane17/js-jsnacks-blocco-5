// Snack uno
let sommaZucchine =0;
let zucchine=[{
    "specie":"italiana ",
    "peso": 1,
    "lunghezza": 2
},
{
        "specie":"spagnola ",
        "peso": 2,
        "lunghezza": 4
},
{
    "specie":"francese ",
    "peso": 3,
    "lunghezza": 6
},
{
    "specie":"portoghese ",
    "peso": 4,
    "lunghezza": 8
},
{
    "specie":"svedese ",
    "peso": 5,
    "lunghezza": 10
},
{
    "specie":"slovena",
    "peso": 6,
    "lunghezza": 12
},
{
    "specie":"bosnia ",
    "peso": 7,
    "lunghezza": 14
},
{
    "specie":"brasiliana ",
    "peso": 8,
    "lunghezza": 16
},
{
    "specie":"indiana ",
    "peso": 9,
    "lunghezza": 18
},
{
    "specie":"russa ",
    "peso": 10,
    "lunghezza": 20
}];
for(let i=0;i<zucchine.length;i++){
    sommaZucchine+=zucchine[i].peso;
}
console.log(sommaZucchine)
// Snack DUE
let sommaMax=0;
let sommaMin=0;
for(let i=0;i<zucchine.length;i++){
    if(zucchine[i].lunghezza<15){
        sommaMax+=zucchine[i].peso;
    }else if(zucchine[i].lunghezza>15){
        sommaMin+=zucchine[i].peso;
    }
}
console.log(sommaMax)
console.log(sommaMin)
// Snack TRE
let stringa ="stringa"
stringa=stringa.split("").reverse("").join("")
console.log(stringa)
// Snack QUATTRO
let p=0;
let d=0;
let pari=[0,2,4,6,8]
let dispari=[1,3,5,7,9]
let ris=[];
for(let i=0;i<10;i++){
    if(i%2==0){
        ris.push(pari[p]);
        p++;
    }else{
        ris.push(dispari[d]);
        d++;
    }
}
console.log(ris);
// Snack CINQUE
let a=2
let b=5
function range(array,min,max){
    let j=0
    let risultato=[]
    for(let i=0;i<array.length;i++){
    if(array[i]>a && array[i]<b){
        risultato[j]=array[i];
        j++;
    }
}
return risultato;
}
console.log(range(ris,a,b) )