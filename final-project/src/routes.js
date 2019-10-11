import showBlog from './components/showBlog.vue'
import AddBlog from './components/AddBlog.vue'
import singleBlog from './components/singleBlog.vue'
export default[
    {path:'/',component:showBlog},
    {path:'/add',component:AddBlog},
    {path:'/blog/:id',component:singleBlog}
]
