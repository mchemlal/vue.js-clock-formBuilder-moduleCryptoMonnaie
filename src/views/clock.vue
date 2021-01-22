<template>
 <div>
    <div>
        <!-- Affichage de l'horloge et modification du css -->
        <v-clock id="clock" size="300px" border="none" color="#FFFFFF" bg="#4AB7BD" style="margin-top: 100px; margin-bottom: 50px;"></v-clock>
        <p class="brand">Team Boulard</p>
     </div>

     <div id="clock-international">
         <!-- iframe pour decorer la page -->
        <div style="text-align:center;padding:1em 0;"><h4><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/fr/city/2988507%22%3E"></a><span style="color:gray;">Heure actuelle</span><br />Paris, France</h4> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=fr&size=small&timezone=Europe%2FParis" width="100%" height="90" frameborder="0" seamless></iframe></div>
        <div style="text-align:center;padding:1em 0;"><h4><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/fr/city/2643743%22%3E"></a><span style="color:gray;">Heure actuelle</span><br />London, Royaume-Uni</h4> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=fr&size=small&timezone=Europe%2FLondon" width="100%" height="90" frameborder="0" seamless></iframe></div>
        <div style="text-align:center;padding:1em 0;"><h4><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/fr/city/1816670%22%3E"></a><span style="color:gray;">Heure actuelle</span><br />Beijing, Chine</h4> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=fr&size=small&timezone=Asia%2FShanghai" width="100%" height="90" frameborder="0" seamless></iframe></div>
        <div style="text-align:center;padding:1em 0;"><h4><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/fr/city/5128581%22%3E"></a><span style="color:gray;">Heure actuelle</span><br />New York City, États-Unis (USA)</h4> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=fr&size=small&timezone=America%2FNew_York" width="100%" height="90" frameborder="0" seamless></iframe></div>
     </div>
 </div>
</template>

<script>
// import librarie vueclock 2 avec le package vclock
import VClock from 'vue-clock2'

export default {
    components: {
        VClock,
    }
}

</script>

<style>
@font-face {
 font-family: "Tangerine";
 src: url(https://fonts.gstatic.com/s/tangerine/v12/IurY6Y5j_oScZZow4VOxCZZMprNA4A.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

#clock {
 animation-iteration-count: infinite;
       transition: none;  width:500px; background:#000;
      box-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #fff, 0 0 20px #2c3e50,
    0 0 35px #2c3e50, 0 0 40px #2c3e50, 0 0 50px #2c3e50, 0 0 75px #2c3e50,
    inset 0 0 5px #fff, inset 0 0 10px #fff, inset 0 0 15px #fff,
    inset 0 0 20px #2c3e50, inset 0 0 35px #2c3e50, inset 0 0 40px #2c3e50,
    inset 0 0 50px #2c3e50, inset 0 0 75px #2c3e50;
    
}
#clock-international {
    display: flex;
    flex-direction: row;
    justify-content: center;
    position:relative;
    margin-top:250px ;
}

.brand{
    font-size:24px;
    font-style:italic;
    font-weight:bold;
    text-align:center;
    z-index: 0;
    margin-top:-275px;
    opacity: 0.6;
    font-family : "Tangerine";
}

</style>