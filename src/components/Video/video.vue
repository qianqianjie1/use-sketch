<template>
  	<div class="video-content">
  		<video class="viedos" width="375px" controls="true" autoplay="true" :src="videoUrl"></video>
  		<router-link to="/">
  		    <div class="video-back">&gt</div>
  		</router-link>
  	</div>
</template>
<script>
export default{
	data () {
		return {}
	},
	props:{
		videoUrl:String
	}
}
</script>
<style>
	*{
		margin:0;
		padding: 0
	}
	.video-content{
		width: 375px;
		height: 191px;
		position: relative;
	}
	.video-back{
		position: absolute;
		background: rgba(213,213,213,0.50);
		border-radius: 2px;
		top: 21px;
		left: 16px;
		text-align: center;
		color: #fff;
		font-size: 18px;
		line-height: 32px;
		width: 32px;
		height: 32px;
	}
</style>