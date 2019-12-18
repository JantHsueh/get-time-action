const core = require('@actions/core');

async function main() {
    try {

        // current time 加到东8区
        const timezone = core.getInput('timeZone');//目标时区时间，默认东八区
        console.log('time zone', timezone)
        const offset_GMT = new Date().getTimezoneOffset(); // 本地时间和格林威治的时间差，单位为分钟
        const nowDate = new Date().getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
        const time = new Date(nowDate + (offset_GMT * 60 * 1000) + (timezone * 3600 * 1000)).format("yyyy-MM-dd hh:mm:ss");
        console.log('time', time)
        core.setOutput("time", time);

    } catch (error) {
        core.setFailed(error.message);
        console.log('err ----> ', error)

    }
}


Date.prototype.format = function(fmt) {
    var o = {
        "M+" : this.getMonth()+1,                 //月份
        "d+" : this.getDate(),                    //日
        "h+" : this.getHours(),                   //小时
        "m+" : this.getMinutes(),                 //分
        "s+" : this.getSeconds(),                 //秒
        "q+" : Math.floor((this.getMonth()+3)/3), //季度
        "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
        fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
        if(new RegExp("("+ k +")").test(fmt)){
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
        }
    }
    return fmt;
};



main();
