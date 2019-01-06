Vue.component('task-list',{

    template: '<div><task v-for= "task in tasks">{{ task.task}}</task></div>',
   
   
    data() {

        return{

            tasks: [
                {task: 'Go to Store', completed: true},
                {task: 'Today practice', completed: false},
                {task: 'Clear inbox', completed: false},
                {task: 'Go to Store', completed: false},
                {task: 'Make dinner', completed: false},
                {task: 'clear room', completed: true}
            ]
        }
    }

});

Vue.component('task',{

    template: '<li><slot></slot></li>'



});


new Vue({
    el: '#root'
});
