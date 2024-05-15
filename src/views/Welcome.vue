<script setup>
import { onMounted } from 'vue';
import { converterTextoParaVoz } from "../assets/js/voz.js"; 

const texto = "Click no botão azul para iniciar o aprendizado";

onMounted(() => {
  converterTextoParaVoz(texto);
});

</script>

<template>

  <div class="circle1"></div>  

  <div class="title" >
    <h1>Capacita <br> Digital</h1>
  </div>

  <div class="points" >
    <h1>...</h1>
  </div>

  <div class="in">
    <RouterLink class="route" to="/loading">Iniciar Aprendizado</RouterLink>
  </div>

  <div class="circle2"></div>  

</template>

<style scoped>
  .title {
    margin-top: 205px;
    display: flex;
    align-items: center;
    color: black;
    font-size: 25px;
    font-weight: bold;
  }

  .points {
    display: flex;
    margin: 10px auto ;
    align-items: center;
    color: black;
  }

  .in {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18rem;
    align-items: center;
    background-color: #3e96c8;
    border: 10px solid #3e96c8;
    border-radius: 20px;
  }

  .route {
    color: black;
    font-weight: bold;
    font-size: 15px;
  } 

  .circle1 {
    background-color: #249b9b;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    position: absolute;
    right: -70px;
  }

  .circle2 {
    background-color: red;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: absolute;
    left: -70px;
    bottom: -70px;
  }

  
</style>