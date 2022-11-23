<script>
import Barber from './AppMain/Barber.vue'
import Services from './AppMain/Services.vue'
import Products from './AppMain/Products.vue'
import Shavings from './AppMain/Shavings.vue'
import Reviews from './AppMain/Reviews.vue'
import Blog from './AppMain/Blog.vue'
export default {
    name: 'AppMain',
    components: {
        Barber, Services, Products, Shavings, Reviews, Blog
    }
}
</script>
<template>
    <main>
        <div id="site_main">
            <!--sezione scelta barbiere-->
            <Barber></Barber>

            <!--sezione servizi-->
            <Services></Services>

            <!--sezione prodotti-->
            <Products></Products>

            <!--sezione prodotto speciale-->
            <Shavings></Shavings>

            <!--sezione recensioni-->
            <Reviews></Reviews>

            <!--sezione blog-->
            <Blog></Blog>
        </div>

    </main>

</template>
<style lang="scss" scoped>

</style>