<script>
export default {
    name: 'Services',
    data() {
        return {
            services: [
                {
                    image: '../../assets/img/avadabarbers-trimcut-icon-before.png',
                    title: 'Trim & Cut',
                    text: 'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculosly good looking.'
                },
                {
                    image: '../../assets/img/avadabarbers-washndry-icon.png',
                    title: 'Wash & Dry',
                    text: 'Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.'
                },
                {
                    image: '../../assets/img/avadabarbers-beardtrim-icon.png',
                    title: 'Beard Tidy',
                    text: 'Tame the tangles and untidy facial hairs like a gentleman with our Bread tidy services from Avada Barbers.'
                },]
        }

    },
    methods: {
        imagePath(urlImg) {
            return new URL(urlImg, import.meta.url).href
        }
    }

}
</script>
<template>
    <div class="container-fluid py-5 services">
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <h6 class="text-center">Mens Grooming</h6>
                    <h2 class="text-center">Services</h2>
                </div>
            </div>
            <div class="row py-5 my-5">
                <div v-for="item in services" class="col-4 service">
                    <div class="single_service mx-5">
                        <img :src="imagePath(item.image)" alt="">
                        <h3 class="py-5">{{ item.title }}</h3>
                        <p>{{ item.text }}</p>
                    </div>
                </div>

            </div>
            <div class="about text-center">
                <button class="my_button"><a href="#" class="card-link">Meet your new barber</a></button>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;

.services {
    .single_service {
        width: 65%;
        text-align: center;
    }

    h6 {
        text-transform: uppercase;
        color: $another;
        font-size: 1.5rem;
        font-weight: bold;
    }

    h3 {
        color: $another;
        font-size: 2rem;
        font-weight: bold;
    }

    h2 {
        font-size: 5rem;
        color: $light-grey;
        font-weight: bold;
    }

    p {
        color: $grey-text;
    }

    .service {
        text-align: center;
    }

    .my_button {
        border: 1px solid $another;
        padding: 0.5rem 1.5rem;


        a {
            font-size: 1.25rem;
            text-transform: uppercase;
            text-decoration: none;
            color: $another;
        }

        a:hover {
            opacity: 0.5;
        }
    }
}
</style>