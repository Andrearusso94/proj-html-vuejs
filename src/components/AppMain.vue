<script>
import Services from './Services.vue'
export default {
    name: 'AppMain',
    components: {
        Services,
    }
}
</script>
<template>
    <main>
        <div id="site_main">
            <div class="container-fluid about">
                <div class="meet py-5">
                    <div class="about_card  py-5">
                        <h6>Award Winning</h6>
                        <h2>Pro Barbers</h2>
                        <button>Meet your new barber</button>
                    </div>

                </div>
            </div>
            <Services></Services>
        </div>
    </main>

</template>
<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.about {
    background-image: url(../assets/img/avadabarbers-about-introbackground.jpg);
    background-size: cover;
}

.about_card {
    text-align: center;

    h6 {
        color: $another;
    }

    h2 {
        color: $light-dark;
    }
}
</style>