<template>
  <div class="vue-load" id="loading">
    <div class="block-loader"><span class="block"></span><span class="block"></span><span class="block"></span><span
      class="block"></span></div>
  </div>
</template>

<script>
  export default {
    name: 'Preloader',
  };
</script>

<style lang="css" scoped>
  #loading {
    width: 100%;
    position: relative;
    height: 100px;
  }

  .block-loader span {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin-left: 5px;
    opacity: 1;
    -webkit-animation: sway 1s linear infinite;
    animation: sway 1s linear infinite;
  }

  .block-loader span:nth-child(1) {
    background-color: #DA8DB7;
  }

  .block-loader span:nth-child(2) {
    background-color: #A471C1;
    -webkit-animation-delay: 0.25s;
    animation-delay: 0.25s;
  }

  .block-loader span:nth-child(3) {
    background-color: #F2A48D;
    -webkit-animation-delay: 0.5s;
    animation-delay: 0.5s;
  }

  .block-loader span:nth-child(4) {
    background-color: #a071bd;
    -webkit-animation-delay: 0.75s;
    animation-delay: 0.75s;
  }

  .vue-load {
    display: block;
    position: relative;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .block-loader {
    height: 100%;
    width: 100%;
  }

  @-webkit-keyframes sway {
    0% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
  }

  @keyframes sway {
    0% {
      -webkit-transform: translateX(8px);
      transform: translateX(8px);
    }
    100% {
      -webkit-transform: translateX(0px);
      transform: translateX(0px);
    }
  }

  @-webkit-keyframes sway-opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes sway-opacity {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

</style>
