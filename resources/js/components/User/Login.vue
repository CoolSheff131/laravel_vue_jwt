<template>
<div class="w-25">
    <input v-model="email" type="email" class="form-control" placeholder="email">
    <input v-model="password" type="password" class="form-control" placeholder="password">
    <input @click.prevent="login" type="submit" class="btn btn-primary">
</div>
</template>

<script>
export default {
    name: 'Login',
    data(){
        return{
            email:null,
            password: null,
        }
    },

    methods:{
        login(){
            axios.post('/api/post/login',{email: this.email, paswsord:this.password})
            .then( res=>{

            })
        }
    }
}
</script>

<style>

</style>
