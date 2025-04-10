<template>
    <p class="f-15 text-secondary"><span class="custom-fw-bold"><a href="#" class="text-secondary">Home</a> / </span><span>{{ page_name }}</span><span>{{child_page_name}}</span></p>
</template>
<script>
export default{
    name: "PageTitle",
    props: {
        page_name: String,
        child_page_name : String
    }
}
</script>