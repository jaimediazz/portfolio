<template>
    <div class="container d-flex justify-content-center align-items-center vh-100">
        <div class="row">
            <div class="col-12 col-lg-3 mb-4">
                <descripcion-card></descripcion-card>
            </div>
            <div class="col-12 col-lg-9">
                <div class="row">
                    <div class="col-12 col-lg-12 mb-4">
                        <div class="card bg-success h-100">
                            <div class="card-body">
                                <div class="d-flex flex-column">
                                    <h5 class="card-title">PROYECTOS</h5>
                                    <button class="btn btn-link btn-sm">
                                        <router-link to="/proyectos"> Más información> </router-link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    <div class="col-12 col-lg-6 mb-4">
                        <div class="card bg-danger h-100">
                            <div class="card-body">
                                <div class="d-flex flex-column">
                                    <h5 class="card-title">FORMACIÓN</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                                        Pariatur, quae perspiciatis odit sunt iure qui architecto 
                                        animi quisquam quod iste.</p>
                                    <button class="btn btn-link btn-sm">
                                        <router-link to="/formacion"> Más información> </router-link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>                    
                    <div class="col-12 col-lg-6 mb-4">
                      <div class="card bg-warning h-100">
                        <div class="card-body">
                          <div class="d-flex flex-column">
                            <h5 class="card-title">CONTACTO</h5>
                            <button class="btn btn-link btn-sm">
                                <router-link to="/contacto"> Más información> </router-link>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>                
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Descripcion from './Description.vue';

export default {
    components: {
        descripcionCard: Descripcion
    }
}
</script>

<style scoped>
    button a {
        color: #000;
        text-decoration: none;
    }
    h5 {
        font-weight: bold;
    }
</style>
