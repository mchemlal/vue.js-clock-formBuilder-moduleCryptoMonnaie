<template>
 <div>
     <v-clock size="300px" border="none" color="#FFFFFF" bg="#4AB7BD" style="margin-top: 100px; margin-bottom: 50px;"></v-clock>
     <div id="clock-international">
     <div style="text-align:center;padding:1em 0;"><h4><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/fr/city/2988507%22%3E"></a><span style="color:gray;">Heure actuelle</span><br />Paris, France</h4> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=fr&size=small&timezone=Europe%2FParis" width="100%" height="90" frameborder="0" seamless></iframe></div>
     <div style="text-align:center;padding:1em 0;"><h4><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/fr/city/2643743%22%3E"></a><span style="color:gray;">Heure actuelle</span><br />London, Royaume-Uni</h4> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=fr&size=small&timezone=Europe%2FLondon" width="100%" height="90" frameborder="0" seamless></iframe></div>
     <div style="text-align:center;padding:1em 0;"><h4><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/fr/city/1816670%22%3E"></a><span style="color:gray;">Heure actuelle</span><br />Beijing, Chine</h4> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=fr&size=small&timezone=Asia%2FShanghai" width="100%" height="90" frameborder="0" seamless></iframe></div>
     <div style="text-align:center;padding:1em 0;"><h4><a style="text-decoration:none;" href="https://www.zeitverschiebung.net/fr/city/5128581%22%3E"></a><span style="color:gray;">Heure actuelle</span><br />New York City, États-Unis (USA)</h4> <iframe src="https://www.zeitverschiebung.net/clock-widget-iframe-v2?language=fr&size=small&timezone=America%2FNew_York" width="100%" height="90" frameborder="0" seamless></iframe></div>
     </div>
 </div>
</template>

<script>
import VClock from 'vue-clock2'

export default {
    components: {
        VClock,
    }
}

</script>

<style>
#clock-international {
    display: flex;
    flex-direction: row;
    justify-content: center;
}

</style>