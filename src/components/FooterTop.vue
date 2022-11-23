<script>
export default {
    name: 'FooterTop',
    data() {
        return {
            address: [
                {
                    name: 'Avada Barbers',
                    localAddress: '123 New York Street',
                    city: 'New York City',
                    email: 'info@yourwebsite.com',
                    numberTelephone: '+1 (555) 555-1212'
                },]
        }
    }
}
</script>

<template>
    <div class="container py-5 barbers_footer">
        <div class="row  py-5">
            <div class="col-4">
                <div class="mini_shop py-2">
                    <img src="../assets/img/avadabarbers_footer_shop_image-400x312.png" alt="">
                    <button class="my_button"><a href="#" class="card-link">Shop our range now</a></button>
                </div>
            </div>
            <div class="col-4">
                <div class="logo">
                    <img src="../assets/img/avadabarbers-logo-x2-200x70.png" alt="">
                </div>
                <div v-for="item in address" class="address py-5">
                    <h6>{{ item.name }}</h6>
                    <h6>{{ item.localAddress }}</h6>
                    <h6>{{ item.city }}</h6>
                    <h6>{{ item.email }}</h6>
                    <h6>{{ item.numberTelephone }}</h6>
                </div>
                <div class="follow_us">
                    <h5>Follow us</h5>
                    <div class="socials">
                        <font-awesome-icon class="social mx-2" icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon class="social mx-2" icon="fa-brands fa-twitter" />
                        <font-awesome-icon class="social mx-2" icon="fa-brands fa-youtube" />
                        <font-awesome-icon class="social mx-2" icon="fa-brands fa-instagram" />
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="mini_shop py-2">
                    <img src="../assets/img/avadabarbers_footer_appointment_image-400x312.png" alt="">
                    <button class="my_button"><a href="#" class="card-link">Book your appointment</a></button>
                </div>

            </div>
        </div>





    </div>



</template>
<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

.barbers_footer {
    text-align: center;
}

h6 {
    color: $grey-text;

}

h5 {
    color: $another;
    font-weight: bold;
    text-transform: uppercase;
}

.my_button {
    border: 2px solid $another;
    padding: 0.5rem 2rem;
    background-color: $dark;

    a {
        font-size: 1rem;
        text-transform: uppercase;
        text-decoration: none;
        color: $another;
    }

    a:hover {
        opacity: 0.5;
    }
}

.socials {
    margin-top: 2rem;
    color: $primary;
}
</style>