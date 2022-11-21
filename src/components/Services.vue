<script>
export default {
    name: 'Services',
    data() {
        return {
            services: [
                {
                    image: '../assets/img/avadabarbers-trimcut-icon-before.png',
                    title: 'Trim & Cut',
                    text: 'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculosly good looking.'
                },
                {
                    image: '../assets/img/avadabarbers-washndry-icon.png',
                    title: 'Wash & Dry',
                    text: 'Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.'
                },
                {
                    image: '../assets/img/avadabarbers-beardtrim-icon.png',
                    title: 'Beard Tidy',
                    text: 'Tame the tangles and untidy facial hairs like a gentleman with our Bread <tidy services from Avada Barbers.'
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
            <h6 class="text-center">Mens Grooming</h6>
            <h2 class="text-center">Services</h2>
            <div class="row my-5">
                <div v-for="item in services" class="col-4 service">
                    <div class="single_service">
                        <img :src="imagePath(item.image)" alt="">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.text }}</p>
                    </div>
                </div>

            </div>
            <div class="about text-center">
                <button>Read about Services</button>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.service {
    text-align: center;
}
</style>