<template>
    <div class="modal">
        <div class="dialog" @click.stop>
        <div class="dialog__main">
            <div class="dialog__icon icon-warning"></div>
            <div class="dialog__body">{{title}}</div>
        </div>
        <div class="dialog__btn">
            <button class="btn outline-btn" @click="noCancel">{{titleBtn1}}</button>
            <!-- <button class="btn sub-btn ml-8" @click="cancel">{{titleBtn2}}</button> -->
            <button class="btn main-btn ml-8" @click="cancel">{{titleBtn3}}</button>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'WorkspaceJsonDDialog',

    props: {
        title: {
            type: String
        },
        isShowDialogDetailadd: {
            type: Boolean
        },
        titleBtn1: {
            type: String
        },
        titleBtn2: {
            type: String
        },
        titleBtn3: {
            type: String
        },
    },
    
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        noCancel() {
            this.$parent.closeDialog();
        },
        cancel(){
            this.$parent.destroys();
        }
    },
};
</script>

<style scoped>
@import url('../../css/base/dialog.css');
</style>