
function checkAnagram(str1,str2){
	let temp1 = str1.split("").sort().join("");
	let temp2 = str2.split("").sort().join("");
	if (temp1==temp2){
		return true;
	}
	else{
		return false;
	}

console.log(checkAnagram('aam','maa'));
}
