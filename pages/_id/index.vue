<template>
  <div class="container mx-auto">
      <div class="mt-5">
          <h4 class="text-2xl font-bold">{{ state.title }} ({{ state.releaseDate }})</h4>
            <div class="grid-rows-1">
                <div class="grid grid-cols-3 mt-4 gap-8">
                    <img :src="'https://image.tmdb.org/t/p/original' + state.imageUrl" style="width: 30rem; height: 30rem;" />
                    <div class="col-span-2">
                        <div class="grid-rows-1 mb-2">
                            <div class="grid grid-cols-12">
                                <p class="font-bold col-span-2">Title</p>
                                <p class="col-span-10">: {{state.title}}</p>
                            </div>
                        </div>
                        <div class="grid-rows-1 mb-2">
                            <div class="grid grid-cols-12">
                                <p class="font-bold col-span-2">Release Date</p>
                                <p class="col-span-10">: {{state.releaseDate}}</p>
                            </div>
                        </div>
                        <div class="grid-rows-1 mb-2">
                            <div class="grid grid-cols-12">
                                <p class="font-bold col-span-2">Genre</p>
                                <p class="col-span-10">: {{state.genres}}</p>
                            </div>
                        </div>
                        <div class="grid-rows-1 mb-2">
                            <div class="grid grid-cols-12">
                                <p class="font-bold col-span-2">Language</p>
                                <p class="col-span-10">: {{state.language}}</p>
                            </div>
                        </div>
                        <div class="grid-rows-1 mb-2">
                            <div class="grid grid-cols-12">
                                <p class="font-bold col-span-2">Status</p>
                                <p class="col-span-10">: {{state.status}}</p>
                            </div>
                        </div>
                        <div class="grid-rows-1 mb-2">
                            <div class="grid grid-cols-12">
                                <p class="font-bold col-span-2">Rating</p>
                                <p class="col-span-10">: {{state.rating}}/10</p>
                            </div>
                        </div>
                        <div class="grid-rows-1 mb-2">
                            <div class="grid grid-cols-12">
                                <p class="font-bold col-span-2">Budget</p>
                                <p class="col-span-10">: ${{state.budget}}</p>
                            </div>
                        </div>
                        <div class="grid-rows-1 mb-2">
                            <div class="grid grid-cols-12">
                                <p class="font-bold col-span-2">Revenue</p>
                                <p class="col-span-10">: ${{state.revenue}}</p>
                            </div>
                        </div>
                        <div class="grid-rows-1 mb-2">
                            <div class="grid grid-cols-12">
                                <p class="font-bold col-span-2">Prod. Companies</p>
                                <p class="col-span-10">: {{state.companies}}</p>
                            </div>
                        </div>
                        <div class="grid-rows-1 mb-2">
                            <div class="grid grid-cols-12">
                                <p class="font-bold col-span-2">Overview</p>
                                <p class="col-span-10">: {{state.overview}}</p>
                            </div>
                        </div>
                        <nuxt-link to="/">
                            <button class="bg-gray-800 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded w-40 mt-10">
                                Back to Home
                            </button>
                        </nuxt-link>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, reactive, watch } from '@vue/composition-api'
import { Route } from "vue-router"
import axios from 'axios'

export default {
    setup() {
        const state = reactive({
            title: '',
            overview: '',
            imageUrl: '',
            rating: 0,
            releaseDate: '',
            genres: '',
            budget: 0,
            revenue: 0,
            status: '',
            language: '',
            companies: ''
        })

        onMounted(async (): Promise<any> => {
            const id: string = await window.location.pathname.substring(1, window.location.pathname.length)

            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9adbf9b696ac935f8dedfac5c6e8948b&language=en-US`)
            const result = await response.data

            state.imageUrl = result.poster_path
            state.title = result.title
            state.releaseDate = result.release_date
            state.rating = result.vote_average
            state.overview = result.overview
            state.genres = result.genres.map((item: any) => item.name).join(", ")
            state.budget = result.budget.toLocaleString('en'),
            state.revenue = result.revenue.toLocaleString('en'),
            state.status = result.status
            state.language = result.spoken_languages.map((item: any) => item.name).join(", ")
            state.companies = result.production_companies.map((item: any) => item.name).join(", ")
        })

        return {
            state
        }
    },
    middleware: 'auth'
}
</script>