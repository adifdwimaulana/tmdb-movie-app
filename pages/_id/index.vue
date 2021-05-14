<template>
  <div class="container mx-auto">
      <div class="mt-5">
          <h1>Detail Movie</h1>
      </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive } from '@vue/composition-api'
import { Route } from "vue-router"
import axios from 'axios'

export default {
    
    head() {
        return {

        }
    },
    setup() {
        const state = reactive({
            title: '',
            actors: [],
            overview: '',
            imageUrl: ''
        })


        onMounted(async (): Promise<any> => {
            // const response = await axios.get(`https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=9adbf9b696ac935f8dedfac5c6e8948b&language=en-US`)
            // const result = await response.data.results
            console.log()
        })

        return {
            state
        }
    }
}
</script>