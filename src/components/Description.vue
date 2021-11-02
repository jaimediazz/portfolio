<template>
  <div class="card bg-primary h-100">
      <div class="card-body">
          <div class="d-flex flex-row mb-2">
            <img :src="imgRoute" alt="Foto de perfil" 
            class="border border-dark border-1 rounded-circle dimensiones"> 
            <h5 class="card-title ps-2">JAIME DÍAZ RAMÍREZ</h5>
          </div>
          <div class="d-flex flex-column">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Autem esse dolorem aliquid ipsa ea sed recusandae nemo 
              pariatur officiis, corrupti, eligendi sequi consequuntur, 
              corporis velit quis voluptates beatae nisi explicabo.</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgRoute: '../public/img/foto_perfil.jpeg'
    }
  }
}
</script>

<style scoped>
  .dimensiones {
    width: 56px; 
    height: 56px;
  }
  h5 {
      font-weight: bold;
  }
</style>
