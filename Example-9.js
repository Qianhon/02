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

//印出聖誕樹 - 拆解所求成小各個小函式的組合
function toptree(n){
	for(var i=1; i<=n; i++){
		console.log(' '.repeat(n-i)+'*'.repeat(2*i-1))
	}
}

function bottomtree(n){
	for(var i=1; i<=n; i++){
		console.log(' '.repeat(n-1)+'*')
	}
}

function tree(n){
	toptree(n)
	bottomtree(n)
}

//排序就是找N次最小值
function findMin(arr){
	var min = arr[0]
	var minIndex = 0
	for(var i = 1; i<arr.length; i++){
		if (min > arr[i]){
			min = arr [i]
			minIndex = i
		}
	}
	return minIndex
}

function sort(arr){
	var result = []
	var length = arr.length //因為會變動原本array的長度，所以要先儲存
 	for(var i=0; i<length;i++){
  	var minIndex = findMin(arr)
  		result.push(arr[minIndex])
  		arr.splice(minIndex,1)
  	}
  	return result
}

// 壓平多維度陣列(反覆呼叫自己)
function flatten(arr){
	var result = []
	for(var i=0; i<arr.length;i++){
		if(Array.isArray(arr[i])){
			var flatArr = flatten(arr[i]) // 若原始某一項為陣列，那就再做N次直到不是陣列為止
			flatArr.forEach(function(value){
				result.push(value)
			})
		}else{
			result.push(arr[i])
		}
	}
	return result
}
