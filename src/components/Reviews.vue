<script>
export default {
    name: 'Reviews',
    data() {
        return {
            person: [
                {
                    img: '../assets/img/avadabarbers-trimcut-gallery6-200x200.jpg',
                    name: 'John Doe',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dignissimos sit remaccusantium commodi mollitia numquam reiciendis, eligendi nostrum, illum quod est quibusdampraesentium recusandae necessitatibus? Quod optio tempora accusantium!'
                },
                {
                    img: '../assets/img/avadabarbers-trimcut-gallery7-200x201.jpg',
                    name: 'Pete Jones',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dignissimos sit re accusantium commodi mollitia numquam reiciendis, eligendi nostrum, illum quod est quibus  praesentium recusandae necessitatibus? Quod optio tempora accusantium!'
                },
                {
                    img: '../assets/img/avadabarbers-trimcut-gallery3-200x201.jpg',
                    name: 'Mark Wilson',
                    text: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur dignissimos sit accusantium commodi mollitia numquam reiciendis, eligendi nostrum, illum quod est quibusda praesentium recusandae necessitatibus? Quod optio tempora accusantium!'
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
    <div class="container-fluid py-5 persons">
        <div class="container py-5">
            <h6 class="text-center">What peapole say</h6>
            <h2 class="text-center">Reviews</h2>
            <div class="row my-5">
                <div v-for="item in person" class="col-4 person">
                    <div class="single_person">
                        <p>{{ item.text }}</p>
                        <img class="rounded-circle" :src="imagePath(item.img)" alt="">

                        <h3>{{ item.name }}</h3>


                    </div>
                </div>

            </div>


        </div>
    </div>
</template>
<style lang="scss" scoped>
.person {
    text-align: center;

    img {
        width: 30%;
    }
}
</style>