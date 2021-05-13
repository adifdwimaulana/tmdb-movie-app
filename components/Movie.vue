<template>
    <div class="flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg">
        <div class="inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40">
            <img :src="'https://image.tmdb.org/t/p/original' + imageUrl" class="h-full w-full">
        </div>

        <h2 class="mt-4 font-bold text-xl">{{title}}</h2>
        <h6 class="text-sm font-normal">Release Date: {{releaseDate}}</h6>


        <p class="text-xs text-gray-500 text-justify mt-3">
            {{overview.slice(0, 200)}}<span class="font-bold hover:font-normal" style="cursor: pointer">&nbsp;Read more...</span>
        </p>
    </div>
</template>

<script>
export default {
    name: 'Movie',
    props: ['id', 'title', 'genre', 'releaseDate', 'imageUrl', 'overview']
}
</script>