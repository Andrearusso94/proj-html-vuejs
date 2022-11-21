<script>
import NavbarVue from './Navbar.vue';
export default {
    name: 'AppHeader',
    components: {
        NavbarVue
    }
}
</script>
<template>
    <header>
        <div id="site_header" class="container-fluid">

            <NavbarVue></NavbarVue>
            <div class="container my-5">
                <div class="row g-2">
                    <div class="col-6">
                        <div class="cards my-5 mx-5">
                            <div class="cards_body">
                                <h1>Barber Shop</h1>
                                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p class="card-text">Some quick example text to build on the card title and make up
                                    the bulk of the card's content.</p>
                                <a href="#" class="card-link">Card link</a>
                                <a href="#" class="card-link">Another link</a>
                            </div>
                        </div>

                    </div>
                    <div class="col-6">
                        <img src="../assets/img/avadabarbers_hero_focalmirror-400x550.png" alt="">
                    </div>

                </div>
            </div>
        </div>


    </header>
</template>


<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.container-fluid {
    background-image: url(../assets/img/avadabarbers-homepage-hero-bg.jpg);
    background-size: contain;

}
</style>