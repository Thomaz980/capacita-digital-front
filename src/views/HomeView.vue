<script setup>
import Card from "../components/Card.vue";

</script>

<template>
  <header class="header">
    <div class="top">
      <h1>Dashboard</h1>
      <div>
        <img class="fala" src="../assets/img/fala.png">
      </div>
    </div>
  </header>
  <section>
      <div class="content">
          <!-- <Card title="Matemática"  
                route="/" 
                image="../assets/img/curuja.png"
          /> -->
      </div>
  </section>

  <div class="nav">
    <router-link class="link" to="/home">
      <img src="../assets/img/pessoa.png" alt="Home">
    </router-link>
    <router-link class="link" to="/">
      <img src="../assets/img/ouvir.png" alt="Home">
    </router-link>
    <router-link class="link" to="/">
      <img src="../assets/img/casa.png" alt="Home">
    </router-link>
    <router-link class="link" to="/">
      <img src="../assets/img/trofeu.png" alt="Home">
    </router-link>
    <router-link class="link" to="/">
      <img src="../assets/img/conf.png" alt="Home">
    </router-link>
  </div>
</template>

<style scoped>
  .header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    background-color: #3E96C8;
    color: #fff;
    padding: 20px;
    border-radius: 0 0 20px 20px;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0;
    background-color: #3E96C8;
    color: #fff;
    
  }

  .fala {
    width: 50px;
  }

  .content {
    position: absolute;
    top: 2rem;
  }

  .nav {
    display: flex;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #3E96C8;
    padding: 20px;
    align-items: center;
    justify-content: center;
  }

  .link {
    display: inline-block;
  }

  .link img {
    width: 50px;
    margin: 0 10px;
  }
</style>
