var headd = `
<h1 class="titulo">La cocina de Juan</h1>
<div class="flex">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a class="navbar-brand" href="boot.html">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
            <a class="nav-link" href="#">Acerca de</a>
            <a class="nav-link" href="#">Contacto</a>
            <a class="nav-link" href="#">Sucursal</a>
            <a class="nav-link" href="#">Registrese</a>
            <a class="nav-link" href="tpjava.html">Nuevos clientes</a>
            </div>
        </div>
        </div>
    </nav>
</div>`

document.getElementById("Idheader").innerHTML = headd


var foot = `
<br>
<div class="iconos">

    <i class="fa-brands fa-twitter"></i>
    <i class="fa-brands fa-facebook-f"></i>
    <i class="fa-brands fa-instagram"></i>
    <i class="fa-brands fa-linkedin-in"></i>

</div>

<h3>Derechos reservados @2020</h3>

<br>`

document.getElementById("Idfooter").innerHTML = foot

