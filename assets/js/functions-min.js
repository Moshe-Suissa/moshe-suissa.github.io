$(document).ready(function(){$(".nav-toggle").click(function(){$(".nav").toggleClass("open")}),$('a[href^="#"]').click(function(s){var e=$($(this).attr("href"));e.length&&(s.preventDefault(),$("html, body").animate({scrollTop:e.offset().top-15},300)),$(".nav").toggleClass("open")}),$("#full-slide .prev, #full-slide .next").click(function(){var s=$(this),e=$(".banner").find(".active"),r=$(".banner").children().index(e),a=$(".banner").children().length;s.hasClass("next")?r<a-1?$(".active").removeClass("active").next().addClass("active"):$(".banner li").removeClass("active").first().addClass("active"):0===r?$(".banner li").removeClass("active").last().addClass("active"):$(".active").removeClass("active").prev().addClass("active")}),$(".slider").find("li").find("a").css("cursor","default"),$(".current").find("a").css("cursor","pointer"),$(".slider2").find("li").find("a").css("cursor","default"),$(".current2").find("a").css("cursor","pointer"),$("#three-slide .prev, #three-slide .next").click(function(){var s=$(this),e=$(".slider").find(".back"),r=$(".slider").children().index(e),a=$(".slider").find(".current"),l=$(".slider").children().index(a),n=$(".slider").find(".front"),t=$(".slider").children().index(n),d=$(".slider").children().length;$(".slider").addClass("swap"),setTimeout(function(){s.hasClass("next")?t<d-1&&l<d-1&&r<d-1?($(".back").removeClass("back").next().addClass("back"),$(".current").removeClass("current").next().addClass("current"),$(".front").removeClass("front").next().addClass("front")):t===d-1?($(".back").removeClass("back").next().addClass("back"),$(".current").removeClass("current").next().addClass("current"),$(".slider li").removeClass("front").first().addClass("front")):l===d-1?($(".back").removeClass("back").next().addClass("back"),$(".slider li").removeClass("current").first().addClass("current"),$(".front").removeClass("front").next().addClass("front")):($(".slider li").removeClass("back").first().addClass("back"),$(".current").removeClass("current").next().addClass("current"),$(".front").removeClass("front").next().addClass("front")):0!==r&&0!==l&&0!==t?($(".back").removeClass("back").prev().addClass("back"),$(".current").removeClass("current").prev().addClass("current"),$(".front").removeClass("front").prev().addClass("front")):0===r?($(".slider li").removeClass("back").last().addClass("back"),$(".current").removeClass("current").prev().addClass("current"),$(".front").removeClass("front").prev().addClass("front")):0===l?($(".back").removeClass("back").prev().addClass("back"),$(".slider li").removeClass("current").last().addClass("current"),$(".front").removeClass("front").prev().addClass("front")):($(".back").removeClass("back").prev().addClass("back"),$(".current").removeClass("current").prev().addClass("current"),$(".slider li").removeClass("front").last().addClass("front")),$(".slider").removeClass("swap"),$(".back").find("a").css("cursor","default"),$(".front").find("a").css("cursor","default"),$(".current").find("a").css("cursor","pointer")},300)}),$("#three-slide .prev2, #three-slide .next2").click(function(){var s=$(this),e=$(".slider2").find(".back2"),r=$(".slider2").children().index(e),a=$(".slider2").find(".current2"),l=$(".slider2").children().index(a),n=$(".slider2").find(".front2"),t=$(".slider2").children().index(n),d=$(".slider2").children().length;$(".slider2").addClass("swap2"),setTimeout(function(){s.hasClass("next2")?t<d-1&&l<d-1&&r<d-1?($(".back2").removeClass("back2").next().addClass("back2"),$(".current2").removeClass("current2").next().addClass("current2"),$(".front2").removeClass("front2").next().addClass("front2")):t===d-1?($(".back2").removeClass("back2").next().addClass("back2"),$(".current2").removeClass("current2").next().addClass("current2"),$(".slider2 li").removeClass("front2").first().addClass("front2")):l===d-1?($(".back2").removeClass("back2").next().addClass("back2"),$(".slider2 li").removeClass("current2").first().addClass("current2"),$(".front2").removeClass("front2").next().addClass("front2")):($(".slider2 li").removeClass("back2").first().addClass("back2"),$(".current2").removeClass("current2").next().addClass("current2"),$(".front2").removeClass("front2").next().addClass("front2")):0!==r&&0!==l&&0!==t?($(".back2").removeClass("back2").prev().addClass("back2"),$(".current2").removeClass("current2").prev().addClass("current2"),$(".front2").removeClass("front2").prev().addClass("front2")):0===r?($(".slider2 li").removeClass("back2").last().addClass("back2"),$(".current2").removeClass("current2").prev().addClass("current2"),$(".front2").removeClass("front2").prev().addClass("front2")):0===l?($(".back2").removeClass("back2").prev().addClass("back2"),$(".slider2 li").removeClass("current2").last().addClass("current2"),$(".front2").removeClass("front2").prev().addClass("front2")):($(".back2").removeClass("back2").prev().addClass("back2"),$(".current2").removeClass("current2").prev().addClass("current2"),$(".slider2 li").removeClass("front2").last().addClass("front2")),$(".slider2").removeClass("swap2"),$(".back2").find("a").css("cursor","default"),$(".front2").find("a").css("cursor","default"),$(".current2").find("a").css("cursor","pointer")},300)}),$("#three-slide").on("click","a",function(s){$(this).parent().hasClass("current")||$(this).parent().hasClass("current2")||s.preventDefault()})});
