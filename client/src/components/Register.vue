<template>
  <h1> Register </h1>
</template>

<script>
import AuthenticationService from '@services/AuthenticationService'
export default {
    name: 'Register',
  data(){
      return{

      };
  },
  methods:  {
      register(){
          AuthenticationService.register({
              email: "acvby",
              password: "eweqe"
          })
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
