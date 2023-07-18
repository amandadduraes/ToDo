const app = new Vue({
    el: "#app",
    data : {
        toDoList: [],
        toDo: '',
        errorMessage:null,
    },
    methods: {
        save() {
            this.errorMessage = null;
            if (!this.toDo){
                this.errorMessage = "Digite o texto da tarefa!";
                return;
            }
            this.toDoList.push({text: this.toDo, completed: false});
            this.toDo = '';
        },
        complete(toDo) {
            // toDo.completed = true;
            this.$set(toDo, 'completed', true);
        },
        remove(toDo) {
            const index = this.toDoList.indexOf(toDo)
            this.toDoList.splice(index,1);
        }
    },
    mounted(){
        this.$refs.toDoInput.focus();
    },
    updated(){
        this.$refs.toDoInput.focus();
    }
})