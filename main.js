function main(str1, str2){
    let mapping = {};
    if(str1.length !== str2.length){ //If they arent the same length then it isnt one to one
        return false;
    }
    for(i = 0; i < str1.length; i++){
        let char1 = str1.charAt(i);
        let char2 = str2.charAt(i);
        if(Object.keys(mapping).includes(char1)){ //if the char is already in the mapping and maps to a diff char, it is not one to one
            if(mapping[char1] !== char2){ 
                return false;
            }
        }
        else if(Object.values(mapping).includes(char2)){ //need to make sure two diff chars dont map to the same char in str2
            return false;
        }
        else{ //Add the char to the mapping
            mapping[char1] = char2;
        }        
    }
    return true; //If it goes to the end then it is one to one
}

console.log(main(process.argv[2], process.argv[3]));