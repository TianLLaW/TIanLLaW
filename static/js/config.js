/**
 * 全局配置选项配置
 *  
 * @property {bootlean}  debug  是否使用data目录的测试数据
 * @property {bootlean}  ajaxType  当前为真使用get方式提交，为假就是POST方式提交
 * @property {string}  model  型号值。默认为空（不显示型号），
 * @property {string}  cs  logo文字。
 * @property {bootlean}  showMenu   是否显示左菜单（menu菜单）
 * @property {bootlean}  showWechatQR   是否显示二维码按钮
 * @property {bootlean}  showLanguage   是否显示语言切换按钮。
 * @property {bootlean}  showHelp   是否显示帮助按钮。
 * @property {bootlean}  showIPv6   是否显示IPv6信息。
 * @property {number}   labelWith   页面整体的偏移量。form表单左边偏离。
 * @property {bootlean}  xs  详细说明参考iview手册
 * @property {bootlean}  sm  详细说明参考iview手册
 * @property {bootlean}  md  详细说明参考iview手册
 * @property {bootlean}  lg  详细说明参考iview手册
 * @property {String}  defaultLang  默认值显示中文
 * @property {String}  currentMode  当前使用模式。
 *  支持的系统模式。GW：gateway;BR：bridge;RPT：repeater;WISP：WISP;CLI：client:MESH：mesh;
 * @property {String}  cgiUrl  主题请求路径。
 * @property {String}  copyright   版权信息
 * @property {String}  m   手机ui的配置
 * @property {String}  m.url   手机UI的根目录
 * 
 */
var globalConfig = {
    "debug":false,
    "ajaxType":false,
    "model":"",
    "cs":"",
    "showLogo":true,
    "showMenu":true,
    "urlExtension":'.html',
    "showSearch":false,
    "showWechatQR":false,
    "showLanguage":"",
    "showAutoLang":false,
    "langAutoFlag":false,
    "showHelp":true,
    "showIPv6":false,
    "hasMobile":true,
    "labelWith":200,
    "defaultLang":"en",
    "currentMode":"GW",
    "currentModeMenu":{
        "BR":['/internet/wan','/firewall/qos','/firewall','/internet/static_dhcp','/internet/dhcp_detect'],
    },
    "xs":24,
    "lg":{span:18,offset:3},
    "helpUrl":"http://www.carystudio.com",
    "cgiUrl" :'/cgi-bin/cstecgi.cgi',
    "copyRight":'Copyright &copy; [date] Carystudio Ltd., All Rights Reserved',
    "webTitle":"Carystudio",
    "iHeader":"",
    "m":{
        "url":'/mobile/',
        "showHeader":true,
        "showBottom":true
    },
    "WanTypeList":"",
    "WanTypeList_DHCP":false,
    "WanTypeList_STATIC":false,
    "WanTypeList_PPPOE":false,
    "showLinkInfo":true
};

/**
 * 多语言列表。
 * 需要新增语言在这里新增选项，同时在/static/js/language.js文件新增对应的语言包即可。
 * @example
 * var languages = {
 *    'cn':'简体中文',
 *    'en':'English',
 *    'ja':'日本語' // 这是新增的选项
 *};
 */
var languages = {
    'auto':'自动检测',
    'cn':'简体中文',
    'en':'English',
    'ct':'中文繁體',
    'ru':'русский',
    'vn':'Tiếng Việt',
    'jp':'日本語',
    'kr':'한국어',
    'es':'El español',
    'de':'Deutsch',
    'th':'ภาษาไทย',
    'fr':'Français'
};

/**
 * 菜单配置
 *
 * @property {string} menu.id 菜单的唯一的ID
 * @property {string} menu.href 菜单的路径
 * @property {string} menu.icon 菜单的图标类名（样式类名）
 * @property {string} menu.lang 菜单的文字
 * @property {boolean} menu.display 是否显示菜单
 * @property {boolean} menu.sub 是否有子集。如果有直接设置下面的属性
 * @property {boolean} menu.sub.id 二级菜单的的唯一菜单
 * @property {boolean} menu.sub.href 二级菜单的路径
 * @property {boolean} menu.sub.lang 二级菜单的语言
 * @property {boolean} menu.sub.display 是否显示二级菜单
 *
 * @example
    {
        "id":"2",
        "href": "/opmode",
        "icon": "more",
        "lang": "opmode",
        "display":true,
        "sub": false
    },
    {
        ...
    },
    {
        "id":"3",
        "href": "/internet",
        "icon": "ios-world",
        "lang": "network",
        "display":true,
        "sub": [
            {
                "id":"3-1",
                "href": "/internet/wan",
                "lang": "wan",
                "display":true
            },
            {
                ...
            }
        ]
    },
 * 
 */
var menu = [
    {
        "id":'1',
        "href": "/home",
        "icon": "ios-home",
        "lang": "status",
        "display":true,
        "sub": false
    },
    {
        "id":"2",
        "href": "/opmode",
        "icon": "more",
        "lang": "opmode",
        "display":true,
        "sub": false
    },
    {
        "id":"3",
        "href": "/internet",
        "icon": "ios-world",
        "lang": "network",
        "display":true,
        "sub": [
            {
                "id":"3-1",
                "href": "/internet/wan",
                "lang": "wan",
                "display":true
            },
            {
                "id":"3-2",
                "href": "/internet/lan",
                "lang": "lan",
                "display":true
            },
            {
                "id":"3-3",
                "href": "/internet/static_dhcp",
                "lang": "static_dhcp",
                "display":true
            },
            {
                "id":"3-5",
                "href": "/internet/iptv",
                "lang": "iptv",
                "display":true
            },
            {
                "id":"3-6",
                "href": "/internet/iptv_plus",
                "lang": "iptv_plus",
                "display":true
            },
            {
                "id":"3-7",
                "href": "/internet/ipv6",
                "lang": "ipv6",
                "display":true
            }
        ]
    },
    {
        "id":"4",
        "href": "/wireless",
        "icon": "wifi",
        "lang": "wireless_2g",
        "display":true,
        "sub": [
            {
                "id":"4-1",
                "href": "/wireless/status",
                "lang": "wifi_status",
                "display":true
            },
            {
                "id":"4-2",
                "href": "/wireless/wifi",
                "lang": "basic",
                "display":true
            },
            {
                "id":"4-3",
                "href": "/wireless/multiap",
                "lang": "multiap",
                "display":true
            },
            {
                "id":"4-4",
                "href": "/wireless/acl",
                "lang": "acl",
                "display":true
            },
            {
                "id":"4-5",
                "href": "/wireless/wds",
                "lang": "wds",
                "display":true
            },
            {
                "id":"4-6",
                "href": "/wireless/wps",
                "lang": "wps",
                "display":true
            },
            {
                "id":"4-7",
                "href": "/wireless/advanced",
                "lang": "advanced",
                "display":true
            }
        ]
    },
    {
        "id":"5",
        "href": "/wireless?5g",
        "icon": "wifi",
        "lang": "wireless_5g",
        "display":true,
        "sub": [
            {
                "id":"5-1",
                "href": "/wireless/status?5g",
                "lang": "wifi_status",
                "display":true
            },
            {
                "id":"5-2",
                "href": "/wireless/wifi?5g",
                "lang": "basic",
                "display":true
            },
            {
                "id":"5-3",
                "href": "/wireless/multiap?5g",
                "lang": "multiap",
                "display":true
            },
            {
                "id":"5-4",
                "href": "/wireless/acl?5g",
                "lang": "acl",
                "display":true
            },
            {
                "id":"5-5",
                "href": "/wireless/wds?5g",
                "lang": "wds",
                "display":true
            },
            {
                "id":"5-6",
                "href": "/wireless/wps?5g",
                "lang": "wps",
                "display":true
            },
            {
                "id":"5-7",
                "href": "/wireless/advanced?5g",
                "lang": "advanced",
                "display":true
            }
        ]
    },
    {
        "id":"6",
        "href": "/qos",
        "icon": "cube",
        "lang": "qos",
        "display":true,
        "sub": [
            {
                "id":"6-1",
                "href": "/firewall/qos",
                "lang": "iqos",
                "display":true
            },
            {
                "id":"6-2",
                "href": "/firewall/qos_iplimit",
                "lang": "qos_iplimit",
                "display":true
            },
            {
                "id":"6-4",
                "href": "/firewall/game_speed",
                "lang": "game_speed",
                "display":true
            }
        ]
    },
    {
        "id":"11",
        "href": "/policy",
        "icon": "arrow-swap",
        "lang": "policy",
        "display":true,
        "sub": [
            {
                "id":"11-1",
                "href": "/firewall/qos_filter_rules",
                "lang": "qos_filter_rules",
                "display":true
            },
             {
                "id":"11-2",
                "href": "/firewall/qos_config",
                "lang": "qos_config",
                "display":true
            }
        ]
    },
    {
        "id":"7",
        "href": "/firewall",
        "icon": "fireball",
        "lang": "firewall",
        "display":true,
        "sub": [
            {
                "id":"7-1",
                "href": "/firewall/firewall",
                "lang": "firewall_type",
                "display":true
            },
            {
                "id":"7-2",
                "href": "/firewall/ipf",
                "lang": "ipf",
                "display":true
            },
            {
                "id":"7-3",
                "href": "/firewall/macf",
                "lang": "macf",
                "display":true
            },
            {
                "id":"7-4",
                "href": "/firewall/urlf",
                "lang": "urlf",
                "display":true
            },
            {
                "id":"7-5",
                "href": "/firewall/portfwd",
                "lang": "portfwd",
                "display":true
            },
            {
                "id":"7-6",
                "href": "/firewall/vpnpass",
                "lang": "vpnpass",
                "display":true
            },
            {
                "id":"7-7",
                "href": "/firewall/dmz",
                "lang": "dmz",
                "display":true
            },
            {
                "id":"7-8",
                "href": "/firewall/time_rule",
                "lang": "time_rule",
                "display":true
            }
        ]
    },
    {
        "id":"13",
        "href": "/ac",
        "icon": "android-options",
        "lang": "ac",
        "display":true,
        "sub": [
            {
                "id":"13-1",
                "href": "/ac/central",
                "lang": "ac_central",
                "display":true
            },
            {
                "id":"13-2",
                "href": "/ac/database",
                "lang": "database",
                "display":true
            }
        ]
    },
    {
        "id":"9",
        "href": "/central",
        "icon": "android-options",
        "lang": "central",
        "display":true,
        "sub": false
    },
    {
        "id":"12",
        "href": "/wechat_manager",
        "icon": "qr-scanner",
        "lang": "wechat_manager",
        "display":true,
        "sub": false
    },
    {
        "id":"10",
        "href": "/net",
        "icon": "ios-paperplane",
        "lang": "net",
        "display":true,
        "sub": [
            {
                "id":"10-1",
                "href": "/net/ssserver",
                "lang": "ss_server",
                "display":true
            },
            {
                "id":"10-6",
                "href": "/server/openvpn",
                "lang": "openvpn",
                "display":true
            },
			{
                "id":"10-2",
                "href": "/server/pptp_server",
                "lang": "pptp_server",
                "display":true
            },
            {
                "id":"10-3",
                "href": "/server/l2tp_server",
                "lang": "l2tp_server",
                "display":true
            },
            {
                "id":"10-7",
                "href": "/server/pptp_client",
                "lang": "pptp_client",
                "display":true
            },
            {
                "id":"10-8",
                "href": "/server/l2tp_client",
                "lang": "l2tp_client",
                "display":true
            },
			{
                "id":"10-4",
                "href": "/server/account",
                "lang": "account",
                "display":true
            },
			{
                "id":"10-5",
                "href": "/server/user_status",
                "lang": "user_status",
                "display":true
            }
        ]
    },
    {
        "id":"14",
        "href": "/tool",
        "icon": "ios-medkit",
        "lang": "tool",
        "display":true,
        "sub": [
            {
                "id":"14-1",
                "href": "/internet/dhcp_detect",
                "lang": "dhcp_detect",
                "display":true
            },
        ]
    },
    {
        "id":"8",
        "href": "/adm",
        "icon": "gear-a",
        "lang": "management",
        "display":true,
        "sub": [
            {
                "id":"8-1",
                "href": "/adm/changepwd",
                "lang": "changepwd",
                "display":true
            },
            {
                "id":"8-2",
                "href": "/adm/time",
                "lang": "time",
                "display":true
            },
            {
                "id":"8-3",
                "href": "/adm/ddns",
                "lang": "ddns",
                "display":true
            },
            {
                "id":"8-4",
                "href": "/adm/remote",
                "lang": "remote",
                "display":true
            },
            {
                "id":"8-5",
                "href": "/adm/upnp",
                "lang": "upnp",
                "display":false
            },
            {
                "id":"8-6",
                "href": "/adm/firmware",
                "lang": "firmware",
                "display":true
            },
            {
                "id":"8-7",
                "href": "/adm/config",
                "lang": "config",
                "display":true
            },
            {
                "id":"8-8",
                "href": "/adm/syslog",
                "lang": "syslog",
                "display":true
            },
            {
                "id":"8-9",
                "href": "/adm/schedule",
                "lang": "reboot_schedule",
                "display":true
            },
            {
                "id":"8-10",
                "href": "/wireless/schedule",
                "lang": "wifi_schedule",
                "display":false
            },{
                "id":"8-12",
                "href": "/adm/notice",
                "lang": "notice",
                "display":true
            },
            {
                "id":"8-11",
                "href": "javascript:logout();",
                "lang": "logout",
                "display":true
            }
        ]
    }
];

var mobileMenu = [{
    id: "mobileMenu_status",
    icon: "ios-speedometer-outline",
    href: "home",
    display:true,
    text: "status"
}, {
    id: "mobileMenu_wan",
    icon: "ios-world-outline",
    href: "wan",
    display:true,
    text: "wan"
}, {
    id: "mobileMenu_wifi",
    icon: "wifi",
    href: "wifi",
    display:true,
    text: "wireless"
}, {
    id: "mobileMenu_advanced",
    icon: "ios-settings",
    href: "advanced",
    display:true,
    text: "advanced"
}]