<template>
  <div>
    <h1> Register </h1>
    <input type="email" name="email" v-model="email" placeholder="email">
    <button @click="register()">Email senden</button>
  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    name: 'Register',
  data(){
      return{
        email:"",
        password:""
      };
  },
  methods:  {
    async register(){
        const response = await AuthenticationService.register({
              email: this.email,
              password: this.password
          })
        console.log(response)
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
