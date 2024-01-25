import Layout from '../layouts/Layout.astro';
import Intro from '../components/Intro.astro';
import Services from '../components/services.astro';
import Inicia from '../components/inicia.astro';

<Fragment>
<Layout title="BISO INNOVATION | ">
<main>


<section class="intro">
<div class="container">
<div class="wrapper">
<div class="description">
<Intro title="Bienvenido" subtitle="Somos el primer corporativo conformado por Robots, Inteligencia Artificial y Humanos" href="#" button="Más Detalles" />
</div>
<video width="800" autoplay loop muted>
<source src="http://joseantonioh17.sg-host.com/wp-content/uploads/2024/01/Video-para-Facebook-Emprendimiento-Delicado-Verde.mp4" type="video/webm" />
</video>
</div>

</div>
</section>
{/** End Intro*/}

{/** Start about*/}
{/** Start about*/}
<section class="about">
<div class="container">
<div class="wrapper">
<img class="img-about" src="IA.webp" alt="" srcset="" />
<div class="description-about">
<h4>SOBRE BISO INNOVATION</h4>
<h2>Parte de nuestra misión es empoderar a cada negocio mediante la Inteligencia Artificial.</h2>
<p>Análisis de datos, Machine learning, desarrollo e integraciones que permiten llevar a su empresa al siguiente nivel.</p>
</div>
</div>
</div>
</section>
{/** End about*/}

{/** Services */}

<section class="services">
<div class="serv-cont">
<h4>NUESTRO PROCESO</h4>
<h2>Un proceso simple y ligero</h2>
<div class="grid">
<Services number="01" title="Delimitamos la solución" paragraph="Desde la perspectiva del cliente, del usuario, del stakeholder." />

<Services number="02" title="Recabamos Datos" paragraph="Diseño de la solución e integraciones, Herramientas y apoyo en IA." />

<Services number="03" title="Metodologías ágiles" paragraph="Desarrollo, entregables, funcionalidad, avance." />
</div>
</div>
</section>
{/** End Services */}

{/** Start Inicia */}

<section class="GetintTouch">
<div class="container">

<Inicia title="Inicia con nosotros hoy" text="Nuestros expertos estan listos para atenderle" href="#" button="Más Detalles" />

</div>

</section>
{/** End Inicia */}

{/** start footer*/}
<footer class="footer">
<div class=".footer-cont">
<div class="footer-grid">
<div class="first">
<img class="footer-img" src="https://i2.wp.com/bisoinnovation.com/wp-content/uploads/2021/09/cropped-BISO-INNOVATION-LOGO.png?resize=300%2C96&ssl=1" alt="BisoInnovation" />
<p>
Somos el primer corporativo conformado por Robots, Inteligencia Artificial y Humanos.
</p>
</div>
<div class="third">
<h2>
Social media marketing
</h2>
<p>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti qui soluta cupiditate
</p>
</div>
<div class="second">
<h2>
Contacto</h2>
<div class="content">
<ul>
<li>
<img src="assets/email-white.png" style="width: 20px; height: 20px;" />
<a href="#" style="color:white;font-size: 16px;">+52-664-360-9345</a>
</li>
<br />
<li>
<img src="assets/telefono-white.png" style="width: 20px; height: 20px;" />
<a href="#" style="color:white;font-size: 16px;text-transform: none;">info@bisoinnovation.com</a>
</li>
<br />
<li>
<img src="assets/ubicacion-white.png" style="width: 20px; height: 20px;" />
<a href="#" style="color:white;font-size: 16px;text-transform: none;">Torre Platino L7, Zona Urbana Rio Tijuana, Tijuana, B.C. México</a>
</li>
</ul>
</div>
</div>
</div>
<br />
<div class="privacidad">
<p class="tex1" style="text-align: center; border-top: solid; border-width: 1px; border-color: rgba(255, 255, 255, 0.219); padding-top: 30px; margin-right: 160px; margin-left: 160px; font-size: 15px;">
Biso Digital@ 2023. Todos los
<a href="#" style="color: #ab8634; text-transform: none;font-size: 15px; font-weight: 600;">derechos reservados</a>.
<a href="#" style="color: #ab8634;text-transform: none;font-size: 15px;font-weight: 600;">Términos y condiciones</a>.
<a href="#" style="color: #ab8634;text-transform: none;font-size: 15px;font-weight: 600;">Aviso de privacidad</a>.
</p>
</div>
</div>
</footer>
{/** End Footer */}

</main>
</Layout>

<style>{`

:root {
  --mainColor: #f5f8fd;
  --color1: #000000;
  --color2: #000000;
}

* {
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
}

/* RESET */
ul {
  list-style: none;
}
a {

  font-size: 12px;
  text-decoration: none;
}

    /* GOLBAL CLASSES */

.container {
  width: 1250px;
  margin: 0 auto;
  overflow: hidden;
  padding-right: 75px;
  padding-left: 75px;
}

.wrapper {
  padding-top: 20px;
  padding-bottom: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.grid{
  padding: 2rem;
  display:grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
      gap: 2rem;
}
   
.intro video {
  width: 50%;
}

/* Intro */
.intro {
  padding-bottom: 40px;
  margin-top: 0px;
  background-color: #fdfdfd;
}

/* About */

.about{
   padding-bottom: 60px;
}
.about .description-about {

  margin-right: 0px;
}

.about .description-about h4 {
  font-size: 14px;
  color: #ab8634;
  margin-bottom: 10px;
  font-weight: 200;
  
}
.about .description-about h2 {
  font-size: 38px;
  color: var(--color1);
  margin-bottom: 20px;
  font-family: 'Josefin Sans', sans-serif;
  word-spacing: 7px;
  letter-spacing: 2px;
}

.about .description-about p {
  color: var(--color2);
  font-size: 18px;
  font-weight: 200;
}

.img-about{
    width: 50%;
  margin-right: 70px;
    display: inline-block;
    transition: transform .8s ease-in-out;
}
.img-about:hover{
    transform: rotate(3deg);
}

/* Services */
.services{
  padding-bottom: 80px;
  padding-top: 80px;
  margin-left: -15px;
  margin-right: -15px;
  background-size: 300% 300%;
background-image: linear-gradient(-45deg, #212529 0%, black 20%, #212529 51%, black 100%);
-webkit-animation: AnimateBG 35s ease infinite;
        animation: AnimateBG 35s ease infinite;
        
}
.serv-cont{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-right: 30px;
  padding-left:30px;
}

.services .serv-cont h4{
  font-size: 14px;
  color: white;
  margin-bottom: 20px;
  font-weight: 200;
text-align: center;
}
.services .serv-cont h2{
  font-size: 35px;
  color: white;
  margin-bottom: 20px;
text-align: center;
font-family: 'Josefin Sans', sans-serif;
 
}

/* Get */
.GetintTouch{
 
 /* background-image: url("http://joseantonioh17.sg-host.com/wp-content/uploads/2024/01/Diseno-sin-titulo.png");
  background-size: contain;
background-repeat: no-repeat;
  background-position: center; */
  padding-bottom: 60px;
  padding-top: 50px;
 
}

/* start footer*/
.footer{
  padding-top: 80px;
  padding-bottom: 40px;
  background-size: 300% 300%;
background-image: linear-gradient(-45deg, #212529 0%, black 20%, #212529 51%, black 100%);
-webkit-animation: AnimateBG 35s ease infinite;
        animation: AnimateBG 35s ease infinite;

  margin-right: -15px;
  margin-left: -15px;
  margin-bottom: -15px;
}
.footer-cont{
  width: 1200px;
  margin: 0 auto;
  overflow: hidden;
  padding-right: 30px;
  padding-left: 30px;
}

.footer-grid{
  padding: 2rem;
  display:grid;
  grid-template-columns: repeat(3,minmax(0,1fr));
      gap: 2rem;
      margin-left: 100px;
      margin-right: 100px;
}

.footer-img{
  width: 65%;
}

.footer p{
  color: white;
  text-align: justify;
  
}

.footer h2{
  color: white;
  font-family: 'Josefin Sans', sans-serif;
}

.first , .third , .second{
  margin-left: 40px;
  margin-right: 40px;
}

@-webkit-keyframes AnimateBG {
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
}

@keyframes AnimateBG {
0% {
  background-position: 0% 50%;
}
50% {
  background-position: 100% 50%;
}
100% {
  background-position: 0% 50%;
}
}

/****************** Responsive ******************/

@media screen and (min-width:360px) and (max-width:736px) {
  /*Global */
  .container {
    width: auto;
    padding-left: 20px;
    padding-right: 20px;

      }
      .wrapper {
        flex-direction: column;
      }


/* Start intro */
.intro video {
  margin-top: 70px;
  width: 70%;
}
 .intro .description {
  margin-right: 0;
}
/* End intro */

/* start about */
.about .description-about h4 {

  text-align: center;
  
}

.about .description-about h2 {

  text-align: center;
  
}
.about .description-about p {

  text-align: center;
  
}

.img-about{
    width: 82%;
    display: inline-block;
   margin-right: 0;

}
/*end about */

/* start services */

.services{
  margin-left: -8px;
  margin-right: -8px;

}
.serv-cont{
width: auto;
    padding-left: 20px;
    padding-right: 20px;
    
}
.services .grid{

  grid-template-columns: repeat(1,minmax(0,1fr));
  padding-left:10px;
  padding-right: 10px;
    
}

/* end services */


/* start footer */

.footer{
  margin-left: -8px;
  margin-right: -8px;
  padding-bottom: 10px;
}
.footer-cont{
width: auto;
    padding-left: 20px;
    padding-right: 20px;
    
  }
  .footer-grid{

    grid-template-columns: repeat(1,minmax(0,1fr));
    padding-left:10px;
    padding-right: 10px;
      
  }

  .footer-img{
    width: 80%;
    padding-bottom: 20px;
  }
  
  .footer p{
    color: white;
    text-align: center;
    
  }
  
  .footer h2{
    color: white;
    font-family: 'Josefin Sans', sans-serif;
    text-align: center;
  }
  
  .first , .third , .second{
margin: 0;
  }

  .footer .footer-grid .second .content{
    text-align: center;
  }

  br{
    display: none;
  }
 
/* end footer */
}
`}</style>

</Fragment>;
