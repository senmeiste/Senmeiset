<template>
    <div class="releaseCentexBox">
        <div class="title">
            标题
        </div>
        <div class="centenInput">
            <textarea placeholder="请输入标题" maxlength="32"></textarea>
        </div>
         <div class="title">
            内容
        </div>
        <div class="centenInput centenInputTo">
            <textarea placeholder="请输入内容" maxlength="400"></textarea>
        </div>
         <div class="title">
            图片
        </div>
        <div class="imgUpLoadBox">
            <div class="UpLoadImg">
                <span class="iconfont">&#xeb9a;</span>
            </div>
            <div class="showImgBox">
                <img src="">
                <span class="iconfont removeImgArr">&#xeb9c;</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ReleaseText'
}
</script>

<style lang="scss" scoped>
@import "~styles/sassAll.scss";

.releaseCentexBox{
    width: 100%;
    height: auto;
    background: #fff;
    padding: 0 0.2rem 0.2rem;
    margin-bottom: 0.2rem;
    .title{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        font-size: 0.4rem;
        color: #3d3d3d;
        margin-bottom: 0.2rem;
    }
    .centenInput{
        width: 100%;
        height: 1.5rem;
        border-radius: 0.2rem;
        border: 1px solid #ccc;
        overflow: hidden;
        margin-bottom: 0.2rem;
        textarea{
            padding: 0.12rem;
            font-size: 0.32rem;
            width: 100%;
            resize: none;
            height: 100%;
        }
    }
    .centenInputTo{
        height: 6rem;
    }
    .imgUpLoadBox{
        width: 100%;
        height: auto;
        display: inline-block;
        .UpLoadImg,.showImgBox{
            width: 1.6rem;
            height: 1.6rem;
            text-align: center;
            line-height: 1.6rem;
            font-size: 1rem;
            color: #ccc;
            border: 1px solid #ccc;
            border-radius: 0.2rem;
            float: left;
            margin: 0 0.2rem 0.2rem 0;
            position: relative;
            span{
                font-size: 1rem;
            }
            .removeImgArr{
                font-size: 0.4rem;
                line-height: 0.4rem;
                width: 0.4rem;
                height: 0.4rem;
                position: absolute;
                right: -0.1rem;
                top: -0.1rem;
                background: #fff;
            }
        }
    }
}

</style>
