<template>
  <div class="chat container">
    <h1 class="center-align teal-text">Havv Chatt</h1>
    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}</span>
            <span class="grey-text">{{message.content}}</span>
            <span class="grey-text time">{{message.timestamp}}</span>
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
import db from "@/firebase/init.js";
export default {
  name: "Chat",
  data(){
    return {
     messages: []
    }
  }, 
  methods:{
    
  },
  props: ['name'], 
  created(){
    let ref = db.collection('messages').orderBy('timestamp');
    ref.onSnapshot(snapshot=>{
      snapshot.docChanges().forEach(change=>{
        if(change.type == "added"){
          let doc = change.doc;
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: doc.data().timestamp
          })
        }
      })
    })
  }
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
  font-size: 0.8em;
 }
 .messages{
  max-height: 300px;
  overflow: auto;
 }
 .messages::-webkit-scrollbar{
  width: 3px;
 }
 .messages::-webkit-scrollbar-track{
  background: #ddd;
 }
 .messages::-webkit-scrollbar-thumb{
  background: #aaa;
 }
</style>
