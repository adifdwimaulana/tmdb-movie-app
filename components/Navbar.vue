<template>
    <nav class="flex items-center justify-between flex-wrap bg-gray-800 p-6">
        <div class="container mx-auto">
            <div class="flex items-center flex-no-shrink text-white mr-6">
                <nuxt-link to="/">
                    <Logo />
                </nuxt-link>
                <nuxt-link to="/logout" class="text-white text-xl ml-auto">Logout</nuxt-link>
            </div>
        </div>
    </nav>
</template>

<script>
import Logo from './Logo'
export default {
    name: 'Navbar',
    components: {
        Logo
    }
}
</script>