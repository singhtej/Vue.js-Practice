Vue.component('modal',{
    template:`
    
    <div class="modal is-active">
    <div class="modal-background"></div>
    
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">
        //creating a slot for header
        <slot></slot>
        </p>
        <button class="delete" aria-label="close"></button>
      </header>

      <section class="modal-card-body">
        Temporary Content for now
      </section>


      <footer class="modal-card-foot">
        <button class="button is-success">Save changes</button>
        <button class="button">Cancel</button>
      </footer>


    </div>
  </div>
    
    `
})


// So far, we've only reviewed default component slots. Or, in other words, "take this bit of content, and insert it right there, as designated by the slot tags. But what about when we require more control? A modal component is a perfect example of this. If you want to slot a header section in one place, and a footer section in another, named slots are exactly what you need.
new Vue({
    el: '#root',
})