<template>
  <div class="home">
    <div class="input-field col s6">
    	<form @submit.prevent="addMessage">
        	<input placeholder="" type="text" name="new-message" v-model="message"> 
        	<p v-if="this.feedback" class="red-text">{{feedback}}</p>
        </form>        
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import db from "@/firebase/init.js";
export default {
	props:['name'],
	data(){
		return {
			message:"",
			feedback: ""
		}
	},
	methods:{
		addMessage(){
			if(this.message){
				db.collection('messages').add({
					content: this.message,
					name: this.name,
					timestamp: moment(Date.now()).format('MMMM Do YYYY, h:mm:ss a')
				}).
				catch((errors)=>{
					console.log(errors)
				})
				this.message = "";
				this.feedback = "";

			}else{
				this.feedback = "You cannot send an empty message";
			}
		}
	}
  
};
</script>
