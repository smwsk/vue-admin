<template>
  <div class="imgbanner">
    <img :src="imgUrl" alt="" />
    <a class="cover-link"></a>
  </div>
</template>

<script>
export default {
  props: {
    imgUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style>

  .imgbanner {
    width: 50%;
    height: 430px;
  }
  .imgbanner .cover-link {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 60px;
    left: 0;
    width: 50%;
    height: 430px;
    z-index: 4;
    background: url(data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEHAAEALAAAAAABAAEAAAICTAEAOw==) repeat;
  }
  .imgbanner .cover-link:hover {
    box-shadow: inset 0 0 38px rgba(0, 0, 0, 0.08);
    transition: all .15s ease;
  }
  .imgbanner img {
    display: block;
    width: 100%;
    height: 100%;
  }
</style>

