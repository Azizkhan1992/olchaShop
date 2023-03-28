<template>
    <div class="homeLayout">
        <HomeHeaderLayout />

        <div class="homeContent common">
            <router-view />
        </div>

        <HomeFooterLayout />
    </div>
</template>
<script>
import HomeHeaderLayout from './HomeHeaderLayout.vue';
import HomeFooterLayout from './HomeFooterLayout.vue';
export default {
    name: 'home-layout',
    components: { HomeHeaderLayout, HomeFooterLayout }
}
</script>