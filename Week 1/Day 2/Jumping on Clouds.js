'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c) {
let k = 0;
    let i = 0;
    let d ;
    while(i<c.length){
        if(c[i]==1){
            d=1
            
        }
        else if(c[i+2]!= undefined && c[i+2]==0){
            k+=1;
            d = 2;
            
        }
        else if(c[i+2]!= undefined && c[i+2]==1){
            if(c[i+1]==0){
                d=1;
                k+=1;
            }
            else{
                break;
            }
        }
        else if(!c[i+2]){
            if(c[i+1]!= undefined && c[i+1]==0){
                k+=1;
                break;
                
            }
        }
        i=i+d;
       
    }

    return k;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

    let result = jumpingOnClouds(c);

    ws.write(result + "\n");

    ws.end();
}
