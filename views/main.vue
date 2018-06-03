<template lang="html">
  <div>
    Request status: {{response}}
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      response: 'Making request...'
    }
  },
  methods: {
    async getData () {
      //DOESN'T WORK!
      const response = await new Promise((resolve, reject) => {
        setTimeout(function () {
          resolve('Done.');
        }, 1000);
      });

      this.response = response;

      //WORKS! (removed async await words and no errors on console)
      // new Promise((resolve, reject) => {
      //   setTimeout(function () {
      //     resolve('Done');
      //   }, 1000);
      // }).then(res => {
      //   this.response = res;
      // });
    }
  },
  mounted () {
    this.getData();
  }
}
</script>

<style lang="css" scoped>
</style>
