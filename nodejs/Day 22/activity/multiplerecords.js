let read=require('readline-sync');
let fs=require('fs');
let id=read.question('Enter your id: ');
let name=read.question('Enter your name: ');
let salary=read.question('Enter your salary: ');
let employee={id:id, name:name, salary:salary};
let jsonString=JSON.stringify(employee);
let data=fs.readFileSync('details.json').toString();
if(data.endsWith('}]')==true){
    let s1=data.slice(1,(data.length-1))
    let s2=data.slice(0,(data.length-1))
    let out=`${s2},\n${jsonString}]`
    fs.writeFileSync('details.json',out);
    console.log('Done...')
}else{
    let out=`[${jsonString}]`
    fs.writeFileSync('details.json',out);
    console.log('Done...')
}