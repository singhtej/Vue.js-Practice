// shared event assistant 
window.Event =new Vue();

Vue.component('coupon',{

    template: '<input placeholder="Enter your coupon Code" @blur="onCouponApplied">',

    methods:{

        onCouponApplied(){
            Event.$emit('applied');
        }

    }


});


new Vue({
    el: '#root',

    data:{
        couponApplied:false
    },
    
    created(){
        Event.$on('applied', () => alert('Handling it'))
    }
});
