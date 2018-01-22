const nombre = 'Billie'

const dias = [
	'lunes',
	'martes',
	'miercoles',
	'jueves',
	'viernes',
	'sabado',
	'domingo'
]

function correr(){
	const min = 5
	const max = 15
	return Math.round(Math.random() * (max-min)) + min
}


let totalKms = 0
const l = dias.length
for (let i = 0; i < l; i++){
	const kms = correr()
	totalKms += kms
	console.log(`El día ${dias[i]} ${nombre} corrió ${kms}kms`)
}
const promedioKms = totalKms / dias.length
console.log(`En promedio, ${nombre} corrió ${promedioKms.toFixed(2)}`)