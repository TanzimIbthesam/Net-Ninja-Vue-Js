
<template>
<div id="add-blog">
  <h2>Add a New Blog Post</h2>
  <form action="">
    <label for="">Add Title</label>
    <input type="text" v-model.lazy="blog.title" placeholder="Add Title" required><br>
     <label for="">Add Content</label><br>
   <textarea v-model.lazy="blog.content"></textarea>
   <div id="checkboxes">
     <label for="">Sports</label>
     <input type="checkbox" value="sports" v-model="blog.categories"/>
     <label for="">Technology</label>
      <input type="checkbox" value="technology" v-model="blog.categories"/>
     <label for="">Fashion</label>
      <input type="checkbox" value="fashion" v-model="blog.categories"/>
     <label for="">International</label>
      <input type="checkbox" value="international" v-model="blog.categories"/>

   </div>
   <label for="">Author</label>
   <select v-model="blog.author">
     <option v-for="(author, index) in blog.authors" v-bind:key="index">{{author}}</option>
   </select>
  </form>
  <div id="preview">
    <h3>PreView Blog</h3>
    <p>Blog Title-{{blog.title}}</p>
    <p><b>Blog Content</b></p>
    <p>{{blog.content}}</p>
    <p>Blog Categories</p>
    <ul>
      <li v-for="(category, index) in blog.categories" v-bind:key="index">
        {{category}}
        </li>
    </ul>
    <p>Blog Author</p>
    <h1>{{blog.author}}</h1>
  </div>
</div>
 

 
</template>
 <script>
export default{
    components:{
      
      
      
    },
    data(){
      return{
        blog:{
           title:'',
           content:'',
           categories:[

           ],
           authors:['Mark Rode','Code Brain','John Halot']
        }
      
         
        
      }
    },
   methods: {
        
    }
   
   

    }
  
  </script>

<style scoped>
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 500px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3{
    margin-top: 10px;
}
#checkboxes input{
  display: inline;
  margin-right:10px;
}
#checkboxes label{
  display: inline-block;
}
</style>





