<template>
  <div>
      <table class="table">
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>Price</td>
            </tr>
        </thead>
        <tbody>
            <tr v-for="fruit in fruits" v-bind:key="fruit.id">
                <td>{{fruit.id}}</td>
                <td>{{fruit.name}}</td>
                <td>{{fruit.price}}</td>
            </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import api from '../../api'

export default {
name: 'Index',
data(){
    return{
        fruits: null,

    }
},
mounted(){

    this.getFruits()
},
methods:{
    getFruits(){
        api.get('/api/auth/fruits')
        .then( res=>{
            this.fruits = res.data.data
        })
    },

}
}
</script>

<style>

</style>
