/**
 * Created by xiyuan_fengyu on 2017/3/31.
 */
loadJQuery(function () {
    var href = location.href;

    if (href == "https://www.baidu.com/") {
        $("#kw").val("古剑奇谭");
        $("#su")[0].click();
    }
    else if (href.indexOf("https://www.baidu.com/s") == 0) {
        waitFor(function () {
            return $("#content_left").find("> .result").length > 0;
        }, function (notTimeout) {
            if (notTimeout) {
                var a = $("#content_left").find("> .result:eq(0) > h3 > a");
                a[0].click();
            }
            else {
                sendResult("timeout");
            }
        }, 250, 10000);
    }
    else {
        sendResult({
            title: $("title").text(),
            url: location.href
        });
    }

});