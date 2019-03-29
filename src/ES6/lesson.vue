<template>
  <div>
    <div>
      <ul class="list">
        <li><a href="#">这是测试文本内容</a><span>2018-99-88</span></li>
        <li><a href="#">这是测试文本内容</a><span>2018-99-88</span></li>
        <li><a href="#">这是测试文本内容</a><span>2018-99-88</span></li>
        <li><a href="#">这是测试文本内容</a><span>2018-99-88</span></li>
        <li><a href="#">这是测试文本内容</a><span>2018-99-88</span></li>
        <li><a href="#">这是测试文本内容</a><span>2018-99-88</span></li>
        <li><a href="#">这是测试文本内容</a><span>2018-99-88</span></li>
        <li><a href="#">这是测试文本内容</a><span>2018-99-88</span></li>
        <li><a href="#">这是测试文本内容</a><span>2018-99-88</span></li>
        <li><a href="#">这是测试文本内容</a><span>2018-99-88</span></li> 
      </ul>
    </div>
    <div class="box"></div>
    <div class="box2"></div>
    <div class="sanjiao"></div>
    <div class="sanjiao2"></div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      show: false
    };
  },
  methods: {
    jgfz() {
      {
        let a, b, rest;
        [a, b] = [1, 2];
        console.log(a, b);
      }
      {
        let a, b, rest;
        [a, b, ...rest] = [1, 2, 3, 4, 5, 6];
        console.log(a, b);
      }
      {
        var a = [];
        for (var i = 0; i < 10; i++) {
          a[i] = function() {
            console.log(i);
          };
        }
        a[6](); // 10
      }
      //对象解构赋值
      {
        let obj={
          uid:123,
          uname:"张三"
        }
        let uid,uname;
        ({uid,uname}=obj);
        console.log(uid+uname);
      }
      {
        let uid2,uname2;
        ({uid,uname}={});
        console.log(uid+uname);
      }
    }
  },
  mounted() {
    this.jgfz();
  }
};
</script>
<style lang="less">
@import "../../static/css/index.less";
</style>


