<script>
export default {
    name: 'Presentation',
}
</script>
<template>
    <div class="container primary-container py-5">
        <div class="row g-2">
            <div class="col-6">
                <div class="cards my-5 py-5">
                    <div class="cards_body">
                        <h1 class="py-3">Barber Shop</h1>

                        <div class="line py-3"></div>
                        <p class="card-text text-secondary py-3">The Pinnacle of Male Grooming</p>
                        <button class="my_button"><a href="#" class="card-link">Learn More</a></button>

                    </div>
                </div>

            </div>
            <div class="col-6">
                <img src="../assets/img/avadabarbers_hero_focalmirror-600x825.png" alt="">
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.primary-container {
    margin-top: 1.5rem;
    padding-bottom: 2.5rem;

    h1 {
        font-size: 5rem;
        color: $light-dark;
    }

    p {
        font-size: 1.25rem;
    }

    .line {
        border-top: 3px solid $another;
        width: 35%;
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
    }
}
</style>
