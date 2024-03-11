// const pullToRefresh=document.querySelector('.pull-to-refresh');
// let touchstartY=0;

// document.addEventListener('touchstart', e =>{
//     touchstartY=e.touches[0].clientY;
// });

// document.addEventListener('touchmove', e =>{
//     const touchY=e.touches[0].clientY;
//     const touchDiff=touchY-touchstartY;
//     if(touchDiff > 0 && window.scrollY === 0){
//         pullToRefresh.classList.add('visible');
//         e.preventDefault();
//     }
// });
// document.addEventListener('touchend', e =>{
//     if(pullToRefresh.classList.contains('visible')){
//         pullToRefresh.classList.remove('visible');
//         location.reload();
//     }
// });

// search-box #search-box #list li
$(document).ready(function(){
    $("#search-box").on("keyup",function(){
        var value=$(this).val().toLowerCase();
        $("#list li").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value)>-1);
        });
    });
});

/*document title change on tab switch**/
window.addEventListener('focus',function(){
    this.document.title='Visit Here';
})
window.addEventListener('blur',function(){
    this.document.title='Come Back to Website';
})


/*preloader**/
$(window).on("load",function(){
    $(".preloader").addClass("loaded");
 })

//  header start
$(document).ready(function () {
    $("#search-btn").click(function () {
            $(".login-box").hide();
      $(".search-form").fadeToggle("slow");
      $("#list").fadeToggle("slow");
    });
    
  });

  $(document).ready(function () {
    $("#menu-btn").click(function () {
      $(".disflex").slideToggle(1500);
      $(".disflex").css({"background-color":"red;"})
      $(".search-form").hide();
      $("#list").hide();
      $(".login-box").hide();
      $('#cart').hide();
    });
  });
//   header end

// login form start

$(document).ready(function () {
  $("#login-btn").click(function () {
    $(".login-box").slideToggle(3000);
    $(".search-form").hide();
    $("#list").hide();
    
  });
});
// login form end

// // top button

 // Get the button
// let mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     mybutton.style.display = "block";
//   } else {
//     mybutton.style.display = "none";
//   }
// }


// pull to refreash
var mouseY = 0;
var startMouseY = 0;
$('body').on('mousedown', function (ev) {
    mouseY = ev.pageY;
    startMouseY = mouseY;
    $(document).mousemove(function (e) {
        if (e.pageY > mouseY) {
            var d = e.pageY - startMouseY;
            console.log("d: " + d);
            if (d >= 200)
                location.reload();
            $('body').css('margin-top', d/4 + 'px');
        }
        else
            $(document).unbind("mousemove");


    });
});
$('body').on('mouseup', function () {
    $('body').css('margin-top', '0px');
    $(document).unbind("mousemove");
});
$('body').on('mouseleave', function () {
    $('body').css('margin-top', '0px');
    $(document).unbind("mousemove");
});

// Onclick about us
function Aboutus(){
    window.location.href="AboutUs.html"
}
// function for show wanted data
// for shirt
function shirt(){  
    $(document).ready(function(){  
        if($("div[class='tshirts']")){
      $("div[class='tshirts']").show(); 
      $("div[class='causalshirts']").hide();
      $("div[id='carousel']").hide(); 
      $("div[class='sweters']").hide();
      $("div[class='comson']").hide();
        }else{
            $("div[class='tshirts']").hide();
        }
    }); 
    } 

    // for show to all content -start
        $(document).ready(function () {
        $("#alll").click(function () {
            $(".tshirts").show(); 
            $("div[class='causalshirts']").show();
            $("div[id='carousel']").show(); 
            $("div[class='sweters']").show();
            $("div[class='comson']").show();
          });
        });
        // for show to all content -end



    // for Sweters
    function sweters(){  
        $(document).ready(function(){  
            
            if($("div[class='sweters']")){
          $("div[class='sweters']").show(); 
          $("div[class='causalshirts']").hide();
          $("div[id='carousel']").hide();
          $("div[class='tshirts']").hide(); 
          $("div[class='comson']").hide();
            }else{
                $("div[class='sweters']").hide();
            }
        }); 
        } 


        // add to cart
        $(document).ready(function(){
            $('#cart').hide();
            $("#cart-btn").click(function(){
                $('#cart').toggle();  
            })
            $("#cart").mouseleave(function(){
                $('#cart').hide();  
            })
            
            var cart_item_count=0;
            var itemId=0;
            $('#fa-shopping-cart').click(function(){
                
                itemId++;
                var n=($(this).is("#imgeparentclass").length,itemId);
                for(var i=0;i<n;i++){

                    cart_item_count++;
                   
                var img_src=$(this).parents(".carousel-item1").siblings("img").attr("src");
                // var title=$(this).parents(".all1").siblings(".all1").find(".brand").text();
                // var price=$(this).parents(".all").siblings("#price").find("#price").text();
               
                var title=$("h3[class='brand']").eq(i).text();
                var price=$("span[id='price']").eq(i).text();
                // var price=$("span[class='price1']").text();
                // var price=$("span[id='price']").first().text();
                // var price=$(this).parents("#img1").siblings("#img1").has("#price").text();
    
}

                var cart_item=`
                <div class="main d-flex p-3 border border-left-0 border-right-0 border-top-0">
                <div class="col-md-3 border border-left-0 border-top-0 border-bottom-0">
                    <img src=${img_src} class="w-100" alt="">
                    </div>
                    <div id="title" class="col-md-3 d-flex flex-wrap align-content-center">
                    <h6 style="font-size:13px;">${title}</h6>
                    </div> 
                    <div class="col-md-3 d-flex flex-wrap align-content-center">
                    <span class="mx-2">1</span>
                    </div>
                    <div class="col-md-2 d-flex flex-wrap align-content-center" id="t_price">
                    <h6 class="mt-2 d-flex"><span></span><span class="cart_item_price">${price}</span></h6>
                    </div>
                    <div class="col-md-1 d-flex flex-wrap align-content-center">
                    <span class="close" style="cursor:pointer;font-size:25px;">&times;</span>
                    </div>
                </div>`
                $("#order").append(cart_item);
                $("#cart_item_count").text(cart_item_count);
                $(".close").click(function(){
                    $(this).parents(".main").remove();
                    item_count();
                })
                item_count(); 
            })
            function item_count(){
                var res=$("#order").children().length;
                $("#cart_item_count").text(res);
            }
        })