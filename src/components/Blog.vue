<script>
export default {
    name: 'Blog',
    data() {
        return {
            Blog: [
                {
                    image: '../assets/img/avadabarbers-second-blog-320x202.jpg',
                    title: 'Avada Barbers Now Open',
                    text: 'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculosly good looking.'
                },
                {
                    image: '../assets/img/avadabarbers-choosing-blog-320x202.jpg',
                    title: 'Choosing The Right Barber',
                    text: 'Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.'
                },
                {
                    image: '../assets/img/avadabarbers-ourservice-blog-320x202.jpg',
                    title: 'Quick Service Guide',
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
    <div class="container-fluid py-5 blogs">
        <div class="container py-5">
            <h6 class="text-center">Tales From the barber shop</h6>
            <h2 class="text-center">Recent blog post</h2>
            <div class="row g-0 my-5">
                <div v-for="item in Blog" class="col-4 service">
                    <div class="single_service">
                        <img :src="imagePath(item.image)" alt="">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.text }}</p>
                    </div>
                </div>

            </div>
            <div class="about text-center">
                <button>Read more from our blog</button>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.blogs {
    text-align: center;
    background-color: $light-grey;
}
</style>