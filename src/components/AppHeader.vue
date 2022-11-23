<script>
import NavbarVue from './AppHeader/Navbar.vue';
import PresentationVue from './AppHeader/Presentation.vue';
export default {
    name: 'AppHeader',
    components: {
        NavbarVue, PresentationVue,
    }
}
</script>
<template>
    <header>
        <div id="site_header" class="container-fluid">

            <!--Menu navigazione-->
            <NavbarVue></NavbarVue>

            <!--presentazione negozio-->
            <PresentationVue></PresentationVue>

        </div>


    </header>
</template>


<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.container-fluid {
    background-image: url(../assets/img/avadabarbers-homepage-hero-bg.jpg);
    background-size: cover;

}
</style>