<template>
	<div>
		<v-header></v-header>
		<ul class="tab">
			<li v-for="item in headerList">
				<img :src="item.imgUrl" alt="img" class="tab-img"/>
				<p class="tab-name">{{item.name}}</p>
			</li>
		</ul>
		<v-course :contentList="courseList"></v-course>
		<v-tapbar></v-tapbar>
	</div>
</template>
<script>
	import Header from '@/components/header/header'
	import Tapbar from '@/components/Tapbar/tapbar'
	import Course from '@/components/CourseList/course'
	import webImg from "@/assets/img/web.png"
	import webservice from "@/assets/img/webservice.png"
	import move from "@/assets/img/move.png"
	import data from "@/assets/img/data.png"
	import bigdata from "@/assets/img/bigdata.png"
	
	import course1 from "@/assets/img/course1.jpg";
	import course2 from "@/assets/img/course2.jpg";
	import course3 from "@/assets/img/course3.jpg";
	import course4 from "@/assets/img/course4.jpg";
	import course5 from "@/assets/img/course5.jpg";

	export default{
  		data () {
			return {
				headerList: [],
				courseList:[]
			}
		},
		mounted () {
			this.headerList = [{
				imgUrl : webImg,
				name: '前端开发'
			},{
				imgUrl : webservice,
				name: '后端开发'
			},{
				imgUrl : move,
				name: '移动开发'
			},{
				imgUrl : data,
				name: '数据库'
			},{
				imgUrl : bigdata,
				name: '云计算'
			}];
			this.courseList = [
				{
					imgUrl: course1,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course2,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course3,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course4,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course5,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course1,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				},
				{
					imgUrl: course1,
					title: '实例妙解Sed和Awk的秘密',
					msg: '中级 · 330人在学'
				}
			];
		},
		components: {
			"v-header": Header,
			"v-tapbar": Tapbar,
			"v-course": Course
		}
	}
</script>
<style>
	body{
		overflow-x: hidden;
	}
	.tab{
		display: flex;
		align-items: center;
		width: 6.7rem;
		background-color: #f3f5f7;
		padding: 64px 20px 0 20px;
		overflow-x: auto;
		list-style: none;
	}
	.tab::scrollbar { display: none }
	.tab li{
		display: flex;
		flex-direction: column;
		align-items: center;
		padding-bottom: 20px;
		width: 56px;
		height: 60px;
	}
	.tab li:nth-child(n){
		margin-right: 32px
	}
	.tab li:last-child{
		margin-right: 0
	}
	.tab-img{
		width: 32px
	}
	.tab-name{
		width: 56px;
		text-align: center;
		padding-top: 12px;
		font-family: PingFangSC-Regular;
		font-size: 14px;
		color: #2B333B;
		letter-spacing: 0;
		line-height: 16px;
	}

</style>