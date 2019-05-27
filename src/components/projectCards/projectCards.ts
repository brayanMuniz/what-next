import Vue from 'vue'
export default Vue.extend({
    inheritAttrs: false,

    props: {
        title: {
            type: String,
            default: undefined
        },
        text: {
            type: String,
            default: undefined
        }
    },

    computed: {
        hasOffset() {
            return this.$slots.header ||
                this.$slots.offset ||
                this.title ||
                this.text
        },
    }
})