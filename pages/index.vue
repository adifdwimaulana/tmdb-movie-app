<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-3 gap-4 mt-5">
      <!-- Filter -->
      <div>
        <h4 class="text-2xl font-bold">Filter</h4>
        <!-- Filter Genre -->
        <div class="grid-rows-1 mt-4">
          <h4 class="text-lg font-bold">Genre</h4>
          <div v-for="genre in state.genres" v-bind:key="genre.id">
            <input type="radio" v-model="state.selectedGenre" name="genre" value="genre.name" v-on:change="handleChangeGenre(genre.name)">&nbsp;{{genre.name}}
          </div>
          <!-- Filter Date -->
          <div class="grid-rows-1 mt-4">
            <div class="grid grid-cols-1">
              <h4 class="text-lg font-bold">Release Date</h4>
              <client-only>
                <div class="grid-rows-1">
                  <div class="grid grid-cols-6 gap-4 mt-2">
                    <p class="text-sm item-center">Start Year</p>
                    <date-picker v-model="state.startTime" type="year"></date-picker>
                  </div>
                  <div class="grid grid-cols-6 gap-4 mt-2">
                    <p class="text-sm item-center">End Year</p>
                    <date-picker v-model="state.endTime" type="year"></date-picker>
                  </div>
                </div>
              </client-only>
            </div>  
          </div>
          <!-- Filter Rating -->
          <div class="grid-rows-1 mt-4">
            <div class="grid grid-cols-1">
              <h4 class="text-lg font-bold">Minimum Rating</h4>
              <input class="rounded-lg overflow-hidden appearance-none bg-gray-200 h-3 w-128 mt-2" type="range" min="0" max="100" step="1" v-model="state.selectedRate" style="width: 200px"/>
              <div class="flex flex-wrap space-x-20 w-auto">
                <div>0</div>
                <div>{{state.selectedRate}}</div>
                <div>100</div>
              </div>
            </div>
          </div>
          <!-- Button Apply Filter -->
          <div class="grid-rows-1 mt-4 mb-20">
            <div class="grid grid-cols-6">
              <button class="bg-gray-400 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded w-40" v-on:click="resetFilter()">
                Reset Filter
              </button>
              <button class="bg-gray-800 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded w-40" v-on:click="searchMovie()" style="margin-left: 100px">
                Apply Filter
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-2">
        <h4 class="text-2xl font-bold">Hot Movies</h4>

        <div class="grid-rows-1 mt-4">

        </div>
        <!-- Pagination -->
        <div class="mt-5">
          <ul class="flex pl-0 list-none rounded my-2">
            <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 rounded-l hover:bg-gray-200" v-on:click="handlePaginate(parseInt(state.page) - 1)">Previous</li>
            <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200" v-on:click="handlePaginate(1)">1</li>
            <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200" v-on:click="handlePaginate(2)">2</li>
            <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 border-r-0 hover:bg-gray-200" v-on:click="handlePaginate(3)">3</li>
            <li class="relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-blue-700 rounded-r hover:bg-gray-200" v-on:click="handlePaginate(parseInt(state.page) + 1)">Next</li>
          </ul>
        </div>

      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted, reactive, watch, computed } from '@vue/composition-api'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import axios from 'axios'
import moment from 'moment'

export default {
  head() {
    return {
      title: 'Welcome to TMDB App',
      meta: [
        {
          hid: 'TMDB Movies App',
          name: 'TMDB Movies App',
          content: 'Find your best movies review here!'
        }
      ]
    }
  },
  components: {
    DatePicker
  },
  setup(){
    const state = reactive({
      page: 1,
      movies: [],
      genres: [],
      selectedGenre: '',
      startTime: new Date(),
      endTime: new Date(),
      selectedRate: 50
    })

    onMounted(async (): Promise<any> => {
      const responseMovies: any = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=9adbf9b696ac935f8dedfac5c6e8948b&language=en-US&page=${state.page}`)
      const resultMovies: any = await responseMovies.data.results

      const responseGenres: any = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=9adbf9b696ac935f8dedfac5c6e8948b&language=en-US`)
      const resultGenres: any = await responseGenres.data.genres

      state.movies = resultMovies
      state.genres = resultGenres
    })

    async function handlePaginate(page: number): Promise<any> {
      if(page <= 1){
        state.page = 1
      } else if(page >= 3){
        state.page = 3
      } else {
        state.page = page
      }

      const responseMovies: any = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=9adbf9b696ac935f8dedfac5c6e8948b&language=en-US&page=${state.page}`)
      const resultMovies: any = await responseMovies.data.results

      state.movies = resultMovies
    }

    function handleChangeGenre(selectedGenre: string): void {
      state.selectedGenre = selectedGenre
    }

    function searchMovie(): void {
      console.log(state.selectedGenre)
      console.log(state.startTime, state.endTime)
      console.log(state.selectedRate)
    }

    function resetFilter(): void {
      state.selectedGenre = ''
      state.startTime = new Date()
      state.endTime = new Date()
      state.selectedRate = 0
    }

    watch(() => state.startTime, (newValue, oldValue) => {
      console.log(state.startTime)
    })

    watch(() => state.endTime, (newValue, oldValue) => {
      console.log(state.endTime)
    })

    return {
      state,
      handleChangeGenre,
      handlePaginate,
      searchMovie,
      resetFilter
    }
  }
}
</script>