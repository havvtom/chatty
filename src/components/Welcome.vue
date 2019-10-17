<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <div class="input-field col s6">
          <input id="first_name" type="text" name="name" v-model="name">
          <label for="first_name">First Name</label>
        </div>
        <p v-if="this.feedback" class="red-text">{{feedback}}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Welcome",
  data(){
    return {
      name: "",
      feedback: ""
    }
  }, 
  methods:{
    enterChat(){
      if(this.name){
        this.$router.push({name: "Chat", params:{name:this.name}})
      }else{
      //feedback
      this.feedback = "You need to enter a name first";
      }
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .welcome{
    max-width: 600px;
    margin-top: 100px;    
  }
  .welcome h2{
    font-size: 3em
  }
  .welcome button{
    margin: 30px auto;
  }
</style>
