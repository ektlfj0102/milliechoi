$(function () {
			var n = 10000;
			var video = document.getElementById("video1");
			var num1 = 500;
			var num2 = 50;

			setTimeout(function () {
				$("header>#back>#textwrapper>p,header>#back>#textwrapper>#find").addClass("on");

				$(window).scroll(function () {
					t = $(window).scrollTop();
					var circum;
					console.log(num1);


					if (t <= $("#videopage").offset().top) {
						// $("header>#back>#textwrapper>p,header>#back>#textwrapper>#find").removeClass("on");
						var video = document.getElementById("video1");
						video.play();
						$("header>#back>#textwrapper>p,header>#back>#textwrapper>#find").addClass("on");
						$("#logo>img").attr("src", "images/whitelogo.png").removeClass("on");
						$("header>nav").removeClass("on");
						$("#login").removeClass("on");

					} else if (t <= $("#videopage").offset().top + 300) {
						$("#favorite>#fav-ex>p,#favorite>#fav-ex>p:first-child").removeClass("on");
						$("header>#back>#textwrapper>p,header>#back>#textwrapper>#find").removeClass("on");
						$("#logo>img").attr("src", "images/blacklogo.png").addClass("on");
						$("header>nav").addClass("on");
						$("#login").addClass("on");
						$("#yellowbar").removeClass("on");
                        num1=0;
					}



					else if (t <= $("#favorite").offset().top + 300) {
						$("#favorite>#fav-ex>p,#favorite>#fav-ex>p:first-child").addClass("on");
						$("#new>p").removeClass("add");
						$("#new>p:first").removeClass("add1");
						$("#new>#book-image").removeClass("add2");
						$("#logo>img").attr("src", "images/blacklogo.png").addClass("on");
						$("header>nav").addClass("on");
						$("#login").addClass("on");
						$("#yellowbar").addClass("on");
						
						setInterval(function(){
                             $("#favorite>#fav-ex>p>span").text(num1);
                             if(num1<1000){
                               num1++;	
                             }
						},20);

					}

					else if (t <= $("#new").offset().top + 300) {
						$("#logo>img").attr("src", "images/whitelogo.png").removeClass("on");
						$("header>nav").removeClass("on");
						$("#login").removeClass("on");
						$("#new>p").addClass("add");
						$("#new>p:first").addClass("add1");
						$("#new>#book-image").addClass("add2");
						$("#favorite>#fav-ex>p,#favorite>#fav-ex>p:first-child").removeClass("on");
						$("#best>#best-wrapper>p,#best>#best-wrapper>p:first-child").removeClass("adding");
						$("#logo>img").attr("src", "images/blacklogo.png").addClass("on");
						$("header>nav").addClass("on");
						$("#login").addClass("on");
						$("#cjb1").removeClass("on");
						$("#yellowbar").removeClass("on");
                        num1=0;
					}
					
					else if (t <=$("#best").offset().top + 300) {
						$("#best>#best-wrapper>p,#best>#best-wrapper>p:first-child").addClass("adding");
						$("#new>p").removeClass("add");
						$("#new>p:first").removeClass("add1");
						$("#new>#book-image").removeClass("add2");
						$("#best2>#best2-wrapper>p,#best2>#best2-wrapper>p:first-child").removeClass("on");
						$("#best2>#best2-wrapper>img").removeClass("on");
						$("#best2>#best2-wrapper>ul>li").removeClass("on");
						$("#logo>img").attr("src", "images/blacklogo.png").addClass("on");
						$("header>nav").addClass("on");
						$("#login").addClass("on");
						$("#cjb1").addClass("on");
						
					}

					else if (t <= $("#best2").offset().top + 300) {
						$("#best>#best-wrapper>p,#best>#best-wrapper>p:first-child").removeClass("adding");
						$("#best2>#best2-wrapper>p,#best2>#best2-wrapper>p:first-child").addClass("on");
						$("#best2>#best2-wrapper>img:first").addClass("on");
						$("#best2>#best2-wrapper>ul>li:first").addClass("on");
						$("#finish>#finish-wrapper>p,#finish>#finish-wrapper>h2").removeClass("on");
						$("#finish>#finish-wrapper>img:last-child,#finish>#finish-wrapper>img").removeClass("on");
						$("#logo>img").attr("src", "images/blacklogo.png").addClass("on");
						$("header>nav").addClass("on");
   						$("#login").addClass("on");
   						$("#cjb1").removeClass("on");
	                   

					}
					else if (t <= $("#finish").offset().top + 300) {
						$("#best2>#best2-wrapper>ul>li").removeClass("on");
						$("#best2>#best2-wrapper>img").removeClass("on");
						$("#best2>#best2-wrapper>p,#best2>#best2-wrapper>p:first-child").removeClass("on");
						$("#finish>#finish-wrapper>p,#finish>#finish-wrapper>h2").addClass("on");
						$("#finish>#finish-wrapper>img:last-child,#finish>#finish-wrapper>img").addClass("on");
						$("#free>#free-wrapper>h2,#free>#free-wrapper>p").removeClass("on");
						$("#book1,#book2,#book3").removeClass("on");
						$("#free>#free-wrapper>#audio,#free>#free-wrapper>#recentbest,#free>#free-wrapper>#fantasy").removeClass("on");
						$("#logo>img").attr("src", "images/blacklogo.png").addClass("on");
						$("header>nav").addClass("on");
						$("#login").addClass("on");
					}
					else if (t <= $("#free").offset().top + 300) {
						$("#free>#free-wrapper>h2,#free>#free-wrapper>p").addClass("on");
						$("#book1,#book2,#book3").addClass("on");
						$("#free>#free-wrapper>#audio,#free>#free-wrapper>#recentbest,#free>#free-wrapper>#fantasy").addClass("on");
						$("#finish>#finish-wrapper>p,#finish>#finish-wrapper>h2").removeClass("on");
						$("#finish>#finish-wrapper>img:last-child,#finish>#finish-wrapper>img").removeClass("on");
						$("#refund>#refund-wrapper>p,#refund>#refund-wrapper>h2").removeClass("on");
						$("#refund>#refund-wrapper>#cfree,#refund>#refund-wrapper>div").removeClass("on");
						$("#logo>img").attr("src", "images/blacklogo.png").addClass("on");
						$("header>nav").addClass("on");
						$("#login").addClass("on");
					}
					else if (t <= $("#refund").offset().top + 300) {
						$("#notstop>#notstop-wrapper>h2").removeClass("on");
						$("#free>#free-wrapper>h2,#free>#free-wrapper>p").removeClass("on");
						$("#book1,#book2,#book3").removeClass("on");
						$("#free>#free-wrapper>#audio,#free>#free-wrapper>#recentbest,#free>#free-wrapper>#fantasy").removeClass("on");
						$("#refund>#refund-wrapper>p,#refund>#refund-wrapper>h2").addClass("on");
						$("#refund>#refund-wrapper>#cfree,#refund>#refund-wrapper>div").addClass("on");
						$("#logo>img").attr("src", "images/blacklogo.png").addClass("on");
						$("header>nav").addClass("on");
						$("#login").addClass("on");
					}
					else if (t <= $("#notstop").offset().top + 300) {
						$("#refund>#refund-wrapper>p,#refund>#refund-wrapper>h2").removeClass("on");
						$("#refund>#refund-wrapper>#cfree,#refund>#refund-wrapper>div").removeClass("on");
						$("#notstop>#notstop-wrapper>h2").addClass("on");
						$("#tab>#tab-wrapper>#audiobook>h2,#viewer>h2,#today>h2,#review>h2").removeClass("on");
						$("#tab>#tab-wrapper>#audiobook>p,#viewer>p,#today>p,#review>p").removeClass("on");
						$("#audiobook>#frame,#viewer>#frame,#today>#frame").removeClass("on");
						$("#logo>img").attr("src", "images/blacklogo.png").addClass("on");
						$("header>nav").addClass("on");
						$("#login").addClass("on");
						$("#frame").removeClass("on");
					}
					else if (t <= $("#tab").offset().top + 300) {
						$("#notstop>#notstop-wrapper>h2").removeClass("on");
						$("#tab>#tab-wrapper>#audiobook>h2,#viewer>h2,#today>h2,#review>h2").addClass("on");
						$("#tab>#tab-wrapper>#audiobook>p,#viewer>p,#today>p,#review>p").addClass("on");
						$("#audiobook>#frame,#viewer>#frame,#today>#frame").addClass("on");
						$("#logo>img").attr("src", "images/blacklogo.png").addClass("on");
						$("header>nav").addClass("on");
						$("#login").addClass("on");
					}
					else if (t <= $("#refree").offset().top + 300) {
						$("#tab>#tab-wrapper>#audiobook>h2,#viewer>h2,#today>h2,#review>h2").removeClass("on");
						$("#tab>#tab-wrapper>#audiobook>p,#viewer>p,#today>p,#review>p").removeClass("on");
						$("#audiobook>#frame,#viewer>#frame,#today>#frame").removeClass("on");
					}

				});
			});

			$("#best2>#best2-wrapper>ul>li").click(function () {
				$("#best2>#best2-wrapper>ul>li").removeClass("on");
				$(this).addClass("on");
				var x = $(this).index();
				$("#best2>#best2-wrapper>img").removeClass("on");
				$("#best2>#best2-wrapper>img").eq(x).addClass("on");
			});

			$("#audiobook").addClass("on");
			$("#tab>#ul-wrapper>ul>li:first").addClass("on");

			$("#tab>#ul-wrapper>ul>li").click(function () {
				$("#tab>#ul-wrapper>ul>li").removeClass("on");
				$(this).addClass("on");
				var y = $(this).index();
				$("#tab>#tab-wrapper>div").removeClass("on");
				$("#tab>#tab-wrapper>div").eq(y).addClass("on");

				$("#tab>#tab-wrapper>div").eq(y).find("ul>li").removeClass("on");
				$("#tab>#tab-wrapper>div").eq(y).find("ul>li:first").addClass("on");
				$("#tab>#tab-wrapper>div").eq(y).find("#frameslider").css({ left: 0 });



			});

			$("#tab-wrapper>#audiobook>ul>li").eq(0).addClass("on");




			$("#tab-wrapper ul>li").click(function () {
				$("#tab-wrapper ul>li").removeClass("on");
				$(this).addClass("on");
				h = $(this).index();
				$("#frameslider").animate({ left: -305 * h + "px" }, 500);
			});






			$("#tab>#tab-wrapper>#audiobook>h3").eq(0).addClass("on1");

			$("#tab>#tab-wrapper>#audiobook>ul>li").click(function () {
				var c = $(this).index();
				$("#tab>#tab-wrapper>#audiobook>h3").removeClass("on1");
				$("#tab>#tab-wrapper>#audiobook>h3").eq(c).addClass("on1");
			});

			$("#tab>#tab-wrapper>#viewer>h3").eq(0).addClass("on1");

			$("#tab>#tab-wrapper>#viewer>ul>li").click(function () {
				var d = $(this).index();
				$("#tab>#tab-wrapper>#viewer>h3").removeClass("on1");
				$("#tab>#tab-wrapper>#viewer>h3").eq(d).addClass("on1");
				$("#tab>#tab-wrapper>#viewer>#frame>#frameslider").animate({ left: -309 * d + "px" }, 500);
			});


			$("#tab>#tab-wrapper>#today>h3").eq(0).addClass("on1");

			$("#tab>#tab-wrapper>#today>ul>li").click(function () {
				var e = $(this).index();
				$("#tab>#tab-wrapper>#today>h3").removeClass("on1");
				$("#tab>#tab-wrapper>#today>h3").eq(e).addClass("on1");
				$("#tab>#tab-wrapper>#today>#frame>#frameslider").animate({ left: -308 * e + "px" }, 500);
			});










			// var num1=0;







			//--------------------qna-----------------------------------------
			$("#qna>#qnawrapper>ul>li").click(function () {
				$(this).toggleClass("on");
				$(this).children().toggleClass("act");
			});
			$("#qna>#qnawrapper>ul>li").eq(3).click(function () {
				$(this).toggleClass("on1");
			});
			$("#qna>#qnawrapper>ul>li").eq(4).click(function () {
				$(this).toggleClass("on2");
			});


		});