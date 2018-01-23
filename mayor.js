//mayor entre arrays
function mayor(arreglo){
	
	
	l = arreglo.length
	let may = 0
	let b = 0
	for(let i=0; i<=l; i++){
		may = b 		
		b = arreglo[i]  
		if(may>b){
			may=b
		}
		

	}
	return may
	

}

const arr = [1,2,34,4,50,40,100]

console.log(mayor(arr))