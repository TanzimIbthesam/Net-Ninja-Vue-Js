
<template>
  <div v-theme="'wide'" id="show-blogs">
     <!-- <div v-theme:column="'narrow'" id="show-blogs"> -->
        <h1>All Blog Articles</h1>
      <div class="single-blog" v-for="(blog,title,body) in blogs" v-bind:key="(title,body)">
      <h2 v-rainbow>{{ blog.title }}</h2>
    <article>{{blog.body}}</article>
      </div>
         
    </div>
 

 
</template>
 <script>



  export default{
    components:{
      
      
      
    },
    data(){
      return{
      //  title:'I am a dynamic slot title'
         blogs:[]
        
      }
    },
   methods: {
        
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
           this.blogs=data.body.slice(0,10);

        })
    }
   
   

    }
  
  </script>

<style scoped>
#show-blogs{
    max-width: 800px;
    margin: 0px auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
}
</style>





