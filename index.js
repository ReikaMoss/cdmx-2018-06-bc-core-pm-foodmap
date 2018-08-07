const restaurantes = [
{"nombre": "Rosseta", "ubicacion": "Roma", "tipo":"Italiana", "costo": "$$"},

{"nombre": "Macelleria", "ubicacion": "Roma", "tipo":"Italiana", "costo": "$$"},

{"nombre": "El Parnita", "ubicacion": "Roma", "tipo":"Mexicana", "costo": "$$"},

{"nombre": "Maximo Bistrot", "ubicacion": "Roma", "tipo":"Mexicana", "costo": "$"},

{"nombre": "Bowie", "ubicacion": "Roma", "tipo":"Argentina", "costo": "$$"}

];

let salida = '';

 for(let i = 0; i < restaurantes.length; i++){
   salida += `<li>${restaurantes[i].nombre}</li>`;
 }

document.getElementById('mostrandoRestaurantes') .innerHTML = salida

restaurantes.sort();
console.log(restaurantes)







// let nombresRestaurantes = restaurantes.map(function(restaurante) {
//  return restaurante.nombre
//   })
//
//  document.getElementById('mostrandoRestaurantes').innerHTML = nombresRestaurantes;
