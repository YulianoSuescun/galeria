window.onload=manejarClic;

var cambiarimg;
cambiarimg="<img src='";
var cerrar="' height=40vw' width='50vw'/>";
var cambiarimgvolver="<img src='Imagenes/background.jpg' width='50vw' height='40vw'/>";

function manejarClic() {
	var img1=document.getElementById("img1");
	img1.addEventListener("click",function() {
	mostarPermanente("Imagenes/img1.jpg"); 
	});
	img1=document.getElementById("img1");
	img1.addEventListener("mouseover",function() {
	mostarMientras("Imagenes/img1.jpg"); 
	});
	img1.addEventListener("mouseout",desaparecemientras);

	var img2=document.getElementById("img2");
	img2.addEventListener("click",function() {
	mostarPermanente("Imagenes/img2.jpg"); 
	});
	img2=document.getElementById("img2");
	img2.addEventListener("mouseover",function() {
	mostarMientras("Imagenes/img2.jpg"); 
	});
	img2.addEventListener("mouseout",desaparecemientras);

	var img3=document.getElementById("img3");
	img3.addEventListener("click",function() {
	mostarPermanente("Imagenes/img3.jpg"); 
	});
	img3=document.getElementById("img3");
	img3.addEventListener("mouseover",function() {
	mostarMientras("Imagenes/img3.jpg"); 
	});
	img3.addEventListener("mouseout",desaparecemientras);

	var img4=document.getElementById("img4");
	img4.addEventListener("click",function() {
	mostarPermanente("Imagenes/img4.jpg"); 
	});
	img4=document.getElementById("img4");
	img4.addEventListener("mouseover",function() {
	mostarMientras("Imagenes/img4.jpg"); 
	});
	img4.addEventListener("mouseout",desaparecemientras);

	var img5=document.getElementById("img5");
	img5.addEventListener("click",function() {
	mostarPermanente("Imagenes/img5.jpg"); 
	});
	img5=document.getElementById("img5");
	img5.addEventListener("mouseover",function() {
	mostarMientras("Imagenes/img5.jpg"); 
	});
	img5.addEventListener("mouseout",desaparecemientras);

	var img6=document.getElementById("img6");
	img6.addEventListener("click",function() {
	mostarPermanente("Imagenes/img6.jpg"); 
	});
	img6=document.getElementById("img6");
	img6.addEventListener("mouseover",function() {
	mostarMientras("F:/Javascript/Cambiar Imagenes/Imagenes/img6.jpg"); 
	});
	img6.addEventListener("mouseout",desaparecemientras);

	var img7=document.getElementById("img7");
	img7.addEventListener("click",function() {
	mostarPermanente("Imagenes/img7.jpg"); 
	});
	img7=document.getElementById("img7");
	img7.addEventListener("mouseover",function() {
	mostarMientras("Imagenes/img7.jpg"); 
	});
	img7.addEventListener("mouseout",desaparecemientras);

	var img8=document.getElementById("img8");
	img8.addEventListener("click",function() {
	mostarPermanente("Imagenes/img8.jpg"); 
	});
	img8=document.getElementById("img8");
	img8.addEventListener("mouseover",function() {
	mostarMientras("Imagenes/img8.jpg"); 
	});
	img8.addEventListener("mouseout",desaparecemientras);

	var img9=document.getElementById("img9");
	img9.addEventListener("click",function() {
	mostarPermanente("Imagenes/img9.png"); 
	});
	img9=document.getElementById("img9");
	img9.addEventListener("mouseover",function() {
	mostarMientras("Imagenes/img9.png"); 
	});
	img9.addEventListener("mouseout",desaparecemientras);

	var img10=document.getElementById("img10");
	img10.addEventListener("click",function() {
	mostarPermanente("Imagenes/img10.jpg"); 
	});
	img10=document.getElementById("img10");
	img10.addEventListener("mouseover",function() {
	mostarMientras("Imagenes/img10.jpg"); 
	});
	img10.addEventListener("mouseout",desaparecemientras);
}
function mostarPermanente(img){
	
	cambiarimg +=img;
	cambiarimg +=cerrar;
	var mostrar=document.getElementById('imgprinci').innerHTML = cambiarimg;
	cambiarimgvolver=cambiarimg;
	cambiarimg="<img src='";
}
function mostarMientras(img){
	cambiarimg +=img;
	cambiarimg +=cerrar;
	var mostrar=document.getElementById('imgprinci').innerHTML = cambiarimg;
	
	cambiarimg="<img src='";
}
function desaparecemientras() {
	var mostrar=document.getElementById('imgprinci').innerHTML = cambiarimgvolver;
}