<template>

    <div v-if='!deleted' class='results'>
        <ul>
            <li>Round #: {{ number }}</li>
            <li>Winner: {{ winner }}</li>
        </ul>
        <button v-on:click="$emit('delete-round', number)">Delete round</button>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                deleted: false,
            }
        },
        props: ['number', 'winner'],
        methods: {
            deleteRound() {
                this.deleted = true
            }
        }
    }
</script>

