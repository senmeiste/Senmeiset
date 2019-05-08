<template>
  <div id="app">
    <!-- <router-view/> -->
		
		<keep-alive exclude="Manger">
			<router-view/>
		</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
