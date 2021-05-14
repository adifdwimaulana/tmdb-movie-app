<template>
    <div class="container mx-auto">
        <div class="my-20">
            <h4 class="font-2xl font-bold text-center">You're not logged in yet</h4>
        </div>
    </div>
</template>

<script lang="ts">
import { onMounted } from '@vue/composition-api'
import cookies from 'cookie-universal-nuxt'

export default {
    setup(app: any){
        onMounted(async (): Promise<any> => {
            checkCookie

        })

        async function checkCookie(app: any): Promise<any> {
            const auth = await app.$cookie.get('isAuthenticated') 
            console.log(auth)
        }

        return {
            checkCookie
        }
    }
}
</script>