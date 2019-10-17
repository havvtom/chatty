<template>
  <div class="chat container">
    <h1 class="center-align teal-text">Havv Chatt</h1>
    <div class="card">
      <div class="card-content">
        <ul class="messages">
          <li>
            <span class="teal-text">name</span>
            <span class="grey-text">message</span>
            <span class="grey-text time">time</span>
          </li>
        </ul>
      </div>
      <div class="card-action">
        <message :name="name"></message>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Chat",
  data(){
    return {
     
    }
  }, 
  methods:{
    
  },
  props: ['name']
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
 .chat h2{
  font-size: 2.6em;
  margin-bottom: 40px;
 }
 .chat span{
  font-size: 1.4em;

 }
 .chat .time{
  display: block;
  font-size: 1.2em;
 }
</style>
