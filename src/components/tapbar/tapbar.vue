<template>
  <div>
    <ul class="tapbar">
    	<li class="tapbar-li">
    		<img src="../../assets/img/home.png" alt="首页" class="li-img">
    		<p class="tapbar-name">首页</p>
    	</li>
    	<li class="tapbar-li">
    		<img src="../../assets/img/sea.png" alt="发现" class="li-img">
    		<p class="tapbar-name">发现</p>
    	</li>
    	<li class="tapbar-li">
    		<img src="../../assets/img/download.png" alt="下载" class="li-img">
    		<p class="tapbar-name">下载</p>
    	</li>
    	<li class="tapbar-li">
    		<img src="../../assets/img/me.png" alt="发现" class="li-img">
    		<p class="tapbar-name">我的</p>
    	</li>
    </ul>
  </div>
</template>
<script>
export default{
	data () {
		return {}
	}
}
</script>
<style>
	*{
		margin:0;
		padding: 0;
	}
	.tapbar{
		position: fixed;
		bottom: 0;
		background-color: rgba(255,255,255,0.9);
		z-index: 3;
		width: 375px;
		height: 40px;
		padding: 6px 0 5px 0;
		border-top: 1px solid #F3F5F7;
		display: flex;
		justify-content: space-around;
	}
	.tapbar-li{
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.tapbar-li img{
		width: 24px
	}
	.tapbar-name{
		font-family: PingFangSC-Regular;
		font-size: 10px;
		color: #2B333B;
		letter-spacing: 0;
		line-height: 10px;
		padding-top: 4px
	}
</style>