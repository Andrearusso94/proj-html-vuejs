<script>
import Services from './Services.vue'
import Products from './Products.vue'
import Reviews from './Reviews.vue'
import Blog from './Blog.vue'
export default {
    name: 'AppMain',
    components: {
        Services, Products, Reviews, Blog
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
            <Products></Products>
            <div class="container-fluid text-center shaving">
                <div class="container_butter">

                    <div class="row butter_shaving">
                        <div class="col-md-4 butter">
                            <img src="../assets/img/shaving_butter-600x600.png" class="img-fluid " alt="">
                        </div>
                        <div class="col-md-8 butter_description">
                            <div class="card-body py-5 px-5 text-start ">
                                <h5 class="card-title">This months feautured</h5>
                                <h2>Shaving Butter</h2>
                                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                                    assumenda corrupti commodi dolor, dolorem similique, ea nam rerum tempora voluptate
                                    non consequatur. Soluta adipisci reiciendis impedit iste minima facere vitae.</p>
                                <button>Buy now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Reviews></Reviews>
            <Blog></Blog>
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

.container_butter {
    width: 1200px;
    margin: auto;

}


.butter_shaving {
    border-top: 2px solid $another;
    margin-top: -2.5rem;
}

.butter {
    background-image: url(../assets/img/avadabarbers-cta-background.jpg);
    background-size: cover;
}

.butter_description {
    background-color: $dark;
}
</style>