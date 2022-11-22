<script>
import About from './About.vue'
import Services from './Services.vue'
import Products from './Products.vue'
import Shavings from './Shavings.vue'
import Reviews from './Reviews.vue'
import Blog from './Blog.vue'
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