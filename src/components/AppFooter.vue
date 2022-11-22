<script>
import FooterTop from './FooterTop.vue'
export default {
    name: 'AppFooter',
    components: {
        FooterTop,
    }
}
</script>

<template>
    <footer id="site-footer">
        <div class="footer_top">
            <FooterTop></FooterTop>
        </div>
        <div class="footer_bottom"></div>
    </footer>
</template>
<style lang="scss" scoped>
@use '../assets/partials/variables' as *;

#site-footer {
    text-align: center;
}

.footer_top {
    background-color: $dark;
    color: $light-dark;
}
</style>