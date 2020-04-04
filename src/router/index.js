import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import HomePage from "../views/HomePage";
import UploadBook from "../views/UploadBook";
import BookInfo from "../views/BookInfo";
import ImageView from "../views/ImageView";
import UserInfo from "../views/UserInfo";
import MyFWZD from "../views/MyFWZD";
import MyBook from "../views/MyBook";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: '登录',
        component: Login,
        meta: {isLogin: false}
    },
    {
        path: '/signUp',
        name: '注册',
        component: SignUp,
        meta: {isLogin: false}
    },
    {
        path: '/homepage',
        name: '主页',
        component: HomePage,
        meta: {isLogin: true}
    },
    {
        path: '/uploadBook',
        name: '上传图片集',
        component: UploadBook,
        meta: {isLogin: true}
    },
    {
        path: '/bookInfo',
        name: '图片集详细信息',
        component: BookInfo,
        meta: {isLogin: true}
    },
    {
        path: '/imageView',
        name: '看图',
        component: ImageView,
        meta: {isLogin: true}
    },
    {
        path: '/userInfo',
        name: '用户信息',
        component: UserInfo,
        meta: {isLogin: true}
    },
    {
        path: '/myFWZD',
        name: '我的FWZD',
        component: MyFWZD,
        meta: {isLogin: true}
    },
    {
        path: '/myBook',
        name: '我的(一个)图片集',
        component: MyBook,
        meta: {isLogin: true}
    }
]

const router = new VueRouter({
    // 测试history但部署请改为hash……
    //mode: 'history',
    //base: process.env.BASE_URL,
    base: '/vue-fwzd/',
    routes
})

export default router
