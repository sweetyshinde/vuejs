Vue.component('task-list',{

   template: '<div><task v-for="task in tasks">{{task.task}}</task></div>',
   
   data(){

        return {
            tasks: [
                {task: 'go to store', complete:true},
                {task: 'go to work', complete:true},
                {task: 'go to shopping', complete:true},
            ]
        };
   }
   

});



Vue.component('task',{

    template: '<li><slot></slot></li>'
    
});

 new Vue({

    el: '#root'

 });
 
 
 