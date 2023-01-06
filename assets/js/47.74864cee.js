(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{572:function(s,a,e){"use strict";e.r(a);var t=e(2),n=Object(t.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"第一章-实现实时同步数据的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一章-实现实时同步数据的原理"}},[s._v("#")]),s._v(" 第一章 实现实时同步数据的原理")]),s._v(" "),a("ol",[a("li",[s._v("需要部署好rsync守护进程服务，实现数据传输")]),s._v(" "),a("li",[s._v("需要部署好inotify服务，现实目录中数据变化监控")]),s._v(" "),a("li",[s._v("将rsync服务和inotify服务建立联系，将变化的数据进行实时备份传输")])]),s._v(" "),a("h2",{attrs:{id:"第二章-实时同步数据的方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二章-实时同步数据的方法"}},[s._v("#")]),s._v(" 第二章 实时同步数据的方法")]),s._v(" "),a("h3",{attrs:{id:"_2-1-部署好rsync守护进程服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-部署好rsync守护进程服务"}},[s._v("#")]),s._v(" 2.1 部署好rsync守护进程服务")]),s._v(" "),a("p",[s._v("服务端配置操作")]),s._v(" "),a("p",[s._v("客户端配置操作")]),s._v(" "),a("h3",{attrs:{id:"_2-2-部署好inotify监控服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-部署好inotify监控服务"}},[s._v("#")]),s._v(" 2.2 部署好inotify监控服务")]),s._v(" "),a("h4",{attrs:{id:"_2-2-1-第一个步骤-安装软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-第一个步骤-安装软件"}},[s._v("#")]),s._v(" 2.2.1 第一个步骤：安装软件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("yum install -y inotify-tools\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-2-2-第二个步骤-熟悉命令的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-第二个步骤-熟悉命令的使用"}},[s._v("#")]),s._v(" 2.2.2 第二个步骤：熟悉命令的使用")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/usr/bin/inotifywait              ---监控目录数据信息变化\n/usr/bin/inotifywatch           ---对监控的变化信息进行统计\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h4",{attrs:{id:"_2-2-3-inotifywait命令使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-inotifywait命令使用方法"}},[s._v("#")]),s._v(" 2.2.3 inotifywait命令使用方法")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("-m| --monitor                      ---实现一直监控目录的数据变化\n-r |  --recursive                  ---进行递归监控\n-q | --quiet                       ---尽量减少信息的输出\n--format <fmt>                     ---指定输出信息的格式\n--timefmt <fmt>                    ---指定输出的时间信息格式\n-e | ---event                      ---指定监控的事件信息\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"_2-2-4-创建文件监控信息输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-创建文件监控信息输出"}},[s._v("#")]),s._v(" 2.2.4 创建文件监控信息输出")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/data/   CREATE   user13            ---一个文件被创建\n/data/   OPEN user13                ---打开创建的文件\n/data/   ATTRIB user13              ---修改文件的属性信息\n/data/   CLOSE_WRITE,CLOSE user13   ---保存关闭一个文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_2-2-5-删除文件监控信息输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-5-删除文件监控信息输出"}},[s._v("#")]),s._v(" 2.2.5 删除文件监控信息输出")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/data/   DELETE   user13\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-2-6-修改文件监控信息输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-6-修改文件监控信息输出"}},[s._v("#")]),s._v(" 2.2.6 修改文件监控信息输出")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/data/   CREATE   user13            ---一个文件被创建\n/data/   OPEN user13                ---打开创建的文件\n/data/   MODIFY user13              ---修改文件的内容信息\n/data/   CLOSE_WRITE,CLOSE user13   ---保存关闭一个文件\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_2-2-7-inotify监控命令格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-7-inotify监控命令格式"}},[s._v("#")]),s._v(" 2.2.7 inotify监控命令格式")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('inotifywait -mrq --timefmt "%F" --format "%T %w %f 事件信息：%e" /home/ljq/yunw -e CREATE\ncreate创建、delete删除、moved_to移入、close_write修改\n显示信息：\n2020-07-09 /home/ljq/yunw/ 05.txt 事件信息：CREATE\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_2-2-8-企业应用-防止系统重要文件被破坏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-8-企业应用-防止系统重要文件被破坏"}},[s._v("#")]),s._v(" 2.2.8 企业应用：防止系统重要文件被破坏")]),s._v(" "),a("p",[s._v("需要用到inotify进行实时一直监控  例如：/etc")]),s._v(" "),a("h3",{attrs:{id:"_2-3-部署好sersync实时同步服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-部署好sersync实时同步服务"}},[s._v("#")]),s._v(" 2.3 部署好sersync实时同步服务")]),s._v(" "),a("h4",{attrs:{id:"_2-3-1-第一个历程-需要下载安装软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-第一个历程-需要下载安装软件"}},[s._v("#")]),s._v(" 2.3.1 第一个历程：需要下载安装软件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("https://github.com/wsgzao/sersync\nhttps://codeload.github.com/wsgzao/sersync/zip/master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("上传到Linux服务器的/server/tools")]),s._v(" "),a("blockquote",[a("p",[s._v("ps：软件都放到一个目录，便于管理")])]),s._v(" "),a("h4",{attrs:{id:"_2-3-2-第二个历程-解压软件压缩包-将压缩的数据进行保存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-2-第二个历程-解压软件压缩包-将压缩的数据进行保存"}},[s._v("#")]),s._v(" 2.3.2 第二个历程：解压软件压缩包，将压缩的数据进行保存")]),s._v(" "),a("p",[s._v("unzip 压缩包名称")]),s._v(" "),a("p",[s._v("创建sersync目录结构")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim sersync_jb.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mkdir /usr/local/sersync\nmkdir /usr/local/sersync/conf\nmkdir /usr/local/sersync/bin\nmkdir /usr/local/sersync/log\ncd /server/tools/sersync-master/GNU-Linux-x86/\ncp confxml.xml /usr/local/sersync/conf\ncp sersync2 /usr/local/sersync/bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sh sersync_jb.sh\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h4",{attrs:{id:"_2-3-3-第三个历程-编写配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-3-第三个历程-编写配置文件"}},[s._v("#")]),s._v(" 2.3.3 第三个历程：编写配置文件")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("vim /usr/local/sersync/conf/confxml.xml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v(' 6     <filter start="false">\n7         <exclude expression="(.*)\\.svn"></exclude>\n8         <exclude expression="(.*)\\.gz"></exclude>\n9         <exclude expression="^info/*"></exclude>\n10         <exclude expression="^static/*"></exclude>\n11     </filter>\n说明：排除指定数据信息不要进行实时传输同步，默认关闭\n\t\t\t\t\t\n12     <inotify>\n13         <delete start="true"/>\n14         <createFolder start="true"/>\n15         <createFile start="false"/>\n16         <closeWrite start="true"/>\n17         <moveFrom start="true"/>\n18         <moveTo start="true"/>\n19         <attrib start="false"/>\n20         <modify start="false"/>\n21     </inotify>\n说明：定义inotify程序监控事件需要同步的内容\n\t\t\t\t\t\n24         <localpath watch="/opt/tongbu">                                                      //指定监控的目录\n25             <remote ip="127.0.0.1" name="tongbu1"/>                                     //指定备份服务器地址   指定备份服务器模块信息\n26             \x3c!--<remote ip="192.168.8.39" name="tongbu"/>--\x3e\n27             \x3c!--<remote ip="192.168.8.40" name="tongbu"/>--\x3e\n28         </localpath>\n29         <rsync>\n30             <commonParams params="-artuz"/>                                              //指定rsync推送命令参数\n31             <auth start="false" users="root" passwordfile="/etc/rsync.pas"/>       //指定认证用户   指定认证用户密码文件\n32             <userDefinedPort start="false" port="874"/>\x3c!-- port=874 --\x3e\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])]),a("h4",{attrs:{id:"_2-3-4-第四个历程-启动sersync服务程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-第四个历程-启动sersync服务程序"}},[s._v("#")]),s._v(" 2.3.4 第四个历程：启动sersync服务程序")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('export PATH="$PATH:/usr/local/sersync/bin"\necho $PATH\n#/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/root/bin:/usr/local/sersync/bin\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h5",{attrs:{id:"_2-3-4-1-执行实时同步程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-1-执行实时同步程序"}},[s._v("#")]),s._v(" 2.3.4.1 执行实时同步程序")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("sersync2 -dro /usr/local/sersync/conf/confxml.xml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h5",{attrs:{id:"_2-3-4-2-关闭实时同步程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-4-2-关闭实时同步程序"}},[s._v("#")]),s._v(" 2.3.4.2 关闭实时同步程序")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("ps -ef | grep sersync\n#root      6186     1  0 05:17 ?        00:00:00 sersync2 -dro /usr/local/sersync/conf/confxml.xml\n#root      6229     1  0 05:18 ?        00:00:00 sersync2 -dro /usr/local/sersync/conf/confxml.xml\n#root      6280     1  0 05:21 ?        00:00:00 sersync2 -dro /usr/local/sersync/conf/confxml.xml\n#root      6370  6248  0 05:27 pts/1    00:00:00 grep --color=auto sersync\nyum provides killall\nyum install -y psmisc\nkillall sersync2\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("blockquote",[a("p",[s._v("ps：killall以进程名kill所有进程，sersync个人开发的脚本程序，比较弱智，需要手动kill进程")])]),s._v(" "),a("h4",{attrs:{id:"_2-3-5-第五个历程-实现开机自启动"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-5-第五个历程-实现开机自启动"}},[s._v("#")]),s._v(" 2.3.5 第五个历程：实现开机自启动")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/etc/rc.local <-- sersync2 -dro /usr/local/sersync/conf/confxml.xml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=n.exports}}]);