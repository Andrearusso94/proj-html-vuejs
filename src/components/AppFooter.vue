<script>
import FooterTop from './AppFooter/FooterTop.vue'
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
        <div class="footer_bottom">
            <div class="copyright py-4">
                <p>Copyright 2012 - 2020 | Avada Theme by ThemeFusion | All Rights Reserved | Powered by WordPress</p>
            </div>
        </div>
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

.copyright {
    background-color: $footer-darker;
    color: $light-dark;
}
</style>