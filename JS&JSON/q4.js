// Write a JavaScript function that takes a JSON string as input and parses it into
// a JavaScript object. Handle possible errors using try/catch blocks.
let data=`[
    {
        "name":"sarthak",
        "marks":"65"
    },
    {
        "name":"abc",
        "marks":"76"
    
    },
    {
        "name":"xyz",
        "marks":"89"
    
    }
    ]`;
    try{
    let s=JSON.parse(data) 
        if(s!=null && Array.isArray(s)){
            console.log(s);
        }
    }catch(error){
        console.log("Error hai code me... sahi kr bhai!!!!")
    }
    