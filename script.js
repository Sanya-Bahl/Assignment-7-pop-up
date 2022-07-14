$(document).ready(function()
{
    $('.clicks').on('click',function(){
             
           $('#box').addClass('show');
    });

    $('.submission').on('click', function(){
         
        //method 1 remove class show
        //method 2
         $('#box').removeClass('show');
    });
});