<template>
    <div class="comment">
        <div class="list">
            <div class="item" :key="index" v-for="(item, index) in commentData">
                <div class="avatar"><img :src="item.avatar" width="100%" height="100%" alt="avatar"></div>
                <div class="detail">
                    <p class="name">{{item.name}}</p>
                    <p class="content">{{item.comment}}</p>
                    <p class="date">{{item.date}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  export default {
    props: ["commentData"]
  }
</script>

<style scoped lang="scss">
.comment{
    background: #fff;
    border-radius: 4px;
    padding: 0 20px;
    .item{
        padding:20px 0;
        border-bottom: 1px solid #ccc;
        display: flex;
        .avatar{
            flex: 0 0 45px;
            width: 48px;
            height: 48px;
            margin-right: 20px;
            border-radius: 50%;
            overflow: hidden;
        }
        .detail{
            flex: 1;
            line-height: 18px;
            .name{
                font-size: 16px;
            }
            .content{
                font-size: 14px;
                color: #666;
            }
            .date{
                text-align: right;
                font-size: 12px;
                color: #777;
            }
        }
    }
    .item:last-child{
        border: none;
    }
}
</style>