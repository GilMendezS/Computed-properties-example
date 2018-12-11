
const app = new Vue({
    el: '#app',
    data(){
        return {
            name: '',
            lastname: '',
            age: '',
        }
    },
    computed: {
        invalidForm(){
            return this.name == '' || this.lastname == '' || this.age == ''
        }
    }
})