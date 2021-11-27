const head = document.querySelectorAll("#head path");

for(let i=0; i<head.length; i++){
    console.log(`Letter ${i} is ${head[i].getTotalLength()}`);
}