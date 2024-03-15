// Write a JavaScript function that takes a JavaScript object as input and converts
// it into a JSON string.

function solve(obj){ 
    try{
        let s= JSON.stringify(obj) 
        return s
    }catch(error){
        console.log("Error in conversion") 
        return null;
    }
    }
    
    let obj={
        name : "Sarthak", class : "third class", hobby : "bakaiti"
    };
    let s= solve(obj) 
    if(s!= null){
        console.log(s)
    }else{
        colsole.log("Bhai code sahi kr.. aise to naa ho payega !!!")
    }
    