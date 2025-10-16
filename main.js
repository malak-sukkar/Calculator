
let output=document.querySelector(".output");

let remove=document.querySelector(".remove");
remove.onclick=function(){
    output.innerHTML=output.innerHTML.slice(0,output.innerHTML.length-1);
};

let one=document.querySelector(".one");
one.onclick=function(){
    output.append(one.innerHTML);
};
let tow=document.querySelector(".tow");
tow.onclick=function(){
    output.append(tow.innerHTML);
};
let three=document.querySelector(".three");
three.onclick=function(){
    output.append(three.innerHTML);
};
let plus=document.querySelector(".plus");
plus.onclick=function(){
    output.append(plus.innerHTML);
};
let four=document.querySelector(".four");
four.onclick=function(){
    output.append(four.innerHTML);
};
let five=document.querySelector(".five");
five.onclick=function(){
    output.append(five.innerHTML);
};
let six=document.querySelector(".six");
six.onclick=function(){
    output.append(six.innerHTML);
};
let minus=document.querySelector(".minus");
minus.onclick=function(){
    output.append(minus.innerHTML);
};
let seven=document.querySelector(".seven");
seven.onclick=function(){
    output.append(seven.innerHTML);
};
let eight=document.querySelector(".eight");
eight.onclick=function(){
    output.append(eight.innerHTML);
};
let nine=document.querySelector(".nine");
nine.onclick=function(){
    output.append(nine.innerHTML);
};
let multiple=document.querySelector(".multiple");
multiple.onclick=function(){
    output.append(multiple.innerHTML);
};
let comma=document.querySelector(".comma");
comma.onclick=function(){
    output.append(comma.innerHTML);
};
let zero=document.querySelector(".zero");
zero.onclick=function(){
    output.append(zero.innerHTML);
};
let divid=document.querySelector(".divid");
divid.onclick=function(){
    output.append(divid.innerHTML);
};

let eql=document.querySelector(".eql");
eql.onclick=function(){

    output.append(eql.innerHTML);
    let array=output.innerHTML.split("");
    //console.log(array);
    let number=[];
    let t=[];
    let operation=[];
    for(let i=0;i<array.length;i++){
        if(Number(array[i])||array[i]=="."||array[i]==0){
            t.push(array[i]);
        }
        else{
            let s=t.join("");
            number.push(s);
            t=[];
            operation.push(array[i]);
        }
    }
    //console.log(number);
    //console.log(operation);
    

    let i=0;
    while(operation.includes("*")){
    i=operation.indexOf("*");
    number[i]=number[i]*number[i+1];
    operation.splice(i,1);
    number.splice(i+1,1);
    }

    while(operation.includes("/")){
    i=operation.indexOf("/");
    number[i]=number[i]/number[i+1];
    operation.splice(i,1);
    number.splice(i+1,1);
    }
    console.log(operation);
    console.log(number);


    let s;
    for(let i=0;i<operation.length;i++){
        if(operation[i]=="*"){
            s=number[0]*num[1];
            number.unshift(s);
            number.splice(1,1);
            number.splice(1,1);
            s=0;
            console.log(number);
        }
        if(operation[i]=="+"){
            s=Number(number[0])+Number(number[1]);
            number.unshift(s);
            number.splice(1,1);
            number.splice(1,1);
            s=0;
            console.log(number);
        }
        if(operation[i]=="-"){
            s=number[0]-number[1];
            number.unshift(s);
            number.splice(1,1);
            number.splice(1,1);
            s=0;
            console.log(number);
        }
        if(operation[i]=="/"){
            s=number[0]/number[1];
            number.unshift(s);
            number.splice(1,1);
            number.splice(1,1);
            s=0; 
            console.log(number);
        }
        if(operation[i]=="="&& number.length==1){
            break;
        }
    }
    
    output.append(number[0]);
    
};
