var isRequired = false;

if(isRequired){
    console.log("condition satified");

}else{
    console.log("condition not satified");

}

let count = 5;

while(count>0){
    count--;
    //console.log("Count value: "+count+"\n")
}


do{
    count++;
    //console.log("Count value : "+ count+"\n")
}while(count<10);

for(let k=0;k<5;k++){
    console.log("Value of K : "+k)
}

let n =0;

for(let a=1;a<100;a++){
    if(a%2==0 && a%5==0){
        n++;
        console.log(a);
        if(n==3){
            break
        }
    }

}