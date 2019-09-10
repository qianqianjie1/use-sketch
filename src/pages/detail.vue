<template>
  <div>
    <v-video :videoUrl="videosUrl"></v-video>
    <div class="detail-header">
    	<ul>
    		<li>章节</li>
    		<li>详情</li>
    		<li>评论</li>
    		<li>问答</li>
    		<li>笔记</li>
    	</ul>
    </div>
    <div class="title">
		<h1>{{title}}</h1>
		<p>{{des}}</p>
		<span></span>
	</div>
	<ul class="question">
		<li v-for="(item, index) in arrQuestion">
			<h1>{{arrTitle[index]}}</h1>
			<p v-html="item"></p>
		</li>
	</ul>
  </div>
</template>
<script>
	import Videos from "@/components/Video/video"
	export default{
		data () {
			return {
				videosUrl:'https://www.imooc.com/video/11224',
				title: '',
				des: '',
				arrQuestion:[],
				arrTitle: ["课程须知", "老师告诉你能学到什么？"]
			}
		},
		mounted () {
			this.title = "iOS基础教程之-Camera摄像头";
			this.des = "从实例出发介绍我们的Camera，可以实现Camera属性检测，照片拍摄，视频录制，图片展示，录制视频";
			this.arrQuestion = ["本课程适合客户端产品经理，研发人员以及对iOS新特性感兴趣的人群", `
			(1)数码相机相关的所有API<br/> 
			(2)利用Camera实现相机的各种属性检测<br/> 
			(3)利用Camera拍照、保存、遍历相册等功能<br/>
			(4)利用Camera拍摄视频、视频剪切功能`];
		},
		components: {
			"v-video": Videos
		}
	}
</script>
<style>
	*{
		margin:0;
		padding: 0
	}
	.detail-header ul{
		background: #FFFFFF;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
		width: 375px;
		box-sizing: border-box;
		display: flex;
		padding: 13px 24px;
	}
	.detail-header ul li{
		flex:1;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #71777D;
		letter-spacing: 0;
		line-height: 16px;
		list-style: none;
		width: 28px;
		margin-right: 45px;
	}
	.detail-header ul li:last-child{
		margin-right: 0
	}
	.title{
		padding: 24px 0 0 20px;
		height: 112px;
		margin-bottom: 8px;
		position: relative;
		border-bottom: 7px solid rgb(243,248,247)
	}
	.title h1{
		font-size: 16px;
		color: #2B333B ;
	}
	.title p{
		font-size: 14px;
		color: #71777D;
		padding : 16px 0 34px;
		width: 335px;
	}
	.title span{
		display: inline-block;
		height: 10px;
		width: 10px;
		background-image: url('../assets/img/arrow.png');
		background-size: cover;
		position: absolute;
		top: 80%;
		left:50%;
		transform: translateX(-50%);
	}
	.question{
		box-sizing: border-box;
		padding: 20px;
		background: #fff;		
	}
	.question li{
		display: inline-block;
	}
	.question li h1{
		font-size: 14px;
		color: #2B333B; 
	}
	.question li p{
		padding:12px 0 0 30px;
		font-size: 14px;
		color: #71777D ; 
	}
	.question li:nth-child(1){
		padding-bottom: 24px;
	}
</style>