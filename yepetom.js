/* New Language */

/*
Regla 1

Si la palabra termina en AR se quita, programar = program

Regla 2

Si empieza por Z se le añade un PE, Zorro = zorrope, zarpar = zarpper

Regla 3

Si la palabra tiene mas de 10 letras, se debe partir por la mitad y unir con un guion en medio

abecedario = abece-dario

Regla 4

Si la palabra es un palindromo, ninguna regla anterior cuenta, pero se devuelve la palabra intercalando letras mayusculas con minusculas
sometemos = SoMeTeMoS

*/

function yepetom(str){
	let translation = str

	//1era regla, slice sirve para cortar
	if(str.toLowerCase().endsWith('ar')){
		translation = str.slice(0, -2)
	}

	//2da regla

	if(str.toLowerCase().startsWith('z')){
		translation += 'pe'
	}

	//3ra regla
	const length = translation.length
	if(length>=10){
		const firstHalf = translation.slice(0, Math.round(length/2))
		const secondHalf = translation.slice(Math.round(length/2))
		translation = `${firstHalf}-${secondHalf}`
	}

	//4ta regla (palindromo)
	const reverse = (str) => str.split('').reverse().join('')

	function minMay(str){
		const length = str.length
		//se va a armar un nuevo translation
		let translation = ''
		let capitalize = true

		for(let i = 0; i<length; i++){
			const char = str.charAt(i)
			//se hace una condicion en una sola linea, capitalize se evalua como true los : serian el else
			//if(capitalize = true){char.toUpperCase}else{char.toLoweCase()}
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return translation
	}
	//si la palabra es igual que la misma al reves, se ejecuta la funcion minMay
	if(str == reverse(str)){
		return minMay(str)
	}


	return translation
}

console.log(yepetom("abecedario"))