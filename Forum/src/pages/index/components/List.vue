<template>
    <div class="listAllBox" v-if="list">
        <div class="title" v-if="title">
            {{title}}
        </div>
        <ul >
            <li
            v-for="(item,index) of list"
            :key="index"
            @click="handClickRouter(item.id)">
                <img :src="item.imgsrc[0]" class="imgBox">
                <div class="centerText">
                    <div class="title">{{item.title}}</div>
                    <div class="centex">{{item.centent}}</div>
                    <div class="classify">
                        <span 
                        v-for="item of item.type"
                        :key="item"
                        >{{item}}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'IndexList',
    props: {
        title: String,
        list:Array
    },
    data () {
        return {
            
        }
    },
    methods: {
        handClickRouter:function(e){
            this.$router.push(`/detail/${e}`)
        }
    }
}
</script>
<style lang='scss' scoped>
@import "~styles/sassAll.scss";

.listAllBox{
    width: 100%;
    height: auto;
    float: left;
    background: #f8f8f8;
    display: inline-block;
    .title{
        font-size: 0.28rem;
        line-height: 0.6rem;
        padding: 0 0.12rem;
    }
    ul{
        width: 100%;
        display: inline-block;
        height: auto;
        padding: 0 0.12rem;
        li{
            float: left;
            background: #fff;
            width: 100%;
            height: auto;
            min-height: 2rem;
            border-radius: 0.1rem;
            margin-bottom: 0.14rem;
            font-size: 0.3rem;
            display: flex;
            .imgBox{
                float: left;
                width: 1.8rem;
                height: 1.8rem;
                border-radius: 0.1rem;
                margin: 0.2rem;
            }
            .centerText{
                flex: 1;
                padding: 0.2rem 0;
                padding-right: 0.2rem;
                .title{
                    width: 100%;
                    line-height: 0.42rem;
                    font-size: 0.32rem;
                    font-weight: bold;
                    color: #3d3d3d;
                    padding: 0;
                    @include textoverflow;
                }
                .centex{
                    width: 100%;
                    line-height: 0.36rem;
                    font-size: 0.26rem;
                    color: #666;
                    @include centenoverflow;
                }
                .classify{
                    width: 100%;
                    height: 0.6rem;
                    line-height: 0.6rem;
                    span{
                        display: inline-block;
                        height: 0.38rem;
                        line-height: 0.38rem;
                        width: auto;
                        background: $forumBack;
                        padding: 0 0.12rem;
                        text-align: center;
                        font-size: 0.22rem;
                        color: #fff;
                        border-radius: 0.1rem;
                        margin-right: 0.1rem;
                    }
                }
            }
        }
        li:last-child{
            margin: 0
        }
    }
}

</style>

