<template>
    <button class="btn btn-primary" style="padding: 4px 10px !important;">{{ title }} <span v-if="icon_class" class="ms-2"><i :class="icon_class"></i></span></button>
</template>
<script>
export default{
    name: 'DefaultButton',
    props: {title: String, icon_class: String}

}
</script>