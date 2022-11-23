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
            <div class="square top demos"></div>
            <div class="square sale"></div>
        </div>


    </header>
</template>


<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.container-fluid {
    background-image: url(../assets/img/avadabarbers-homepage-hero-bg.jpg);
    background-size: cover;
    position: relative;

    .square {
        height: 50px;
        width: 50px;
        position: absolute;
        top: 100px;
        left: 97%;
        background-color: $light-grey;
        border-radius: 3px;
    }

    .top {
        top: 160px;
    }

}
</style>