<script>
import About from './AppMain/About.vue'
import Services from './AppMain/Services.vue'
import Products from './AppMain/Products.vue'
import Shavings from './AppMain/Shavings.vue'
import Reviews from './AppMain/Reviews.vue'
import Blog from './AppMain/Blog.vue'
export default {
    name: 'AppMain',
    components: {
        About, Services, Products, Shavings, Reviews, Blog
    }
}
</script>
<template>
    <main>
        <div id="site_main">
            <About></About>
            <Services></Services>
            <Products></Products>
            <Shavings></Shavings>
            <Reviews></Reviews>
            <Blog></Blog>
        </div>

    </main>

</template>
<style lang="scss" scoped>

</style>