<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  }
});

</script>

<template>
    <!-- <div class="card">
        <div class="img">
            <img src={{ props.image }} alt="Imagem do card">
        </div>
        <div class="card-header">
            <h3>{{ props.title }}</h3>
        </div>
        <div class="card-body">
            <router-link to={{ props.route }}></router-link>
        </div>
    </div> -->
</template>

<style scoped>
    .card {
        width: 300px;
        height: 300px;
        background-color: #fff;
        border-radius: 20px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        margin: 20px;
    }

    .img {
        width: 100%;
        height: 150px;
        border-radius: 20px 20px 0 0;
        overflow: hidden;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .card-header {
        padding: 10px;
        text-align: center;
    }

    .card-body {
        padding: 10px;
        text-align: center;
    }
</style>

