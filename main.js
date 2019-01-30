Vue.component('message', {
    
    props: ['title','body'],

    template:   

  <artical class="message">

     <div class="message-header">
     
     {{title}}

     </div>

     <div class="message-body">
     
     {{ body}}

     </div>
    </artical>

});

new Vue({
    el: '#root'
})