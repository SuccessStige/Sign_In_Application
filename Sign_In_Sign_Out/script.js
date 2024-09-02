 // The Login Toggle start here 
 $(document).ready(function(){
        
    $('.change a').click(function(){
        $('.sign-up_login').animate({height:"toggle", opacity:"toggle"}, "slow")
    })
    $('.change1 a').click(function(){
        $('.login_forget').animate({height:"toggle", opacity:"toggle"}, "slow")
    })
   
});
// The toggle Stop Here