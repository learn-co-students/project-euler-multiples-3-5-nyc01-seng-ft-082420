function sumUp(num){
    let currentNum = num;
    let multiplies = [];
    let sum = 0;
    while(currentNum > 0){
      if(currentNum %3 === 0 || currentNum %5 === 0){
          multiplies.push(currentNum);
          currentNum = currentNum - 1;
      } 
    } 
      for(let i = 0; i < multiplies.length; i++){
          sum +=multiplies[i]
      }
    return sum;
}