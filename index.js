const restaurantes = [
{"nombre": "Rosseta", "ubicacion": "Roma", "tipo":"Italiana", "costo": "$$"},

{"nombre": "Macelleria", "ubicacion": "Roma", "tipo":"Italiana", "costo": "$$"},

{"nombre": "El Parnita", "ubicacion": "Roma", "tipo":"Mexicana", "costo": "$$"},

{"nombre": "Maximo Bistrot", "ubicacion": "Roma", "tipo":"Mexicana", "costo": "$"},

{"nombre": "Bowie", "ubicacion": "Roma", "tipo":"Argentina", "costo": "$$"},

{"nombre": "Villamelon", "ubicacion": "Roma", "tipo":"Española", "costo": "$$"},

{"nombre": "Texas", "ubicacion": "Roma", "tipo":"Gringa", "costo": "$$"},

{"nombre": "Papa guapa", "ubicacion": "Roma", "tipo":"Mexicana", "costo": "$$"},

{"nombre": "Haku", "ubicacion": "Roma", "tipo":"Japonesa", "costo": "$"},

{"nombre": "La casa de Toño", "ubicacion": "Roma", "tipo":"Mexicana", "costo": "$$"}


];

 // let salida = '';
 //
 //  for(let i = 0; i < restaurantes.length; i++){
 //    salida += `${restaurantes[i].nombre}`<ul><li>`${restaurantes[i].ubicacion}`;</li>`${restaurantes[i].tipo}`;<li>`${restaurantes[i].costo}`;</li></ul>
 //
 //  }
 //
 // document.getElementById('mostrandoRestaurantes') .innerHTML = salida



 let salida = '';
for(let i = 0; i < restaurantes.length; i++){
 for (llave  in restaurantes ){

  console.log(restaurantes[llave]);
 }
 document.getElementById('mostrandoRestaurantes') .innerHTML = salida

}










// let nombresRestaurantes = restaurantes.map(function(restaurante) {
//  return restaurante.nombre
//   })
//
//  document.getElementById('mostrandoRestaurantes').innerHTML = nombresRestaurantes;
