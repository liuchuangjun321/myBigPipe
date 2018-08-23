exports.getData = {
    // // 两个函数d1，d2来模拟异步获取两个section的数据操作。
    d1: function (fn) {
      setTimeout(fn, 3000, null, { content: "Hello, I'm the first section....." })
    },
    d2: function (fn) {
      setTimeout(fn, 5000, null, { content: "Hello, I'm the second section....." })
    }
}