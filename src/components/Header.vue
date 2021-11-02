<template>
    <nav class="navbar">
        <div class="container-fluid">
            <ul class="nav">
                <li class="nav-item mt-2 mx-1 bg-primary d-flex justify-content-center align-items-center"
                    @click="formacion = false">
                    <router-link to='/'>INICIO</router-link>
                </li>
                <li class="nav-item mt-2 mx-1 bg-success d-flex justify-content-center align-items-center"
                    @click="formacion = false">
                    <router-link to='/proyectos'>PROYECTOS</router-link>
                </li>
                <li class="nav-item mt-2 mx-1 bg-danger d-flex justify-content-center align-items-center"
                    @click="formacion = true">
                    <router-link to='/formacion'>FORMACIÓN</router-link>
                </li>
                <li class="nav-item mt-2 mx-1 bg-warning d-flex justify-content-center align-items-center"
                    @click="formacion = false">
                    <router-link to='/contacto'>CONTACTO</router-link>
                </li>
            </ul>
            <ul class="nav">
                <li v-if="formacion" class="nav-item mt-2 bg-info d-flex justify-content-center align-items-center"
                    @click="changeContent">
                    <a>CV/CURSOS</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import {eventBus} from '../main.js';

export default {
    data() {
        return {
            formacion: false,
            cv: true
        }
    },
    methods: {
        changeContent() {
            this.cv = !this.cv;
            eventBus.$emit('changeContent',this.cv);
        }
    }
}
</script>

<style scoped>
    li {
        border-radius: 5px;
        width: 150px;
    }
    li a {
        color: #000;
        text-decoration: none;
    }
    li a:hover {
        color: #fff;
    }
</style>
