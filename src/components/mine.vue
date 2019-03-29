<template>
    <div class="content">
        在mine的组件里面嵌套路由<br />
        <router-link to="/mine/c">去到Cpage</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
        <router-link to="/mine/d">去到Dpage</router-link>
        <div class="child">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
  watch: {
    a: function (val, oldVal) {
      console.log('new: %s, old: %s', val, oldVal)
    },
    // 方法名
    b: 'someMethod',
    // 深度 watcher
    c: {
      handler: function (val, oldVal) { /* ... */ },
      deep: true
    },
    // 该回调将会在侦听开始之后被立即调用
    d: {
      handler: function (val, oldVal) { /* ... */ },
      immediate: true
    },
    e: [
      'handle1',
      function handle2 (val, oldVal) { /* ... */ },
      {
        handler: function handle3 (val, oldVal) { /* ... */ },
        /* ... */
      }
    ],
    // watch vm.e.f's value: {g: 5}
    'e.f': function (val, oldVal) { /* ... */ }
  }
}
</script>
