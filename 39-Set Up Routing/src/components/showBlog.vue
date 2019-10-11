
<template>
  <div v-theme="'wide'" id="show-blogs">
     <!-- <div v-theme:column="'narrow'" id="show-blogs"> -->
       <input type="text" v-model="search" placeholder="Search Blogs"/>
        <h1>All Blog Articles</h1>
        
      <div class="single-blog"  v-for="(blog,title,body) in filteredBlogs" v-bind:key="(title,body)">
      <h2 v-rainbow>{{ blog.title | to-uppercase }}</h2>
    <article>{{blog.body | snipet}}</article>
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
      //  title:'I am a dynamic slot title'
         blogs:[],
         search:'',
        
      }
    },
   methods: {
        
    },
    created(){
        this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
           this.blogs=data.body.slice(0,10);

        })
    },
    
      computed: {
       
    },
    //Filters
    filters:{
      // 'to-uppercase':function(value){
      //   return value.toUpperCase();
      // }
      toUppercase(value){
        return value.toUpperCase();
      }
    },
    //Custom Directives
     directives: {
        'rainbow' :{
            bind(el, binding, vnode){
                el.style.color = "#" + Math.random().toString(16).slice(2, 8);
            }
        }
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





