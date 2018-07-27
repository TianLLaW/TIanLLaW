(function(obj){
/**
 * 主题函数库列表：
 *
 * @property {Object} getSysStatusCfg 获取系统状态数据 <a href="#getSysStatusCfg">点击查看</a>
 * @property {Object} getEasyWizardCfg 获取一键设置配置 <a href="#getEasyWizardCfg">点击查看</a>
 * @property {Object} setEasyWizardCfg 一键设置的保存数据 <a href="#setEasyWizardCfg">点击查看</a>
 * @property {Object} getPasswordCfg 获取登录密码 <a href="#getPasswordCfg">点击查看</a>
 * @property {Object} setPasswordCfg 设置登录密码 <a href="#setPasswordCfg">点击查看</a>
 * @property {Object} getRemoteCfg 获取远程管理配置 <a href="#getRemoteCfg">点击查看</a>
 * @property {Object} setRemoteCfg 设置远程管理数据 <a href="#setRemoteCfg">点击查看</a>
 * @property {Object} getNTPCfg 获取NTP配置 <a href="#getNTPCfg">点击查看</a>
 * @property {Object} setNTPCfg 设置NTP数据 <a href="#setNTPCfg">点击查看</a>
 * @property {Object} getDDNSCfg 获取DDNS配置 <a href="#getDDNSCfg">点击查看</a>
 * @property {Object} getDDNSStatus 获取DDNS状态信息 <a href="#getDDNSStatus">点击查看</a>
 * @property {Object} setDDNSCfg 设置DDNS数据 <a href="#setDDNSCfg">点击查看</a>
 * @property {Object} getRebootScheCfg 获取RebootSche数据 <a href="#getRebootScheCfg">点击查看</a>
 * @property {Object} setRebootScheCfg 设置RebootSche数据 <a href="#setRebootScheCfg">点击查看</a>
 * @property {Object} getMiniUPnPConfig 获取unnp数据 <a href="#getMiniUPnPConfig">点击查看</a> 
 * @property {Object} setMiniUPnPConfig 设置unnp数据 <a href="#setMiniUPnPConfig">点击查看</a>
 * @property {Object} CloudSrvVersionCheck 检测云升级信息 <a href="#CloudSrvVersionCheck">点击查看</a>
 * @property {Object} CloudACMunualUpdate 云检测固件手动升级 <a href="#CloudACMunualUpdate">点击查看</a>
 * @property {Object} setUpgradeFW 获取升级信息 <a href="#setUpgradeFW">点击查看</a>
 * @property {Object} FirmwareUpgrade 获取固件信息 <a href="#FirmwareUpgrade">点击查看</a>
 * @property {Object} SystemSettings 获取系统设置数据 <a href="#SystemSettings">点击查看</a>
 * @property {Object} LoadDefSettings 获取恢复出厂设置信息 <a href="#LoadDefSettings">点击查看</a>
 * @property {Object} RebootSystem 获取重启信息 <a href="#RebootSystem">点击查看</a>
 * @property {Object} getSyslogCfg 获取Syslog数据 <a href="#getSyslogCfg">点击查看</a> 
 * @property {Object} setSyslogCfg 提交Syslog数据 <a href="#setSyslogCfg">点击查看</a> 
 * @property {Object} clearSyslog 清除系统日志信息 <a href="#clearSyslog">点击查看</a> 
 * @property {Object} showSyslog 获取系统日志信息 <a href="#showSyslog">点击查看</a> 
 * @property {Object} getWiFiBasicConfig 获取无线基础配置 <a href="#getWiFiBasicConfig">点击查看</a>
 * @property {Object} setWiFiBasicConfig 设置无线基础数据 <a href="#setWiFiBasicConfig">点击查看</a>
 * @property {Object} getWiFiMultipleConfig 获取多AP设置数据 <a href="#getWiFiMultipleConfig">点击查看</a>
 * @property {Object} setWiFiMultipleConfig 设置多AP设置数据 <a href="#setWiFiMultipleConfig">点击查看</a>
 * @property {Object} delWiFiMultipleConfig 删除多AP数据 <a href="#delWiFiMultipleConfig">点击查看</a>
 * @property {Object} getWiFiAdvancedConfig 获取无线高级设置数据 <a href="#getWiFiAdvancedConfig">点击查看</a>
 * @property {Object} setWiFiAdvancedConfig 设置无线高级数据 <a href="#setWiFiAdvancedConfig">点击查看</a>
 * @property {Object} getWiFiWpsSetupConfig 获取WPS配置信息 <a href="#getWiFiWpsSetupConfig">点击查看</a>
 * @property {Object} setWiFiWpsSetupConfig 启用WPS <a href="#setWiFiWpsSetupConfig">点击查看</a>
 * @property {Object} getWiFiWpsConfig WPS进行中获取信息 <a href="#getWiFiWpsConfig">点击查看</a>
 * @property {Object} setWiFiWpsConfig 开启WPS <a href="#setWiFiWpsConfig">点击查看</a>
 * @property {Object} getWiFiWdsAddConfig 获取WDS数据 <a href="#getWiFiWdsAddConfig">点击查看</a>
 * @property {Object} setWiFiWdsAddConfig 设置WDS数据 <a href="#setWiFiWdsAddConfig">点击查看</a>
 * @property {Object} setWiFiWdsDeleteConfig 删除WDS数据 <a href="#setWiFiWdsDeleteConfig">点击查看</a>
 * @property {Object} getWiFiAclAddConfig 获取Mac认证数据 <a href="#getWiFiAclAddConfig">点击查看</a>
 * @property {Object} setWiFiAclAddConfig 设置Mac认证数据 <a href="#setWiFiAclAddConfig">点击查看</a>
 * @property {Object} setWiFiAclDeleteConfig 删除Mac认证数据 <a href="#setWiFiAclDeleteConfig">点击查看</a>
 * @property {Object} getWiFiScheduleConfig 获取WiFi调度数据 <a href="#getWiFiScheduleConfig">点击查看</a>
 * @property {Object} setWiFiScheduleConfig 设置WiFi调度数据 <a href="#setWiFiScheduleConfig">点击查看</a>
 * @property {Object} getWiFiApInfo 获取无线状态数据 <a href="#getWiFiApInfo">点击查看</a>
 * @property {Object} getWiFiStaInfo 获取无线客户端连接设备信息 <a href="#getWiFiStaInfo">点击查看</a>
 * @property {Object} getWiFiIpMacTable 获取MAC认证的MAC列表 <a href="#getWiFiIpMacTable">点击查看</a>
 * @property {Object} getWiFiApcliScan 获取扫描AP数据 <a href="#getWiFiApcliScan">点击查看</a>
 * @property {Object} getFirewallType 获取Firewall类型 <a href="#getFirewallType">点击查看</a>
 * @property {Object} setFirewallType 设置Firewall类型 <a href="#setFirewallType">点击查看</a>
 * @property {Object} getVpnPassCfg 获取VPN穿透配置 <a href="#getVpnPassCfg">点击查看</a>
 * @property {Object} setVpnPassCfg 设置VPN穿透数据 <a href="#setVpnPassCfg">点击查看</a>
 * @property {Object} getDMZCfg 获取DMZ数据 <a href="#getDMZCfg">点击查看</a>
 * @property {Object} setDMZCfg 设置DMZ数据 <a href="#setDMZCfg">点击查看</a>
 * @property {Object} getUrlFilterRules 获取URL过滤配置 <a href="#getUrlFilterRules">点击查看</a>
 * @property {Object} setUrlFilterRules 设置URL过滤数据 <a href="#setUrlFilterRules">点击查看</a>
 * @property {Object} delUrlFilterRules 删除URL过滤数据 <a href="#delUrlFilterRules">点击查看</a>
 * @property {Object} getIpPortFilterRules 获取IP端口过滤配置 <a href="#getIpPortFilterRules">点击查看</a>
 * @property {Object} setIpPortFilterRules 设置IP端口过滤数据 <a href="#setIpPortFilterRules">点击查看</a>
 * @property {Object} delIpPortFilterRules 删除IP端口过滤数据 <a href="#delIpPortFilterRules">点击查看</a>
 * @property {Object} getPortForwardRules 获取端口转发配置 <a href="#getPortForwardRules">点击查看</a>
 * @property {Object} setPortForwardRules 设置端口转发数据 <a href="#setPortForwardRules">点击查看</a>
 * @property {Object} delPortForwardRules 删除端口转发数据 <a href="#delPortForwardRules">点击查看</a>
 * @property {Object} getMacFilterRules 获取MAC过滤配置 <a href="#getMacFilterRules">点击查看</a>
 * @property {Object} setMacFilterRules 设置MAC过滤数据 <a href="#setMacFilterRules">点击查看</a>
 * @property {Object} delMacFilterRules 删除MAC过滤数据 <a href="#delMacFilterRules">点击查看</a>
 * @property {Object} setIpQos 设置总QoS数据 <a href="#setIpQos">点击查看</a>
 * @property {Object} getIpQosRules 获取QoS数据 <a href="#getIpQosRules">点击查看</a>
 * @property {Object} setIpQosRules 设置新增QoS数据 <a href="#setIpQosRules">点击查看</a>
 * @property {Object} delIpQosRules 删除QoS数据 <a href="#delIpQosRules">点击查看</a>
 * @property {Object} getScheduleRules 获取时间规则数据 <a href="#getScheduleRules">点击查看</a>
 * @property {Object} setScheduleRules 设置WiFi调度数据（增删） <a href="#setScheduleRules">点击查看</a>
 * @property {Object} getWanConfig 获取WAN设置信息 <a href="#getWanConfig">点击查看</a>
 * @property {Object} setWanConfig 设置WAN设置信息 <a href="#setWanConfig">点击查看</a>
 * @property {Object} getLanConfig 获取LAN数据 <a href="#getLanConfig">点击查看</a>
 * @property {Object} setLanConfig 设置LAN数据 <a href="#setLanConfig">点击查看</a>
 * @property {Object} getStaticDhcpConfig 获取静态DHCP设置数据 <a href="#getStaticDhcpConfig">点击查看</a>
 * @property {Object} setStaticDhcpConfig 设置静态DHCP设置数据 <a href="#setStaticDhcpConfig">点击查看</a>
 * @property {Object} delStaticDhcpConfig 删除静态DHCP设置数据 <a href="#delStaticDhcpConfig">点击查看</a>
 * @property {Object} getDhcpCliList 获取LAN设置的DHCP列表 <a href="#getDhcpCliList">点击查看</a>
 * @property {Object} getOpMode 获取opmode数据 <a href="#getOpMode">点击查看</a>
 * @property {Object} setOpMode 设置opmode数据 <a href="#setOpMode">点击查看</a>
 * @property {Object} getStationMacByIp 通过ip获得克隆mac <a href="#getStationMacByIp">点击查看</a>
 * @property {Object} getArpTable 获取静态DHCP设置、IP端口过滤、Mac过滤、端口转发的MAC列表 <a href="#getArpTable">点击查看</a>
 * @property {Object} testSQLite 执行sql主题 <a href="#testSQLite">点击查看</a>
 * @property {Object} QuickSetting 集中管理 <a href="#QuickSetting">点击查看</a>
 * @property {Object} getUsbState 获取USB状态 <a href="#getUsbState">点击查看</a>
 * @property {Object} getDhcpSliList 获取DHCP列表 <a href="#getDhcpSliList">点击查看</a>
 * @property {Object} getNetInfo 实时信息 -> 获取外网信息 <a href="#getNetInfo">点击查看</a>
 * @property {Object} getLinksData 实时信息获取链接数 <a href="#getLinksData">点击查看</a>
 * @property {Object} getLinksIpData 获取对应ip的链接数 <a href="#getLinksIpData">点击查看</a>
 * @property {Object} getLoginCfg 获取登录配置 <a href="#getLoginCfg">点击查看</a>
 * @property {Object} acScanAp 集中管理的扫描 <a href="#acScanAp">点击查看</a>
 * @property {Object} NTPSyncWithHost 保存本地时间 <a href="#NTPSyncWithHost">点击查看</a>
 * @property {Object} getssServer 获取SS-Server配置 <a href="#getssServer">点击查看</a>
 * @property {Object} setssServer 设置SS-Server配置 <a href="#setssServer">点击查看</a>
 * @property {Object} setLanguageCfg 设置语言 <a href="#setLanguageCfg">点击查看</a>
 * @property {Object} UbootUpgrade uboot升级 <a href="#UbootUpgrade">点击查看</a>
 * @property {Object} setUpgradeUboot 获取升级uboot信息 <a href="#setUpgradeUboot">点击查看</a>
 * @property {Object} setTelnetCfg 开启telent <a href="#setTelnetCfg">点击查看</a>
 * @property {Object} getTelnetCfg 获取telent状态 <a href="#getTelnetCfg">点击查看</a>
 * @property {Object} getCrpcConfig 获取微信管理的链接 <a href="#getCrpcConfig">点击查看</a>
 * @property {Object} setQosPolicy 设置流控策略 <a href="#setQosPolicy">点击查看</a>
 * @property {Object} getQosPolicy 获取智能流控数据 <a href="#getQosPolicy">点击查看</a>
 * @property {Object} getAppCfg 获取应用总开关  <a href="#getAppCfg">点击查看</a>
 * @property {Object} setAppCfg 设置应用总开关  <a href="#setAppCfg">点击查看</a>
 * @property {Object} setAppById 设置游戏加速/应用软件过滤  <a href="#setAppById">点击查看</a>
 * @property {Object} getAppTypeList 获取应用软件类型列表   <a href="#getAppTypeList">点击查看</a>
 * @property {Object} getAppListById 获取游戏加速列表/应用软件过滤    <a href="#getAppListById">点击查看</a>
 * @property {Object} uploadQosConfig 特征库更新  <a href="#uploadQosConfig">点击查看</a>
 * @property {Object} delUsbFw 删除usb中上传的固件  <a href="#delUsbFw">点击查看</a>
 * @property {Object} getHacFwList 获取usb中上传的固件  <a href="#getHacFwList">点击查看</a>
 * @property {Object} getIptvConfig 获取IPTV的配置(复杂版)  <a href="#getIptvConfig">点击查看</a>
 * @property {Object} setIptvConfig 设置IPTV的配置(复杂版)   <a href="#setIptvConfig">点击查看</a>
 * @property {Object} getVlanConfig 获取IPTV设置(简化版)的配置  <a href="#getVlanConfig">点击查看</a>
 * @property {Object} setVlanConfig 设置IPTV设置(简化版)  <a href="#setVlanConfig">点击查看</a>
 * @property {Object} getIPv6Status 获取IPv6状态数据 <a href="#getIPv6Status">点击查看</a>
 * @property {Object} getIPv6Config 获取IPv6设置数据 <a href="#getIPv6Config">点击查看</a>
 * @property {Object} setIPv6Dhcpc IPv6动态IP操作 <a href="#setIPv6Dhcpc">点击查看</a>
 * @property {Object} setIPv6Config 设置IPv6数据 <a href="#setIPv6Config">点击查看</a>
 * @property {Object} ScanAp AC系统管理 集中管理的扫描  <a href="#ScanAp">点击查看</a>
 * @property {Object} getGroupApList 获取AP列表信息 <a href="#getGroupApList">点击查看</a>
 * @property {Object} getApStatusConfig 获取AP设备信息 <a href="#getApStatusConfig">点击查看</a>
 * @property {Object} setQuickSetting 设置AC集中管理数据 <a href="#setQuickSetting">点击查看</a>
 * @property {Object} setApLedState AC系统管理中的灯控制<a href="#setApLedState">点击查看</a>
 * @property {Object} setApReboot AC系统管理中的设备重启设置 <a href="#setApReboot">点击查看</a>
 * @property {Object} setApReset AC系统管理中的恢复出厂设置 <a href="#setApReset">点击查看</a>
 * @property {Object} getFwList 获取固件管理信息 <a href="#getFwList">点击查看</a>
 * @property {Object} setApUpgrade 托管AC：固件升级 <a href="#setApUpgrade">点击查看</a>
 * @property {Object} delApFWInfo 删除固件管理中的固件 <a href="#delApFWInfo">点击查看</a>
 * @property {Object} setApName 提交修改的AP名称 <a href="#setApName">点击查看</a>
 * @property {Object} setApIp 一键修改IP <a href="#setApIp">点击查看</a>
 * @property {Object} AcRestore 获取数据库管理恢复出厂设置信息 <a href="#AcRestore">点击查看</a>
 * @property {Object} getsqlite3_SaveConfig 获取数据库保存主题信息 <a href="#getsqlite3_SaveConfig">点击查看</a>
 * @property {Object} getL2tpdConfig 获取L2TP服务器配置   <a href="#getL2tpdConfig">点击查看</a>
 * @property {Object} setL2tpdConfig 设置L2TP服务器   <a href="#setL2tpdConfig">点击查看</a>
 * @property {Object} getPptpdConfig 获取PPTP服务器配置信息   <a href="#getPptpdConfig">点击查看</a>  
 * @property {Object} setPptpdConfig 设置PPTP服务器配置   <a href="#setPptpdConfig">点击查看</a>
 * @property {Object} getVpnUser 获取PPTP/L2TP用户配置信息   <a href="#getVpnUser">点击查看</a>
 * @property {Object} setVpnUser 设置PPTP/L2TP用户配置信息   <a href="#setVpnUser">点击查看</a>
 * @property {Object} deleteVpnUser 删除PPTP/L2TP用户配置   <a href="#deleteVpnUser">点击查看</a>
 * @property {Object} getUserInfo 获取用户状态配置   <a href="#getUserInfo">点击查看</a>
 * @property {Object} disconnectVPN 用户状态的断开操作   <a href="#disconnectVPN">点击查看</a> 
 * @property {Object} getOpenVpnConfig 获取OpenVPN服务器配置   <a href="#getOpenVpnConfig">点击查看</a>
 * @property {Object} setOpenVpnConfig 设置OpenVPN服务器   <a href="#setOpenVpnConfig">点击查看</a>
 * @property {Object} getOpenVpnLog 获取OpenVPN日志   <a href="#getOpenVpnLog">点击查看</a>
 * @property {Object} getVpnInfo 获取PPTP/L2TP客户端信息   <a href="#getVpnUser">点击查看</a>
 * @property {Object} setVpnInfo 设置PPTP/L2TP客户端信息   <a href="#setVpnUser">点击查看</a>
 * @property {Object} getNoticeCfg 获取Notice设置配置   <a href="#getVpnUser">点击查看</a>
 * @property {Object} setNoticeCfg 设置Notice设置配置   <a href="#setVpnUser">点击查看</a>
 * @alias uiPost  
 * @class
 * @example
 * 封装案例：
 * /**
 *  * 这里写上文档注释
 *  * @param {type} varname description
 *  * param 这里定义为request 参数 
 *  * @property {type} varname description
 *  * property 这里定义为response
 *  * @property 
 *  * @example
 *  * 实际的案例。
 *  * /
 * uiPost.prototype.xxx = function(postVar,callback){
 *    this.topicurl = 'xxx';
 *    // this.async = true; // 默认true。true:异步，false:同步。
 *    if (globalConfig.debug) {
 *        this.url = '/data/wzd.json';
 *    }
 *    return this.post(postVar,callback);
 * };
 * // 把xxx的位置换成对应的主题即可。
 */
function uiPost(){
    this.version = '0.0.1.bate';
    this.author = 'carystudio';
    this.company = 'carystudio';
    this.url = globalConfig.cgiUrl;
    this.type = globalConfig.ajaxType?'GET':'POST';
    this.async = true;
    this.topicurl = '';
    this.post = function(data,callback) {
        var temp_data = null;
        if (data && data instanceof Function) {
            callback = data;
            data = null;
        }
        data = data ? data : {};
        data.topicurl = this.topicurl;
        data = JSON.stringify(data);
        $.ajax({
            url: this.url,
            type: this.type,
            dataType: 'json',
            data: data,
            async:this.async,
            success:function(_data) {
                temp_data = (_data);
                if (callback && callback instanceof Function) {
                    callback(temp_data,data);
                }
            },
            error:function(_data) {
                if (callback && callback instanceof Function) {
                    callback(_data,'error');
                }
            }
        });
    }
}

/**
 * 获取系统状态信息
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-03
 * @property {String} portlinkBt    未知
 * @property {String} portLinkStatus    未知
 * @property {String} totalUpTime   累计运行时间
 * @property {String} upTime        系统在线时间
 * @property {String} fmVersion     固件版本
 * @property {String} productName   产品名称
 * @property {String} hardModel     硬件型号
 * @property {String} buildTime          软件编译时间
 * @property {String} multiLangBt        多语言支持；1：支持；0：不支持
 * @property {String} languageType       语言类型
 * @property {String} customerUrl        官方网站
 * @property {String} apAcBt             支持APAC, 1：支持；0：不支持
 * @property {String} lanIp              局域网IP地址
 * @property {String} lanMask            局域网子网掩码
 * @property {String} lanMac             局域网MAC地址
 * @property {String} dhcpServer         dhcp服务器开关；0：关闭；1：开启
 * @property {String} wanMode            广域网模式，0：静态IP,1：DHCP,3：PPPoE,4：PPTP,6：L2TP
 * @property {String} wanConnStatus      广域网连接状态：connected：已连接
 * @property {String} wanIp              广域网IP地址
 * @property {String} wanMask            广域网子网掩码
 * @property {String} wanGw              广域网默认网关
 * @property {String} wanMode            广域网模式
 * @property {String} wanMac             广域网MAC地址
 * @property {String} priDns             首选Dns
 * @property {String} secDns             备选Dns
 * @property {String} wanConnTime        广域网连接时间
 * @property {String} wifiDualband       双频支持；1：双频；0：单频
 * @property {String} wifiOff5g          5G 主SSID无线开关；0：开启；1：关闭
 * @property {String} band5g             5G 频段
 * @property {String} channel5g          5G 无线信道
 * @property {String} autoChannel5g      5G 自动信道
 * @property {String} ssid5g1            5G 主SSID
 * @property {String} bssid5g1           5G主SSID MAC地址
 * @property {String} staNum5g1          5G主SSID 客户端连接数
 * @property {String} ssid5g2            5G多AP的SSID1
 * @property {String} bssid5g2           5G多AP MAC地址1
 * @property {String} staNum5g2          5G多AP的SSID1 客户端连接数
 * @property {String} ssid5g3            5G多AP的SSID2
 * @property {String} bssid5g3           5G多AP的SSID2 MAC地址2
 * @property {String} staNum5g3          5G多AP的SSID2 客户端连接数
 * @property {String} staNum5g           5G无线最大连接数
 * @property {String} authMode5g         无线5G加密方式
 * @property {String} encrypType5g       5G密码类型
 * @property {String} wifiKey5g1         5G 主SSID密码
 * @property {String} wifiKey5g2         5G 多AP的SSID1密码
 * @property {String} wifiKey5g3         5G 多AP的SSID2密码
 * @property {String} wifiOff5g2         5G多SSID1无线开关；0：开启；1：关闭
 * @property {String} wifiOff5g3         5G多SSID2无线开关；0：开启；1：关闭
 * @property {String} apcliEnable5g      5G中继开关，0：开启；1：关闭
 * @property {String} apcliSsid5g        5G中继上级SSID
 * @property {String} apcliBssid5g       5G中继上级Mac地址
 * @property {String} apcliAuthMode5g    5G中继上级加密方式
 * @property {String} apcliEncrypType5g  5G中继上级密码类型
 * @property {String} apcliKey5g         5G中继上级密码
 * @property {String} apcliStatus5g      5G中继状态
 * @property {String} apcliSignal5g      5G中继信号
 * @property {String} wifiOff            2.4G无线开关：0 启用，1 禁用
 * @property {String} bssidNum           2.4G无线Mac位数
 * @property {String} band               2.4G无线频段
 * @property {String} channel            2.4G无线信道
 * @property {String} autoChannel        2.4G自动信道
 * @property {String} ssid1              2.4G主SSID
 * @property {String} bssid1             2.4G主SSID的MAC地址
 * @property {String} staNum1            2.4G主SSID的客户端连接数
 * @property {String} ssid2              2.4G多AP的SSID1
 * @property {String} bssid2             2.4G多AP的SSID1的MAC
 * @property {String} staNum2            2.4G多AP的SSID1的客户连接数
 * @property {String} ssid3              2.4G多AP的SSID2
 * @property {String} bssid3             2.4G多AP的SSID2的MAC
 * @property {String} staNum3            2.4G多AP的SSID2的客户端连接数
 * @property {String} staNum             2.4G无线最大连接数
 * @property {String} authMode           2.4G SSID加密方式
 * @property {String} encrypType         2.4G SSID加密类型
 * @property {String} wifiKey1           2.4G 主SSID密码
 * @property {String} wifiKey2           2.4G 多AP的SSID1密码
 * @property {String} wifiKey3           2.4G 多AP的SSID2密码
 * @property {String} wifiOff2           2.4G多SSID1无线开关；0：开启；1：关闭
 * @property {String} wifiOff3           2.4G多SSID2无线开关；0：开启；1：关闭
 * @property {String} apcliEnable        2.4G中继开关；0：开启；1：关闭
 * @property {String} apcliSsid          2.4G中继上级SSID
 * @property {String} apcliBssid         2.4G中继上级Mac地址
 * @property {String} apcliAuthMode      2.4G中继上级加密方式
 * @property {String} apcliEncrypType    2.4G中继上级加密类型
 * @property {String} apcliKey           2.4G中继上级加密密码
 * @property {String} apcliStatus        2.4G中继连接状态
 * @property {String} apcliSignal        2.4G中继信号强度
 * @property {String} operationMode      系统模式 上网模式。0：网关模式，1：桥模式，2：中继模式，3：wisp模式
 * @property {String} wanTx              wan 口发送速率
 * @property {String} wanRx              wan 口接收速率
 * @property {String} lanTx              lan 口发送速率
 * @property {String} lanRx              lan 口接收速率
 * @property {String} wlanTx5g           无线5G发送速率
 * @property {String} wlanRx5g           无线5G接收速率
 * @property {String} wlanTx             无线2.4G发送速率
 * @property {String} wlanRx             无线2.4G接收速率
 * @property {String} lanUserNum         局域网的用户数
 *
 * @example
 * request:
 * {
 *       "topicurl" : "getSysStatusCfg",
 * }
 * response:
 * {
 *   "portlinkBt":  1,
 *   "portLinkStatus":  "0,1,0,0,1,",
 *   "totalUpTime":"1;5;2;36",
 *   "upTime":  "9;7;20;30",
 *   "fmVersion":   "V5.9c.680",
 *   "productName": "A3000RU",
 *   "hardModel":   "04325",
 *   "buildTime":   "Sep 13 2017 16:13:07",
 *   "multiLangBt": 0,
 *   "languageType":    "vn",
 *   "customerUrl": "www.totolink.net",
 *   "apAcBt":  "0",
 *   "lanIp":   "192.168.0.5",
 *   "lanMask": "255.255.255.0",
 *   "lanMac":  "F4:28:54:00:40:E2",
 *   "dhcpServer":  2,
 *   "staticIp":    "192.168.1.5",
 *   "staticMask":  "255.255.255.0",
 *   "staticGw":    "192.168.1.1",
 *   "wanMode": 1,
 *   "wanConnStatus":   "connected",
 *   "wanIp":   "192.168.1.4",
 *   "wanMask": "255.255.255.0",
 *   "wanGw":   "192.168.1.1",
 *   "wanMac":  "F4:28:54:00:40:E3",
 *   "priDns":  "192.168.1.1",
 *   "secDns":  "0.0.0.0",
 *   "wanConnTime": "0;0;0;45",
 *   "wifiDualband":    1,
 *   "wifiOff5g":   0,
 *   "band5g":  14,
 *   "channel5g":   161,
 *   "autoChannel5g":   161,
 *   "ssid5g1": "TOTOLINK_A3000RU_5G",
 *   "bssid5g1":    "F4:28:54:00:40:E2",
 *   "staNum5g1":   0,
 *   "ssid5g2": "111111111",
 *   "bssid5g2":    "F4:28:54:00:40:E4",
 *   "staNum5g2":   0,
 *   "ssid5g3": "22222222222",
 *   "bssid5g3":    "F4:28:54:00:40:E5",
 *   "staNum5g3":   0,
 *   "staNum5g":    0,
 *   "authMode5g":  "WPAPSKWPA2PSK;WPAPSKWPA2PSK;NONE",
 *   "encrypType5g":    "TKIPAES;TKIPAES;NONE",
 *   "wifiKey5g1":  "12345678",
 *   "wifiKey5g2":  "12345678",
 *   "wifiKey5g3":  "12345678",
 *   "wifiOff5g2":  0,
 *   "wifiOff5g3":  0,
 *   "apcliEnable5g":   0,
 *   "apcliSsid5g": "Extender",
 *   "apcliBssid5g":    "00:00:00:00:00:00",
 *   "apcliAuthMode5g": "NONE",
 *   "apcliEncrypType5g":   "NONE",
 *   "apcliKey5g":  "",
 *   "apcliStatus5g":   "fail",
 *   "apcliSignal5g":   "null",
 *   "wifiOff": 0,
 *   "bssidNum":    1,
 *   "band":    9,
 *   "channel": 0,
 *   "autoChannel": 3,
 *   "ssid1":   "TOTOLINK_0040E2",
 *   "bssid1":  "F4:28:54:00:40:E6",
 *   "staNum1": 0,
 *   "ssid2":   "111111111111111",
 *   "bssid2":  "F4:28:54:00:40:E7",
 *   "staNum2": 0,
 *   "ssid3":   "3333333333",
 *   "bssid3":  "F4:28:54:00:40:E8",
 *   "staNum3": 0,
 *   "staNum":  0,
 *   "authMode":    "WPAPSKWPA2PSK;NONE;WPAPSKWPA2PSK",
 *   "encrypType":  "TKIPAES;NONE;TKIPAES",
 *   "wifiKey1":    "12345678",
 *   "wifiKey2":    "12345678",
 *   "wifiKey3":    "12345678",
 *   "wifiOff2":    0,
 *   "wifiOff3":    0,
 *   "apcliEnable": 1,
 *   "apcliSsid":   "Extender",
 *   "apcliBssid":  "00:00:00:00:00:00",
 *   "apcliAuthMode":   "NONE",
 *   "apcliEncrypType": "NONE",
 *   "apcliKey":    "",
 *   "apcliStatus": "fail",
 *   "apcliSignal": "null",
 *   "operationMode":   0,
 *   "wanTx":   617,
 *   "wanRx":   714,
 *   "lanTx":   973,
 *   "lanRx":   1059,
 *   "wlanTx5g":    71,
 *   "wlanRx5g":    148,
 *   "wlanTx":  158,
 *   "wlanRx":  3357,
 *   "lanUserNum":"9"
 * }
 */
uiPost.prototype.getSysStatusCfg = function(postVar,callback){
    this.topicurl = 'getSysStatusCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/syscfg.json';
    }else{
        this.url = globalConfig.cgiUrl;
    }
    return this.post(postVar,callback);
};

/**
 * 获取一键设置配置
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2017-10-27
 * @property {String} wanMode       连接模式。0：静态IP，1：DHCP，3：PPPOE拨号
 * @property {String} staticIp          静态 IP地址      
 * @property {String} staticMask        静态 子网掩码      
 * @property {String} staticGw          静态 网关      
 * @property {String} priDns         首选dns地址      
 * @property {String} secDns         备用dns地址     
 * @property {String} wanConnStatus   连接状态   
 * @property {String} ssid5g        wifi 5g 账号密码
 * @property {String} wpakey5g      wifi 5g 账号密码
 * @property {String} ssid          wifi 2.4g 账号密码
 * @property {String} wpakey        wifi 2.4g 账号密码
 * 
 * @property {String} xxxxx 其他的参数(还有很多参数不知道意思,但是你们要写对咯。)
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getEasyWizardCfg"
 * }
 * response:
 * {
 *    "wanMode":  1,
 *    "staticIp": "172.1.1.1",
 *    "staticMask":  "255.255.255.0",
 *    "staticGw": "172.1.1.254",
 *    "priDns":  "114.114.114.114",
 *    "secDns":  "0.0.0.0",
 *    "wanConnStatus":  "disconnected",
 *    "l2tpMode": 0,
 *    "l2tpFlag": 0,
 *    "pptpMode": 0,
 *    "pptpFlag": 0,
 *    "pptpMppe": 0,
 *    "pptpMppc": 0,
 *    "lanIp":  "192.168.0.1",
 *    "l2tpServerIp": "172.1.1.1",
 *    "l2tpIp": "172.1.1.2",
 *    "l2tpMask":  "255.255.255.0",
 *    "l2tpGw": "0.0.0.0",
 *    "pptpServerIp": "172.1.1.1",
 *    "pppoeUser":  "",
 *    "pppoePass":  "",
 *    "pptpIp": "172.1.1.2",
 *    "pptpMask":  "255.255.255.0",
 *    "pptpGw": "0.0.0.0",
 *    "l2tpUser": "",
 *    "l2tpPass": "",
 *    "l2tpServer": "",
 *    "pptpUser": "",
 *    "pptpPass": "",
 *    "pptpServer": "",
 *    "multiLangBt": 1,
 *    "helpBt":  1,
 *    "languageType": "cn",
 *    "productName":  "A800RE",
 *    "fmVersion":  "V5.9c.821",
 *    "title":  "TOTOLINK",
 *    "helpUrl":  "www.totolink.cn",
 *    "hardModel":  "",
 *    "wanIp":  "0.0.0.0",
 *    "wanMask":  "0.0.0.0",
 *    "wanGw":  "0.0.0.0",
 *    "wanAutoDetectBt":  0,
 *    "pptpBt": 0,
 *    "l2tpBt": 0,
 *    "wifiDualband": 1,
 *    "ssid5g": "TOTOLINK_A800RE_5G",
 *    "wpakey5g": "22222222",
 *    "ssid": "TOTOLINK_A800RE",
 *    "wpakey": "33333333",
 *  }
 */
uiPost.prototype.getEasyWizardCfg = function(postVar,callback){
    this.topicurl = 'getEasyWizardCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 一键设置的保存数据    
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2017-11-02
 * @example
 * request:
 * {
 *  "topicurl" : "setEasyWizardCfg",
 *  "wanMode" : 1,
 *  "ssid" : "TOTOLINK_A800RE",
 *  "ssid5g" : "TOTOLINK_A800RE_5G",
 *  "wpakey" : "33333333",
 *  "wpakey5g" : "22222222",
 * }
 * response:
 * {
 *   成功的提示？？？
 * }
 */
uiPost.prototype.setEasyWizardCfg = function(postVar,callback){
    this.topicurl = 'setEasyWizardCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取登录密码
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-03
 * @property {String} admuser       管理员的用户名
 * @property {String} admpass       管理员的密码
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getPasswordCfg"
 * }
 * response:
 *{
 *  
 *   "admuser":"admin",
 *   "admpass":"admin"
 *  
 *}
 */
uiPost.prototype.getPasswordCfg = function(postVar,callback){
    this.topicurl = 'getPasswordCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/changepwd_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置登录密码   
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-03
 * @param {String} admuser          管理员的用户名
 * @param {String} admpass          管理员的新密码
 * @property {String} success       响应状态：true：响应成功，false：响应失败
 * @property {String} error         错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime         等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *  "topicurl" : "setPasswordCfg",
 *  "admuser":"admin",
 *  "admpass":"admin"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setPasswordCfg = function(postVar,callback){
    this.topicurl = 'setPasswordCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取远程管理配置
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-02
 * @param    {String} topicurl       主题
 * @property {String} remoteEnabled   远程管理开关 【0：禁用，1：启用】
 * @property {String} port       远程管理访问端口
 * @property {String} csid       软件CSID
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getRemoteCfg"
 * }
 * response:
 * {
 *   "remoteEnabled":   1,
 *   "port":    6555,
 *   "csid":    "CS18FR"
 * }
 */
uiPost.prototype.getRemoteCfg = function(postVar,callback){
    this.topicurl = 'getRemoteCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/remoteinfo.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置远程管理配置
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-02
 *
 * @param {String} remoteEnabled  远程管理开关 【0：禁用，1：启用】
 * @param {String} port           远程管理端口号
 *
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 *
 * @example
 * request:
 * {
 *   "remoteEnabled":1,
 *   "port":6555,
 *   "topicurl":"setRemoteCfg"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setRemoteCfg = function(postVar,callback){
    this.topicurl = 'setRemoteCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/remoteinfo.json';
    }
    return this.post(postVar,callback);
};

/**
 * 获取NTP配置
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2017-11-02
 * @property {String} currentTime       当前时间
 * @property {String} tz                时区
 * @property {String} ntpServerIp       ntp服务器
 * @property {String} ntpClientEnabled  自动同步ntp：0：不勾选，1：勾选
 * @property {String} ntpHostFlag       是否使用本机本机时间
 * @property {String} languageType      语言类型
 * @property {String} operationMode     工作模式  
 * @property {String} apAcBt        是否是AP    
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getNTPCfg"
 * }
 * response:
 * {
 *   "tz":  "GMT_000",
 *   "ntpServerIp": "time.nist.gov",
 *   "ntpClientEnabled":    1,
 *   "ntpHostFlag": 0,
 *   "currentTime": "Fri Nov 3 00:48:18 GMT 2017",
 *   "languageType":"cn",
 *   "operationMode":   0,
 *   "apAcBt":  0
 * }
 */  
uiPost.prototype.getNTPCfg = function(postVar,callback){
    this.topicurl = 'getNTPCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/time_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置NTP数据 
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2017-11-03
 * @param {String} tz               时区
 * @param {String} ntpServerIp      ntp服务器
 * @param {String} ntpClientEnabled 自动同步ntp：0：不勾选，1：勾选  
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *  "topicurl" : "setNTPCfg",
 *  "tz":"GMT_000",
 *  "ntpServerIp":"time.nist.gov",
 *  "ntpClientEnabled":"1"}
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setNTPCfg = function(postVar,callback){
    this.topicurl = 'setNTPCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取DDNS配置
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2017-11-03
 * @property {String} topicurl          主题
 * @property {String} ddnsEnabled       DDNS的开关：0：禁用，1：启用
 * @property {String} ddnsProvider      DDNS的供应商， 0：DynDNS, 1：noip, 2：3322.org
 * @property {String} ddnsDomain        DDNS的域名
 * @property {String} ddnsAccount       DDNS的用户名
 * @property {String} ddnsPassword      DDNS的密码
 
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getDDNSCfg"
 * }
 * response:
 * {
 * "ddnsEnabled":   0,
 * "ddnsProvider":  2,
 * "ddnsDomain":    "host.dyndns.org",
 * "ddnsAccount":   " ",
 * "ddnsPassword":  " "
 * }
 */  
uiPost.prototype.getDDNSCfg = function(postVar,callback){
    this.topicurl = 'getDDNSCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/ddns_info.json';
    }
    return this.post(postVar,callback);
};
/**
 * 获取DDNS状态信息
 * @Author   amy       <Amy_wei@carystudio.com>
 * @DateTime 2017-11-03
 * @property {String} topicurl          主题
 * @property {String} ddnsIp          DDNS的公共地址
 * @property {String} ddnsStatus      DDNS的连接状态，success：成功，fail:失败
 
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getDDNSStatus"
 * }
 * response:
 * {
 * "ddnsIp":   "",
 * "ddnsStatus":  "fail",
 * }
 */  
uiPost.prototype.getDDNSStatus = function(postVar,callback){
    this.topicurl = 'getDDNSStatus';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/ddns_status.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置DDNS数据    
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2017-11-03
 * @param {String} ddnsEnabled      DDNS的开关：0：禁用，1：启用
 * @param {String} ddnsProvider     DDNS的供应商， 0：DynDNS, 1：noip, 2：3322.org
 * @param {String} ddnsDomain       DDNS的域名
 * @param {String} ddnsAccount      DDNS的用户名
 * @param {String} ddnsPassword     DDNS的密码
 * @property {String} success       响应状态：true：响应成功，false：响应失败
 * @property {String} error         错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime         等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *  "topicurl" : "setDDNSCfg",
 *  "ddnsEnabled":  0,
 *  "ddnsProvider": 2,
 *  "ddnsDomain":   "host.dyndns.org",
 *  "ddnsAccount":  " ",
 *  "ddnsPassword": " "
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
 uiPost.prototype.setDDNSCfg = function(postVar,callback){
    this.topicurl = 'setDDNSCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取RebootSche配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-05-12
 * @property {String} mode           重启模式。值：0：禁用，1：指定时间，2：倒计时
 * @property {String} week           周
 * @property {String} hour           小时
 * @property {String} minute         分钟
 * @property {String} recHour        倒计时
 * @property {String} NTPValid       启用自动同步
 * @property {String} sysTime        运行时间
 * @property {String} recTime        重启倒计时
 * @example
 * request:
 * {
 *    topicurl:"getRebootScheCfg"
 * }
 * response:
 * {
 *   "mode":   "1",
 *   "week":   "255",
 *   "hour":    "12",
 *   "minute": "45",
 *   "sysTime":"0;23;28;12",
 *   "recTime":"0;1;22;12",
 *   "NTPValid": "1",
 *   "recHour":"2"
 * }
 */
uiPost.prototype.getRebootScheCfg = function(postVar,callback){
    this.topicurl = 'getRebootScheCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/schedule_info.json";
    }
    return this.post(postVar,callback);
};

/**
 * 设置RebootSche数据
 * @Author   Amy     <amy@carystudio>
 * @DateTime 2018-05-12
 * @param {String} mode           重启模式。值：0：禁用，1：指定时间，2：倒计时
 * @param {String} week           周
 * @param {String} hour           小时
 * @param {String} minute         分钟
 * @param {String} recHour        倒计时
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @example
 * request:
 * {
 *   "topicurl":"setRebootScheCfg"
 *   "mode":   "1",
 *   "week":   "255",
 *   "hour":    "12",
 *   "minute": "45",
 *   "recHour":"2"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
 uiPost.prototype.setRebootScheCfg = function(postVar,callback){
    this.topicurl = 'setRebootScheCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/schedule_info.json";
    }
    return this.post(postVar,callback);
};

/**
 * 获取unnp数据
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-08
 *
 * @property {String} upnpEnabled       upnp启用/禁用。0：禁用，1：启用
 * @property {String} getUpnpTable      unpn表格信息  
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getMiniUPnPConfig"
 * }
 * response:
 *{
 *  "upnpEnabled":  "1",
 *  "getUpnpTable": "none"
 *}
 */
uiPost.prototype.getMiniUPnPConfig = function(postVar,callback){
    this.topicurl = 'getMiniUPnPConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 设置unnp数据
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-08
 * @param {String} upnpEnabled       upnp启用/禁用。0：禁用，1：启用
 * @property {String} success      响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip       局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv       返回页面（参数未知）
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"setMiniUPnPConfig"
 *    "upnpEnabled":"1"
 * }
 * response:
 *{
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.133.1",
 *   "wtime":   "0",
 *   "reserv":  "reserv"
 *}
 */
uiPost.prototype.setMiniUPnPConfig = function(postVar,callback){
    this.topicurl = 'setMiniUPnPConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 检测云升级信息    
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-07
 * @property {String} cloudFwStatus    检测云升级。New：已是最新版本，UnNet:没有网络，Update：有可更新版本
 * @property {String} newVersion       新的固件版本
 * @example
 * request:
 * {
 *  "topicurl" : "CloudSrvVersionCheck",
 *
 * }
 * response:
 * {
 *    "cloudFwStatus":"New",
 *    "newVersion":"V6.2c.464"
 * }
 */
uiPost.prototype.CloudSrvVersionCheck = function(postVar,callback){
    this.topicurl = 'CloudSrvVersionCheck';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/firmware_info.json";
    }
    return this.post(postVar,callback);
};

/**
 * 云检测固件手动升级  
 * @Author   amy       <amy@carystudio.com>
 * @DateTime 2017-11-07
 * @property {String} Flags         带配置升级的标志，1：带，0：不带
 * @property {String} FileName      固件名称
 * @example
 * request:
 * {
 *  "topicurl" : "CloudACMunualUpdate",
 *  
 * }
 * response:
 * {
 *    "Flags":"1",
 *    "FileName":""
 * }
 */
uiPost.prototype.CloudACMunualUpdate = function(postVar,callback){
    this.topicurl = 'CloudACMunualUpdate';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取升级信息    
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-07
 * @param {String} FileName            文件名 
 * @param {String} ContentLength        内容大小
 * @property {String} upgradeStatus     上传状态。0：上传失败，1：上传成功
 * @property {String} upgradeERR        错误信息
 * @example
 * request:
 * {
 *  "topicurl" : "setUpgradeFW",
 *  "FileName":"",
 *  "ContentLength":""
 * }
 * response:
 * {
 *  "upgradeStatus":"1",
 *  "upgradeERR":"MM_FwFileInvalid"
 * }
 */
uiPost.prototype.setUpgradeFW = function(postVar,callback){
    this.topicurl = 'setUpgradeFW';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取固件信息
 * add maxSize and upgreadeAction by Yexk @2018-1-23
 * @Author   karen       <karen@carystudio.com>
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2017-11-07
 * @param    {Function} topicurl              主题
 * @property {String} fmVersion      当前软件版本
 * @property {String} buildTime      当前软件发布时间
 * @property {String} cloudFw        是否支持云升级。0:no， 1:yes
 * @property {String} platform        当前平台
 * @property {String} cloudFwStatus        云状态 
 * @property {String} flashSize       flash固件的大小
 * @property {String} hardModel           硬件型号
 * @property {String} lanIp           IP地址
 * @property {String} maxSize          校验文件最大值。单位：kb,以1000位进制数。
 * @property {String} upgradeAction      返回当前升级固件的url，返回完整的URL
 * @property {String} setUpgradeFW      设置升级检测主题。默认：0调用的是CloudACMunualUpdate主题。如果1则调用setUpgradeFW主题
 * @example
 * request:
 * {
 *    topicurl:"FirmwareUpgrade"
 *    
 * }
 * response:
 *  {
 *   "fmVersion":"0",
 *   "buildTime":"Oct 17 2017 10:34:08",
 *   "cloudFw":"0",
 *   "platform":"mtk",
 *   "cloudFwStatus":"",
 *   "flashSize":"16",
 *   "hardModel":"CS182R",
 *   "lanIp":"192.168.0.1",
 *   "maxSize":"10000",
 *   "upgradeAction":"/cgi-bin/cstecgi.cgi?action=upload&setUpgradeFW",
 *   "setUpgradeFW":1
 *  }
 */
uiPost.prototype.FirmwareUpgrade = function(postVar,callback){
    this.topicurl = 'FirmwareUpgrade';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/firmware_info.json";
    }
    return this.post(postVar,callback);
};

/**
 * 获取系统设置数据
 * add 导入导出的路径配置，最大size by Yexk @2018-1-23
 * @Author   amy       <amy@carystudio.com>
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2017-12-16
 * @property {String} operationMode        系统模式。0：网关，1：桥模式，2：中继，3：wisp模式
 * @property {String} hardModel        固件
 * @property {String} meshEnabled        mesh的开关
 * @property {String} exportAction        导出的配置路径。
 * @property {String} importAction        导入的配置路径。
 * @property {String} maxSize           校验文件最大值。单位：kb,以1000位进制数。
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"SystemSettings"
 * }
 * response:
 *{
 *  
 *   "operationMode": 0,
 *   "hardModel":   "",
 *   "meshEnabled":  0,
 *   "exportAction":  '/cgi-bin/ExportSettings.sh',
 *   "importAction":  '/cgi-bin/cstecgi.cgi?action=upload&setting/setUploadSetting',
 *   "maxSize": "100000"
 *}
 */
uiPost.prototype.SystemSettings = function(postVar,callback){
    this.topicurl = 'SystemSettings';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/SystemSettings.json"
    }
    return this.post(postVar,callback);
};    

/**
 * 获取恢复出厂设置信息
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-07
 * @property {String} success       响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"LoadDefSettings"
 * }
 * response:
 *{
 *  
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.1",
 *   "wtime":   100,
 *   "reserv":  "reserv"
 *  
 *}
 */
uiPost.prototype.LoadDefSettings = function(postVar,callback){
    this.topicurl = 'LoadDefSettings';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取重启信息
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-07
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"RebootSystem"
 * }
 * response:
 *{ 
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.1",
 *   "wtime":   100,
 *   "reserv":  "reserv"
 *}
 */
uiPost.prototype.RebootSystem = function(postVar,callback){
    this.topicurl = 'RebootSystem';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取Syslog数据
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-04
 * @param {String} syslogEnabled     开启日志。1：启用，0：禁用
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getSyslogCfg"
 *    "syslogEnabled":"1"
 * }
 * response:
 *{
 *  
 *}
 */
uiPost.prototype.getSyslogCfg = function(postVar,callback){
    this.topicurl = 'getSyslogCfg';
    this.async = true; // true:异步，false:同步。
     if (globalConfig.debug) {
        this.url = "/data/syslog_info.json";
    }
    return this.post(postVar,callback);
};

/**
 * 提交Syslog数据
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-04
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"setSyslogCfg"
 * }
 * response:
 *{
 *   "success":true,
 *   "error":null,
 *   "lan_ip":"192.168.0.1",
 *   "wtime":"0",
 *   "reserv":"reserv"
 *}
 */
uiPost.prototype.setSyslogCfg = function(postVar,callback){
    this.topicurl = 'setSyslogCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/syslog_info.json";
    }
    return this.post(postVar,callback);
};  

/**
 * 清除系统日志信息
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-04
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"clearSyslog"
 * }
 * response:
 *{
 *   "success":true,
 *   "error":null,
 *   "lan_ip":"192.168.0.1",
 *   "wtime":"0",
 *   "reserv":"reserv"
 *}
 */
uiPost.prototype.clearSyslog = function(postVar,callback){
    this.topicurl = 'clearSyslog';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};  

/**
 * 获取系统日志信息
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-04
 * @property {String} syslog        日志信息
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"showSyslog"
 * }
 * response:
 *{
 *   "syslog":"xxxxxx"
 *}
 */
uiPost.prototype.showSyslog = function(postVar,callback){
    this.topicurl = 'showSyslog';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
      //  this.url = "/data/syslog_info.json";
    }
    return this.post(postVar,callback);
};

/**
 * 获取无线基础配置
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2017-11-04
 * @param    {String} topicurl      主题
 * @param    {String} wifiIdx       无线信息：0:5G 1:2.4G
 * @property {String} wifiOff       状态：0：启用，1：禁用
 * @property {String} channel       信道
 * @property {String} hssid     广播SSID
 * @property {String} bw            频宽
 * @property {String} ntpEnabled    ntp时间同步是否开启
 * @property {String} wifiSchEnabled 未知
 * @property {String} key          密码
 * @property {String} ssid          SSID
 * @property {String} band  频段
 * @property {String} apcliEnable   未知
 * @property {String} channelDfs    未知
 * @property {String} wifiDualband  未知
 * @property {String} countryBt     是否支持国家码，值：1：支持，0：不支持
 * @property {String} hardModel     硬件型号
 * @property {String} apAcBt        是否支持ApAc，值：1：支持，0：不支持
 * @property {String} countryCode   国家地区。CN：中国，US：美国，EU：欧洲，MY：马来西亚，JP：日本，OT：其他
 * @property {String} countryCodeList   国家码列表。CN：中国，US：美国，EU：欧洲，OT：其他，IA：印尼 等
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getWiFiBasicConfig" ,
 *    "wifiIdx":  "0"
 * }
 * response:
 * {
 *  "wifiOff":  0,
 *  "channel":  149,
 *  "hssid":    0,
 *  "bw":   1,
 *  "ntpEnabled":   1,
 *  "wifiSchEnabled":   1,
 *  "key":  12345678,
 *  "ssid": "TOTOLINK_A800R_5G",
 *  "band": 14,
 *  "apcliEnable":  0,
 *  "channelDfs":   1,
 *  "wifiDualband": 1,
 *  "countryBt":    0,
 *  "hardModel":    "",
 *  "apAcBt":   0,
 *  "countryCode": 'CN',
 *  "countryCodeList":"CN,US,EU,OT,IA"
 * }
 */
uiPost.prototype.getWiFiBasicConfig = function(postVar,callback){
    this.topicurl = 'getWiFiBasicConfig';
    this.async = true; // true:异步，false:同步。
    if(globalConfig.debug){
        this.url = '/data/wifi_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置无线基础配置
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2017-11-04
 * @param {String} ssid         SSID
 * @param {String} band         频段
 * @param {String} channel      信道
 * @param {String} hssid        广播SSID
 * @param {String} key         密码
 * @param {String} bw           频宽 2.4G: bw=0(频宽自动), bw=1(频宽20Hmz), bw=2(频宽40Hmz)  5G: bw=0(频宽自动), bw=1(频宽20Hmz), bw=2(频宽40Hmz), bw=3(频宽80Hmz)   
 * @param {String} wscDisabled  未知
 * @param {String} addEffect    判断设置的是开关还是配置，值：1：开关。0：配置值
 * @param {String} wifiIdx      无线信息：0:5G 1:2.4G
 * @param {String} countryCode  国家地区。CN：中国，US：美国，EU：欧洲，MY：马来西亚，JP：日本，OT：其他
 * @property {String} success
 * @property {String} error
 * @property {String} lan_ip
 * @property {String} wtime
 * @property {String} reserv
 * @example
 * request:
 * {
 *  "topicurl":"setWiFiBasicConfig",
 *  "ssid":"TOTOLINK_A800R_5G",
 *  "band":"14",
 *  "channel":"149",
 *  "hssid":0,
 *  "key":"",
 *  "bw":1,
 *  "wscDisabled":0,
 *  "addEffect":0,
 *  "wifiIdx":0,
 *  "countryCode": 'CN'
 * }
 * response:
 * {
 *  "success":  "true",
 *  "error":    null,
 *  "lan_ip":   "192.168.0.1",
 *  "wtime":    "10",
 *  "reserv":   "reserv"
 * }
 */
uiPost.prototype.setWiFiBasicConfig = function(postVar,callback){
    this.topicurl = 'setWiFiBasicConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取添加AP的信息
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-03
 * @param {String} wifiIdx            wifi类型。0：2.4G,1：5G
 * @property {String} wifiOff2(3)     多AP的禁用与启用。1：禁用, 0:启用
 * @property {String} ssid2(3)        多SSID名称
 * @property {String} authMode        加密方式。 支持{NONE, OPEN, SHARED, WPAPSK, WPA2PSK, WPAPSKWPA2PSK}, AP和CPE类产品只支持 {WPAPSKWPA2PSK,NONE}
 * @property {String} encrypType      加密类型。 支持{NONE,WEP,AES,TKIP,TKIPAES}
 * @property {Number} hssid           广播SSID
 * @property {Number} key2           ap1加密密码
 * @property {Number} key3           ap2加密密码
 * @property {Number} keyFormat       密码类型，1：hex，0：ASCII 
 * @property {Number} bssidNum       多AP个数 
 * @return   {Object}
 * @example
 * request:
 * {
 *     topicurl:"getWiFiMultipleConfig"
 *     "wifiIdx":"0"
 * }
 * response:
 *{
 *   "ssid2":"1111111111",
 *   "ssid3":"2222222222222",
 *   "wifiOff":"0",
 *   "wifiOff2":"0",
 *   "wifiOff3":"0",
 *   "authMode":"NONE;WPAPSKWPA2PSK",
 *   "encrypType":"NONE;TKIPAES",
 *   "hssid":"1;0",
 *   "key2":"",
 *   "key3":"12345678",
 *   "keyFormat":"1;0",
 *   "bssidNum":2
 *
 *}
 */
uiPost.prototype.getWiFiMultipleConfig = function(postVar,callback){
    this.topicurl = 'getWiFiMultipleConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/multiap_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置添加AP的信息
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-03
 * @param {String} wifiIdx        无线信息：0:5G 1:2.4G
 * @param {String} doAction       多ap的操作
 * @param {String} hssid          隐藏ssid  0 : 显示, 1 : 隐藏.
 * @param {String} ssid2(3)       多SSID名称
 * @param {String} key2          ap1加密密码
 * @param {String} key3          ap2加密密码
 * @param {String} wifiOff2(3)    多AP的禁用与启用。1：禁用, 0:启用
 * @param {String} bssidNum       多AP个数 
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @example
 * request:
 * {
 *   "topicurl" : "setWiFiMultipleConfig",
 *   "doAction":"2",
 *   "hssid":"0;0",
 *   "ssid2":"1111111111",
 *   "ssid3":"2222222222222",
 *   "key2":"",
 *   "wifiIdx":"0",
 *   "wifiOff2":"0",
 *   "wifiOff3":"0",
 *   "key3":"12345678",
 *   "bssidNum":2
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.1",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setWiFiMultipleConfig = function(postVar,callback){
    this.topicurl = 'setWiFiMultipleConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 删除多AP列表
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} wifiIdx        无线信息：0:5G 1:2.4G
 * @param {String} authMode       加密方式
 * @param {String} doAction       多ap的操作
 * @param {String} encrypType     加密类型
 * @param {String} hssid          隐藏ssid  0 : don't hide, 1 : hide.
 * @param {String} keyFormat      密码类型，1：hex，0：ASCII
 * @param {String} ssid2(3)       多SSID名称
 * @param {String} wepkey2(3)     wep加密密码
 * @param {String} wpakey2(3)     wpa加密密码
 * @param {String} wifiOff2(3)    多AP的禁用与启用。1：禁用, 0:启用
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知） 
 * @example
 * request:
 * {
 *  "topicurl" : "delWiFiMultipleConfig",
 *   "authMode":"NONE;WPAPSKWPA2PSK",
 *   "doAction":"2",
 *   "encrypType":"NONE;TKIPAES",
 *   "hssid":"1;0",
 *   "keyFormat":"0;0",
 *   "ssid2":"1111111111",
 *   "ssid3":"2222222222222",
 *   "wepkey2":"",
 *   "wepkey3":"",
 *   "wifiIdx":"0",
 *   "wifiOff2":"1",
 *   "wifiOff3":"0",
 *   "wpakey2":"",
 *   "wpakey3":"12345678",
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.delWiFiMultipleConfig = function(postVar,callback){
    this.topicurl = 'delWiFiMultipleConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取无线高级设置数据
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} wifiIdx       无线信息：0:5G 1:2.4G
 * @property {String} bgProtection               BG保护模式
 * @property {String} beaconPeriod               信标
 * @property {String} htBSSCoexistence               20/40M共存
 * @property {String} dtimPeriod               数据标率
 * @property {String} fragThreshold               分片域值
 * @property {String} rtsThreshold               RTS域值
 * @property {String} txPreamble               前导帧类型
 * @property {String} wmmCapable               Wi-Fi多媒体(WMM)
 * @property {String} noForwarding               AP隔离
 * @property {String} txPower               发射功率
 * @property {String} band               无线模式：9和6:20/40M 功能显示（具体作用未知）
 * @property {String} wifiDualband               双频标志：1：双频 （其他参数未知）
 *
 * @example
 * request:
 * {
 *      "wifiIdx":1,
 *      "topicurl":"getWiFiAdvancedConfig"
 *  }
 * response:
 * {
 *    "bgProtection":   1,
 *    "beaconPeriod":   100,
 *    "htBSSCoexistence":   0,
 *    "dtimPeriod": 1,
 *    "fragThreshold":  2346,
 *    "rtsThreshold":   2347,
 *    "txPreamble": 1,
 *    "wmmCapable": 1,
 *    "noForwarding":   0,
 *    "txPower":    0,
 *    "band":   14,
 *    "wifiDualband":   1
 * }
 */
uiPost.prototype.getWiFiAdvancedConfig = function(postVar,callback){
    this.topicurl = 'getWiFiAdvancedConfig';
    this.async = true; // true:异步，false:同步。
    if(postVar.wifiIdx == 1){   //1: 2.4G
        if (globalConfig.debug) {
            this.url = '/data/advanced2.json';
        }
    }else{  //0: 5G
        if (globalConfig.debug) {
            this.url = '/data/advanced5.json';
        }
    }
    return this.post(postVar,callback);
};

/**
 * 设置无线高级数据
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} bgProtection       BG保护模式
 * @param {String} beaconPeriod       信标
 * @param {String} dtimPeriod       数据标率
 * @param {String} txPreamble       前导帧类型
 * @param {String} fragThreshold       分片域值
 * @param {String} rtsThreshold       RTS域值
 * @param {String} txPower       发射功率
 * @param {String} noForwarding       AP隔离
 * @param {String} htBSSCoexistence       20/40M共存
 * @param {String} wmmCapable       Wi-Fi多媒体(WMM)
 * @param {String} wifiIdx       无线信息：0: 5G，1: 2.4G
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 *
 * @example
 * request:
 * {
 *      "bgProtection":1,
 *      "beaconPeriod":100,
 *      "dtimPeriod":1,
 *      "txPreamble":1,
 *      "fragThreshold":2346,
 *      "rtsThreshold":2347,
 *      "txPower":0,
 *      "noForwarding":0,
 *      "htBSSCoexistence":0,
 *      "wmmCapable":1,
 *      "wifiIdx":1,
 *      "topicurl":"setWiFiAdvancedConfig"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setWiFiAdvancedConfig = function(postVar,callback){
    this.topicurl = 'setWiFiAdvancedConfig';
    this.async = true; // true:异步，false:同步。
    if(postVar.wifiIdx == 1){   //0: 2.4G
    }else{  //0: 5G
    }
    return this.post(postVar,callback);
};

/**
 * 获取WPS配置信息
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-03
 * @param {String} wifiIdx       无线信息：0：5G , 1：2.4G
 * @property {String} wifiOff       无线是否启用。1：禁用，0：启用
 * @property {String} wscFlag       wps是否可用。1：不可用，0：可用
 * @property {String} wscDisabled       WPS状态：1：禁用，0：启用
 * @property {String} wscPin       未知
 *
 * @example
 * request:
 * {
 *      "topicurl":"getWiFiWpsSetupConfig",
 *      "wifiIdx":"0"
 * }
 * response:
 * {
 *   "wifiOff": 0,
 *   "wscFlag": 0,
 *   "wscDisabled": 0,
 *   "wscPin":  "21595684"
 * }
 */
uiPost.prototype.getWiFiWpsSetupConfig = function(postVar,callback){
    this.topicurl = 'getWiFiWpsSetupConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/wps_getconf.json';
    }
    return this.post(postVar,callback);
};

/**
 * 启用WPS
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-03
 * @param {String} wifiIdx       无线信息：0：5G , 1：2.4G
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 *
 * @example
 * request:
 * {
 *      "wifiIdx":  1,
 *      "topicurl":"setWiFiWpsSetupConfig",
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setWiFiWpsSetupConfig = function(postVar,callback){
    this.topicurl = 'setWiFiWpsSetupConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * WPS进行中
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-03
 * @param {String} wifiIdx       无线信息：0：5G , 1：2.4G
 * @property {String} wscStatus       WPS状态：Start WSC Process/Send M2(未知)：进行中，Not used：未使用, Idle:空闲, WSC Fail:WPS失败
 * @property {String} wscResult       结果
 *
 * @example
 * request:
 * {
 *      "wifiIdx":  1,
 *      "topicurl":"getWiFiWpsConfig",
 * }
 * response:
 * {
 *       "wscStatus":   "Start WSC Process",
 *       "wscResult":   "0"
 * }
 */
uiPost.prototype.getWiFiWpsConfig = function(postVar,callback){
    this.topicurl = 'getWiFiWpsConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/wps_conf.json';
    }
    return this.post(postVar,callback);
};

/**
 * 打开WPS
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-03
 * @param {String} wifiIdx       无线信息：0：5G , 1：2.4G
 * @param {String} wscMode       作用未知
 * @param {String} wscPinMode       作用未知
 * @param {String} pin              作用未知
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 *
 * @example
 * request:
 * {
 *      "wifiIdx":  1,
 *      "wscMode":  0,
 *      "wscPinMode":0,
 *      "pin":"",
 *      "topicurl":"setWiFiWpsConfig",
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setWiFiWpsConfig = function(postVar,callback){
    this.topicurl = 'setWiFiWpsConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取WDS数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param    {String} wifiIdx        无线信息：0：5G , 1：2.4G
 * @property {String} wifiOff    无线状态。1：禁用，0：启用
 * @property {String} wdsEnable     状态。0：禁用，1：启用 
 * @property {String} wdsList        添加WDS的列表    
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    "wifiIdx":  0,
 *    topicurl:"getWiFiWdsAddConfig"
 * }
 * response:
 * {
 *   "wifiOff":0,
 *   "wdsEnable":"1",
 *   "wdsList": "F4:28:54:00:37:45;FE:28:54:00:37:EE;F4:28:54:00:37:89",
 * }
 */
uiPost.prototype.getWiFiWdsAddConfig = function(postVar,callback){
    this.topicurl = 'getWiFiWdsAddConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/wds_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置WDS数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} addEffect   添加的状态  
 * @param {String} wdsEnable    状态。0：禁用，1：启用
 * @param {String} wdsList     添加WDS的列表 
 * @param {String} wifiIdx    无线信息：0：5G , 1：2.4G
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "addEffect":   "0",
 *   "wdsEnable":   "1",
 *   "wdsList": "F4:28:54:00:37:45",
 *   "wifiIdx": "0",
 *   "topicurl":"setWiFiWdsAddConfig"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setWiFiWdsAddConfig = function(postVar,callback){
    this.topicurl = 'setWiFiWdsAddConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 删除WDS数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} DR0    删除第一条规则
 * @param {String} wifiIdx    无线信息：0：5G , 1：2.4G
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "DR0":   0,
 *   "wifiIdx":  "0",
 *   "topicurl":"setWiFiWdsDeleteConfig"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setWiFiWdsDeleteConfig = function(postVar,callback){
    this.topicurl = 'setWiFiWdsDeleteConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
}; 

/**
 * 获取Mac认证配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param    {String} wifiIdx   无线信息：0：5G，1:2.4G
 * @property {String} authMode    认证模式。0：禁用，1：白名单，2：黑名单
 * @property {String} authList       添加的认证规则     
 * @return   {Object}
 * @example
 * request:
 * {
 *    "wifiIdx":"0",
 *    topicurl:"getWiFiAclAddConfig"
 * }
 * response:
 * {
 *   "authMode":    2,
 *   "authList":    "F4:28:56:34:51:44;F4:28:56:34:51:22"
 * }
 */
uiPost.prototype.getWiFiAclAddConfig = function(postVar,callback){
    this.topicurl = 'getWiFiAclAddConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/acl_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置Mac认证数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} authMode    认证模式。0：禁用，1：白名单，2：黑名单
 * @param {String} addEffect       添加的状态
 * @param {String} macAddress       MAC地址
 * @param {String} wifiIdx       无线信息：0：5G，1：2.4G 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "authMode":  "2",
 *   "addEffect":   "1",
 *   "macAddress":"xx:xx:xx:xx:xx:xx",
 *   "wifiIdx": "0"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.1",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setWiFiAclAddConfig = function(postVar,callback){
    this.topicurl = 'setWiFiAclAddConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 删除Mac认证数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} DR0    删除第一条规则
 * @param {String} wifiIdx    无线信息：0：5G，1：2.4G
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "DR0":  0,
 *   "wifiIdx":  "0",
 *   "topicurl":"setWiFiAclDeleteConfig"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.1",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setWiFiAclDeleteConfig = function(postVar,callback){
    this.topicurl = 'setWiFiAclDeleteConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取WiFi调度配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-04
 * @property {String} wifiScheduleEn     WiFi调度状态：0：禁用，1：启用
 * @property {String} wifiScheduleNum   WiFi调度规则总个数
 * @property {String} wifiScheduleRule0    第一条规则
 * @property {String} wifiScheduleRule1    第二条规则
 * @property {String} wifiScheduleRule2    第三条规则
 * @property {String} wifiScheduleRule3    第四条规则
 * @property {String} wifiScheduleRule4    第五条规则
 * @property {String} wifiScheduleRule5    第六条规则
 * @property {String} wifiScheduleRule6    第七条规则
 * @property {String} wifiScheduleRule7    第八条规则
 * @property {String} wifiScheduleRule8    第九条规则
 * @property {String} wifiScheduleRule9    第十条规则
 * @example
 * request:
 * {
 *   "topicurl":"getWiFiScheduleConfig"
 * }
 * response:
 * {
 *  "wifiScheduleEn":   1,
 *  "wifiScheduleNum":  10,
 *  "wifiScheduleRule0":    "1,1,1,0,3,19",
 *  "wifiScheduleRule1":    "0,0,0,0,0,0",
 *  "wifiScheduleRule2":    "0,0,0,0,0,0",
 *  "wifiScheduleRule3":    "0,5,16,9,23,12",
 *  "wifiScheduleRule4":    "0,0,0,0,0,0",
 *  "wifiScheduleRule5":    "0,0,0,0,0,0",
 *  "wifiScheduleRule6":    "0,0,0,0,0,0",
 *  "wifiScheduleRule7":    "0,0,0,0,0,0",
 *  "wifiScheduleRule7":    "0,0,0,0,0,0",
 *  "wifiScheduleRule9":    "0,3,10,58,20,43"
 * }
 */
uiPost.prototype.getWiFiScheduleConfig = function(postVar,callback){
    this.topicurl = 'getWiFiScheduleConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/wifischedule.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置WiFi调度数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-04
 * @param {String} enable0    第1条规则的状态 0：禁用，1：启用
 * @param {String} week0       第1条规则的周  1：周一，2：周二 以此类推
 * @param {String} startHour0    第1条规则的起始时
 * @param {String} startMinute0    第1条规则的起始分
 * @param {String} endHour0    第1条规则的结束时
 * @param {String} endMinute0    第1条规则的结束分
 * @param {String} wifiScheduleEn   功能总开关， 0：禁用，1：启用
 * @param {String} addEffect   添加的状态
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "enable0":"1",
 *   "week0":   "1",
 *   "startHour0":"1",
 *   "startMinute0":"0",
 *   "endHour0":"3",
 *   "endMinute0":"19",
 *   "enable1":"0"
 *   "addEffect":"0",
 *   "wifiScheduleEn":"1",
 *   "topicurl":"setWiFiScheduleConfig"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.1",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setWiFiScheduleConfig = function(postVar,callback){
    this.topicurl = 'setWiFiScheduleConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/wifischedule.json';
    }
    return this.post(postVar,callback);
};

/**
 * 获取无线状态数据
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-03
 * @param {String} wifiIdx           无线信息标志：0 ：5G , 1: 2.4G
 * @property {String} operationMode       系统模式：0：网关模式
 * @property {String} channel      信道
 * @property {String} autoChannel      自动信道
 * @property {String} band      频段
 * @property {String} wifiOff1      主SSID状态：0：启用，1：禁用
 * @property {String} ssid1      主SSID
 * @property {String} bssid1      主SSID 的MAC地址
 * @property {String} key1      wifi密码
 * @property {String} staNum1      主SSID客户端连接数
 * @property {String} wifiOff2      多SSID2(多SSID中的第一个)状态：0：启用，1：禁用
 * @property {String} ssid2      ssid2
 * @property {String} bssid2      ssid2 的MAC地址
 * @property {String} key2      ssid2 密码
 * @property {String} staNum2      ssid2 客户端连接数
 * @property {String} wifiOff3      多SSID3(多SSID中的第二个)状态：0：启用，1：禁用
 * @property {String} ssid3      ssid3
 * @property {String} bssid3      ssid3 的MAC地址
 * @property {String} key3      ssid3 密码
 * @property {String} staNum3      ssid3 客户端连接数
 * @property {String} bssidNum      未知
 * @property {String} apcliEnable      未知
 * @property {String} apcliSsid      未知
 * @property {String} apcliAuthMode      未知
 * @property {String} apcliEncrypType      未知
 * @property {String} apcliKey      未知
 * @property {String} apcliBssid      未知
 * @property {String} apcliStatus      未知
 *
 * @example
 * request:
 * {
 *       "wifiIdx":1,
 *       "topicurl":"getWiFiApInfo"
 * }
 * response:
 * {
 *     "operationMode": 0,
 *     "channel":   161,
 *     "autoChannel":   161,
 *     "band":  14,
 *     "wifiOff1":  0,
 *     "ssid1": "TOTOLINK_A3000RU_5G8888",
 *     "bssid1":    "F4:28:54:00:40:E2",
 *     "wifiKey1":  "12345678",
 *     "staNum1":   0,
 *     "wifiOff2":  0,
 *     "ssid2": "111111111",
 *     "bssid2":    "F4:28:54:00:40:E4",
 *     "wifiKey2":  "12345678",
 *     "staNum2":   0,
 *     "wifiOff3":  1,
 *     "ssid3": "TOTOLINK 5G VAP2",
 *     "bssid3":    "00:E0:4C:81:86:86",
 *     "wifiKey3":  "",
 *     "staNum3":   0,
 *     "bssidNum":  3,
 *     "apcliEnable":   0,
 *     "apcliSsid": "Extender",
 *     "apcliAuthMode": "NONE",
 *     "apcliEncrypType":   "NONE",
 *     "apcliKey":  "",
 *     "apcliBssid":    "00:00:00:00:00:00",
 *     "apcliStatus":   "fail"
 * }
 */
uiPost.prototype.getWiFiApInfo = function(postVar,callback){
    this.topicurl = 'getWiFiApInfo';
    this.async = true; // true:异步，false:同步。
    if(globalConfig.debug){
        this.url='/data/wifiap_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 获取无线客户端连接设备信息
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-03-17
 * @param {String} wifiIdx           无线信息标志：0 ：5G , 1: 2.4G
 * @property {String} mac      MAC地址
 * @property {String} mode     模式
 * @property {String} bw       频宽
 * @property {String} rssi     信号
 * @property {String} connectTime    无线客户端连接上在线时间
 * 
 * @example
 * request:
 * {
 *       "wifiIdx":1,
 *       "topicurl":"getWiFiStaInfo"
 * }
 * response:
 *   [
 *     {
 *       "mac":  "A0:86:C6:37:5C:F3",
 *       "mode": "11n",
 *       "bw":   "40M",
 *       "rssi":   "70",
 *       "connectTime":  "00:01:48"
 *     },
 *     {
 *       "mac":  "FC:64:BA:10:D0:55",
 *       "mode": "11ac",
 *       "bw":   "40M",
 *       "rssi":   "98",
 *       "connectTime":  "00:01:08"
 *     },
 *     {
 *       "mac":  "84:3A:4B:7D:90:08",
 *       "mode": "11ac",
 *       "bw":   "40M",
 *       "rssi":   "88",
 *       "connectTime":  "00:11:08"
 *     }
 *   ]
 */
uiPost.prototype.getWiFiStaInfo = function(postVar,callback){
    this.topicurl = 'getWiFiStaInfo';
    this.async = true; // true:异步，false:同步。
    if(globalConfig.debug){
        this.url='/data/wifista_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 获取MAC认证的MAC列表
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-07
 * @return   {null}
 * @property {String} enable   原来的意思是是否开启？还是什么？新版本中建议去掉
 *
 * @property {String} obj       一个对象带表一条数据
 * @property {String} obj.table   标题
 * @property {String} obj.mac   MAC地址
 * @property {String} obj.ip    IP地址
 * @example
 * request:
 * {
 *    topicurl:"getWiFiIpMacTable"
 *
 * }
 * response:
 *  [
 *      {
 *          "table":"rules"
 *      },
 *      {
 *          "mac":"14:F6:5A:B3:EC:77",
 *          "ip":"0.0.0.0"
 *      }
 *  ]
 */
uiPost.prototype.getWiFiIpMacTable = function(postVar,callback){
    this.topicurl = 'getWiFiIpMacTable';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/aclscanlist.json';
    }
    return this.post(postVar,callback);
};

/**
 * 获取扫描AP数据
 * @Author   Felix       <amy@carystudio.com>
 * @DateTime 2017-12-20 
 * @property {String} ssid      SSID
 * @property {String} bssid     MAC
 * @property {String} channel   信道 
 * @property {String} encrypt   加密方式  
 * @property {String} cipher    加密算法
 * @property {String} band      频段
 * @property {String} signal    信号强度
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getWiFiApcliScan"
 * }
 * response:
 * {
 *  [
 *   {
 *       "ssid":"a1",
 *       "bssid":"F4:11:22:33:44:44",
 *       "channel":"11",
 *       "encrypt":"NONE",
 *       "cipher":"",
 *       "band":"B",
 *       "signal":"78"
 *   },
 *   {
 *       "ssid":"a2",
 *       "bssid":"F4:22:22:33:44:44",
 *       "channel":"6",
 *       "encrypt":"WPA2PSK",
 *       "cipher":"AES",
 *       "band":"B/G/N",
 *       "signal":"88"
 *  }
 * ]
 * }
 */
uiPost.prototype.getWiFiApcliScan = function(postVar,callback){
    this.topicurl = 'getWiFiApcliScan';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/getWiFiApcliScan.json';
    }
    return this.post(postVar,callback);
};

uiPost.prototype.setWiFiRepeaterConfig = function(postVar,callback){
    this.topicurl = 'setWiFiRepeaterConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};


/**
 * 获取Firewall类型
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2017-11-08
 * @param    {String} topicurl          主题
 * @property {String} firewallType      防火墙类型。 0:白名单，1:黑名单
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getFirewallType" ,
 * }
 * response:
 * {
 *  "firewallType": 0
 * }
 */
uiPost.prototype.getFirewallType = function(postVar,callback){
    this.topicurl = 'getFirewallType';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/firewall_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置Firewall类型
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2017-11-08
 * @param {String} firewallType     防火墙类型。 0:白名单，1:黑名单
 * @property {String} success
 * @property {String} error
 * @property {String} lan_ip
 * @property {String} wtime
 * @property {String} reserv
 * @example
 * request:
 * {
 *  "topicurl":"setFirewallType",
 *  "firewallType": 0
 * }
 * response:
 * {
 *  "success":  "true",
 *  "error":    null,
 *  "lan_ip":   "192.168.0.1",
 *  "wtime":    "10",
 *  "reserv":   "reserv"
 * }
 */
uiPost.prototype.setFirewallType = function(postVar,callback){
    this.topicurl = 'setFirewallType';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取VPN穿透配置
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2017-11-06
 * @param    {String} topicurl          主题
 * @property {String} wanPingFilter     Ping Access on WAN；0：禁用，1：启用
 * @property {String} l2tpPassThru      L2TP穿透。 0：禁用，1：启用
 * @property {String} pptpPassThru      PPTP穿透。 0：禁用，1：启用
 * @property {String} ipsecPassThru     IPSec穿透。0：禁用，1：启用
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getVpnPassCfg" ,
 * }
 * response:
 * {
 *  "wanPingFilter":    1,
 *  "l2tpPassThru": 1,
 *  "pptpPassThru": 1,
 *  "ipsecPassThru":    1
 * }
 */
uiPost.prototype.getVpnPassCfg = function(postVar,callback){
    this.topicurl = 'getVpnPassCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/vpnpass_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置VpnPass配置
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2017-11-06
 * @param {String} wanPingFilter    允许从WAN口PING, 0：禁用，1：启用
 * @param {String} l2tpPassThru     L2TP穿透, 0：禁用，1：启用
 * @param {String} pptpPassThru     PPTP穿透, 0：禁用，1：启用
 * @param {String} ipsecPassThru    IPSec穿透, 0：禁用，1：启用
 * @property {String} success
 * @property {String} error
 * @property {String} lan_ip
 * @property {String} wtime
 * @property {String} reserv
 * @example
 * request:
 * {
 *  "topicurl":"setVpnPassCfg",
 *  "wanPingFilter":"1",
 *  "l2tpPassThru":"1",
 *  "pptpPassThru":"1",
 *  "ipsecPassThru":"1"
 * }
 * response:
 * {
 *  "success":  "true",
 *  "error":    null,
 *  "lan_ip":   "192.168.0.1",
 *  "wtime":    "10",
 *  "reserv":   "reserv"
 * }
 */
uiPost.prototype.setVpnPassCfg = function(postVar,callback){
    this.topicurl = 'setVpnPassCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取DMZ数据
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-02
 * @property {String} dmzEnabled       DMZ开关, 0：禁用，1：启用
 * @property {String} dmzAddress       DMZ域名地址
 * @property {String} lanIp            局域网IP地址
 * @property {String} lanNetmask       局域网的子网掩码
 * @property {String} stationIp        计算机连接的IP地址
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getDMZCfg"
 * }
 * response:
 * {
 *     "dmzEnabled":    "1",
 *     "dmzAddress":    "192.168.0.8",
 *     "lanIp": "192.168.0.5",
 *     "lanNetmask":    "255.255.255.0",
 *     "stationIp": "192.168.0.6"
 * }
 */
uiPost.prototype.getDMZCfg = function(postVar,callback){
    this.topicurl = 'getDMZCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/dmz_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置DMZ配置信息
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} dmzEnabled      DMZ开关, 0：禁用，1：启用
 * @param {String} dmzAddress      DMZ域名地址
 * @property {String} success      响应状态, true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip       局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv       返回页面（参数未知）
 *
 * @example
 * request:
 * {
 *     "dmzEnabled":1,
 *     "dmzAddress":"192.168.0.8",
 *     "topicurl":"setDMZCfg"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setDMZCfg = function(postVar,callback){
    this.topicurl = 'setDMZCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取URL过滤配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @property {String} enable    URL过滤开关,0：禁用，1：启用
 * @property {String} idx       规则序号
 * @property {String} url       过滤url关键词  
 * @property {String} delRuleName   删除规则索引         
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getUrlFilterRules"
 * }
 * response:
 *   [
 *      {
 *          "enable":"1"
 *      },
 *      {
 *          "idx":"1",
 *          "url":"www.qq.comxx:xx:xx:xx:xx:xx",
 *          "delRuleName":"delRule0"
 *      },
 *      {
 *          "idx":"2",
 *          "url":"www.baidu.comxx:xx:xx:xx:xx:xx",
 *          "delRuleName":"delRule1"
 *      }
 *   ]
 */
uiPost.prototype.getUrlFilterRules = function(postVar,callback){
    this.topicurl = 'getUrlFilterRules';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/url_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置URL过滤数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} enable       URL过滤开关, 0：禁用，1：启用 
 * @param {String} addEffect    0：设置url过滤开关；1：设置过滤规则
 * @param {String} url          过滤url关键词  
 * @property {String} success   响应状态 , true：响应成功，false：响应失败 
 * @property {String} error     错误
 * @property {String} lan_ip    局域网IP
 * @property {String} wtime     等待时间
 * @property {String} reserv    返回页面（参数未知）
 * @example
 * request:
 * {
 *   "enable":  1,
 *   "addEffect":   0,
 *   "url": "www.qq.com",
 *   "topicurl":"setUrlFilterRules"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setUrlFilterRules = function(postVar,callback){
    this.topicurl = 'setUrlFilterRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 删除URL过滤数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} delRule0      删除指定规则
 * @property {String} success    响应状态, true：响应成功，false：响应失败 
 * @property {String} error      错误
 * @property {String} lan_ip     局域网IP
 * @property {String} wtime      等待时间
 * @property {String} reserv     返回页面（参数未知）
 * @example
 * request:
 * {
 *   "delRule0":    0,
 *   "topicurl":"delUrlFilterRules"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.delUrlFilterRules = function(postVar,callback){
    this.topicurl = 'delUrlFilterRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取IP端口过滤配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @property {String} enable      IP端口过滤开关 , 1：启用; 0：禁用 
 * @property {String} lanNetmask  局域网子网掩码
 * @property {String} lanIp       局域网IP地址 
 * @property {String} idx         规则序号
 * @property {String} ip          过滤的IP地址 
 * @property {String} proto       过滤规则协议 
 * @property {String} portRange   端口范围 
 * @property {String} comment     描述 
 * @property {String} delRuleName   删除制定规则      
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getIpPortFilterRules"
 * }
 * response:
 * [
 *  {
 *     "enable":"1",
 *     "lanNetmask":"255.255.255.0",
 *     "lanIp":"192.168.0.1"
 *  },
 *  {
 *      "idx":"1",
 *      "ip":"192.168.0.100",
 *      "proto":"TCP+UDP",
 *      "portRange":"1223-12312",
 *      "comment":"wwwwwww",
 *      "delRuleName":"delRule0"
 *  },
 *  {
 *      "idx":"2",
 *      "ip":"192.168.0.200",
 *      "proto":"TCP+UDP",
 *      "portRange":"123",
 *      "comment":"",
 *      "delRuleName":"delRule1"
 *  }
 *]
 */
uiPost.prototype.getIpPortFilterRules = function(postVar,callback){
    this.topicurl = 'getIpPortFilterRules';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/ipf_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置IP端口过滤配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} enable      IP端口过滤开关, 1：启用; 0：禁用
 * @param {String} addEffect   0：设置IP端口过滤开关；1：设置过滤规则
 * @param {String} ipAddress   过滤的IP地址  
 * @param {String} dFromPort   过滤的起始端口
 * @param {String} dToPort     过滤的结束端口 
 * @param {String} protocol    过滤规则协议设置
 * @param {String} comment     描述
 * @property {String} success  响应状态, true：响应成功，false：响应失败
 * @property {String} error    错误
 * @property {String} lan_ip   局域网IP
 * @property {String} wtime    等待时间
 * @property {String} reserv   返回页面（参数未知）
 * @example
 * request:
 * {
 *   "enable":  1,
 *   "addEffect":   0,
 *   "ipAddress":   "192.168.0.12",
 *   "dFromPort":   345,
 *   "dToPort":   5432,
 *   "protocol":    "TCP/UDP",
 *   "comment":    "wwwwww",
 *   "topicurl":"setIpPortFilterRules"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.1",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setIpPortFilterRules = function(postVar,callback){
    this.topicurl = 'setIpPortFilterRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 删除IP端口过滤配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param    {String} delRule0    删除指定规则
 * @property {String} success     响应状态, true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @example
 * request:
 * {
 *   "delRule0":    0,
 *   "topicurl":"delIpPortFilterRules"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.delIpPortFilterRules = function(postVar,callback){
    this.topicurl = 'delIpPortFilterRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
}; 

/**
 * 获取端口转发配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @property {String} enable    端口转发开关, 0：禁用，1：启用
 * @property {String} lanNetmask  局域网子网掩码
 * @property {String} lanIp       局域网IP地址 
 * @property {String} idx       规则序号
 * @property {String} ip        转发的目的IP地址 
 * @property {String} proto     协议 
 * @property {String} wanPortFrom   外部开始端口
 * @property {String} wanPortTo     外部结束端口
 * @property {String} lanPortFrom   内部开始端口
 * @property {String} lanPortTo     内部结束端口
 * @property {String} comment       规则描述 
 * @property {String} delRuleName   删除规则的索引         
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getPortForwardRules"
 * }
 * response:
 *  [
 *   {
 *     "enable":"1",
 *     "lanNetmask":"255.255.255.0",
 *     "lanIp":"192.168.0.1"
 *   },
 *   {
 *       "idx":"1",
 *       "ip":"192.168.0.54",
 *       "proto":"TCP+UDP",
 *       "wanPortFrom":"999",
 *       "wanPortTo":"999",
 *       "lanPortFrom":"788",
 *       "lanPortTo":"788",
 *       "comment":"",
 *       "delRuleName":"delRule0"
 *   },
 *   {
 *       "idx":"2",
 *       "ip":"192.168.0.123",
 *       "proto":"TCP+UDP",
 *       "wanPortFrom":"8888",
 *       "wanPortTo":"8888",
 *       "lanPortFrom":"888",
 *       "lanPortTo":"888",
 *       "comment":"",
 *       "delRuleName":"delRule1"
 *  }
 * ]
 */
uiPost.prototype.getPortForwardRules = function(postVar,callback){
    this.topicurl = 'getPortForwardRules';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/portfwd_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置端口转发数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} enable          端口转发, 0：禁用，1：启用
 * @param {String} addEffect       0：设置端口转发开关；1：设置转发规则
 * @param {String} wanPortFrom     外部开始端口
 * @param {String} wanPortTo       外部结束端口 
 * @param {String} ipAddress       转发的目的IP地址  
 * @param {String} lanPortFrom     内部开始端口
 * @param {String} lanPortTo       内部结束端口 
 * @param {String} protocol        设置规则协议 
 * @param {String} comment         规则描述
 * @property {String} success      响应状态, true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip       局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv       返回页面（参数未知）
 * @example
 * request:
 * {
 *   "enable":  1,
 *   "addEffect":   0,
 *   "wanPortFrom": 12345,
 *   "wanPortTo":     12345,
 *   "ipAddress":   "192.168.0.12",
 *   "lanPortFrom": 12331,
 *   "lanPortTo":     12331,
 *   "protocol":    "TCP+UDP",
 *   "comment":    "That's the first rule .",
 *   "topicurl":"setPortForwardRules"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setPortForwardRules = function(postVar,callback){
    this.topicurl = 'setPortForwardRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 删除端口转发数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} delRule0    删除指定规则
 * @property {String} success  响应状态  【true：响应成功，false：响应失败】
 * @property {String} error    错误
 * @property {String} lan_ip   局域网IP
 * @property {String} wtime    等待时间
 * @property {String} reserv   返回页面（参数未知） 
 * @example
 * request:
 * {
 *   "delRule0":    0,
 *   "topicurl":"delPortForwardRules"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.delPortForwardRules = function(postVar,callback){
    this.topicurl = 'delPortForwardRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
}; 

/**
 * 获取MAC过滤配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @property {String} enable    MAC过滤开关, 0：禁用，1：启用
 * @property {String} idx       规则序号
 * @property {String} mac       过滤规则中的Mac地址 
 * @property {String} comment   描述 
 * @property {String} delRuleName    删除规则的索引       
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getMacFilterRules"
 * }
 * response:
 *   [
 *      {
 *          "enable":"1"
 *      },
 *      {
 *          "idx":"1",
 *          "mac":"f4:28:54:00:37:89",
 *          "comment":"",
 *          "delRuleName":"delRule0"
 *      },
 *      {
 *          "idx":"2",
 *          "mac":"3c:97:0e:61:35:b9",
 *          "comment":"wwww",
 *          "delRuleName":"delRule1"
 *      }
 *  ]
 */
uiPost.prototype.getMacFilterRules = function(postVar,callback){
    this.topicurl = 'getMacFilterRules';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/mac_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置MAC过滤数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} enable        MAC过滤开关, 0：禁用，1：启用
 * @param {String} addEffect     0：设置Mac过滤开关；1：设置过滤规则
 * @param {String} macAddress    过滤规则中的MAC地址  
 * @param {String} comment       描述
 * @property {String} success    响应状态, true：响应成功，false：响应失败
 * @property {String} error      错误
 * @property {String} lan_ip     局域网IP
 * @property {String} wtime      等待时间
 * @property {String} reserv     返回页面（参数未知）
 * @example
 * request:
 * {
 *   "enable":  1,
 *   "addEffect":   0,
 *   "macAddress":  F4:28:54:00:37:22,
 *   "comment":    "That's the first rule .",
 *   "topicurl":"setMacFilterRules"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setMacFilterRules = function(postVar,callback){
    this.topicurl = 'setMacFilterRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 删除MAC过滤数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} delRule0      删除指定规则
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "delRule0":    0,
 *   "topicurl":"delMacFilterRules"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.delMacFilterRules = function(postVar,callback){
    this.topicurl = 'delMacFilterRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
}; 

/**
 * 设置总QoS数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} enabled     状态。0：禁用，1：启用
 * @param {String} manualUplinkSpeed      总上传带宽
 * @param {String} manualDownlinkSpeed    总下载带宽
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知） 
 * @example
 * request:
 * {
 *   "enabled":"1",
 *   "manualUplinkSpeed":"99999",
 *   "manualDownlinkSpeed":"99999"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setIpQos = function(postVar,callback){
    this.topicurl = 'setIpQos';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取QoS数据
 * @Author   Amy       <amy@carystudio.com>
 * @Author   Yexk      <yexk@carystudio.com>
 * @DateTime 2017-11-02
 * @param    {String} wifiIdx        无线信息：0：5G , 1：2.4G
 * @property {String} enable    状态。0：禁用，1：启用
 * @property {String} manualUpSpeed     总上传带宽 
 * @property {String} manualDwSpeed     总下载带宽
 * @property {String} gigaBitBt     未知
 * @property {String} wanGigabitBt  未知
 * @property {String} lanIp      局域网IP
 * @property {String} lanNetmask      局域网子网掩码
 * @property {String} idx     列表ID号 
 * @property {String} ip     IP地址
 * @property {String} upBandwidth     上传宽带   
 * @property {String} dwBandwidth     下载宽带 
 * @property {String} comment          描述
 * @property {String} limitMode         限速模式 ， 0 系统自动，1 手动
 * @property {String} delRuleName      第几条规则   
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getIpQosRules"
 * }
 * response:
 * [
 *   {
 *       "enable":"1",
 *       "manualUpSpeed":"99999",
 *       "manualDwSpeed":"99999",
 *       "gigaBitBt":"1",
 *       "wanGigabitBt":"1",
 *       "lanIp":"192.168.0.1",
 *       "lanNetmask":"255.255.255.0"
 *   },
 *   {
 *       "idx":"1",
 *       "ip":"192.168.0.100",
 *       "upBandwidth":"100000",
 *       "dwBandwidth":"100000",
 *       "comment":"",
 *       "limitMode":"0",
 *       "delRuleName":"delRule0"
 *   },
 *   {
 *       "idx":"2",
 *       "ip":"192.168.0.222",
 *       "upBandwidth":"11111",
 *       "dwBandwidth":"22222",
 *       "comment":"",
 *       "limitMode":"1",
 *       "delRuleName":"delRule1"
 *   }
 * ]
 */
uiPost.prototype.getIpQosRules = function(postVar,callback){
    this.topicurl = 'getIpQosRules';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/qos_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置新增QoS数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} ipStart     起始IP
 * @param {String} ipEnd       结束IP
 * @param {String} upBandwidth   上传带宽  
 * @param {String} downBandwidth    下载带宽
 * @param {String} comment    描述
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "ipStart":"192.168.0.100",
 *   "ipEnd":"192.168.0.100",
 *   "upBandwidth":"100000",
 *   "downBandwidth":"100000",
 *   "comment":""
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setIpQosRules = function(postVar,callback){
    this.topicurl = 'setIpQosRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 删除QoS数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} delRule0    删除第一条规则
 * @param {String} wifiIdx    无线信息：0：5G , 1：2.4G
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "delRule0":   0,
 *   "wifiIdx":  "0",
 *   "topicurl":"delIpQosRules"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.delIpQosRules = function(postVar,callback){
    this.topicurl = 'delIpQosRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 提交新增QoS数据
 * @Author   winnie       <winnie@carystudio.com>
 * @DateTime 2018-03-06
 * @param {String} addEffect     未知
 * @param {String} enable     状态。0：禁用，1：启用
 * @param {String} ipStart     起始IP
 * @param {String} ipEnd       结束IP
 * @param {String} upBandwidth   上传带宽
 * @param {String} downBandwidth    下载带宽
 * @param {String} index     列表ID号
 * @param {String} comment    描述
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "enable":   true,
 *   "addEffect":   0,
 *   "ipStart":"192.168.0.100",
 *   "ipEnd":"192.168.0.100",
 *   "upBandwidth":"100000",
 *   "downBandwidth":"100000",
 *   "index":"1",
 *   "comment":""
 * }
 * response:
 * {
 *
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
    uiPost.prototype.setIpQosLimit = function(postVar,callback){
        this.topicurl = 'setIpQosLimit';
        this.async = true; // true:异步，false:同步。
        return this.post(postVar,callback);
    };

/**
 * 获取QoS数据
 * @Author   winnie       <winnie@carystudio.com>
 * @DateTime 2018-03-06
 * @property {String} lanIp      局域网IP
 * @property {String} lanNetmask      局域网子网掩码
 * @property {String} enable     状态。0：禁用，1：启用
 * @property {String} index     列表ID号
 * @property {String} ipStart     起始IP地址
 * @property {String} ipEnd     结束IP地址
 * @property {String} upBandwidth     上传宽带
 * @property {String} dwBandwidth     下载宽带
 * @property {String} comment          描述
 * @property {String} delRuleName      第几条规则
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getIpQosLimit"
 * }
 * response:
 * [
 *  {
 *      "lanIp":"192.168.0.1",
 *      "lanNetmask":"255.255.255.0",
 *      "enable":"1"
 *  },
 *  {
 *      "idx":"1",
 *      "ipStart":"192.168.0.100",
 *      "ipEnd":"192.168.0.200",
 *      "upBandwidth":"100000",
 *      "dwBandwidth":"100000",
 *      "comment":"",
 *      "delRuleName":"delRule0"
 *  },
 *  {
 *      "idx":"2",
 *      "ipStart":"192.168.0.222",
 *      "ipEnd":"192.168.0.230",
 *      "upBandwidth":"11111",
 *      "dwBandwidth":"22222",
 *      "comment":"",
 *      "delRuleName":"delRule1"
 *  }
 * ]
 */
    uiPost.prototype.getIpQosLimit = function(postVar,callback){
        this.topicurl = 'getIpQosLimit';
        this.async = true; // true:异步，false:同步。
        if (globalConfig.debug) {
            this.url = '/data/getIpQosLimit.json';
        }
        return this.post(postVar,callback);
    };

/**
 * 删除QoS数据
 * @Author   winnie       <winnie@carystudio.com>
 * @DateTime 2018-03-06
 * @param {String} delRule0    删除第一条规则
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "delRule0":   0,
 *   "topicurl":"delIpQosLimit"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.delIpQosLimit = function(postVar,callback){
    this.topicurl = 'delIpQosLimit';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取时间规则配置
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-1-24
 * @property {String} itemList        当前规则列表
 * @property {String} firewallMode    防火墙类型 值选项：1、IPPORT，2、MAC
 * @property {String} ip              规则的IP地址  ，防火墙类型为 IPPORT 时候才有这个值。
 * @property {String} proto           协议类型 ， 防火墙类型为 IPPORT 时候才有这个值。
 * @property {String} portRange       端口范围 ， 防火墙类型为 IPPORT 时候才有这个值。
 * @property {String} week            防火墙调度规则日期 格式：'Tue Wed'(星期用英文缩写，以空格隔开)
 * @property {String} time            防火墙调度规则时间 格式：HH:mm-HH:mm（开始-结束）
 * @property {String} mac             规则的MAC地址 ，防火墙类型为Mac时候才有这个值。
 * @property {String} delRuleName     规则的索引 格式：'防火墙类型，索引'
 * @example
 * request:
 * {
 *   "topicurl":"getScheduleRules"
 * }
 * response:
 * [
 *   {
 *     "firewallMode": "IPPORT",
 *     "ip": "192.168.0.2",
 *     "proto": "TCP+UDP",
 *     "portRange": "3456-4456",
 *     "week": "Tue Wed",
 *     "time": "5:15-6:54",
 *     "delRuleName": "1,0"
 *   },
 *   {
 *     "firewallMode": "MAC",
 *     "mac": "00:E0:4C:07:04:0C",
 *     "week": "Tue",
 *     "time": "12:12-12:34",
 *     "delRuleName": "2,0"
 *   }
 * ]
 */
uiPost.prototype.getScheduleRules = function(postVar,callback){
    this.topicurl = 'getScheduleRules';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/time_rule.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置WiFi调度数据（增删）
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-1-24
 * @param {String} action             操作类型，add:添加，del：删除 （当操作为删除的时候week和time默认是全选,也就是demo2）
 * @param {String} list               操作规则列表数据
 * @param {String} list.week          周。格式:'1,1,1,1,1,1,1'，分别代表为'星期一,星期二,星期三,星期四,星期五,星期六,星期日,' 1代表选中，0代表未选择
 * @param {String} list.time          时间。 格式：HH:mm-HH:mm（开始-结束）
 * @param {String} list.delRuleName   操作规则的索引,格式：'防火墙类型，索引' (来源于getScheduleRules主题的delRuleName索引)
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error          错误
 * @property {String} lan_ip         局域网IP
 * @property {String} wtime          等待时间
 * @property {String} reserv         返回页面（参数未知）
 * @example
 * request:
 * {
 *   "action": "add",
 *   "list": [
 *     {
 *       "week": "1,1,0,0,0,0,0",
 *       "time": "05:01-05:01",
 *       "delRuleName": "2,0"
 *     }
 *   ],
 *   "topicurl": "setScheduleRules"
 * }
 * // demo2 del action   
 * {
 *   "action": "del",
 *   "list": [
 *     {
 *       "week": "1,1,1,1,1,1,1",
 *       "time": "00:00-23:59",
 *       "delRuleName": "2,0"
 *     }
 *   ],
 *   "topicurl": "setScheduleRules"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.1",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setScheduleRules = function(postVar,callback){
    this.topicurl = 'setScheduleRules';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取WAN设置信息
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-06
 * @property {String} wanMode  WAN连接类型 0：静态IP，1：DCHP ，3：PPPoE， 4：PPTP， 6：L2TP
 * @property {String} dnsMode  DNS模式
 * @property {String} pptpMode PPTP模式
 * @property {String} l2tpMode L2TP模式
 * @property {String} staticMtu    静态MTU
 * @property {String} dhcpMtu    DHCP MTU
 * @property {String} pppoeMtu    PPPoE MTU
 * @property {String} pptpMtu    PPTP MTU
 * @property {String} l2tpMtu    L2TP MTU
 * @property {String} pppoeSpecType    特殊策略
 * @property {String} pppoeTime    未知
 * @property {String} pptpTime    未知
 * @property {String} l2tpTime    未知
 * @property {String} pptpMppe    未知
 * @property {String} pptpMppc    未知
 * @property {String} l2tpDomainFlag    未知
 * @property {String} pptpDomainFlag    未知
 * @property {String} pppoeOpMode    未知
 * @property {String} pptpOpMode    未知
 * @property {String} l2tpOpMode    未知
 * @property {String} lanIp    局域网IP
 * @property {String} staticIp    wan静态 IP
 * @property {String} staticMask    wan静态 子网掩码
 * @property {String} staticGw    wan默认网关
 * @property {String} pptpIp    PPTP IP
 * @property {String} pptpMask    PPTP 子网掩码
 * @property {String} pptpGw     PPTP 默认网关
 * @property {String} pptpServerIp     PPTP 服务器IP
 * @property {String} l2tpIp     L2TP IP
 * @property {String} l2tpMask    L2TP 子网掩码
 * @property {String} l2tpGw    L2TP 默认网关
 * @property {String} l2tpServerIp    L2TP 服务器IP
 * @property {String} hostName    主机名
 * @property {String} pppoeUser    PPPoE 用户账号
 * @property {String} pppoePass    PPPoE 用户密码
 * @property {String} pptpUser       PPTP 用户账号
 * @property {String} pptpPass     PPTP 用户密码
 * @property {String} l2tpUser    L2TP 用户账号
 * @property {String} l2tpPass    L2TP 用户密码
 * @property {String} l2tpServerDomain    未知
 * @property {String} pptpServerDomain    未知
 * @property {String} wanConnStatus    广域网连接状态
 * @property {String} wanDefMac    默认MAC
 * @property {String} macCloneMac    克隆MAC
 * @property {String} macCloneEnabled    克隆MAC标志 ,0 缺省mac，1 克隆mac
 * @property {String} operationMode    系统模式 
 * @property {String} priDns    首选DNS
 * @property {String} secDns    备选DNS
 * @property {String} wanAutoDetectBt    未知
 * @property {String} pppoeSpecBt    未知
 * @property {String} pptpBt    未知
 * @property {String} l2tpBt    未知
 *
 * @example
 * request:
 * {
*   "topicurl":"getWanConfig",
* }
 * response:
 * {
 *  "wanMode":  3,
 *  "dnsMode":  0,
 *  "pptpMode": 0,
 *  "l2tpMode": 0,
 *  "staticMtu":    1500,
 *  "dhcpMtu":  1492,
 *  "pppoeMtu": 1492,
 *  "pptpMtu":  1460,
 *  "l2tpMtu":  1460,
 *  "pppoeSpecType":    0,
 *  "pppoeTime":    300,
 *  "pptpTime": 300,
 *  "l2tpTime": 300,
 *  "pptpMppe": 0,
 *  "pptpMppc": 0,
 *  "l2tpDomainFlag":   0,
 *  "pptpDomainFlag":   0,
 *  "pppoeOpMode":  0,
 *  "pptpOpMode":   0,
 *  "l2tpOpMode":   0,
 *  "lanIp":    "192.168.0.5",
 *  "staticIp": "192.168.1.5",
 *  "staticMask":   "255.255.255.0",
 *  "staticGw": "192.168.1.1",
 *  "pptpIp":   "172.1.1.2",
 *  "pptpMask": "255.255.255.0",
 *  "pptpGw":   "0.0.0.0",
 *  "pptpServerIp": "172.1.1.1",
 *  "l2tpIp":   "172.1.1.2",
 *  "l2tpMask": "255.255.255.0",
 *  "l2tpGw":   "0.0.0.0",
 *  "l2tpServerIp": "172.1.1.1",
 *  "hostName": "totolink",
 *  "pppoeUser":    "root",
 *  "pppoePass":    "root",
 *  "pptpUser": "",
 *  "pptpPass": "",
 *  "l2tpUser": "",
 *  "l2tpPass": "",
 *  "l2tpServerDomain": "",
 *  "pptpServerDomain": "",
 *  "wanConnStatus":    "connected",
 *  "wanDefMac":    "F4:28:54:00:40:E3",
 *  "macCloneMac":  "00:00:00:00:00:00",
 *  "macCloneEnabled":  0,
 *  "operationMode":    0,
 *  "priDns":   "192.168.1.1",
 *  "secDns":   "0.0.0.0",
 *  "wanAutoDetectBt":  0,
 *  "pppoeSpecBt":  0,
 *  "pptpBt":   1,
 *  "l2tpBt":   1
 * }
 */
uiPost.prototype.getWanConfig = function(postVar,callback){
    this.topicurl = 'getWanConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/wan.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置WAN配置信息
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-06
 * @param {String} wanMode      WAN连接类型 0：静态IP，1：DCHP ，3：PPPoE
 * @param {String} hostName     未知（只看到存在于DHCP）
 * @param {String} dhcpMtu      DHCP MTU
 * @param {String} dnsMode      DNS模式 0：自动，1：手动
 * @param {String} macCloneEnabled      克隆标志 0 缺省mac，1 克隆mac
 * @param {String} macCloneMac      克隆MAC，根据 克隆/缺省 选择MAC
 * @param {String} staticIp     静态IP
 * @param {String} staticMask       静态子网掩码
 * @param {String} staticGw     静态默认网关
 * @param {String} staticMtu        静态MTU
 * @param {String} priDns       首选DNS
 * @param {String} secDns       备选DNS
 * @param {String} staticMtu        静态MTU
 * @param {String} pppoeUser        PPPOE用户账号
 * @param {String} pppoePass        PPPOE用户密码
 * @param {String} pppoeSpecType        特殊策略
 * @param {String} pppoeMtu     PPPOE MTU
 * @param {String} pppoeOpMode      拨号模式
 * @param {String} pppoeTime        未知
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 *
 * @example
 * request:
 * {
 *     //DHCP模式
 *      "wanMode":"1",
 *      "hostName":"",
 *      "dhcpMtu":1492,
 *      "dnsMode":0,
 *      "macCloneEnabled":0,
 *      "macCloneMac":"00:00:00:00:00:00",
 *      "topicurl":"setWanConfig"
 *      //静态IP
 *      "wanMode":"0",
 *      "staticIp":"192.168.1.5",
 *      "staticMask":"255.255.255.0",
 *      "staticGw":"192.168.1.1",
 *      "staticMtu":1500,
 *      "dnsMode":"1",
 *      "priDns":"192.168.1.1",
 *      "secDns":"0.0.0.0",
 *      "macCloneEnabled":0,
 *      "macCloneMac":"00:00:00:00:00:00",
 *      "topicurl":"setWanConfig"
 *      //PPPoE
 *      "wanMode":3,
 *      "pppoeUser":"root",
 *      "pppoePass":"root",
 *      "pppoeSpecType":0,
 *      "pppoeMtu":1492,
 *      "pppoeOpMode":0,
 *      "pppoeTime":300,
 *      "dnsMode":0,
 *      "macCloneEnabled":0,
 *      "macCloneMac":"00:00:00:00:00:00",
 *      "topicurl":"setWanConfig"
 * }
 * response:
 * {
 *  "success":  "true",
 *  "error":    null,
 *  "lan_ip":   "192.168.0.1",
 *  "wtime":    "10",
 *  "reserv":   "reserv"
 * }
 */
uiPost.prototype.setWanConfig = function(postVar,callback){
    this.topicurl = 'setWanConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取局域网配置
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-04
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-23
 * @property {String} lanIp         局域网IP
 * @property {String} lanNetmask         子网掩码
 * @property {String} dhcpServer         DHCP状态：0：禁用，2：启用
 * @property {String} dhcpStart         DHCP起始IP地址
 * @property {String} dhcpEnd         DHCP结束IP地址
 * @property {String} dhcpLease     租约时间
 * @property {String} br0Ip         br0Ip
 * @property {String} br0Netmask         br0子网掩码
 * @property {String} operationMode         系统模式
 * @property {String} wanIp         广域网IP
 * @property {String} languageType         语言
 * @property {String} LanAutoDhcp   组网模式，值：1：动态，0：静态
 * @property {String} lan_gateway 默认网关
 * @property {String} wan_primary_dns  DNS
 *
 * @example
 * request:
 * {
 *   "topicurl":"getLanConfig"
 * }
 * response:
 * {
 *  "lanIp":    "192.168.0.5",
 *  "lanNetmask":   "255.255.255.0",
 *  "dhcpServer":   2,
 *  "dhcpStart":    "192.168.0.6",
 *  "dhcpEnd":  "192.168.0.254",
 *  "dhcpLease":    300,
 *  "br0Ip":    "192.168.0.5",
 *  "br0Netmask":   "255.255.255.0",
 *  "operationMode":    0,
 *  "wanIp":    "192.168.1.4",
 *  "languageType": "vn",
 *  "LanAutoDhcp":"1",
 *  "lan_gateway":"192.168.0.123",
 *  "wan_primary_dns":"114.114.114.144"
 * }
 */
uiPost.prototype.getLanConfig = function(postVar,callback){
    this.topicurl = 'getLanConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/lan_info.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置局域网配置
 * @Author   Jeff       <Jeff@carystudio.com>
 * @DateTime 2017-11-04
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-23
 * @param {String} lanIp    局域网IP
 * @param {String} lanNetmask    子网掩码
 * @param {String} dhcpServer    DHCP服务：1：开启 0：关闭
 * @param {String} dhcpStart    地址池的起始IP
 * @param {String} dhcpEnd    地址池的结束IP
 * @param {String} dhcpLease    租约时间
 * @param {String} LanAutoDhcp   组网模式，值：1：动态，0：静态
 * @param {String} lanNetgateway   默认网关
 * @param {String} priDns     首选DNS
 * @property {String} 无返回值
 * @example
 * request:
 * {
 *   "lanIp":"192.168.0.5",
 *   "lanNetmask":"255.255.255.0",
 *   "dhcpServer":0,
 *   "dhcpStart":"192.168.0.6",
 *   "dhcpEnd":"192.168.0.254",
 *   "dhcpLease":300,
 *   "LanAutoDhcp":"1",
 *   "lanNetgateway":"192.168.0.200",
 *   "priDns":"8.8.8.8",
 *   "topicurl":"setLanConfig"
 * }
 * response:
 * {
 *       无（倒计时显示）
 * }
 */
uiPost.prototype.setLanConfig = function(postVar,callback){
    this.topicurl = 'setLanConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取静态DHCP设置数据
 * modify by york 2018-1-16
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @property {String} enable    状态。0：禁用，1：1启用
 * @property {String} lanIp   lan口的ip地址
 * @property {String} lanNetmask   lan口的子网掩码
 * @property {String} idx       列表ID号
 * @property {String} ip        IP地址 
 * @property {String} mac        MAC地址 
 * @property {String} comment       描述 
 * @property {String} delRuleName      第几条规则
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getStaticDhcpConfig"
 * }
 * response:
 *   [
 *      {
 *          "enable":"1",
 *          "lanIp" : "192.168.0.2",
 *          "lanNetmask" : "255.255.255.0"
 *      },
 *      {
 *          "idx":"1",
 *          "ip":"192.168.0.123",
 *          "mac":"F4:28:54:00:37:66",
 *          "comment":"",
 *          "delRuleName":"delRule0"
 *      },
 *      {
 *          "idx":"2",
 *          "ip":"192.168.0.200",
 *          "mac":"3C:97:0E:61:35:B9",
 *          "comment":"",
 *          "delRuleName":"delRule1"
 *      }
 *  ]
 *
 */
uiPost.prototype.getStaticDhcpConfig = function(postVar,callback){
    this.topicurl = 'getStaticDhcpConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/static_dhcp.json";
    }
    return this.post(postVar,callback);
};

/**
 * 设置静态DHCP设置数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} addEffect      添加的状态
 * @param {String} enable    状态。0：禁用，1：1启用
 * @param {String} ipAddress     IP地址 
 * @param {String} macAddress    MAC地址  
 * @param {String} delRuleName    新增的第几条规则
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @example
 * request:
 * {
 *   "addEffect":   0,
 *   "enable":  1,
 *   "ipAddress":   "192.168.0.123",
 *   "macAddress":  F4:28:54:00:37:22,
 *   "delRuleName":"delRule0",
 *   "topicurl":"setStaticDhcpConfig"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setStaticDhcpConfig = function(postVar,callback){
    this.topicurl = 'setStaticDhcpConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 删除静态DHCP设置数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2017-11-02
 * @param {String} delRule0    删除第一条规则
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知） 
 * @example
 * request:
 * {
 *   "delRule0":    0,
 *   "topicurl":"delStaticDhcpConfig"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.delStaticDhcpConfig = function(postVar,callback){
    this.topicurl = 'delStaticDhcpConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
}; 

/**
 * 获取DHCP客户端列表
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2017-11-06
 * @property {String} enable   原来的意思是是否开启？还是什么？新版本中建议去掉
 * 
 * @property {String} obj       一个对象带表一条数据
 * @property {String} obj.idx   记录条目素引值
 * @property {String} obj.ip    IP地址
 * @property {String} obj.mac   MAC地址
 * @return   {null}        
 * @example
 * request:
 * {
 *    topicurl:"getDhcpCliList"
 *    
 * }
 * response:
 * [
 *  {
 *    "enable": "1"
 *  },
 *  {
 *    "idx": "0",
 *    "ip": "192.168.0.3",
 *    "mac": "88:51:fb:4a:dc:2c"
 *  },
 *  {
 *    "idx": "0",
 *    "ip": "192.168.1.3",
 *    "mac": "88:51:fb:5a:dc:3c"
 *  },
 *  {
 *    "idx": "0",
 *    "ip": "192.168.1.34",
 *    "mac": "88:51:fb:1a:dc:3c"
 *  }
 * ]
 */
uiPost.prototype.getDhcpCliList = function(postVar,callback){
    this.topicurl = 'getDhcpCliList';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/dhcpclient.json';
    }
    return this.post(postVar,callback);
};

/**
 * 获取opmode信息
 * add OpModeSupport by Yexk@2018-1-22
 * @Author   karen       <karen@carystudio.com>
 * @Author   Yexk        <yexk@carystudio.com>
 * @DateTime 2017-11-04
 *
 * @property {String} operationMode          上网模式。0：bridge，1：repeater，2：wisp，3：gateway，4：mesh，5：client
 * @property {String} wispInface    wisp内部接口。0:5G，1:2.4G
 * @property {String} wifiOff      2.4g客户端。0：开启，1：关闭
 * @property {String} wifiOff5g   5g客户端。0：开启，1：关闭
 * @property {String} wifiDualband     支持双频。0：不支持，1：支持
 * @property {String} hardModel   硬件版本
 * @property {String} OpModeSupport   支持的系统模式。GW：gateway;BR：bridge;RPT：repeater;WISP：WISP;CLI：client:MESH：mesh;
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getOpMode"
 * }
 * response:
 *{
 *  "operationMode":"1",
 *  "wispInface":"0",
 *  "wifiOff":"0",
 *  "wifiOff5g":"0",
 *  "wifiDualband":"1",
 *  "OpModeSupport":"GW;BR;RPT;WISP",
 *  "hardModel":""
 *}
 */
uiPost.prototype.getOpMode = function(postVar,callback){
    this.topicurl = 'getOpMode';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/opmode.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置opmode信息
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2017-11-04
 * @param {String} operationMode          上网模式。0：bridge，1：repeater，2：wisp，3：gateway，4：mesh，5：client
 * @param {String} wispInface   wisp内部接口。0:5G，1:2.4G
 * @property {String} success      响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip       局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv       返回页面（参数未知）
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"setOpMode"
 *    "operationMode":"0",
 *    "wispInface":""
 * }
 * response:
 *{
 *   "success":true,
 *   "error":null,
 *   "lan_ip":"192.168.0.1",
 *   "wtime":"0",
 *   "reserv":"reserv"
 *}
 */
uiPost.prototype.setOpMode = function(postVar,callback){
    this.topicurl = 'setOpMode';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取静态DHCP设置、IP端口过滤、Mac过滤、端口转发的MAC列表
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2017-11-07
 * @return   {null}        
 * @property {String} enable   原来的意思是是否开启？还是什么？新版本中建议去掉
 * 
 * @property {String} obj       一个对象带表一条数据
 * @property {String} obj.idx   信道的标识 0 2.4g  1 5g ？ 
 * @property {String} obj.ip    IP地址
 * @property {String} obj.mac   MAC地址
 * @example
 * request:
 * {
 *    topicurl:"getArpTable"
 * }
 * response:
 * [
 *  {
 *    "enable": "1"
 *  },
 *  {
 *    "idx": "0",
 *    "ip": "192.168.0.3",
 *    "mac": "88:51:fb:4a:dc:2c"
 *  },
 *  {
 *    "idx": "0",
 *    "ip": "192.168.1.3",
 *    "mac": "88:51:fb:5a:dc:3c"
 *  },
 *  {
 *    "idx": "0",
 *    "ip": "192.168.1.34",
 *    "mac": "88:51:fb:1a:dc:3c"
 *  }
 * ]
 */
uiPost.prototype.getArpTable = function(postVar,callback){
    this.topicurl = 'getArpTable';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/dhcpclient.json";
    }
    return this.post(postVar,callback);
};

/**
 * 通过ip获得克隆mac
 * @Author   amy       <amy@carystudio.com>
 * @DateTime 2017-11-06
 * @param {String} stationIp     station ip
 * @property {String} stationMac       station mac
 *
 * @example
 * request:
 * {
 *     "stationIp":"192.168.15.200",
 * }
 * response:
 * {
 *  "stationMac":   "c8:1f:66:17:ae:b7",
 * }
 */
uiPost.prototype.getStationMacByIp = function(postVar,callback){
    this.topicurl = 'getStationMacByIp';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/getStationMacByIp.json';
    }
    return this.post(postVar,callback);
};

/**
 * <b style="color:red">[new]</b> 页面初始化数据
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2017-11-08
 * @property {String} model                  <b>必须</b>，显示当前型号。
 * @property {String} defaultLang            <b>必须</b>，设置当前语言。默认'en'. 可选值'cn':'中文','en':'English'
 * @property {String} showLanguage           支持语言类型，值：cn,en,ru,vn。
 * @property {Boolean}  showWechatQR         是否显示微信管理（二维码），默认true（显示）。
 * @property {Boolean}  showHelp             是否显示帮助，默认true（显示）。
 * @property {String}   helpUrl              帮助完整的链接（带'http://' or 'https://'）。
 * @property {Boolean}  hasMobile            是否显示底部pc端和移动端UI切换，默认true（显示）。
 * @property {String}   cs                   商家名称(logo)
 * @property {String}   webTitle             web标题名称
 * @property {String}   copyRight            版权
 * @property {String}   show4gFlag           判断页面显示外网设置还是4G设置，值：1：显示4G设置，0：显示外网设置
 * @property {String}   showAutoLang         是否支持语言自动检测，值：1：支持，0：不支持
 * @property {String}   langAutoFlag         当前语言选择是否是自动检测，值：1：自动检测，0：默认语言
 * @property {String}   custom               支持定制的功能 
 * @property {String}   WechatQrSupport      是否支持微信，值：1：支持，0：不支持
 * @property {String}   IptvSupport          是否支持IPTV，值：1：支持，0：不支持 
 * @property {String}   Ipv6Support          是否支持IPV6，值：1：支持，0：不支持 
 * @property {String}   PppoeSpSupport       是否支持pppoe特殊策略，值：1：支持，0：不支持 
 * @property {String}   PppoeSpecRussia      是否支持pppoe俄罗斯，值：1：支持，0：不支持 
 * @property {String}   DdnsSupport          是否支持DDNS，值：1：支持，0：不支持 
 * @property {String}   PptpServerSupport    是否支持pptp服务器，值：1：支持，0：不支持
 * @property {String}   L2tpServerSupport    是否支持l2tp服务器，值：1：支持，0：不支持
 * @property {String}   PptpClientSupport    是否支持pptp客户端，值：1：支持，0：不支持
 * @property {String}   L2tpClientSupport    是否支持l2tp客户端，值：1：支持，0：不支持
 * @property {String}   SsrServerSupport     是否支持ssr服务器，值：1：支持，0：不支持
 * @property {String}   WANNetType           支持的wan设置，值："dhcp,static,pppoe,l2tp,pptp" 支持dhcp,static,pppoe,l2tp,pptp的连接方式 
 * @property {String}   showLinkInfo         是否显示链接信息，默认true（显示）。
 * 
 * @return   {Object}                         
 * @example
 * request:
 * {
 *   "topicurl":"getInitConfig",
 * }
 * // 如果属性不需要改变其默认值的可以不传递
 * response:
 * {
 *     "model":  "A7000R",
 *     "defaultLang":  "cn",
 *     "currentMode":  "GW",
 *     "showLanguage": "cn,en,ru,vn",
 *     "showHelp": true,
 *     "cs": "TOTOLINK",
 *     "webTitle": "TOTOLINK",
 *     "copyRight":  "Copyright &copy; [date] TOTOLINK Ltd., All Rights Reserved",
 *     "helpUrl":  "http://www.carystudio.com",
 *     "hasMobile":  false,
 *     "show4gFlag": false,
 *     "showAutoLang":"1",
 *     "langAutoFlag":"1",
 *     "custom": {
 *         "WechatQrSupport":"1",
 *         "IptvSupport":  "0",
 *         "Ipv6Support":  "1",
 *         "PppoeSpSupport": "",
 *         "PppoeSpecRussia":"",
 *         "DdnsSupport":"1",
 *         "PptpServerSupport":"0",
 *         "L2tpServerSupport":"1",
 *         "PptpClientSupport":"0",
 *         "L2tpClientSupport":"1",
 *         "SsrServerSupport":"1",
 *         "WanTypeList": "dhcp,static,pppoe,l2tp,pptp"
 *     },
 *     "showLinkInfo":true
 * }
 */
uiPost.prototype.getInitConfig = function(postVar,callback){
    this.topicurl = 'getInitConfig';
    this.async = false; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/init.json';
    }
    return this.post(postVar,callback);
};

/**
 * 通过sql语句获取数据
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-01-18
 * @param {String} one           1 集中管理 -> 内网扫描操作 （发送数据）
 * @param {Array}  one.SqlCmd                sql语句
 * @property {String} one        1 集中管理 -> 内网扫描操作 (响应数据)
 * @property {String} one.id             ID
 * @property {String} one.apMac              AP的MAC地址，不允许AP有相同MAC地址存储
 * @property {String} one.status             1：正常，2：升级中
 * @property {String} one.onlieStatus        在线状态  1 在线。0 离线
 * @property {String} one.ledCtlStatus       led灯状态 2，开启 1 结束        
 * @property {String} one.apType             0:不支持无线；1：2.4G频，2：5G单频，3：2.4+5G
 * @property {String} one.csid               内部型号, 即配置中的ProductName，唯一，内部使用
 * @property {String} one.fmVersion          设备软件版本  
 * @property {String} one.svn                 设备软件当前svn
 * @property {String} one.softModel           设备外部型号   
 * @property {String} one.schdReboot          定时重启参数   
 * @property {String} one.ipaddr             设备IP地址
 * @property {String} one.mask               设备子网掩码
 * @property {String} one.gateway            设备网关
 * @property {String} one.dns1               设备第一DNS
 * @property {String} one.dns2               设备第二DNS
 * @property {String} one.ssid2g             2.4G SSID
 * @property {String} one.wlanKey2g           2.4G 密码   
 * @property {String} one.channel2g           2.4G 信道   
 * @property {String} one.staNum2g           2.4G 客户端总数   
 * @property {String} one.txPower2g          2.4G TxPower    
 * @property {String} one.ssid5g             5G SSID
 * @property {String} one.wlanKey5g           5G 密码   
 * @property {String} one.channel5g          5G 信道    
 * @property {String} one.staNum5g           5G 客户端总数    
 * @property {String} one.txPower5g           5G txPower   
 * @property {String} one.protocol            协议版本，当前为24   
 * @property {String} one.sameNetwork         设备与AC是否处于同一网段，0为不同网段，1为相同网段。   
 * @property {String} one.password            AP管理密码   
 * @property {String} one.name                AP名称
 * @property {String} one.fwSvn              固件的SVN号
 * @property {String} one.fwUrl              固件路径
 * @property {String} one.fwMd5              固件的MD5值
 *
 * @return   {Object}                         
 * @example
 * request:
 * // (1)
 * {
 *   "SqlCmd": "select f.id,f.apMac,f.status,f.onlieStatus,f.ledCtlStatus,f.apType,f.csid,f.fmVersion,f.svn,f.softModel,f.schdReboot,f.ipaddr,f.mask,f.gateway,f.dns1,f.dns2,f.ssid2g,f.wlanKey2g,f.channel2g,f.staNum2g,f.txPower2g,f.ssid5g,f.wlanKey5g,f.channel5g,f.staNum5g,f.txPower5g,f.protocol,f.sameNetwork,o.password,o.name,w.fwSvn,w.fwUrl,w.fwMd5  from (BASICINFO f LEFT JOIN OTHERINFO o on f.apMac:o.mac ) LEFT JOIN FWINFO w on f.csid : w.fwCsid",
 *   "topicurl": "testSQLite"
 * }
 * response:
 * // (1)
 * [ {
 *   "id": "1",
 *   "apMac": "F4:28:53:00:32:C8",
 *   "status": "",
 *   "onlieStatus": "1",
 *   "ledCtlStatus": "0",
 *   "apType": "1",
 *   "csid": "C8B810A-K7AP202",
 *   "fmVersion": "V6.2c",
 *   "svn": "753",
 *   "softModel": "AP202",
 *   "schdReboot": "0",
 *   "ipaddr": "192.168.1.170",
 *   "mask": "255.255.255.0",
 *   "gateway": "192.168.1.1",
 *   "dns1": "192.168.1.1",
 *   "dns2": "192.168.1.1",
 *   "ssid2g": "@KuaiQi_32C8",
 *   "wlanKey2g": "",
 *   "channel2g": "0",
 *   "staNum2g": "0",
 *   "txPower2g": "100",
 *   "ssid5g": "",
 *   "wlanKey5g": "",
 *   "channel5g": "",
 *   "staNum5g": "",
 *   "txPower5g": "",
 *   "protocol": "24",
 *   "sameNetwork": "1",
 *   "password": "admin",
 *   "name": "",
 *   "fwSvn": "",
 *   "fwUrl": "",
 *   "fwMd5": ""
 * },
 * { ... } ]
 */
uiPost.prototype.testSQLite = function(postVar,callback){
    this.topicurl = 'testSQLite';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        if (postVar.central){
            this.url = '/data/central.json';
        }
    }
    return this.post(postVar,callback);
};

/**
 * 集中管理
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-01-18
 * @param {String} one   1（集中管理：QuickSetting）
 * @param {String} one.Action                   操作名称 值：QuickSetting
 * @param {Array}  one.APMACLIST                选中的mac地址组
 * @param {Array}  one.APIPLIST                 选中的ip地址组
 * @param {Array}  one.NETLIST                  网段组 ，0为不同网段，1为相同网段。
 * @param {Object} one.postData                 
 * @param {String} one.postData.AuthPassword    管理员密码
 * @param {String} one.postData.ModifyPassword  修改密码 如果修改密码为空将不会传递次参数
 * @param {String} one.postData.Ipaddr          ip地址
 * @param {String} one.postData.Gateway         网关
 * @param {String} one.postData.Dns1            DNS
 * @param {String} one.postData.Ssid2g          2.4G SSID
 * @param {String} one.postData.WlanKey2g       2.4G ssid密码
 * @param {String} one.postData.Channel2g       2.4G 信道
 * @param {String} one.postData.TxPower2g       2.4G 发射功率
 * @param {String} one.postData.Ssid5g          5G SSID
 * @param {String} one.postData.WlanKey5g       5G ssid密码
 * @param {String} one.postData.Channel5g       5G 信道
 * @param {String} one.postData.TxPower5g       5G 发射功率
 * @param {String} one.postData.APName          AP名称
 * 
 * @param {String} two     2（灯控制：setledState）
 * @param {String} two.Action                   操作名称 值：setledState
 * @param {String} two.Ledstate                 值选项：2 开启， 1 结束
 * @param {String} two.AuthPassword             管理员密码
 * @param {Array}  two.APMACLIST                选中的mac地址组
 * @param {Array}  two.APIPLIST                 选中的ip地址组
 * 
 * @param {String} three   3（设备重启：RebootSystem）
 * @param {String} three.Action                   操作名称 值：RebootSystem
 * @param {String} three.AuthPassword             管理员密码
 * @param {Array}  three.APMACLIST                选中的mac地址组
 * @param {Array}  three.APIPLIST                 选中的ip地址组
 * 
 * @param {String} four   4（定时重启：QuickSetting）
 * @param {String} four.Action                   操作名称 值：QuickSetting
 * @param {Array}  four.APMACLIST                选中的mac地址组
 * @param {Array}  four.APIPLIST                 选中的ip地址组
 * @param {Array}  four.NETLIST                  网段组 ，0为不同网段，1为相同网段。
 * @param {Object} four.postData
 * @param {String} four.postData.AuthPassword    管理员密码
 * @param {String} four.postData.SchdReboot      重启规则 ： -1：默认，0：禁用，3 , 4 ,5 , 6
 * 
 * @param {String} five   5（恢复出厂：QuickSetting）
 * @param {String} five.Action                   操作名称 值：LoadDefSettings
 * @param {String} five.AuthPassword             管理员密码
 * @param {Array}  five.APMACLIST                选中的mac地址组
 * @param {Array}  five.APIPLIST                 选中的ip地址组
 * 
 * @param {String} six   6（固件升级：QuickSetting）
 * @param {String} six.Action                   操作名称 值：RemoteUpgradeFW
 * @param {String} six.AuthPassword             管理员密码
 * @param {String} six.Port                     端口 值:80
 * @param {String} six.ProxyEnabled             域 值：0
 * @param {String} six.AuthPassword             管理员密码
 * @param {Array}  six.APMACLIST                选中的mac地址组
 * @param {Array}  six.APIPLIST                 选中的ip地址组
 * @param {Array}  six.URLLIST                  选中的URL组
 * @param {Array}  six.MD5LIST                  选中的MD5组
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return {Object}
 * @example
 * request:
 * // (1)
 * {
 *   "APIPLIST": ["192.168.1.170"],
 *   "APMACLIST": ["F4:28:53:00:32:C8"],
 *   "Action": "QuickSetting",
 *   "NETLIST": ["1"],
 *   "postData": {
 *     "APName": "test",
 *     "Action": "QuickSetting",
 *     "AuthPassword": "admin",
 *     "Channel2g": "0",
 *     "Channel5g": "",
 *     "Dns1": "192.168.1.1",
 *     "Gateway": "192.168.1.1",
 *     "Ipaddr": "192.168.1.170",
 *     "ModifyPassword": "password",
 *     "Ssid2g": "@KuaiQi_32C8",
 *     "Ssid5g": "",
 *     "TxPower2g": "100",
 *     "TxPower5g": "",
 *     "WlanKey2g": "121",
 *     "WlanKey5g": ""
 *   },
 *   "topicurl": "QuickSetting"
 * }
 * // (2)
 * {
 *   "topicurl": "QuickSetting",
 *   "AuthPassword": "admin",
 *   "Ledstate": 2,
 *   "Action": "setledState",
 *   "APMACLIST": ["F4:28:53:00:32:C8"],
 *   "APIPLIST": [ "192.168.1.170" ]
 * }
 * // (3)
 * {
 *   "topicurl": "QuickSetting",
 *   "AuthPassword": "admin",
 *   "Action": "RebootSystem",
 *   "APMACLIST": [ "F4:28:53:00:32:C8" ],
 *   "APIPLIST": [ "192.168.1.170" ]
 * }
 * // (4)
 * {
 *   "topicurl": "QuickSetting",
 *   "Action": "QuickSetting",
 *   "APMACLIST": ["F4:28:53:00:32:C8"],
 *   "APIPLIST": ["192.168.1.170"],
 *   "NETLIST": ["1"],
 *   "postData": {
 *     "Action": "QuickSetting",
 *     "AuthPassword": "admin",
 *     "SchdReboot": "4"
 *   }
 * }
 * // (5)
 * {
 *   "topicurl": "QuickSetting",
 *   "AuthPassword": "admin",
 *   "Action": "LoadDefSettings",
 *   "APMACLIST": [ "F4:28:53:00:32:C8" ],
 *   "APIPLIST": [ "192.168.1.170" ]
 * }
 * // (6)
 * {
 *   "topicurl": "QuickSetting",
 *   "AuthPassword": "admin",
 *   "Action": "RemoteUpgradeFW",
 *   "Port": "80",
 *   "ProxyEnabled": "0",
 *   "APMACLIST": ["F4:28:53:00:32:C8"],
 *   "APIPLIST": ["192.168.1.170"],
 *   "URLLIST": [""],
 *   "MD5LIST": [""]
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.QuickSetting = function(postVar,callback){
    this.topicurl = 'QuickSetting';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 待定
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-01-18
 * @property {String} usbState usb状态 ，0：没有插入USB，1：插入USB 
 * @return   {Object}                    
 * @example
 * request:
 * {
 *   "topicurl":"getUsbState",
 * }
 * response:
 * {
 *  "usbState": "1"
 * }
 */
uiPost.prototype.getUsbState = function(postVar,callback){
    this.topicurl = 'getUsbState';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getUsbState.json";
    }
    return this.post(postVar,callback);
};

/**
 * 获取DHCP列表
 * @Author   karen       <karen@carystudio.com>
 * @DateTime 2018-1-19
 * @property {Boolean} ip       IP地址
 * @property {Boolean} mac      MAC地址
 * @return   {Object}                         
 * @example
 * request:
 * {
 *   "topicurl":"getDhcpSliList",
 * }
 * 
 * response:
 * {
 *      "ip":"192.168.1.1",
 *      "mac":"11:22:33:44:55:66"
 * }
 */
uiPost.prototype.getDhcpSliList = function(postVar,callback){
    this.topicurl = 'getDhcpSliList';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getDhcpSliList.json";
    }
    return this.post(postVar,callback);
};

/**
 * 实时信息 -> 获取外网信息
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-01-19
 * @property {String}  type            上网类型，1 => DHCP ,2 => static , 3 => PPPoE    
 * @property {String}  ip              ip地址 
 * @property {String}  gateway         网关地址
 * @property {String}  timestamp       时间戳。（单位毫秒）
 * @property {String}  up              上行数据 (KB/s) 
 * @property {String}  down            下行数据 (KB/s)
 * @return   {Object}
 * @example
 * // request:
 * {
 *     "topicurl":"setting/getNetInfo"
 * }
 * // response:
 * {
 *     "type":"1",
 *     "ip":"192.168.0.253",
 *     "gateway":"192.168.0.1",
 *     "timestamp":"1512959106",
 *     "up":"13",
 *     "down":"156" 
 * }
 */
uiPost.prototype.getNetInfo = function(postVar,callback){
    this.topicurl = 'getNetInfo';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getNetInfo.json";
    }else{
        this.url = globalConfig.cgiUrl;
    }
    return this.post(postVar,callback);
};

/**
 * 实时信息获取链接数
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-01-19
 * @property {String} connections                       连接数
 * @property {String} connections.protocol              协议
 * @property {String} connections.src                   源IP地址
 * @property {String} connections.count_download        累计下载 (单位：B)
 * @property {String} connections.count_upload          累计上传 (单位：B)
 * @property {String} connections.download              下载速度 (单位：KB/s)
 * @property {String} connections.upload                上传速度 (单位：KB/s)
 * @property {String} statistics    tcp和udp数据
 * @property {String} statistics.tcp    tcp数据
 * @property {String} statistics.udp    udp数据
 * @return   {Object}
 * @example
 * // request:
 * {
 *     "topicurl":"setting/getLinksData"
 * }
 * // response:
 * {
 *     connections:[
 *         {
 *             protocol : "TCP",
 *             src : "192.168.10.18",
 *             count_download:"11", 
 *             count_upload:"10", 
 *             download:"123", 
 *             upload:"150"
 *         },{
 *             protocol : "TCP",
 *             src : "192.168.10.18",
 *             count_download:"11", 
 *             count_upload:"10", 
 *             download:"123", 
 *             upload:"150"
 *         },
 *         {  ...  },
 *     ],
 *     statistics:
 *     {
 *         "tcp":"45",
 *         "udp":"46" 
 *     }
 * }
 */
uiPost.prototype.getLinksData = function(postVar,callback){
    this.topicurl = 'getLinksData';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getLinksData.json";
    }else{
        this.url = '/cgi-bin/getdata.cgi';
    }
    return this.post(postVar,callback);
};

/**
 * 点击获取每个IP的连接数
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-03-13
 * @param    {String}  src              源IP地址
 * @property {String} dport             目标IP地址端口
 * @property {String} dst               目标IP地址
 * @property {String} net               网口
 * @property {String} protocol          协议
 * @property {String} sport             源IP地址端口
 * @property {String} src               源IP地址
 * @property {String} time              时间,格式：YYYY-mm-dd HH:ii:ss
 * @return   {Object}
 * @example
 * // request:
 * {
 *     "src":"192.168.10.18"
 *     "topicurl":"setting/getLinksIpData"
 * }
 * // response:
 * [
 *   {
 *     "net": "WAN1",
 *     "dport": "80",
 *     "dst": "192.168.0.253",
 *     "protocol": "tcp",
 *     "sport": "3210",
 *     "src": "192.168.0.2",
 *     "time": "2017-12-19 15:50:21"
 *   },
 *   {
 *     "net": "WAN1",
 *     "dport": "80",
 *     "dst": "192.168.0.253",
 *     "protocol": "tcp",
 *     "sport": "3210",
 *     "src": "192.168.0.2",
 *     "time": "2017-12-19 15:50:21"
 *   },
 *   {  ...  }
 * ]
 */
uiPost.prototype.getLinksIpData = function(postVar,callback){
    this.topicurl = 'getLinksIpData';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getLinksIpData.json";
    }else{
        this.url = '/cgi-bin/getdata.cgi';
    }
    return this.post(postVar,callback);
};



/**
 * 获取登录配置
 * 此主题暂未启用(废弃)。By <yexk@carystudio.com> @2018-2-3
 * @Author   amy       <amy@carystudio.com>
 * @DateTime 2018-1-19
 * @property {String} loginIp       登录IP地址
 * @property {String} loginUser     登录的用户名
 * @property {String} loginPass     登录的密码
 * @property {String} loginFlag     登录标志，0是当前登录的用户名和密码。
 *
 * @example
 * request:
 * {
 *     topicurl:"getLoginCfg"
 * }
 * response:
 * {
 *  "loginIp":      "192.168.0.1",
 *  "loginUser":    "admin",
 *  "loginPass":    "admin",
 *  "loginFlag":     0
 * }
 */
uiPost.prototype.getLoginCfg = function(postVar,callback){
    this.topicurl = 'getLoginCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/getLoginCfg.json';
    }
    return this.post(postVar,callback);
};

/**
 * 集中管理的扫描 
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-01-20
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"acScanAp"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.acScanAp = function(postVar,callback){
    this.topicurl = 'acScanAp';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取微信管理的链接
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-01-20
 * @property {String} static     1 - 网络接入正常，crp服务运行正常，url为生成二维码的链接 0 - crp服务异常
 * @property {String} url        微信URL。前缀：http://www.carystudio.com/router/wechatmanage/routerurl?url=
  后缀：设备远程访问地址http://f42854000666.d.carystudio.com:9080/的urlencode
  其中f42854000666为设备bridge iface的MAC地址去掉':'号的小写，做为设备的ID
 * @return   {Object}
 * @example
 * request:
 * {
 *     topicurl:"getCrpcConfig"
 * }
 * response:
 * {
 *     "status":   "1",
 *     "url":  "http://www.carystudio.com/router/wechatmanage/routerurl?url=http%3a%2f%2ff42854000666.d.carystudio.com%3a9080%2f"
 * }
 * 
 */
uiPost.prototype.getCrpcConfig = function(postVar,callback){
    this.topicurl = 'getCrpcConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/getCrpcConfig.json';
    }
    return this.post(postVar,callback);
};

/**
 * 保存本地时间
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-01-20
 * @param {String} host_time  当前的时间，格式：yyyy-MM-dd HH:mm:ss
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"NTPSyncWithHost"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.NTPSyncWithHost = function(postVar,callback){
    this.topicurl = 'NTPSyncWithHost';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取SS-Server配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-01-26
 * @property {String} enable    服务器配置的开关，0:关，1：开 
 * @property {String} server    服务器本机IP地址，一般为0.0.0.0
 * @property {String} server_port    服务器监听端口号，小于6535
 * @property {String} timeout        超时时间(秒)，默认60
 * @property {String} password       服务器设置的密码
 * @property {String} encrypt_method 加密方式，aes-128-cfb,aes-128-ctr,aes-128-gcm,aes-192-cfb, aes-192-ctr,aes-192-gcm,aes-256-cfb,aes-256-ctr,aes-256-gcm,bf-cfb,camellia-128-cfb,camellia-192-cfb,camellia-256-cfb,chacha20,chacha20-ietf,chacha20-ietf-poly1305,xchacha20-ietf-poly1305,rc4-md5,salsa20
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"getssServer"
 * }
 * response:
 * {
 *   "enable":   true,
 *   "server":   "192.168.0.5",
 *   "server_port":  "65535",
 *   "timeout":  "60",
 *   "password":   "12345678",
 *   "encrypt_method":  "rc4-md5"
 * }
 */
uiPost.prototype.getssServer = function(postVar,callback){
    this.topicurl = 'getssServer';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/getssServer.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置SS-Server配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-01-26
 * @param {String} enable    服务器配置的开关，0:关，1：开 
 * @param {String} server    服务器本机IP地址，一般为0.0.0.0
 * @param {String} server_port    服务器监听端口号，小于6535
 * @param {String} timeout        超时时间(秒)，默认60 
 * @param {String} password       服务器设置的密码
 * @param {String} encrypt_method 加密方式，aes-128-cfb,aes-128-ctr,aes-128-gcm,aes-192-cfb, aes-192-ctr,aes-192-gcm,aes-256-cfb,aes-256-ctr,aes-256-gcm,bf-cfb,camellia-128-cfb,camellia-192-cfb,camellia-256-cfb,chacha20,chacha20-ietf,chacha20-ietf-poly1305,xchacha20-ietf-poly1305,rc4-md5,salsa20
 * 
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"setssServer",
 *     "enable":   true,
 *     "server":   "192.168.0.5",
 *     "server_port":  "65535",
 *     "timeout":  "60",
 *     "password":   "12345678",
 *     "encrypt_method":  "rc4-md5"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setssServer = function(postVar,callback){
    this.topicurl = 'setssServer';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 设置语言
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-01-27
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-05-03  Add AutoLanguage
 * @param    {String}   lang               设置语言。值有：'cn'：中文，'en': 英文
 * @param    {String}   langFlag           自动检测。值：0：自动，1：手动
 * 
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"setssServer",
 *     "lang":   'cn',
 *     "langFlag":"0"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setLanguageCfg = function(postVar,callback){
    this.topicurl = 'setLanguageCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * uboot升级   
 * @Author   amy       <amy@carystudio.com>
 * @DateTime 2018-1-30
 * @property {String} LanIp       IP地址
 * @example
 * request:
 * {
 *  "topicurl" : "UbootUpgrade",
 *
 * }
 * response:
 * {
 *    "LanIp":"192.168.0.100"
 * }
 */
uiPost.prototype.UbootUpgrade = function(postVar,callback){
    this.topicurl = 'UbootUpgrade';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/UbootUpgrade.json";
    }
    return this.post(postVar,callback);
};

/**
 * 获取升级uboot信息    
 * @Author   amy       <amy@carystudio.com>
 * @DateTime 2018-1-30
 * @param {String} FileName            文件名 
 * @param {String} ContentLength        内容大小
 * @property {String} upgradeStatus     上传状态。0：上传失败，1：上传成功
 * @property {String} upgradeERR        错误信息
 * @example
 * request:
 * {
 *  "topicurl" : "setUpgradeUboot",
 *  "FileName":"",
 *  "ContentLength":""
 * }
 * response:
 * {
 *  "upgradeStatus":"1",
 *  "upgradeERR":"MM_FwFileInvalid"
 * }
 */
uiPost.prototype.setUpgradeUboot = function(postVar,callback){
    this.topicurl = 'setUpgradeUboot';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 开启Telnet
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-02-01
 * @param {String} telnet_enabled         开启或者关闭状态，1开启，0关闭
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"setTelnetCfg",
 *     "telnet_enabled":   '1',
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setTelnetCfg = function(postVar,callback){
    this.topicurl = 'setTelnetCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取telnet状态
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-02-01
 * @property {String} telnet_enabled         开启或者关闭状态，1开启，0关闭
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"getTelnetCfg"
 * }
 * response:
 * {
 *   "telnet_enabled": '1'
 * }
 */
uiPost.prototype.getTelnetCfg = function(postVar,callback){
    this.topicurl = 'getTelnetCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取智能流控数据
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-02-02
 * @property {String} http              http上网,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @property {String} http_download     http下载,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @property {String} https             https上网,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @property {String} https.xxxx        xxxx代表具体的网站
 * @property {String} qq                QQ,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @property {String} small_packet      小包,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @property {String} p2p               p2p下载,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @property {String} other             其他,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @property {String} enable            智能流控开关，值：1：启用，0：禁用
 * @property {String} priorityMode      流控策略模式，0：默认模式，1：办公模式，2：游戏模式，3：下载模式，4：高级模式
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"getTelnet"
 * }
 * response:
 * {
 *   "http":"0",
 *   "http_download":"0",
 *   "https":{
 *      "level": "0",
 *      "list": [ {
 *          "url": "www.baotao.com"
 *        },
 *        {
 *          "url": "www.tmall.com"
 *        },
 *        {
 *          "url": "www.baidu.com"
 *        },
 *        {
 *          "url": "www.zhihu.com"
 *        } ]
 *   },
 *   "qq":"0",
 *   "small_packet":"0",
 *   "p2p":"0",
 *   "other":"0",
 *   "enable":"1",
 *   "priorityMode":"4"
 * }
 */
uiPost.prototype.getQosPolicy = function(postVar,callback){
    this.topicurl = 'getQosPolicy';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = '/data/getQosPolicy.json';
    }
    return this.post(postVar,callback);
};

/**
 * 设置流控策略
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-02-02
 * @param {String} http              http上网,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @param {String} http_download     http下载,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @param {String} https             https上网,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @param {String} https.xxxx        xxxx代表具体的网站
 * @param {String} qq                QQ,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @param {String} small_packet      小包,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @param {String} p2p               p2p下载,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @param {String} other             其他,qos优先级 分为5个优先级:0:最高，1:高，2:中，3:低，4:最低。
 * @param {String} enable            智能流控开关，值：1：启用，0：禁用
 * @param {String} priorityMode      流控策略模式，0：默认模式，1：办公模式，2：游戏模式，3：下载模式，4：高级模式
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"setTelnet",
 *   "http":"0",
 *   "http_download":"0",
 *   "https":{
 *      "level": "0",
 *      "list": [ {
 *          "url": "www.baotao.com"
 *        },
 *        {
 *          "url": "www.tmall.com"
 *        },
 *        {
 *          "url": "www.baidu.com"
 *        },
 *        {
 *          "url": "www.zhihu.com"
 *        } ]
 *   },
 *   "qq":"0",
 *   "small_packet":"0",
 *   "p2p":"0",
 *   "other":"0",
 *   "enable":"1",
 *   "priorityMode":"4"
 * }
 * response:
 * {
 *    "msg":"success"
 * }
 */
uiPost.prototype.setQosPolicy = function(postVar,callback){
    this.topicurl = 'setQosPolicy';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取应用总开关 
 * @Author   Amy       <amy@carystudio.com>
 * @Author   Bob       <bob@carystudio.com> by DateTime 2018-04-28
 * @DateTime 2018-03-28
 * @property {String} enable    应用总开关。值：1:开启，0：关闭。
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"getAppCfg",
 * }
 * response:
 *    {
 *        "enable":   "1"
 *   }
 */
uiPost.prototype.getAppCfg  = function(postVar,callback){
    this.topicurl = 'getAppCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getAppCfg.json";
    }
    return this.post(postVar,callback);
};

/**
 * 设置应用总开关 
 * @Author   Amy       <amy@carystudio.com>
 * @Author   Bob       <bob@carystudio.com> by DateTime 2018-04-28
 * @DateTime 2018-03-28
 * @param {String} enable   应用总开关。值：1:开启，0：关闭。
 * 
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *   "enable":"0"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setAppCfg  = function(postVar,callback){
    this.topicurl = 'setAppCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 设置游戏加速/应用软件过滤
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-26
 * @param {String} typeid               类型id:值：2:game , 1:应用app类型
 * @param {String} config_name          每个类型app名称
 * @param {String} app_array            该类型下的游戏加速数组 / 该类型下的应用软件
 * @param {String} appid                游戏id / 应用软件id
 * @param {String} isEnable             游戏开关。/ 应用软件的开关。值：1:开启，0：关闭。
 * 
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *   "app_array":[
 *       {"appid":"4001","isEnable":"1"},
 *       {"appid":"4002","isEnable":"1"},
 *       {"appid":"4003","isEnable":"1"},
 *       {"appid":"4004","isEnable":"0"},
 *       {"appid":"4005","isEnable":"0"},
 *       {"appid":"4006","isEnable":"0"},
 *       {"appid":"4007","isEnable":"0"}
 *   ],
 *   "config_name":"app_config_4000",
 *   "typeid":"2",
 *   "topicurl":"setAppById"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setAppById  = function(postVar,callback){
    this.topicurl = 'setAppById';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取应用软件类型列表 
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-27
 * @property {String} typeid               过滤类型，值：1：应用软件过滤，2：游戏过滤
 * @property {String} config_name          每个类型app名称
 * @property {String} apptype_en           应用app类型的英文名称
 * @property {String} apptype_cn           应用app类型的中文名称
 * @property {String} apptype_ct           应用app类型的繁体名称
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"getAppTypeList",
 * }
 * response:
 * [
 *    {
 *       "typeid":   "1",
 *       "config_name":  "app_config_2000",
 *       "apptype_en":   "ENTERAUDIO",
 *       "apptype_cn":   "娱乐影音",
 *       "apptype_ct":   "娛樂影音"
 *   }, {
 *       "typeid":  "1",
 *       "config_name":  "app_config_2000",
 *       "apptype_en":   "ENTERAUDIO",
 *       "apptype_cn":   "娱乐影音",
 *       "apptype_ct":   "娛樂影音"
 *   }, {
 *       "typeid":   "2",
 *       "config_name":  "app_config_4000",
 *       "apptype_en":   "GameSwift",
 *       "apptype_cn":   "游戏加速",
 *       "apptype_ct":   "遊戲加速"
 *   }
 *]
 */
uiPost.prototype.getAppTypeList = function(postVar,callback){
    this.topicurl = 'getAppTypeList';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getAppTypeList.json";
    }
    return this.post(postVar,callback);
};

/**
 * 获取游戏加速列表/应用软件过滤
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-26
 * @property {String} typeid               类型id:值：2:game , 1:应用app类型
 * @property {String} appid                游戏id / 应用软件id
 * @property {String} isEnable             游戏的开关 / 应用软件的开关。值：1:开启，0：关闭。
 * @property {String} appname_en           游戏的英文名称 / 应用软件的英文名称
 * @property {String} appname_cn           游戏的中文名称 / 应用软件的中文名称
 * @property {String} appname_ct           游戏的繁体名称 / 应用软件的繁体名称
 * @return   {object}
 * @example
 * request:
 * {
 *   "typeid":"game",
 *   "topicurl":"getAppListById",
 * }
 * response:
 * [{
 *     "typeid":   "2"
 *  }, {
 *      "appid":    "4001",
 *      "isEnable": "0",
 *      "appname_en":   "National assault",
 *      "appname_cn":   "全民突击",
 *      "appname_ct":   "全民突擊 "
 *  }, {
 *      "appid":    "4002",
 *      "isEnable": "0",
 *      "appname_en":   "Wilderness action",
 *      "appname_cn":   "荒野行动",
 *      "appname_ct":   "荒野行動"
 *  }, {
 *      "appid":    "4003",
 *      "isEnable": "0",
 *      "appname_en":   "Perfect World",
 *      "appname_cn":   "完美世界",
 *      "appname_ct":   "完美世界"
 *  }, {
 *      "appid":    "4004",
 *      "isEnable": "0",
 *      "appname_en":   "QQ flying car",
 *      "appname_cn":   "QQ飞车",
 *      "appname_ct":   "QQ飛車"
 *  }, {
 *      "appid":    "4005",
 *      "isEnable": "0",
 *      "appname_en":   "Glory of The king",
 *      "appname_cn":   "王者荣耀",
 *      "appname_ct":   "王者榮耀"
 *  }, {
 *      "appid":    "4006",
 *      "isEnable": "0",
 *      "appname_en":   "Blade&Soul",
 *      "appname_cn":   "剑灵",
 *      "appname_ct":   "劍靈"
 *  }, {
 *      "appid":    "4007",
 *      "isEnable": "0",
 *      "appname_en":   "QQ Dancer",
 *      "appname_cn":   "QQ炫舞",
 *      "appname_ct":   "QQ炫舞"
 *  }]
 *   }
 *]
 */
uiPost.prototype.getAppListById = function(postVar,callback){
    this.topicurl = 'getAppListById';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getAppListById.json";
    }
    return this.post(postVar,callback);
};

/**
 * uploadQosConfig 主题  特征库更新
 * @Author   Bob       <Bob_huang@carystudio.com>
 * @DateTime 2018-03-16
 * @property {String} hardModel        固件
 * @property {String} meshEnabled        mesh的开关
 * @property {String} importAction        导入的配置路径。
 * @property {String} maxSize           校验文件最大值。单位：kb,以1000位进制数。
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"uploadQosConfig"
 * }
 * response:
 *{
 *  
 *   "hardModel":   "",
 *   "meshEnabled":  0,
 *   "importAction":  '/cgi-bin/cstecgi.cgi?action=upload&setting/setQosConfig',
 *   "maxSize": "100000"
 *}
 */
uiPost.prototype.uploadQosConfig = function(postVar,callback){
    this.topicurl = 'uploadQosConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/uploadQosConfig.json"
    }
    return this.post(postVar,callback);
};


/**
 * 登陆
 * @Author   Yexk       <yexk@carystudio.com>
 * @DateTime 2018-02-03
 * @param {String} password          登陆密码
 * @property {Stirng} status         返回登陆的状态，1成功。0失败
 * @property   {String} url            当登陆成功的时候返回需要跳转的url。必须使用绝对路径。
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"login",
 *   "password":"admin"
 * }
 * response:
 * {
 *     "status":"1",
 *     "url":"/index.html"
 * }
 */
uiPost.prototype.login = function(postVar,callback){
    this.topicurl = 'login';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/login.json";
    }
    return this.post(postVar,callback);
};
/**
 * 删除上传的固件
 * @Author   Karen       <Karen@carystudio.com>
 * @DateTime 2018-03-28
 * @param {String} topicurl          主题
 * @param {String} fw                固件名称
 * @param {String} csid              固件CSID
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"delUsbFw",
 *   "fw":"/TOTOLINK_C8B811A-1C_AP0164_AP0164_QCA9531QCA9887_SPI_16M128M_V6.2c.843_B20180316_ALL.web",
 *   "csid":"C8B331M"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.delUsbFw = function(postVar,callback){
    this.topicurl = 'delUsbFw';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 删除上传的固件
 * @Author   Hayden       <Hayden@carystudio.com>
 * @DateTime 2018-04-14
 * @param {String} topicurl          主题
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"getHacFwList"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.getHacFwList = function(postVar,callback){
    this.topicurl = 'getHacFwList';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};
/**
 * 获取IPTV(复杂版)设置的配置
 * @Author   David       <David@carystudio.com>
 * @DateTime 2018-04-03
 * @property {String} iptvEnabled    IPTV的开关。值：1:开启，0：关闭。
 * @property {String} serviceType    IPTV的类型。值：0:User Define，1：Singapore-ExStream，2：Malaysia-Unifi，3：Malaysia-Maxis，4：Bridge。
 * @property {String} lan1Type       LAN Port1的类型。值：1:IPTV,2:IP-Phone,3:Internet。
 * @property {String} lan2Type       LAN Port2的类型。值：1:IPTV,2:IP-Phone,3:Internet。
 * @property {String} lan3Type       LAN Port3的类型。值：1:IPTV,2:IP-Phone,3:Internet。
 * @property {String} lan4Type       LAN Port4的类型。值：1:IPTV,2:IP-Phone,3:Internet。
 * @property {String} iptvVid        IPTV VLAN ID。
 * @property {String} iptvPri        IPTV VLAN Priority。
 * @property {String} ipphoneVid     IP-Phone VLAN ID。
 * @property {String} ipphonePri     IP-Phone VLAN Priority。
 * @property {String} internetVid    Internet VLAN ID。    
 * @property {String} internetPri    Internet VLAN Priority。  
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"getIptvConfig",
 *   
 * }
 * response:
 *    {
 *        "iptvEnabled":  "1",
 *        "serviceType":  "0",
 *        "lan1Type": "1",
 *        "lan2Type": "2",
 *        "lan3Type": "3",
 *        "lan4Type": "3",
 *        "iptvVid":  "1",
 *        "iptvPri":  "0",
 *        "ipphoneVid": "2",
 *        "ipphonePri": "0",
 *        "internetVid":  "3",
 *        "internetPri":  "0"
 *   }
 */
uiPost.prototype.getIptvConfig = function(postVar,callback){
    this.topicurl = 'getIptvConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getIptvConfig.json";
    }
    return this.post(postVar,callback);
};

/**
 * 设置IPTV（复杂版）的配置
 * @Author   David       <David@carystudio.com>
 * @DateTime 2018-04-03
 * @param {String} iptvEnabled    IPTV的开关。值：1:开启，0：关闭
 * @param {String} serviceType    IPTV的类型。值：0:User Define，1：Singapore-ExStream，2：Malaysia-Unifi，3：Malaysia-Maxis，4：Bridge
 * @param {String} lan1Type       LAN Port1的类型。值：1:IPTV,2:IP-Phone,3:Internet
 * @param {String} lan2Type       LAN Port2的类型。值：1:IPTV,2:IP-Phone,3:Internet
 * @param {String} lan3Type       LAN Port3的类型。值：1:IPTV,2:IP-Phone,3:Internet
 * @param {String} lan4Type       LAN Port4的类型。值：1:IPTV,2:IP-Phone,3:Internet
 * @param {String} iptvVid        IPTV VLAN ID
 * @param {String} iptvPri        IPTV VLAN Priority
 * @param {String} ipphoneVid     IP-Phone VLAN ID
 * @param {String} ipphonePri     IP-Phone VLAN Priority
 * @param {String} internetVid    Internet VLAN ID    
 * @param {String} internetPri    Internet VLAN Priority
 * @param {String} addEffect    未知
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *    
 *   "iptvEnabled":  "1",
 *   "serviceType":  "0",
 *   "lan1Type": "1",
 *   "lan2Type": "2",
 *   "lan3Type": "3",
 *   "lan4Type": "3",
 *   "iptvVid":  "1",
 *   "iptvPri":  "0",
 *   "ipphoneVid": "2",
 *   "ipphonePri": "0",
 *   "internetVid":  "3",
 *   "internetPri":  "0" 
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setIptvConfig  = function(postVar,callback){
    this.topicurl = 'setIptvConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};
/**
 * 获取IPTV设置(简化版)的配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-03
 * @property {String} vlanEnabled    IPTV的开关。值：1:开启，0：关闭。
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"getVlanConfig",
 * }
 * response:
 *    {
 *        "vlanEnabled":   "1"
 *   }
 */
uiPost.prototype.getVlanConfig = function(postVar,callback){
    this.topicurl = 'getVlanConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getVlanConfig.json";
    }
    return this.post(postVar,callback);
};

/**
 * 设置IPTV设置(简化版)
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-03
 * @param {String} vlanEnabled   IPTV的开关。值：1:开启，0：关闭。
 * 
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *   "vlanEnabled":"0"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setVlanConfig  = function(postVar,callback){
    this.topicurl = 'setVlanConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取IPv6状态数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-04
 * @Author   Frankie       <frankie_zha@carystudio.com>
 * @DateTime 2018-04-20
 * @property {String} enabled      
 * @property {String} connStatus    ipv6的连接状态。值：disconnected:未连接，connected：已连接。
 * @property {String} connMode      连接类型:跟Wan模式一样参数：PPPOE:1/DHCP:2/STATIC:0
 * @property {String} wanIp         IPv6 WAN地址
 * @property {String} wanIpPrefixLen   IPv6 WAN地址前缀的长度
 * @property {String} wanGw         IPv6 网关
 * @property {String} autoDns       DNS的获取模式。
 * @property {String} wanPriDns     IPv6 首选DNS
 * @property {String} wanSecDns     IPv6 备选DNS
 * @property {String} lanMode       IPv6 LAN地址分配类型：0：无状态(SLAAC/stateless)，1：有状态（DHCPv6/stateful）
 * @property {String} lanLinkIp     IPv6 局域网本地连接地址/Link addr 
 * @property {String} lanLinkPrefixLen     IPv6 Link地址前缀长度 
 * @property {String} lanGlobalIp   IPv6 局域网地址/Global addr 
 * @property {String} lanGlobalPrefixLen    局域网Global地址前缀的长度
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"getIPv6Status",
 * }
 * response:
 *    {
 *       "enabled": "0",
 *       "connStatus":  "disconnected",
 *       "connMode":   "2",
 *       "wanIp":   "2001:546e:90bc:0:ba55:10ff:fe24:77bd",
 *       "wanIpPrefixLen":   64,
 *       "wanGw": "fe80::ba55:10ff:fe24:7854",
 *       "autoDns": "0", 
 *       "wanPriDns":   "2001:913::8",
 *       "wanSecDns":   "2001:913:800::12",
 *       "lanMode":   "0",
 *       "lanLinkIp":   "fe80::ba55:10ff:fe24:77bc",
 *       "lanLinkPrefixLen":   "64",
 *       "lanGlobalIp":   "2001:388:c066:1:ba55:10ff:fe24:77bc",
 *       "lanGlobalPrefixLen":   "64"
 *   }
 */
uiPost.prototype.getIPv6Status = function(postVar,callback){
    this.topicurl = 'getIPv6Status';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getIPv6Status.json";
    }
    return this.post(postVar,callback);
};

/**
 * 获取IPv6设置数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-04
 * @Author   Frankie       <frankie_zha@carystudio.com>
 * @DateTime 2018-04-20
 * @property {String} enabled       IPv6 的总开关。值：1:开启，0：关闭。
 * @property {String} connMode      连接类型:跟Wan模式一样参数：PPPOE:1/DHCP:2/STATIC:0
 * @property {String} pppoeUser     pppoe 用户名
 * @property {String} pppoePass     pppoe 密码
 * @property {String} staticIp        静态IP
 * @property {String} staticIpPrefixLen  静态IP前缀
 * @property {String} staticGw        静态IP的网关
 * @property {String} staticPriDns    静态IP的首选dns
 * @property {String} staticSecDns    静态IP的备选（可选）
 * @property {String} autoDns       DNS的获取模式(PPPOE/DHCP下才有)， 1：自动（从ISP获取），0：手动配置。
 * @property {String} wanPriDns     IPv6 首选DNS
 * @property {String} wanSecDns     IPv6 备选DNS
 * @property {String} staticMtu    静态IP的MTU值
 * @property {String} pppoeMtu     PPPoE的MTU值
 * @property {String} dhcpMtu      动态的MTU值
 * @property {String} lanIpPrefixType   LAN地址前缀分配类型。值：1:静态，0：动态（Delegated）。
 * @property {String} lanIpPrefix       LAN前缀地址
 * @property {String} lanIpPrefixLen    LAN地址前缀长度
 * @property {String} lanIpMode         LAN地址类型：0：无状态(RADVD+SLAAC/stateless)，1：有状态（RADVD+DHCPv6/stateful），2：无状态+有状态（stateless+stateful）
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"getIPv6Config",
 * }
 * response:
 * {
 *      "enabled":    "1",
 *      "connMode":    "1",
 *      "pppoeUser":  "test",
 *      "pppoePass": "test",
 *      "staticIp": "2001:546e:90bc:0:ba55:10ff:fe24:77bd",
 *      "staticIpPrefixLen": "64",
 *      "staticGw":  "fe80::ba55:10ff:fe24:7854",
 *      "staticPriDns":   "2001:913::8",
 *      "staticSecDns":   "2001:913:800::12",
 *      "autoDns": "0", 
 *      "wanPriDns":   "2001:913::8",
 *      "wanSecDns":   "2001:913:800::12",
 *      "staticMtu":   "1500",
 *      "pppoeMtu":    "1480",
 *      "dhcpMtu":     "1500",
 *      "lanIpPrefixType": 0,
 *      "lanIpPrefix":   "2001:388:c066:1::",
 *      "lanIpPrefixLen":   "64",
 *      "lanIpMode":  "1"
 *}
 */
uiPost.prototype.getIPv6Config = function(postVar,callback){
    this.topicurl = 'getIPv6Config';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getIPv6Config.json";
    }
    return this.post(postVar,callback);
};

/**
 * IPv6动态IP操作
 * @Author   Frankie       <frankie_zha@carystudio.com>
 * @DateTime 2018-04-20
 * @property {String} action       1：更新， 0：释放。
 * 
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *      "action":    "1"
 *}
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setIPv6Dhcpc  = function(postVar,callback){
    this.topicurl = 'setIPv6Dhcpc';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 设置IPv6数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-04
 * @Author   Frankie       <frankie_zha@carystudio.com>
 * @DateTime 2018-04-20
 * @property {String} enabled       IPv6 的总开关。值：1:开启，0：关闭。
 * @property {String} connMode      连接类型:跟Wan模式一样参数：PPPOE:1/DHCP:2/STATIC:0
 * @property {String} pppoeUser     pppoe 用户名
 * @property {String} pppoePass     pppoe 密码
 * @property {String} staticIp        静态IP的地址
 * @property {String} staticIpPrefixLen  静态IP的前缀长度
 * @property {String} staticGw        静态IP的网关
 * @property {String} staticPriDns    静态IP的首选dns
 * @property {String} staticSecDns    静态IP的备选dns（可选）
 * @property {String} autoDns       DNS的获取模式(PPPOE/DHCP下才有)， 1：自动（从ISP获取），0：手动配置。
 * @property {String} wanPriDns     IPv6 首选DNS
 * @property {String} wanSecDns     IPv6 备选DNS
 * @property {String} staticMtu    静态IP的MTU值
 * @property {String} pppoeMtu     动态的MTU值
 * @property {String} dhcpMtu      PPPoE的MTU值
 * @property {String} lanIpPrefixType    LAN地址前缀分配类型。值：1:静态（static），0：自动（Delegated）。
 * @property {String} lanIpPrefix        LAN前缀地址
 * @property {String} lanIpPrefixLen     LAN地址前缀长度
 * @property {String} lanIpMode          LAN地址类型：0：无状态(RADVD+SLAAC/stateless)，当前只支持这一种，1：有状态（RADVD+DHCPv6/stateful），2：无状态+有状态（stateless+stateful）
 * 
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *      "enabled":    "1",
 *      "connMode":    "1",
 *      "pppoeUser":  "test",
 *      "pppoePass": "test",
 *      "staticIp": "2001:546e:90bc:0:ba55:10ff:fe24:77bd",
 *      "staticIpPrefixLen": "64",
 *      "staticGw":  "fe80::ba55:10ff:fe24:7854",
 *      "staticPriDns":   "2001:913::8",
 *      "staticSecDns":   "2001:913:800::12",
 *      "autoDns": "0", 
 *      "wanPriDns":   "2001:913::8",
 *      "wanSecDns":   "2001:913:800::12",
 *      "staticMtu":   "1500",
 *      "pppoeMtu":    "1480",
 *      "dhcpMtu":     "1500",
 *      "lanIpPrefixType": 0,
 *      "lanIpPrefix":   "2001:388:c066:1::",
 *      "lanIpPrefixLen":   "64",
 *      "lanIpMode":  "1"
 *}
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setIPv6Config  = function(postVar,callback){
    this.topicurl = 'setIPv6Config';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};


/**
 * AC系统管理 集中管理的扫描 
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-09-09
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"ScanAp"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.ScanAp = function(postVar,callback){
    this.topicurl = 'ScanAp';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

 /**
 * 获取AP列表信息
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-09
 * @property {String} id        AP列表id
 * @property {String} apname    AP名称
 * @property {String} apmac     AP mac地址
 * @property {String} ipaddr    AP ip地址
 * @property {String} netmask   AP 子网掩码
 * @property {String} gateway   AP 网关
 * @property {String} pridns    首选DNS
 * @property {String} secdns    备选DNS
 * @property {String} apstate   设备状态
 * @property {String} ledstate  灯的状态，值：1：亮，2：灭。
 * @property {String} apkey     AP密钥
 * @property {String} csid       AP 的csid
 * @property {String} model      产品型号
 * @property {String} svnnum     svn号   
 * @property {String} builddate  发布时间
 * @property {String} uptime     运行时间
 * @property {String} softver    固件版本
 * @property {String} timestamp  编译时间
 * @property {String} aptype     AP类型
 * @property {String} username     用户名
 * @property {String} password     密码
 * @property {String} hftimes     心跳失败次数
 *
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"getGroupApList",
 * }
 * response:
 * [{
 *       "id":   "1",
 *       "apname":   "",
 *       "apmac":    "F4:28:54:00:05:0C",
 *       "ipaddr":   "192.168.0.4",
 *       "netmask":  "255.255.255.0",
 *       "gateway":  "192.168.0.253",
 *       "pridns":   "192.168.0.253",
 *       "secdns":   "",
 *       "apstate":  "511",
 *       "ledstate": "0",
 *       "apkey":    "csapkey2017",
 *       "csid": "C8B130A",
 *       "model":    "AP0157",
 *       "svnnum":   "5962",
 *       "builddate":    "201848",
 *       "uptime":   "1970-01-01 08:01:00",
 *       "softver":  "V5.2c",
 *       "timestamp":    "2018-04-02 20:02:03",
 *       "aptype":   "1",
 *       "username": "admin",
 *       "password": "admin",
 *       "hftimes":  "0"
 *   }, {
 *       "id":   "2",
 *       "apname":   "",
 *       "apmac":    "F4:28:54:00:05:04",
 *       "ipaddr":   "192.168.0.3",
 *       "netmask":  "255.255.255.0",
 *       "gateway":  "192.168.0.253",
 *       "pridns":   "192.168.0.253",
 *       "secdns":   "",
 *       "apstate":  "511",
 *       "ledstate": "0",
 *       "apkey":    "csapkey2017",
 *       "csid": "C8B130A",
 *       "model":    "AP0157",
 *       "svnnum":   "5962",
 *       "builddate":    "201848",
 *       "uptime":   "1970-01-01 08:01:32",
 *       "softver":  "V5.2c",
 *       "timestamp":    "2018-04-02 20:09:19",
 *       "aptype":   "1",
 *       "username": "admin",
 *       "password": "admin",
 *       "hftimes":  "0"
 *   }]
 */
uiPost.prototype.getGroupApList = function(postVar,callback){
    this.topicurl = 'getGroupApList';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getGroupApList.json";
    }
    return this.post(postVar,callback);
};

/**
 * 获取AP设备信息
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-10
 * @property {String} RADIO0    AP 2.4G的信息
 * @property {String} RADIO1    AP 5G的信息
 * @property {String} SSIDS     AP SSID信息
 * @property {String} country   国家码
 * @property {String} wirelessmode   频段
 * @property {String} htmode        频宽
 * @property {String} txpower       发射功率
 * @property {String} beacon        信标
 * @property {String} id        列表的id
 * @property {String} gid       未知
 * @property {String} apid     AP的id
 * @property {String} usefor    wlan 设置
 * @property {String} ssid      SSID
 * @property {String} hide      广播SSID，值：0：启用，1：禁用。
 * @property {String} isolate      WiFi隔离，值：0：禁用，1：启用。
 * @property {String} encryption   加密方式，值：0：不加密，1：加密。
 * @property {String} passphrase   密码
 * @property {String} stanum     最大用户数
 * @property {String} vlanid     vlan标记
 * 
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"getApStatusConfig",
 * }
 * response:
 * {
 *   "RADIO0":   {
 *       "country":  "CN",
 *       "wirelessmode": "9",
 *       "htmode":   "0",
 *       "channel":  "0",
 *       "txpower":  "100",
 *       "beacon":   "100"
 *   },
 *   "RADIO1":   {
 *       "country":  "CN",
 *       "wirelessmode": "14",
 *       "htmode":   "2",
 *       "channel":  "0",
 *       "txpower":  "100",
 *       "beacon":   "100"
 *   },
 *   "SSIDS":    {
 *       "id":   "1",
 *       "gid":  "1",
 *       "apid": "1",
 *       "usefor":   "3",
 *       "ssid": "",
 *       "hide": "0",
 *       "isolate":  "0",
 *       "encryption":   "0",
 *       "passphrase":   "",
 *       "stanum":   "32",
 *       "vlanid":   "0"
 *   }
 *}
 */
uiPost.prototype.getApStatusConfig = function(postVar,callback){
    this.topicurl = 'getApStatusConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getApStatusConfig.json";
    }
    return this.post(postVar,callback);
};

/**
 * 设置AC集中管理数据
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-10
 * @param {String} apid          AP id
 * @param {String} apname        AP 名称
 * @param {String} beacon2g      2.4G 信标
 * @param {String} beacon5g      5G 信标
 * @param {String} channel2g     2.4G 信道
 * @param {String} channel5g     5G 信道
 * @param {String} country2g     2.4G 国家码
 * @param {String} country5g     5G 国家码
 * @param {String} encryption    加密方式，值：0：不加密，1：加密。
 * @param {String} hedden        广播SSID，值：0：启用，1：禁用。
 * @param {String} htbw2g        2.4G 频宽
 * @param {String} htbw5g        5G 频宽
 * @param {String} maxstanum     最大用户数
 * @param {String} noforward     WiFi隔离，值：0：禁用，1：启用。
 * @param {String} ssid          SSID
 * @param {String} txpower2g     2.4G 发射功率
 * @param {String} txpower5g     5G 发射功率
 * @param {String} usefor        wlan 设置
 * @param {String} vlanid        vlan标记
 * @param {String} wirelessmode2g   2.4G 频段
 * @param {String} wirelessmode5g   5G 频段
 * @param {String} wlanKey          密码
 * 
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 * 　"topicurl":"setQuickSetting",
 * 　"apid":"1",
 *　 "apname":"123",
 *　 "beacon2g":"100",
 * 　"beacon5g":"100",
 * 　"channel2g":"0",
 * 　"channel5g":"0",
 * 　"country2g":"CN",
 *　 "country5g":"CN",
 *　 "encryption":"0",
 *　 "hedden":"0",
 *　 "htbw2g":"0",
 * 　"htbw5g":"2",
 *   "maxstanum":"32",
 *   "noforward":"0",
 *　 "ssid":"2312321",
 *　 "txpower2g":"100",
 *　 "txpower5g":"100",
 *　 "usefor":"3",
 *　 "vlanid":"0",
 *　 "wirelessmode2g":"9",
 *　 "wirelessmode5g":"14",
 *　 "wlanKey":""
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setQuickSetting = function(postVar,callback){
    this.topicurl = 'setQuickSetting';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * AC系统管理中的灯控制 
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-09-10
 * @param {String} id    AP的id
 * @param {String} ledState   灯的状态，值：1：亮，2：灭。
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"setApLedState",
 *     "id":"1",
 *     "ledState":"2"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setApLedState = function(postVar,callback){
    this.topicurl = 'setApLedState';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * AC系统管理中的设备重启设置 
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-09-10
 * @param {String} id    AP的id
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"setApReboot",
 *     "id":"1"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setApReboot = function(postVar,callback){
    this.topicurl = 'setApReboot';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * AC系统管理中的恢复出厂设置 
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-09-10
 * @param {String} id    AP的id
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"setApReset",
 *     "id":"1"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setApReset = function(postVar,callback){
    this.topicurl = 'setApReset';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取固件管理信息
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-10
 * @param {String} csid         固件csid
 * 
 * @property {String} version    固件路径
 * 
 * @return   {object}
 * @example
 * request:
 * {
 *   "topicurl":"getFwList"
 * }
 * response:
 * {
 *   "version":""
 * }
 */
uiPost.prototype.getFwList = function(postVar,callback){
    this.topicurl = 'getFwList';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getApFwInfo.json";
    }
    return this.post(postVar,callback);
};

/**
 * 托管AC：固件升级 
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-09-10
 * @param {String} id    AP的id
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"setApUpgrade",
 *     "id":"1"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setApUpgrade = function(postVar,callback){
    this.topicurl = 'setApUpgrade';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};
 
/**
 * 删除固件管理中的固件
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-09-10
 * @param {String} csid    AP的CSID
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"delApFWInfo",
 *     "csid":""
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.delApFWInfo = function(postVar,callback){
    this.topicurl = 'delApFWInfo';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 提交修改的AP名称 
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-09-10
 * @param {String} id        修改AP 的 id
 * @param {String} apname    修改的AP名称
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"setApName",
 *     "apid":"1",
 *     "apname":"wwwwww"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setApName = function(postVar,callback){
    this.topicurl = 'setApName';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};
/**
 * 一键修改IP
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-09-10
 * @param {String} apmac    修改的AP mac
 * 
 * @property {String} success        响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *     topicurl:"setApIp",
 *     "apmac":"F4:28:54:00:05:0C"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setApIp = function(postVar,callback){
    this.topicurl = 'setApIp';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取数据库管理恢复出厂设置信息
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-10
 * @property {String} success       响应状态：true：响应成功，false：响应失败
 * @property {String} error        错误
 * @property {String} lan_ip        局域网IP
 * @property {String} wtime        等待时间
 * @property {String} reserv        返回页面（参数未知）
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"AcRestore"
 * }
 * response:
 *{
 *  
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.1",
 *   "wtime":   100,
 *   "reserv":  "reserv"
 *  
 *}
 */
uiPost.prototype.AcRestore = function(postVar,callback){
    this.topicurl = 'AcRestore';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取数据库保存主题信息，当前MTK是直接调用脚本，RTL则是通过调用主题，通过这个主题进行适配。
 * @Author   Hayden       <hayden@carystudio.com>
 * @DateTime 2018-6-13
 * @property {String} Action       返回保存数据库的主题
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getSaveSqlite3Topic"
 * }
 * response:
 *{
 *  
 *   "Action": "getsqlite3_SaveConfig"
 *  
 *}
 */
uiPost.prototype.getSaveSqlite3Topic = function(postVar,callback){
    this.topicurl = 'getSaveSqlite3Topic';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取L2TP服务器配置
 * @Author   David       <David@carystudio.com>
 * @DateTime 2018-04-16
 * @property    {String}   Enabled       状态：1 启用，0 禁用
 * @property    {String}   localip       服务器IP
 * @property    {String}   startip       起始IP地址
 * @property    {String}   endip       结束IP地址
 * @property    {String}   wanpridns       首选DNS
 * @property    {String}   wansecdns       备选DNS
 * @property    {String}   servermtu       MTU
 * @property    {String}   servermru       MRU
 * @property {String}
 * @return   {object}
 * @example
 * request:
 * {
*       "topicurl":"getL2tpdConfig"
* }
 * response:
 * {
*       "Enabled":"1",
*       "localip":"10.10.10.1",
*       "startip":"10.10.10.2",
*       "endip":"10.10.10.254",
*       "wanpridns":"8.8.8.8",
*       "wansecdns":"114.114.114.114",
*       "servermtu":"1460",
*       "servermru":"1460"
* }
 */
uiPost.prototype.getL2tpdConfig = function(postVar,callback){
    this.topicurl = 'getL2tpdConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getL2tpStatus.json";
    }
    return this.post(postVar,callback);
};

/**
 * 设置PPTP/L2TP账号配置
 * @Author   David       <David@carystudio.com>
 * @DateTime 2018-04-16
 * @param    {String}   Enabled       状态：1 启用，0 禁用
 * @param    {String}   localip       服务器IP
 * @param    {String}   startip       起始IP地址
 * @param    {String}   endip       结束IP地址
 * @param    {String}   wanpridns       首选DNS
 * @param    {String}   wansecdns       备选DNS
 * @param    {String}   servermtu       MTU
 * @param    {String}   servermru       MRU
 * @return   {object}
 * @example
 * request:
 * {
 *      "topicurl":"setL2tpdConfig",
*       "Enabled":"1",
*       "localip":"10.10.10.1",
*       "startip":"10.10.10.2",
*       "endip":"10.10.10.254",
*       "wanpridns":"8.8.8.8",
*       "wansecdns":"",
*       "servermtu":"1460",
*       "servermru":"1460"
* }
 * response:
 * {
*
* }
 */
uiPost.prototype.setL2tpdConfig = function(postVar,callback){
    this.topicurl = 'setL2tpdConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取PPTP服务器配置信息
 * @Author   David       <David@carystudio.com>
 * @DateTime 2018-04-16
 * @property    {String}   Enabled       状态 1：启用 0：禁用
 * @property    {String}   startip       起始IP地址
 * @property    {String}   endip       结束IP地址
 * @property    {String}   mppeencrypt       MPPE数据加密
 * @property    {String}   localip       服务器地址
 * @property    {String}   wanpridns       首选DNS
 * @property    {String}   wansecdns       备选DNS
 * @property    {String}   servermtu       MTU
 * @property    {String}   servermru       MRU
 * @return   {object}
 * @example
 * request:
 * {
*       "topicurl":"getPptpdConfig"
* }
* {
*     "Enabled":"1",
*     "startip":"10.10.10.2",
*     "endip":"10.10.10.254",
*     "mppeencrypt":"0",
*     "localip":"10.10.10.1",
*     "wanpridns":"8.8.8.8",
*     "wansecdns":"",
*     "servermtu":"1480",
*     "servermru":"1480"
*       
* }
 */
uiPost.prototype.getPptpdConfig = function(postVar,callback){
    this.topicurl = 'getPptpdConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getpptpdStatus.json";
    }
    return this.post(postVar,callback);
};

/**
 * 设置PPTP服务器配置
 * @Author   David      <David@carystudio.com>
 * @DateTime 2018-04-16
 * @param    {String}   Enabled       状态 1：启用 0：禁用
 * @param    {String}   startip       起始IP地址
 * @param    {String}   endip       结束IP地址
 * @param    {String}   mppeencrypt       MPPE数据加密
 * @param    {String}   localip       服务器地址
 * @param    {String}   wanpridns       首选DNS
 * @param    {String}   wansecdns       备选DNS
 * @param    {String}   servermtu       MTU
 * @param    {String}   servermru       MRU
 * @return   {object}
 * @example
 * request:
 * {
 *    "topicurl" : "setPptpdConfig",
*     "Enabled":"1",
*     "startip":"10.10.10.2",
*     "endip":"10.10.10.254",
*     "mppeencrypt":"0",
*     "localip":"10.10.10.1",
*     "wanpridns":"8.8.8.8",
*     "wansecdns":"",
*     "servermtu":    "1480",
*     "servermru":    "1480"
*       
* }
 * response:
 * {
*
* }
 */
uiPost.prototype.setPptpdConfig = function(postVar,callback){
    this.topicurl = 'setPptpdConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};



/**
 * 获取PPTP/L2TP用户配置信息
 * @Author   David      <David@carystudio.com>
 * @DateTime 2018-4-23
 * @property {String} authenticate    认证类型：0 是全部 ，1是PPPOE,2 是PPTP, 3是L2TP 
 * @property {String} username    账号
 * @property {String} password    密码 
 * @property {String} idx         规则序号
 * @property {String} upbandwidth  上传带宽
 * @property {String} downbandwidth   下载带宽
 * @property {String} upband  默认上传带宽
 * @property {String} downband   默认下载带宽
 * @property {String} comment     描述     
 *
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getVpnUser"
 * }
 * response:
 * [
 *  {
 *      "idx":  "0",
 *      "username": "123",
 *      "password": "123",
 *      "authenticate": "0",
 *      "upbandwidth":  "12500",
 *      "downbandwidth":    "12500",
 *      "comment":  "12333"
 *  },
 *  {
 *      "idx":  "1",
 *      "username": "1234",
 *      "password": "1234",
 *      "authenticate": "1",
 *      "upbandwidth":  "12500",
 *      "downbandwidth":    "12500",
 *      "comment":  "12333"
 *  }，
 *  {
 *      "upband":   "125000",
 *      "downband": "125000"
 *  }
 *]
 */
uiPost.prototype.getVpnUser = function(postVar,callback){
    this.topicurl = 'getVpnUser';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getVpnUser.json";
    }
    return this.post(postVar,callback);
};
/**
 * 设置PPTP/L2TP用户配置信息
 * @Author   David      <David@carystudio.com>
 * @DateTime 2018-04-23
 * @param    {String}   authenticate    认证类型：0 是全部 ，1是PPPOE,2 是PPTP, 3是L2TP
 * @param    {String}   username    账号
 * @param    {String}   password    密码
 * @param    {String}   idx         规则序号
 * @param    {String}   upbandwidth  上传带宽
 * @param    {String}   downbandwidth   下载带宽
 * @param    {String}   comment     描述
 * @return   {object}
 * @example
 * request:
 * {
 *    "topicurl" : "setVpnUser",
*     "username":   "123",
*     "password":   "123",
*     "authenticat":    "0",
*     "upbandwidth":    "12500",
*     "downbandwidth":  "12500",
*     "comment":    "12333"
*       
* }
 * response:
 * {
*
* }
 */
uiPost.prototype.setVpnUser = function(postVar,callback){
    this.topicurl = 'setVpnUser';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};


/**
 * 删除PPTP/L2TP用户配置
 * @Author   David      <David@carystudio.com>
 * @DateTime 2018-4-23
 * @param    {String} idx    删除指定规则
 * @property {String} success     响应状态, true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @example
 * request:
 * {
 *   "idx":    0,
 *   "topicurl":"deleteVpnUser"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.deleteVpnUser = function(postVar,callback){
    this.topicurl = 'deleteVpnUser';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
}; 

/**
 * 获取用户状态配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-24
 * @property    {String}   ip            IP
 * @property    {String}   pid           操作
 * @property    {String}   name          账号
 * @property    {String}   time          上线时间
 * @property    {String}   device_ip     设备IP
 * @property    {String}   authenticat   认证类型
 * @property    {String}   comment       描述
 * @return   {object}
 * @example
 * request:
 * {
 *       "topicurl":"getUserInfo"
 * }
 * response:
 * [
 *   {
 *       "ip":   "10.1.1.2",
 *       "pid":  "20788",
 *       "name": "123",
 *       "time": "2018,04,17,11,36,49",
 *       "device_ip":    "192.168.0.99",
 *       "authenticat":  "pptpd",
 *       "comment":  "1"
 *   }
 *]
 */
uiPost.prototype.getUserInfo = function(postVar,callback){
    this.topicurl = 'getUserInfo';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getUserInfo.json";
    }
    return this.post(postVar,callback);
};

/**
 * 用户状态的断开操作
 * @Author   Amy      <amy@carystudio.com>
 * @DateTime 2018-04-23
 * @param    {String}   pid         点击断开下发的20788
 * 
 * @return   {object}
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @example
 * request:
 * {
 *     "topicurl" : "disconnectVPN",
 *     "pid":   "20788",    
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.disconnectVPN = function(postVar,callback){
    this.topicurl = 'disconnectVPN';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};
/**
 * 获取OpenVPN服务器配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-27
 * @property    {String}   Enabled           状态：1 启用，0 禁用
 * @property    {String}   port             服务器端口
 * @property    {String}   subnet           VPN网段
 * @property    {String}   mask             网段掩码
 * @property    {String}   proto            隧道协议
 * @property    {String}   dev_type         隧道类型
 * @property    {String}   cipher           加密算法
 * @property    {String}   comp_auth        认证摘要算法
 * @property    {String}   comp_lzo         LZO压缩，值：1：开启，0：关闭
 * @property    {String}   tun_mtu          MTU
 * @property    {String}   ca               CA证书
 * @property    {String}   dh               密钥
 * @property    {String}   cert             服务器证书
 * @property    {String}   key              服务器私钥
 * @property    {String}   extra_config     附加配置
 * @property    {String}   clientCertway    客户端连接认证方式,值：0：证书认证；1：账号密码认证
 * @property {String}
 * @return   {object}
 * @example
 * request:
 * {
 *       "topicurl":"getOpenVpnConfig"
 * }
 * response:
 * {
 *       "Enabled": 1, 
 *       "port": 1194, 
 *       "subnet": "10.7.7.0", 
 *       "mask": "255.255.255.0", 
 *       "proto": "udp",
 *       "dev_type": "tun",
 *       "cipher": "BF-CBC",
 *       "comp_auth":"none", 
 *       "comp_lzo": 1, 
 *       "tun_mtu": 1400, 
 *       "clientCertway":"0",
 *       "ca": "-----BEGIN CERTIFICATE-----\nMIIDQTCCAimgAwIBAgIJAMVd\/timD6TjMA0GCSqGSIb3DQEBCwUAMDcxCzAJBgNV\nBAYTAkNOMQ4wDAYDVQQKDAVpS3VhaTEYMBYGA1UEAwwPaUt1YWkgRGV2aWNlIENB\nMB4XDTE4MDQwMjA5MDU0NFoXDTI4MDMzMDA5MDU0NFowNzELMAkGA1UEBhMCQ04x\nDjAMBgNVBAoMBWlLdWFpMRgwFgYDVQQDDA9pS3VhaSBEZXZpY2UgQ0EwggEiMA0G\nCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCuZR38cfc6F+5rnYLNDX813NGytSR1\nHko8zb3S20zU9S0YY1FGQaDVz5qtq9PPVPp9327jwCOEnxsFx2O9dBI9nRPmMvMK\n2Zf0K27gh2UlHWs0A5DLelhcXSl0dg64wAvVRqIlySH9peZ\/XnGjqBiKxhswoDWq\nrmGRCuIam6icrLhGDPUO2zLtEyYK\/\/8d+t86NE61\/ykthP4YY1OggZywGEkOUdwL\nSNknlPavsW1yUGaw90iFqqkL9Wqvd1cs8FMEdyquveztqqcVOpxClD4JzJrR46bm\ngoXSoX+OFSs79xJUpQgggHDlvrnNOUQfWPwoDIDsN7\/tJv62cQ2ohyHtAgMBAAGj\nUDBOMB0GA1UdDgQWBBTr\/Cp6Cs8dBtgMMqR2Vvkv7ynf3TAfBgNVHSMEGDAWgBTr\n\/Cp6Cs8dBtgMMqR2Vvkv7ynf3TAMBgNVHRMEBTADAQH\/MA0GCSqGSIb3DQEBCwUA\nA4IBAQBiNXBP0OOhVYSTiL2shcJStGb3yGfzLU6QpHnlceZz1fCBJWbuSyA7Tr+M\nkSVJ3YgRKVH0d24nVR8XuDS4N8Lb+Vd0LYg8IqW6JjmUfzkAHi9FHh1ofzyfgVw2\nG2JpZF079tr1ZXGjbs+2ztKJ+6ty1XpM1I2\/Eu0CXakvGqanDKl9cxdzMCd6hShd\nTeTeNwaRqtqIRYOXUwm9KOQgYw3i2B0tYTP3fHuHCDe5+a5OZMLE50hf4WKFJJMm\nJoZv2bn7tvO\/lAUbSVJXgj5Vyq88tm1dPU5nZ201NHF4YQxtYyoIYWMjgfTDY8kB\nJP+NbvbGsvlacYe5J1n6SGYzaT8y\n-----END CERTIFICATE-----", 
 *       "dh":"",
 *       "cert": "-----BEGIN CERTIFICATE-----\nMIIC6jCCAdICBFrB8mgwDQYJKoZIhvcNAQELBQAwNzELMAkGA1UEBhMCQ04xDjAM\nBgNVBAoMBWlLdWFpMRgwFgYDVQQDDA9pS3VhaSBEZXZpY2UgQ0EwHhcNMTgwNDAy\nMDkwNTQ0WhcNMjgwMzMwMDkwNTQ0WjA8MQswCQYDVQQGEwJDTjEOMAwGA1UECgwF\naUt1YWkxHTAbBgNVBAMMFGlLdWFpIE9wZW5WUE4gU2VydmVyMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEArmUd\/HH3Ohfua52CzQ1\/NdzRsrUkdR5KPM29\n0ttM1PUtGGNRRkGg1c+aravTz1T6fd9u48AjhJ8bBcdjvXQSPZ0T5jLzCtmX9Ctu\n4IdlJR1rNAOQy3pYXF0pdHYOuMAL1UaiJckh\/aXmf15xo6gYisYbMKA1qq5hkQri\nGpuonKy4Rgz1Dtsy7RMmCv\/\/HfrfOjROtf8pLYT+GGNToIGcsBhJDlHcC0jZJ5T2\nr7FtclBmsPdIhaqpC\/Vqr3dXLPBTBHcqrr3s7aqnFTqcQpQ+Ccya0eOm5oKF0qF\/\njhUrO\/cSVKUIIIBw5b65zTlEH1j8KAyA7De\/7Sb+tnENqIch7QIDAQABMA0GCSqG\nSIb3DQEBCwUAA4IBAQAmd7kWAbiefAfy01z484prNpwjmkvM0Qk6N9qz6Ux3LDck\ngUHvDut+xs0hhpoIlHNTail5o8Dwo6Ht2dInE55Q4qqj+f65SwBJ04pjPshZ11ki\nYsbp1axDkLgudE0pmtGnc0tJ5i8Bk5kTxokIwcQO1PTtAlE6hRzxPtX8mW+84FAt\n69naHwpHsKcdxOkQB7mk+2ImI23N6\/EGbBX1D60Wka7utbPbH\/rPMg1dSsEg3Ecb\nAOyO65FxH+0T8ynUONhMmnFsVx8qoXgkcBpe\/jx6ki\/CyPVGaWhdJhueEfZ0Q51b\nOEC64l0V4kPDFpSIl8dITIhVrff+eN0z\/gNvveeM\n-----END CERTIFICATE-----", 
 *       "key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEArmUd\/HH3Ohfua52CzQ1\/NdzRsrUkdR5KPM290ttM1PUtGGNR\nRkGg1c+aravTz1T6fd9u48AjhJ8bBcdjvXQSPZ0T5jLzCtmX9Ctu4IdlJR1rNAOQ\ny3pYXF0pdHYOuMAL1UaiJckh\/aXmf15xo6gYisYbMKA1qq5hkQriGpuonKy4Rgz1\nDtsy7RMmCv\/\/HfrfOjROtf8pLYT+GGNToIGcsBhJDlHcC0jZJ5T2r7FtclBmsPdI\nhaqpC\/Vqr3dXLPBTBHcqrr3s7aqnFTqcQpQ+Ccya0eOm5oKF0qF\/jhUrO\/cSVKUI\nIIBw5b65zTlEH1j8KAyA7De\/7Sb+tnENqIch7QIDAQABAoIBABdkmvQc+XPCeAnZ\ndA07bT\/1Ye+d2skXChBD7N2W6yR5ytXFpMZO0Vs84NvA+8WI+Zze1soYIOuOSBqr\nV1a3dibrphqv5Ogkrfxjwxi9MLUc0B+HBuo0fBvPp1rm5yyjHjM6qU92Pmf+0\/9r\n1MSGLNyYnFcWdnxxrca99fxpuuFhFO\/abCIgxG2XJwnlOIFGzK8tS5\/NH+YwzClN\nUmY+1HQVuSFfUHsslwzIb3dMBXbo4Atvy\/ckRJyWY+KHB\/I8kQNWn8TD\/vsL6aPG\n2vFEpVEiPJjjZsKbJj3HqmN9hoW7gPlbrtk5JMwlqGRZ0g39m9zkeoJNe+WprxRE\nbfmXSAUCgYEA5EcsdqUj8g5bRuXj1rruO7WipWOaIbKiUmD0eFm8\/W1dlPydJOTZ\nydKJN8YZNtU45YIgDhsvjZaBhUUMeoobr37q8Kn1I9u+\/wXMkFjco3DZjew1+EBw\n9\/B2sYYU4ra4sgt6+sdlskuRjWu0habmnBySMp0OYvu0VFrZoZdHGcMCgYEAw5LM\nsS70Axg29xStqYXPg\/sXPmq\/MhMMxN+41PDTgvU0c2Oq72WnHFaasSVsZMWeMGwW\nDxYNnuJ7BFgh0DkMoW2BL9CqRjrAN7FMIQ0Ndroo9erVNZCNDz1YyA6VuvUQ\/EoT\ntea\/a+QZw2aM210cvEjarwaBcoRup4FgFfT3ao8CgYAE9cbxjQUK7WTuVXBt6gHj\nKj8ueMuQj+EXCSRGuSxyFT5DTnnbo11YFUsF+zfxCREDa6BmrhCKcwq9apKq1vVj\nCs7wC8FX1h6ATA\/10vh4VKtlegxyKHRL7t2lXdR2WKIKvFUfvdVn2lx\/RifV\/5pj\nKfvDPcZiQDXa3157NF5HIQKBgDxGM\/uvgtipT9daciM68De23PUJpR9jq53JbYeD\nKUzFEYM2hmn9pEEhl89cv0lXdmdqCGph25TKLCuslc88pd3ih9warT+zv6XqaJIP\nGcUrnpAb7dXyVOcLex89D3xtJuz6T5TSJtCznhUQt\/yrd723nl4u3RpUIl5RizF5\nK\/+VAoGAPFO4Kr1X7bcY1zIPMtWnugI4luHD5HWHB4x+4iwT12ny5QvyhzBbFmeE\nuNlvPdqjoUchFkBZGcQ\/mzZ5Q2wwAuIlI0SvBFuO6TCyX02MyfSExWi3BCzisUKx\n0cL2q0+xiDu\/JhmBDbX2OSotfq9FCWdz8eVBD422M1PEgyZGe5w=\n-----END RSA PRIVATE KEY-----", 
 *       "extra_config": "mtu-disc no"
 * }
 */
uiPost.prototype.getOpenVpnConfig = function(postVar,callback){
    this.topicurl = 'getOpenVpnConfig';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getOpenVpnConfig.json";
    }
    return this.post(postVar,callback);
};

/**
 * 设置OpenVPN服务器
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-27
 * @param    {String}   Enabled           状态：1 启用，0 禁用
 * @param    {String}   port             服务器端口
 * @param    {String}   subnet           VPN网段
 * @param    {String}   mask             网段掩码
 * @param    {String}   proto            隧道协议
 * @param    {String}   dev_type         隧道类型
 * @param    {String}   cipher           加密算法
 * @param    {String}   comp_auth        认证摘要算法
 * @param    {String}   comp_lzo         LZO压缩，值：1：开启，0：关闭
 * @param    {String}   tun_mtu          MTU
 * @param    {String}   ca               CA证书
 * @param    {String}   dh               密钥
 * @param    {String}   cert             服务器证书
 * @param    {String}   key              服务器私钥
 * @param    {String}   extra_config     附加配置
 * @param    {String}   clientCertway    客户端连接认证方式,值：0：证书认证；1：账号密码认证
 * @return   {object}
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @example
 * request:
 * {
 *      "topicurl":"setOpenVpnConfig",
 *       "Enabled": 1, 
 *       "port": 1194, 
 *       "subnet": "10.7.7.0", 
 *       "mask": "255.255.255.0", 
 *       "proto": "udp",
 *       "dev_type": "tun",
 *       "cipher": "BF-CBC", 
 *       "comp_auth":"none",
 *       "comp_lzo": 1, 
 *       "tun_mtu": 1400, 
 *       "clientCertway":"1",
 *       "ca": "-----BEGIN CERTIFICATE-----\nMIIDQTCCAimgAwIBAgIJAMVd\/timD6TjMA0GCSqGSIb3DQEBCwUAMDcxCzAJBgNV\nBAYTAkNOMQ4wDAYDVQQKDAVpS3VhaTEYMBYGA1UEAwwPaUt1YWkgRGV2aWNlIENB\nMB4XDTE4MDQwMjA5MDU0NFoXDTI4MDMzMDA5MDU0NFowNzELMAkGA1UEBhMCQ04x\nDjAMBgNVBAoMBWlLdWFpMRgwFgYDVQQDDA9pS3VhaSBEZXZpY2UgQ0EwggEiMA0G\nCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCuZR38cfc6F+5rnYLNDX813NGytSR1\nHko8zb3S20zU9S0YY1FGQaDVz5qtq9PPVPp9327jwCOEnxsFx2O9dBI9nRPmMvMK\n2Zf0K27gh2UlHWs0A5DLelhcXSl0dg64wAvVRqIlySH9peZ\/XnGjqBiKxhswoDWq\nrmGRCuIam6icrLhGDPUO2zLtEyYK\/\/8d+t86NE61\/ykthP4YY1OggZywGEkOUdwL\nSNknlPavsW1yUGaw90iFqqkL9Wqvd1cs8FMEdyquveztqqcVOpxClD4JzJrR46bm\ngoXSoX+OFSs79xJUpQgggHDlvrnNOUQfWPwoDIDsN7\/tJv62cQ2ohyHtAgMBAAGj\nUDBOMB0GA1UdDgQWBBTr\/Cp6Cs8dBtgMMqR2Vvkv7ynf3TAfBgNVHSMEGDAWgBTr\n\/Cp6Cs8dBtgMMqR2Vvkv7ynf3TAMBgNVHRMEBTADAQH\/MA0GCSqGSIb3DQEBCwUA\nA4IBAQBiNXBP0OOhVYSTiL2shcJStGb3yGfzLU6QpHnlceZz1fCBJWbuSyA7Tr+M\nkSVJ3YgRKVH0d24nVR8XuDS4N8Lb+Vd0LYg8IqW6JjmUfzkAHi9FHh1ofzyfgVw2\nG2JpZF079tr1ZXGjbs+2ztKJ+6ty1XpM1I2\/Eu0CXakvGqanDKl9cxdzMCd6hShd\nTeTeNwaRqtqIRYOXUwm9KOQgYw3i2B0tYTP3fHuHCDe5+a5OZMLE50hf4WKFJJMm\nJoZv2bn7tvO\/lAUbSVJXgj5Vyq88tm1dPU5nZ201NHF4YQxtYyoIYWMjgfTDY8kB\nJP+NbvbGsvlacYe5J1n6SGYzaT8y\n-----END CERTIFICATE-----", 
 *       "dh":"",
 *       "cert": "-----BEGIN CERTIFICATE-----\nMIIC6jCCAdICBFrB8mgwDQYJKoZIhvcNAQELBQAwNzELMAkGA1UEBhMCQ04xDjAM\nBgNVBAoMBWlLdWFpMRgwFgYDVQQDDA9pS3VhaSBEZXZpY2UgQ0EwHhcNMTgwNDAy\nMDkwNTQ0WhcNMjgwMzMwMDkwNTQ0WjA8MQswCQYDVQQGEwJDTjEOMAwGA1UECgwF\naUt1YWkxHTAbBgNVBAMMFGlLdWFpIE9wZW5WUE4gU2VydmVyMIIBIjANBgkqhkiG\n9w0BAQEFAAOCAQ8AMIIBCgKCAQEArmUd\/HH3Ohfua52CzQ1\/NdzRsrUkdR5KPM29\n0ttM1PUtGGNRRkGg1c+aravTz1T6fd9u48AjhJ8bBcdjvXQSPZ0T5jLzCtmX9Ctu\n4IdlJR1rNAOQy3pYXF0pdHYOuMAL1UaiJckh\/aXmf15xo6gYisYbMKA1qq5hkQri\nGpuonKy4Rgz1Dtsy7RMmCv\/\/HfrfOjROtf8pLYT+GGNToIGcsBhJDlHcC0jZJ5T2\nr7FtclBmsPdIhaqpC\/Vqr3dXLPBTBHcqrr3s7aqnFTqcQpQ+Ccya0eOm5oKF0qF\/\njhUrO\/cSVKUIIIBw5b65zTlEH1j8KAyA7De\/7Sb+tnENqIch7QIDAQABMA0GCSqG\nSIb3DQEBCwUAA4IBAQAmd7kWAbiefAfy01z484prNpwjmkvM0Qk6N9qz6Ux3LDck\ngUHvDut+xs0hhpoIlHNTail5o8Dwo6Ht2dInE55Q4qqj+f65SwBJ04pjPshZ11ki\nYsbp1axDkLgudE0pmtGnc0tJ5i8Bk5kTxokIwcQO1PTtAlE6hRzxPtX8mW+84FAt\n69naHwpHsKcdxOkQB7mk+2ImI23N6\/EGbBX1D60Wka7utbPbH\/rPMg1dSsEg3Ecb\nAOyO65FxH+0T8ynUONhMmnFsVx8qoXgkcBpe\/jx6ki\/CyPVGaWhdJhueEfZ0Q51b\nOEC64l0V4kPDFpSIl8dITIhVrff+eN0z\/gNvveeM\n-----END CERTIFICATE-----", 
 *       "key": "-----BEGIN RSA PRIVATE KEY-----\nMIIEogIBAAKCAQEArmUd\/HH3Ohfua52CzQ1\/NdzRsrUkdR5KPM290ttM1PUtGGNR\nRkGg1c+aravTz1T6fd9u48AjhJ8bBcdjvXQSPZ0T5jLzCtmX9Ctu4IdlJR1rNAOQ\ny3pYXF0pdHYOuMAL1UaiJckh\/aXmf15xo6gYisYbMKA1qq5hkQriGpuonKy4Rgz1\nDtsy7RMmCv\/\/HfrfOjROtf8pLYT+GGNToIGcsBhJDlHcC0jZJ5T2r7FtclBmsPdI\nhaqpC\/Vqr3dXLPBTBHcqrr3s7aqnFTqcQpQ+Ccya0eOm5oKF0qF\/jhUrO\/cSVKUI\nIIBw5b65zTlEH1j8KAyA7De\/7Sb+tnENqIch7QIDAQABAoIBABdkmvQc+XPCeAnZ\ndA07bT\/1Ye+d2skXChBD7N2W6yR5ytXFpMZO0Vs84NvA+8WI+Zze1soYIOuOSBqr\nV1a3dibrphqv5Ogkrfxjwxi9MLUc0B+HBuo0fBvPp1rm5yyjHjM6qU92Pmf+0\/9r\n1MSGLNyYnFcWdnxxrca99fxpuuFhFO\/abCIgxG2XJwnlOIFGzK8tS5\/NH+YwzClN\nUmY+1HQVuSFfUHsslwzIb3dMBXbo4Atvy\/ckRJyWY+KHB\/I8kQNWn8TD\/vsL6aPG\n2vFEpVEiPJjjZsKbJj3HqmN9hoW7gPlbrtk5JMwlqGRZ0g39m9zkeoJNe+WprxRE\nbfmXSAUCgYEA5EcsdqUj8g5bRuXj1rruO7WipWOaIbKiUmD0eFm8\/W1dlPydJOTZ\nydKJN8YZNtU45YIgDhsvjZaBhUUMeoobr37q8Kn1I9u+\/wXMkFjco3DZjew1+EBw\n9\/B2sYYU4ra4sgt6+sdlskuRjWu0habmnBySMp0OYvu0VFrZoZdHGcMCgYEAw5LM\nsS70Axg29xStqYXPg\/sXPmq\/MhMMxN+41PDTgvU0c2Oq72WnHFaasSVsZMWeMGwW\nDxYNnuJ7BFgh0DkMoW2BL9CqRjrAN7FMIQ0Ndroo9erVNZCNDz1YyA6VuvUQ\/EoT\ntea\/a+QZw2aM210cvEjarwaBcoRup4FgFfT3ao8CgYAE9cbxjQUK7WTuVXBt6gHj\nKj8ueMuQj+EXCSRGuSxyFT5DTnnbo11YFUsF+zfxCREDa6BmrhCKcwq9apKq1vVj\nCs7wC8FX1h6ATA\/10vh4VKtlegxyKHRL7t2lXdR2WKIKvFUfvdVn2lx\/RifV\/5pj\nKfvDPcZiQDXa3157NF5HIQKBgDxGM\/uvgtipT9daciM68De23PUJpR9jq53JbYeD\nKUzFEYM2hmn9pEEhl89cv0lXdmdqCGph25TKLCuslc88pd3ih9warT+zv6XqaJIP\nGcUrnpAb7dXyVOcLex89D3xtJuz6T5TSJtCznhUQt\/yrd723nl4u3RpUIl5RizF5\nK\/+VAoGAPFO4Kr1X7bcY1zIPMtWnugI4luHD5HWHB4x+4iwT12ny5QvyhzBbFmeE\nuNlvPdqjoUchFkBZGcQ\/mzZ5Q2wwAuIlI0SvBFuO6TCyX02MyfSExWi3BCzisUKx\n0cL2q0+xiDu\/JhmBDbX2OSotfq9FCWdz8eVBD422M1PEgyZGe5w=\n-----END RSA PRIVATE KEY-----", 
 *       "extra_config": "mtu-disc no"
 * }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setOpenVpnConfig = function(postVar,callback){
    this.topicurl = 'setOpenVpnConfig';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};

/**
 * 获取OpenVPN日志
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-04-27
 * @property    {String}   log         日志信息
 * @property {String}
 * @return   {object}
 * @example
 * request:
 * {
 *       "topicurl":"getOpenVpnLog"
 * }
 * response:
 * {
 *       "log":"Fri Apr 27 18:47:00 2018 OpenVPN 2.3.11 mipsel-openwrt-linux-gnu [SSL (OpenSSL)] [LZO] [EPOLL] [MH] [IPv6] Fri Apr 27 18:47:00 2018 library versions: OpenSSL 1.0.2e 3 Dec 2015, LZO 2.08 Fri Apr 27 18:47:00 2018 NOTE: the current --script-security setting may allow this configuration to call user-defined scripts Fri Apr 27 18:47:00 2018 WARNING: POTENTIALLY DANGEROUS OPTION --client-cert-not-required may accept clients which do not present a certificate Fri Apr 27 18:47:00 2018 WARNING: normally if you use --mssfix and/or --fragment, you should also set --tun-mtu 1500 (currently it is 1400) Fri Apr 27 18:47:00 2018 TUN/TAP device sovpn opened Fri Apr 27 18:47:00 2018 do_ifconfig, tt->ipv6=0, tt->did_ifconfig_ipv6_setup=0 Fri Apr 27 18:47:00 2018 /sbin/ifconfig sovpn 10.7.7.1 pointopoint 10.7.7.2 mtu 1400 Fri Apr 27 18:47:00 2018 UDPv4 link local (bound): [undef] Fri Apr 27 18:47:00 2018 UDPv4 link remote: [undef] Fri Apr 27 18:47:00 2018 Initialization Sequence Completed"
 * }
 */
uiPost.prototype.getOpenVpnLog = function(postVar,callback){
    this.topicurl = 'getOpenVpnLog';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getOpenVpnLog.json";
    }
    return this.post(postVar,callback);
};

/**
 * 获取PPTP/L2TP客户端信息
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-05-30
 * @param    {String} vpnType        vpn拨号类型。值：1：l2tp; 2：pptp
 * //l2tp
 * @property {String} l2tpEnable   L2TP 开关，值：1:启用 0：禁用
 * @property {String} l2tpServer   L2TP 服务器IP
 * @property {String} l2tpUser       L2TP 账号
 * @property {String} l2tpPass       L2TP 密码  
 * @property {String} l2tpConnect       L2TP 连接状态，值：1:连接 0：断开
 * @property {String} l2tpClientAddr    L2TP  连接IP地址   
 * //pptp
 * @property {String} pptpEnable   PPTP 开关，值：1:启用 0：禁用
 * @property {String} pptpServer   PPTP 服务器IP
 * @property {String} pptpUser       PPTP 账号
 * @property {String} pptpPass       PPTP 密码 
 * @property {String} pptpMppe       未知
 * @property {String} pptpMppc       未知
 * @property {String} pptpConnect       PPTP 连接状态，值：1:连接 0：断开
 * @property {String} pptpClientAddr    PPTP  连接IP地址   
 *
 * @return   {Object}
 * @example
 * request:
 * //l2tp
 * {
 *    "vpnType":"1",
 *    topicurl:"getVpnInfo"
 * }
 * //pptp
 * {
 *    "vpnType":"2",
 *    topicurl:"getVpnInfo"
 * }
 * response:
 * [
 * //l2tp
 *  {   
 *      "l2tpEnable":"1",
 *      "l2tpServer":  "0",
 *      "l2tpUser": "123",
 *      "l2tpPass": "123",
 *      "l2tpConnect":"1",
 *      "l2tpClientAddr":"192.168.0.12"
 *  }
 *  //pptp
 *  {
 *      "pptpEnable":"0",
 *      "pptpServer":  "0",
 *      "pptpUser": "123",
 *      "pptpPass": "123",
 *      "pptpMppe":"0",
 *      "pptpMppc":"1",
 *      "pptpConnect":"1",
 *      "pptpClientAddr":"192.168.0.12"
 *  }
 *]
 */
uiPost.prototype.getVpnInfo = function(postVar,callback){
    this.topicurl = 'getVpnInfo';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getVpnInfo.json";
    }
    return this.post(postVar,callback);
};
/**
 * 设置PPTP/L2TP客户端信息
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-05-30
 * @param    {String}   vpnType         vpn拨号类型。值：1：l2tp; 2：pptp
 * //l2tp
 * @param    {String}   l2tpEnable    L2TP 开关，值：1:启用 0：禁用
 * @param    {String}   l2tpServer    L2TP 服务器IP
 * @param    {String}   l2tpUser        L2TP 账号
 * @param    {String}   l2tpPass        L2TP 密码
 * //pptp
 * @param    {String}   pptpEnable    PPTP 开关，值：1:启用 0：禁用
 * @param    {String}   pptpServer    PPTP 服务器IP
 * @param    {String}   pptpUser        PPTP 账号
 * @param    {String}   pptpPass        PPTP 密码
 * @param    {String}   pptpMppe        未知
 * @param    {String}   pptpMppc        未知
 * 
 * @return   {object}
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * //l2tp
 * {
 *     "l2tpEnable":"1",
 *     "l2tpServer":   "123",
 *     "l2tpUser":   "123",
 *     "l2tpPass":   "123"
 * }
 * //pptp
 * {
 *      "pptpEnable":"1",
 *      "pptpServer":  "0",
 *      "pptpUser": "123",
 *      "pptpPass": "123",
 *      "pptpMppe":"0",
 *      "pptpMppc":"1"
 *  }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setVpnInfo = function(postVar,callback){
    this.topicurl = 'setVpnInfo';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};
/**
 * 获取Notice设置配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-06-14
 * @property {String} NoticeEnabled     Notice 开关，值：1:启用 0：禁用
 * @property {String} NoticeUrl         Notice地址
 * @property {String} BtnName           按钮名称
 * @property {String} WhiteListUrl1     白名单地址1
 * @property {String} WhiteListUrl2     白名单地址2 
 * @property {String} WhiteListUrl3     白名单地址3 
 * @property {String} IpFrom            起始白名单IP
 * @property {String} IpTo              结束白名单IP
 * @property {String} LanSubnet         The host number
 * @property {String} NoticeTimeoutVal  Notice超时值
 * @property {String} lanIp             Lan IP地址
 * @return   {Object}
 * @example
 * request:
 * {
 *    topicurl:"getNoticeCfg"
 * }
 * response:
 *  {
 *      "NoticeEnabled":"1",
 *      "NoticeUrl":  "www.totolink.cn",
 *      "BtnName": "123",
 *      "WhiteListUrl1": "",
 *      "WhiteListUrl2":"",
 *      "WhiteListUrl3":"",
 *      "IpFrom":"12",
 *      "IpTo":"22",
 *      "LanSubnet":"56",
 *      "NoticeTimeoutVal":"12",
 *      "lanIp":"192.168.0.12"
 *  }
 */
uiPost.prototype.getNoticeCfg = function(postVar,callback){
    this.topicurl = 'getNoticeCfg';
    this.async = true; // true:异步，false:同步。
    if (globalConfig.debug) {
        this.url = "/data/getNoticeCfg.json";
    }
    return this.post(postVar,callback);
};
/**
 * 设置Notice设置配置
 * @Author   Amy       <amy@carystudio.com>
 * @DateTime 2018-05-30
 * @param {String} NoticeEnabled     Notice 开关，值：1:启用 0：禁用
 * @param {String} NoticeUrl         Notice地址
 * @param {String} BtnName           按钮名称
 * @param {String} WhiteListUrl1     白名单地址1
 * @param {String} WhiteListUrl2     白名单地址2 
 * @param {String} WhiteListUrl3     白名单地址3 
 * @param {String} IpFrom            起始白名单IP
 * @param {String} IpTo              结束白名单IP
 * @param {String} LanSubnet         The host number
 * @param {String} NoticeTimeoutVal  Notice超时值
 * 
 * @return   {object}
 * @property {String} success     响应状态：true：响应成功，false：响应失败
 * @property {String} error       错误
 * @property {String} lan_ip      局域网IP
 * @property {String} wtime       等待时间
 * @property {String} reserv      返回页面（参数未知）
 * @return   {object}
 * @example
 * request:
 * {
 *      "topicurl":"setNoticeCfg",
 *      "NoticeEnabled":"1",
 *      "NoticeUrl":  "www.totolink.cn",
 *      "BtnName": "123",
 *      "WhiteListUrl1": "",
 *      "WhiteListUrl2":"",
 *      "WhiteListUrl3":"",
 *      "IpFrom":"12",
 *      "IpTo":"22",
 *      "LanSubnet":"56",
 *      "NoticeTimeoutVal":"12"
 *  }
 * response:
 * {
 *   "success": true,
 *   "error":   null,
 *   "lan_ip":  "192.168.0.5",
 *   "wtime":   0,
 *   "reserv":  "reserv"
 * }
 */
uiPost.prototype.setNoticeCfg = function(postVar,callback){
    this.topicurl = 'setNoticeCfg';
    this.async = true; // true:异步，false:同步。
    return this.post(postVar,callback);
};
obj.uiPost = new uiPost();
})(window);