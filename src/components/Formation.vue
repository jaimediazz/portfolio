<template>
    <div>
        <div class="d-flex justify-content-center" v-if="cv">
            <iframe class="mt-3" :src="urlCV" frameborder="0" id="formacion"></iframe>            
        </div>
        <div v-else>
            <img class="mt-3" v-for="(image,key) in images" :src="image.url" :alt="image.alt" :key="key"
                style="width: 100%;">
        </div>
    </div>
<!--      style="width:100%; height:700px;"-->
</template>

<script>
import {eventBus} from '../main.js';

export default {
    data() {
        return {
            cv: true,
            urlCV: '../public/pdf/curriculum.pdf',
            images: [
                {url: '../public/img/SecurityCourse.jpeg', alt: 'Curso Seguridad'},
                {url: '../public/img/SinglePageCourse.jpeg', alt: 'Curso Desarrollo Web'}
            ]
        }
    },
    mounted() {
        eventBus.$on('changeContent', (cv) => {
            this.cv = cv;
        })
    }
}
</script>

<style scoped>
    #formacion {
        height: 100vh;
        width: 90%;
    }
</style>
