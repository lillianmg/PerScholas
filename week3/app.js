function addList(...numbers) {
     
        if (numbers.length === 0) {
            return 0;

           } else {
        let total = 0;
        for(let i=0; i<numbers.length; i++){
            total += numbers[i];
        } return total;
      }
        
}

console.log(addList(1,50,1.23));