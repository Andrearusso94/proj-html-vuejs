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
            <div class="square top demos">
                <font-awesome-icon icon="fa-solid fa-folder-open" />

            </div>
            <div class="square sale">
                <span class="dollar">$</span>
                <span class="price">39</span>

            </div>
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
        padding: 0.75rem;
        position: absolute;
        top: 220px;
        left: 96%;
        background-color: $special;
        border-radius: 3px;
    }

    .top {
        padding: 0.85rem;
        top: 160px;
        text-align: center;
        color: rgb(12, 12, 81);
    }

    p {
        font-size: 0.75rem;
    }

    .sale {

        color: forestgreen;

        .dollar {
            font-size: 0.5rem;


        }

        .on_sale {
            font-size: 0.5rem;
        }

    }

}
</style>