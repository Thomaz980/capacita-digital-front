<script setup>
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import Curuja from '../components/Curuja.vue';

const router = useRouter();

onMounted(() => {
  setTimeout(() => {
    router.push('/home');
  }, 3000);
});

</script>

<template>
    <div class="curuja">
        <Curuja />
    </div>

    <div class="progresso">
        <div class="barra1"></div>
        <div id="barra2"></div>
    </div>

    <div class="circle1"></div>  
    <div class="circle2"></div> 
</template>

<style scoped>
    .circle1 {
    position: absolute;
    top: 20px;
    background-color: #249b9b;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    right: -80px;
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

  .progresso {
        justify-content: center;
        align-items: center;
    }

    .barra1 {
        display: flex;
        margin-top: 10px;
        width: 20rem;
        height: 30px;
        background-color: #c1bebe;
        border-radius: 20px;
    }

    #barra2 {
        position: relative;
        top: -30px;
        width: 20px;
        height: 30px;
        background-color: #4de024;
        border-radius: 20px;
    }
</style>
