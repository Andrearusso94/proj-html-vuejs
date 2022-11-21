<script>
export default {
    name: 'Products',
    data() {
        return {
            products: [
                {
                    image: '../assets/img/brush_dark-400x400.png',
                    title: 'Brush',
                    price: '$15.00'
                },
                {
                    image: '../assets/img/scissors-400x400.png',
                    title: 'Scissor',
                    price: '$85.00'
                },
                {
                    image: '../assets/img/hot_oil_dark-400x400.png',
                    title: 'Hot Oil',
                    price: '$15.00'
                },
                {
                    image: '../assets/img/straight_razor_dark-400x400.png',
                    title: 'Straight Razor',
                    price: '$30.00'
                },
            ]
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
    <div class="container-fluid py-5 products">
        <div class="container-fluid py-5">
            <h6 class="text-center">We Have you covered</h6>
            <h2 class="text-center">Avada grooming products</h2>
            <div class="row my-5">
                <div v-for="item in products" class="col-3 product">
                    <div class="single_product">
                        <img :src="imagePath(item.image)" alt="">
                        <h3>{{ item.title }}</h3>
                        <p>{{ item.price }}</p>
                    </div>
                </div>

            </div>
            <div class="about text-center">
                <button>Shop our product range</button>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.products {
    background-image: url(../assets/img/avadabarbers-reviewsbackground.jpg);
    background-size: cover;
}

.product {
    text-align: center;
}
</style>