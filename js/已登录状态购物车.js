/**
 * Created by DELL on 2017/5/6.
 */
window.onload = function() {
    /*我的邦礼账户*/
    var myCount = document.getElementById('myCount');
    var mylist = document.getElementById('mylist');
    myCount.onmouseover = function() {
        show('block');
    };
    myCount.onmouseout = function() {
        show('none');
    };
    mylist.onmouseover = function() {
        show('block');
    };
    mylist.onmouseout = function() {
        show('none');
    };
}

function show(eve) {
    mylist.style.display = eve;
}

//轮播
$(function() {

    function silder() {
        var bar = $("#bar");
        // console.log(bar);
        var aLi = bar.children("li");
        // console.log(aLi);
        var timer = null;
        var _index = 0;
        var prev = $("#prev");
        var next = $("#next");

        start = function() {
            clearInterval(timer);
            timer = setInterval(function() {
                _index++;
                if (_index >= aLi.length / 5) {
                    _index = 0;
                }
                bar.animate({ "left": -1060 * _index }, 300);
            }, 2000);
        }

        start();

        prev.on("click", function() {
            _index--;
            if (_index < 0) {
                _index = (aLi.length / 5) - 1;
            }
            clearInterval(timer);
            bar.animate({ "left": -1060 * _index }, 300);
        }).on("mouseout", function() {
            start();
        });

        next.on("click", function() {
            clearInterval(timer);
            _index++;
            if (_index >= aLi.length / 5) {
                _index = 0;
            }
            bar.animate({ "left": -1060 * _index }, 300);
        }).on("mouseout", function() {
            start();
        });
    }
    silder();


    function checkAll() {
        var aInput = $("table").find("input[type='checkbox']");
        var selectAll = $(".selectAll").find("input");
        var aTr = $("tbody").children("tr");

        // console.log(aTr);
        // console.log(selectAll);
        // console.log(aInput);
        aInput.eq(0).on("click", function() {
            if ($(this).checked) {
                aInput.prop("checked", "true");
                aTr.css("background", "#FEC6C5");
            } else {
                aInput.prop("checked", "false");
            }
        });

        selectAll.on("click", function() {
            if ($(this).checked) {
                aInput.prop("checked", "true");
                aTr.css("background", "#FEC6C5");
            } else {
                aInput.prop("checked", "false");
            }
        });

    }
    checkAll();

});