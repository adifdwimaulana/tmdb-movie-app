<template>
    <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
        <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img :src="'https://image.tmdb.org/t/p/original' + imageUrl" class="h-full w-full">
        </div>

        <h2 class="mt-4 font-bold text-xl">{{title}}</h2>
        <div class="grid-rows-1 mt-2">
            <div class="grid grid-cols-2">
                <h6 class="text-xs font-normal text-center">Release Date: {{releaseDate}}</h6>
                <h6 class="text-xs font-normal text-center">Rating: {{rating}}/10</h6>
            </div>
        </div>

        <p class="text-xs text-gray-500 text-justify mt-3">
            {{overview.slice(0, 200)}}<span class="font-bold hover:font-normal" style="cursor: pointer">&nbsp;Read more...</span>
        </p>
        
        <nuxt-link :to="'/'+id">
            <button class="mt-3 bg-gray-800 hover:bg-blue-dark text-white py-2 px-4 rounded w-80 bottom-0" v-on:click="redirect(id)">
                See Details
            </button>
        </nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'Movie',
    props: ['id', 'title', 'genre', 'releaseDate', 'imageUrl', 'overview', 'rating'],
    setup(){
        function redirect(id){
            console.log(id)
        }

        return { 
            redirect
        }
    }
}
</script>