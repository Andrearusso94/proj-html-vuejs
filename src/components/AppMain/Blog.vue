<script>
export default {
    name: 'Blog',
    data() {
        return {
            Blog: [
                {
                    image: '../../assets/img/avadabarbers-second-blog-320x202.jpg',
                    title: 'Avada Barbers Now Open',
                    text: 'Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculosly good looking.'
                },
                {
                    image: '../../assets/img/avadabarbers-choosing-blog-320x202.jpg',
                    title: 'Choosing The Right Barber',
                    text: 'Take a seat in our fine leather chairs, lean back and let us lather you a fresh head in a luxurious fashion.'
                },
                {
                    image: '../../assets/img/avadabarbers-ourservice-blog-320x202.jpg',
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
            <div class="row">
                <div class="col">
                    <h5 class="text-center">Tales From the barber shop</h5>
                    <h2 class="text-center">Recent Blog Post</h2>
                </div>
            </div>

            <div class="row g-0 my-5">
                <div v-for="item in Blog" class="col-4 service">
                    <div class="single_service mx-5">
                        <img :src="imagePath(item.image)" alt="">
                        <h3 class="my-3">{{ item.title }}</h3>
                        <p>{{ item.text }}</p>

                    </div>
                </div>

            </div>
            <div class="about text-center">
                <button class="my_button"><a href="#" class="card-link">Read more from our blog</a></button>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;

.blogs {
    text-align: center;
    background-color: $special;
}

h5,
h3 {
    color: $another;
    font-weight: bold;
}

h5 {
    text-transform: uppercase;
}

p {
    color: $grey-text;
}

h2 {
    color: $light-grey;
    font-size: 4.5rem;
    font-weight: bold;
}

.single_service {
    width: 65%;


}

.my_button {
    border: 2px solid $another;
    padding: 0.5rem 1.5rem;
    background-color: $special;


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
</style>