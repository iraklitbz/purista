<template>
    <span class="tlp-svg" :class="`tlp-svg-${name}`" v-html="url"></span>
</template>

<script lang="js">
    export default ({
        props: {
            /** Pass the filename of the svg file.<br/><br/>The file is expected in the folder `@/assets/svg`. You can pass subfolders too, e.g. `icons/filename.svg`.<br/><br/>When there is no filename set, or the file can not be found, an error helper is shown. */
            name: {
                type: String,
                required: true,
                default: ''
            }
        },
        computed: {
            url () {
                try {
                    return require(`@/assets/svg/${this.name}.svg?inline`)
                } catch (e) {
                    return `<small class='svg-error'><i>Error: cannot find file: ${this.name}.svg</i></small>`
                }
            }
        }
    })
</script>

<style lang="scss">
.tlp-svg {
    display: inline-flex;
    svg {
        display: block;
        width: 100%;
        height: auto;
    }
    .svg-error {
        display: inline-block;
        font-size: 0.75em;
        color: red;
        border: 1px solid;
        padding: 5px;
        cursor: help;
    }
}
</style>
