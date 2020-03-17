function main(str1, str2){
    let mapping = {};
    if(str1.length !== str2.length){
        return false;
    }
    for(i = 0; i < str1.length; i++){
        let char1 = str1.charAt(i);
        let char2 = str2.charAt(i);
        if(Object.keys(mapping).includes(char1)){
            if(Object.keys(mapping)[char1] !== char2){
                return false;
            }
        }
        else{
            mapping[char1] = char2;
        }        
    }
    return true;
}

console.log(main(process.argv[2], process.argv[3]));