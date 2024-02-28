var datos = [
    {
       img : "focaccia.jpg",
       nombre : "Focaccia",
       descripcion : "La focaccia es muy popular en Italia y generalmente se aliña con aceite de oliva y sal gruesa, aromatizándola con hierbas como el romero."
   },

    {
       img : "goulash-hungaro.jpg",
       nombre : "Goulash",
       descripcion : "Estofado picante de carne originario de Hungría."
   },

    {
       img : "83.-ceviche-blanco-peruano.jpg",
       nombre : "Ceviche",
       descripcion : "Platillo preparado con pescado crudo marinado en jugo de limón y condimentado con otros ingredientes que varían según la región."
   },

    {
       img : "main-header.avif",
       nombre : "Sushi",
       descripcion : "Plato de la gastronomía japonesa con base de arroz condimentado con vinagre y azúcar."
   },

    {
       img : "tacos-clasicos.webp",
       nombre : "Tacos",
       descripcion : "Preparación culinaria muy popular de México que consiste en una tortilla, generalmente de maíz, que comúnmente se enrolla para contener dentro diversos ingredientes y algún tipo de salsa y verdura."
   },

    {
       img : "images.jpg",
       nombre : "Arepas",
       descripcion : "Especie de pan de forma circular, hecho con maíz ablandado a fuego lento y luego molido, o con harina de maíz precocida, que se cocina sobre un budare o una plancha."
   },

    {
       img : "paella.webp",
       nombre : "Paella",
       descripcion : "Se elabora con una mezcla de carne, mariscos y verduras, y se cocina lentamente para crear una capa crujiente en la parte inferior."
   },


    {
       img : "TOA109_18-1.webp",
       nombre : "Falafell",
       descripcion : "Consiste en bolas fritas de pasta de garbanzos u otras legumbres aliñada con cebolla, ajo, cilantro o perejil y especias."
   },

    {
       img : "milanesa_de_carne_11894_600.jpg",
       nombre : "Milanesa",
       descripcion : "Es el filete de carne aviar rebozado con pan rallado o harinas, huevos o no, leche o no, agregado o no de sal, especias y condimentos, enfriado."
   },

]

var i = 0;
var cad="";

for(i=0 ; i<9 ; i++){

    cad+=`<div class="division"><div class="flex"><img src="${datos[i].img}" alt=""></div>
    <h5>${datos[i].nombre}</h5>
    <div class="flex2">${datos[i].descripcion}</div></div>`

document.getElementById("grid-container").innerHTML=cad;
}