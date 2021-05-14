<template>
    <div class="container mx-auto">
        <div class="my-20">
            <h4 class="font-2xl font-bold text-center">You're not logged in yet</h4>
            <div class="mt-6" style="display: flex; flex-direction: row; justify-content: center;">
                <nuxt-link to="/">
                    <button class="bg-gray-800 hover:bg-blue-dark text-white mx-auto font-bold py-4 px-4 rounded" v-on:click="login()" style="width: 300px">
                        Login without Credentials
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted } from '@vue/composition-api'
import cookies from 'cookie-universal-nuxt'

export default {
    setup(app: any){
        onMounted(async (): Promise<any> => {
            document.cookie = "isAuthenticated=false;"
        })

        function login(): void {
            document.cookie = "isAuthenticated=true"
        }

        return {
            login
        }
    }
}
</script>