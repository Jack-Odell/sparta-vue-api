

new Vue({
  el: '#api',
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('http://127.0.0.1:8888/spartacarmage/api/rest/products')
      .then(response => (this.info = response))
  }
});
