<template>
    
<div id="vip">
    <the-home> </the-home>
    <api-news/>
</div>

</template>

<script>

import TheHome from "@/components/TheHome.vue"
import ApiNews from "@/components/ApiNews.vue"
export default {
    components:{
        TheHome,
        ApiNews,
    }
    
}
</script>