
//对web服务运行环境以及后台服务器地址、端口、变量等进行设置
var jfjk_base_config={};
// 1. 后台服务器地址：用引号括起来默认："http://localhost";"http://192.168.1.10";"http://www.bdjka.com"等。

 jfjk_base_config.baseurl="http://192.168.10.250:20000/_api/";//调试时的局域网地址。
 //jfjk_base_config.baseurl="http://localhost:20000/_api";//与服务器同机时实际运行时采用此地址，如果不是部署在同一台电脑中，则为服务器的实际地址
 jfjk_base_config.speechurl="http://192.168.10.250:20000/_speech/";//"http://192.168.10.67:88/_speech/";
 //服务器地址
jfjk_base_config.serverurl="http://jka.f3322.net:20000/_api/";
// 手机app存放目录和名称：要求在web的资源目录中，
 jfjk_base_config.app_path_name="/res/cloud.apk";
//sessionStorage.videourl='';
//界面用图片信息：
//登录页面图片：
 jfjk_base_config.login_src="res/login.png";
//登录界面底图
jfjk_base_config.bg_src="res/bj04.jpg"
//系统名称
 jfjk_base_config.app_name="智能变电站辅助系统综合监测云平台";
//版本号
 jfjk_base_config.ver_id="Ver 1.0";
 //发布日期
 jfjk_base_config.date="2019-12-28"
//公司名称
 jfjk_base_config.company="保定金凯澳自动化设备有限公司";
 //版权时间
 jfjk_base_config.copyright="&copy 2020-12-31"
//公司log
 jfjk_base_config.log_src="res/jka_100.png";
//公司网站：
 jfjk_base_config.company_url="http://www.bdjka.com";
 //公司地址 格式：“地　　　址：保定市乐凯北大街3088号 电谷科技中心”
 jfjk_base_config.company_address="地　　　址：保定市乐凯北大街3088号 电谷科技中心";
 //邮政编码
 jfjk_base_config.post_code="邮　　　编：071051";
 //公司邮箱
 jfjk_base_config.email1="邮　　箱1：bdjinkaiao@163.com";
 jfjk_base_config.email2="邮　　箱2：bdjinkaiao@126.com";
 //联系方式
 jfjk_base_config.part1="办　公　室：0312-6783281";
 jfjk_base_config.part2="技术服务部：0312-6783283 安经理";
 jfjk_base_config.part3="生　产　部：0312-6783282 刘经理";
 jfjk_base_config.part4="市　场　部：13313227451 闫经理";

 colors=["#080","#d58930", "#28cfed", "#236be2", "#bd59d5", "#2fcea7", "#ee4a4b", "#0c9cef"];
 mcol=4;
 //保留小数位数
 Number_of_decimal=2;
 //告警统计标识
 warning_sign_low="越下限";
 warning_sign_hight="越上限";
 info_showtime=2000;
 /**
  * 
  * 
  * 
  * 
  * 
  * 
  */
