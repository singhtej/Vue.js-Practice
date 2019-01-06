//creating a instance
new Vue({
  el:'#vue-app',
  data: {
    name:'Tejveer',
    firstName:'Singh',
    email:'tejvercs@gmail.com',

  },
  //creating method
  methods:{
    greet: function(){
      return 'Guten Morgen' + ' '+ this.name;
    }
  }
});
