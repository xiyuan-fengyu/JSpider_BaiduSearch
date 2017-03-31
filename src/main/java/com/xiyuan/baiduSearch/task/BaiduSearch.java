package com.xiyuan.baiduSearch.task;

import com.google.gson.JsonElement;
import com.xiyuan.spider.annotation.OnStart;
import com.xiyuan.spider.annotation.Task;

/**
 * Created by xiyuan_fengyu on 2017/3/31.
 */
@Task
public class BaiduSearch {

    @OnStart(name = "模拟百度搜索过程", url = "https://www.baidu.com", js = "js/BaiduSearch.js", timeout = 30)
    public void test(String url, JsonElement result) {
        System.out.println(result);
    }

}
