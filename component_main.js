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
    methods: {
        onCouponApplied(){
            alert('IT was applied');
        }
    }
});
