let light = "greem";
if(light == "greem"){
    console.log("go");
}else if(light == "yellow"){
    console.log("ccautin");
}else {
    console.log("stop");
}
let bao = "tolerant";
let kris = "intolerant";
if(bao == "tolerant" && kris == "intolerant"){
    console.log(" milk and almons milk coffe");
}else if(bao =="intolerant" &&  kris == "intolerant"){
    console.log("only almone");
}else {
    console.log("milk only");
}
let thermostat = 69;
let funny_number = "xd";
if(thermostat < 68){
    console.log("cold");
}else if(thermostat <= 72 && thermostat >= 68){
    console.log("perfect");
}else if(thermostat >=73 && thermostat <=76){
    console.log("warm");
}else {
    console.log("hot");
}


let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
"Richard"];
let students_new = [];
const bruh = function(...words){
    words.forEach(word => {
        if(word.length >= 5){
            students_new.push(word);
        }
    });
    console.log(...students_new);
}
bruh(...students);

let students_2 = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
"Richard"];
let found = false;
const compare = function(keyword, students){
    
    students.forEach(student => {
        
        if(student == keyword){
            found = true;
            
        }
    });
    if(found == true){
        console.log("found " + keyword);
    }else {
        console.log("nothing found");
    }
}

compare("junshen" , students_2);
compare("Savva", students_2);
compare("Alan", students_2);