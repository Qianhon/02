//計算質數數量，並印出所有結果
function isPrime(n){
	if(n===1) return false
	for(var i=2; i<=Math.sqrt(n); i++){
		if(n%i===0){
			return false
		}
	}
	return true
}

var total = 0
for (i = 1; i<=10000; i++){
	if (isPrime(i)){
		console.log(i + ' '+ isPrime(i))
		total += 1
	}
}
console.log('總共有'+ total+ ' 個質數。')

