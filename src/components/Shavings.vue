<script>
export default {
    name: 'Shavings'
}
</script>
<template>
    <div class="container-fluid text-center shaving">
        <div class="container_butter">

            <div class="row butter_shaving">
                <div class="col-md-4 butter">
                    <img src="../assets/img/shaving_butter-600x600.png" class="img-fluid " alt="">
                </div>
                <div class="col-md-8 butter_description">
                    <div class="card-body py-5 px-5 text-start ">
                        <h5 class="card-title">This months feautured product</h5>
                        <h2 class="my-2">Shaving Butter</h2>
                        <div class="butter_pharagraph py-5">
                            <p class="card-text ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                                assumenda corrupti commodi dolor, dolorem similique, ea nam rerum tempora voluptate
                                non consequatur. Soluta adipisci reiciendis impedit iste minima facere vitae.</p>
                            <button class="my_button"><a href="#" class="card-link">Buy Now</a></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
@use '../assets/partials/variables' as *;



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

    h5 {
        text-transform: uppercase;
        color: $another;
        font-weight: bold;
    }

    h2 {
        font-size: 5rem;
        color: $light-grey;
        font-weight: bold;
    }

    p {
        color: $grey-text,
    }
}

.my_button {
    border: 2px solid $another;
    padding: 0.75rem 2rem;
    background-color: $dark;

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