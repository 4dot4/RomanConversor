function calculadora(roman){


    let ListRoman = ['I','V','X','L','C','D','M'];
    let list = [];
    let ListNumber = [1,5,10,50,100,500,1000];
    let number = 0;
    
    for(let pos in roman){
        list.push(ListRoman.indexOf(roman[pos]));
    }
    for(let pos in list){
        list[pos] = ListNumber[list[pos]];
    }
    number = list[0];
    for(let pos in list){

        if(pos != 0){
            if(number >= list[pos]){
                number += list[pos]; 
            }
            else{
                number = list[pos] - number;
            }
        }
    }
    return number;
}
console.log(calculadora(''));

