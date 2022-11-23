<script>
export default {
    name: 'Barber',
}
</script>
<template>
    <div class="container-fluid about">
        <div class="meet py-5">
            <div class="about_card  py-5">
                <h6>Award Winning</h6>
                <h2 class="pb-2">Pro Barbers</h2>
                <button class="my_button"><a href="#" class="card-link">Meet your new barber</a></button>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;

.about {
    background-image: url(../../assets/img/avadabarbers-about-introbackground.jpg);
    background-size: cover;
}

.about_card {
    text-align: center;

    h6 {
        text-transform: uppercase;
        font-weight: bold;
        font-size: 1.5rem;
        color: $another;
    }

    h2 {
        font-weight: bold;
        font-size: 4.5rem;
        color: $light-grey;
    }

    .my_button {
        border: 1px solid $another;
        padding: 0.5rem 1.5rem;
        background-color: $dark;

        a {
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