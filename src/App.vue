<template>
    <router-view></router-view>
</template>

<script lang="ts">
export default{
    name:"App",
    beforeCreate() {
		// this.$store.commit('initialiseStore');
        (this as any).$store.commit('initialiseStore');
	}
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    position: relative;
}

a,
img,
button,
input,
textarea {
    display: block;
}

button,
input,
textarea {
    background: transparent;
    border: none;
    font-family: inherit;
    outline: none;
    resize: none;
    font-family: inherit;
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
    font-family: inherit;
    color: #013832;
}
</style>
