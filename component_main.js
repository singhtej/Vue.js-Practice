Vue.component('coupon',{

    template: '<input placeholder="Enter your coupon Code" @blur="onCouponApplied">',

    methods:{

        onCouponApplied(){
            this.$emit('applied');
        }

    }


});


new Vue({
    el: '#root',

    data:{
        couponApplied:false
    },
    methods: {
        onCouponApplied(){
            alert('IT was applied');
        }
    }
});
