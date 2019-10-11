
<template>
  <div id="show-blogs">
     <!-- <div v-theme:column="'narrow'" id="show-blogs"> -->
       <input type="text" v-model="search" placeholder="Search Blogs"/>
        <h1>All Blog Articles</h1>
        
      <div class="single-blog"  v-for="(blog,title,body) in blogs" v-bind:key="(title,body)">
        <router-link v-bind:to="'/blog/'+blog.id">
          <h2>{{ blog.title}}</h2>
        </router-link>
      
    <article>{{blog.content}}</article>
      </div>
         
    </div>
 

 
</template>
 <script>

import searchmixins from '../mixins/searchmixins';

  export default{
    components:{
      
      
      
    },
    data(){
      return{
      
         blogs:[],
         search:'',
        
      }
    },
   
    created(){
        this.$http.get('https://vue-blog-a9f15.firebaseio.com/posts.json').then(function(data){
            // console.log(data.json);
          //  this.blogs=data.body.slice(0,10);
          return data.json();

        }).then(function(data){
          var blogsArray=[];
          for(let key in data){
           data[key].id=key
           blogsArray.push(data[key]);
          }
          this.blogs=blogsArray;
        })
    },
    
      computed: {
       
    },
   
    mixins:[searchmixins]
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





