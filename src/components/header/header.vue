<template>
  <div>
    <ul class="nav">
    	<li class="nav-li">推荐</li>
    	<li class="nav-li">课程</li>
    	<li class="nav-li">实战</li>
    	<li class="nav-li">职业路径</li>
    	<li class="nav-li">
    		<img src="../../assets/img/search.png" alt="搜索" class="li-img">
    	</li>
    	<li class="nav-li">
    		<img src="../../assets/img/history.png" alt="历史" class="li-img">
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
	.nav{
		position: fixed;
		top: 0;
		z-index: 3;
		width: 375px;
		background: #FFFFFF;
		box-shadow: 0 2px 4px 0 rgba(0,0,0,0.10);
		display: flex;
		align-items: center;
		padding: 13px 20px;
	}
	.nav-li{
		list-style: none;
		font-family: PingFangSC-Regular;
		font-size: 16px;
		color: #71777D;
		letter-spacing: 0;
		line-height: 18px;
	}
	.li-img{
		width: 18px;
	}
</style>