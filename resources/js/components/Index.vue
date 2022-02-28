<template>
<div>
    <router-link :to="{name: 'fruit.index'}">List</router-link>
    <router-link v-if="!access_token" :to="{name: 'user.login'}">Login</router-link>
    <router-link v-if="!access_token" :to="{name: 'user.registration'}">Registration</router-link>
    <router-link v-if="access_token" :to="{name: 'user.personal'}">Personal</router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: 'Index',
    data(){
        return{
            access_token: null
        }
    },

    mounted(){
        this.getAccessToken()
    },

    updated(){
        this.getAccessToken()
    },

    methods:{
        getAccessToken(){
            this.access_token = localStorage.getItem('access_token')
        }
    }


}
</script>

<style>

</style>
