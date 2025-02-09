//Write a function to find the longest common prefix string amongst an array
//of strings.
//If there is no common prefix, return an empty string ""

var strs = ["flower","flow","flight"]
var longestCommonPrefix = function(strs) {
  if(strs.length === 0) return ""
  let prefix = strs[0]
  for (let i = 1; i < strs.length; i++){
    //Enquanto o prefixo não corresponder ao início da string atual, encurta o prefixo
    while(strs[i].indexOf(prefix) !== 0){
        prefix = prefix.substring(0, prefix.length - 1)
        if(prefix === "") return ""
    }
  } 
  
  return prefix
};
console.log(longestCommonPrefix(strs))
