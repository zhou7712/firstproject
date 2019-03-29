<template>
  <div>
    <van-button type="default" @click="diaAlter">弹窗alert</van-button>
    <van-button type="primary" @click="beforeClose">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <van-dialog
    title="标题" 
  v-model="show"
  show-cancel-button
  :before-close="beforeClose"
>
  <van-field
    v-model="username"
    label="用户名"
    placeholder="请输入用户名"
  />
  <van-field
    v-model="password"
    type="password"
    label="密码"
    placeholder="请输入密码"
  />
</van-dialog>
<van-card
  num="2"
  tag="标签"
  price="2.00"
  desc="描述信息"  
  title="商品标题"
  :thumb="imageURL"
  origin-price="10.00"
>
  <div slot="footer">
    <van-button size="mini">按钮</van-button>
    <van-button size="mini">按钮</van-button>
  </div>
</van-card>
  </div>
</template>
<script>
import Vue from 'vue'
import { Button,Field, Dialog,Card  } from "vant";
import 'vant/lib/index.css';
Vue.use(Button).use(Field).use(Dialog).use(Card);

export default {
  components: { Button,Field , Dialog },
  data: function() {
    return {
      show: false,
      username: '',
      password: '',
      imageURL:"./assets/logo.png"
    };
  },
  methods: {
    diaAlter() {
      Dialog.alert({
        title: "标题",
        message: "弹窗内容"
      }).then(() => {
        // on close
      });
    },
    beforeClose(action, done) {
      this.show=true;
      if (action === 'confirm') {
        setTimeout(done, 1000);
      } else {
        this.done();
      }
    },
    done(){
      console.log("结束了");
    }
  }
};
</script>
<style>
</style>


