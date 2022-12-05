<template>
    <div v-show="isActive"><slot></slot></div>
</template>

<script>

export default {
    props: {
        name: { required: true },
        selected: { default: false}
    },
    data() {    
        return {
            isActive: false
        };    
    }, 
    computed: {     
        href() {
            return '#' + this.name.toLowerCase().replace(/ /g, '-');
        }
    },   
    mounted() {   
        this.isActive = this.selected;      
    }
}
</script>

<style>
/*@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";*/
</style>
