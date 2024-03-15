// Write a JavaScript function that reads a JSON file using the fs module in
// Node.js, parses the content into a JavaScript object, modifies the object, and
// then writes the updated object back to the file.

let fs = require('fs') 
function solve(path){
    fs.readFile(path,"utf-8", function(err,data){ 
        if(err){
            console.log("Bhai code galat hai... Sahi krrr..!!!") 
            return;
        }
        let obj= JSON.parse(data)
        obj.forEach(element => {
            let marks= parseInt(element.marks) 
            if(marks>=90) element.grade= 'A+' 
            else if(marks>=80) element.grade='A' 
            else if(marks>=70) element.grade='B+' 
            else if(marks>=60) element.grade='B' 
            else if(marks>=50) element.grade='C' 
            else element.grade='F'
        });
        let obj2= JSON.stringify(obj,null,2); 
        fs.writeFile(path,obj2, function(err){
            if(err){
                console.log("ANdar me error hai.. Sahi kr bhai!!!") 
                return;
            }else{
                console.log("Sahi hai bhai.. jake json dekhle!!!")
            }
        })
    })
}
solve("q6.json")
     
    