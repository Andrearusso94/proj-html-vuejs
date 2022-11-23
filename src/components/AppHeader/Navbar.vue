<script>
export default {
    name: 'Navbar'
}
</script>
<template>
    <nav class="my_navbar container">


        <div class="row justify-content-between">
            <div class="col-6 my-4"><img src="../../assets/img/avadabarbers-logo-x1.png" alt=""></div>
            <div class="col-6 my-4 icon">
                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                <font-awesome-icon class="mx-3" icon="fa-solid fa-grip-lines" />
            </div>
        </div>

    </nav>

</template>
<style lang="scss" scoped>
@use '../../assets/partials/variables' as *;

.icon {
    text-align: end;
    color: $primary;
}
</style>