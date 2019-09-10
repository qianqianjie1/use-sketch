<template>
  <div>
    <ul class="content">
    	<router-link to="/detail">
    		<li class="content-list" v-for="item in contentList">
    			<img :src="item.imgUrl" class="list-img">
    			<div class="list-desc">
    				<h1 class="list-title">{{item.title}}</h1>
    				<p class="list-text">{{item.msg}}</p>
    			</div>   		
    		</li>
    	</router-link>
    </ul>
  </div>
</template>
<script>
export default{
	data () {
		return {}
	},
	props:{
		contentList: Array
	}
}
</script>
<style>
	*{
		margin:0;
		padding: 0;
	}
	a{
		text-decoration: none
	}
	.content{
		padding: 24px 0;
		width: 375px;
		overflow:hidden;
		background: #fff;
	}
	.content-list{
		display: flex;
		list-style: none;
		margin : 0  auto 24px 20px;
	}
	.list-img{
		width: 108px;
	}
	.list-desc{
		padding-left: 16px
	}
	.list-title{
		font-family: PingFangSC-Regular;
		font-size: 15px;
		color: #2B333B;
		letter-spacing: 0;
		line-height: 17px; 
	}
	.list-text{
		font-family: PingFangSC-Light;
		font-size: 12px;
		color: #71777D;
		line-height: 14px;
		margin-top: 8px
	}
</style>