<template>
    <li class="text-dark px-2 custom-fw-bold f-14 sm-title mt-2">{{title}}</li>
</template>
<script>
export default{
    props: {title: String},
    name: "SubTitle"
}
</script>