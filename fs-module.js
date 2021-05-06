//readFile
//writeFile
//AppendFile
//Delete
//Rename

const fs = require("fs");

//fs.writeFileSync("./contents/demoFile.txt", "We are learning JavaScript. ");
//fs.oppendFileSync("./contents/demoFile.txt", "We are learning NodeJs");

// fs.rename("./contents/demoFile.txt", "./contents/RenammmedFile.text", (err) => {
//     if (err){
//         console.log(err);
//     } else {
//         console.log("Rename Successful");
//     }
// });

console.log("before");

fs.readfile("./contents/RenamedFile.txt", "utf-8", (err,data) =>{
    if(err){
        console.log(err);
    }else{
        fs.appendFile(
            "./contents/RenamedFile.txt",
            "Is this a synchronus process?",
            (err) => {
                console.log(err);
            }
        );
        fs.readFile("./contents/RenamedFile.txt", "utf-8", (err,data) => {
            if (err){
                console.log(err);   
            }else{
                console.log(data);
            }
        });
    }
});

console.log("after");
