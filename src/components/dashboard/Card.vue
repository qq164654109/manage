<template>
    <div class="card">
         <div class="image">
            <i class="iconfont" :class="'icon-'+text"></i>
         </div>
         <div class="induce">
             <p class="text">{{text}}</p>
             <p class="num">{{num}}</p>
         </div>
    </div>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      num: {
        type: Number,
        default: 0
      },
      text: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="scss">
    .card{
        display: flex;
        padding: 30px;
        height: 120px;
        background: #fff;
        border-radius: 4px;
        margin-bottom: 20px;
        .image{
            width: 60px;
            height: 60px;
            flex: 0 0 60px;
            line-height: 60px;
            margin-right: 20px;
            .iconfont{
                font-size: 60px;
                &.icon-trade{
                    color: #64ea91;
                 }
                &.icon-comment{
                    color: #d897eb;
                 }
                &.icon-custormos{
                    color: #409EFF;
                 }
                &.icon-referral{
                     color: #f69899;
                 }
            }
        }
        .induce{
            flex: 1;
            height: 60px;
            line-height: 30px;
            .text{
                font-size: 18px;
                color: #777;
            }
            .num{
                font-size: 24px;
            }
        }
    }
</style>