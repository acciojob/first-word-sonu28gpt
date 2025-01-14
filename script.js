function firstWord(s) {
  // your code here
	if(s.trim()=='')return '';

	s=s.trim();
	let i=0;
	let temp='';
	while(i<s.length){
		if(s[i]==' ')return temp;
		temp+=s[i];
		i++;
	}
	return temp;
}

// Do not change the  code below

const s = prompt("Enter String:");
alert(firstWord(s));
