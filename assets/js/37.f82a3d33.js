(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{545:function(e,t,r){"use strict";r.r(t);var n=r(2),s=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"第一章-yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第一章-yum"}},[e._v("#")]),e._v(" 第一章 yum")]),e._v(" "),t("h3",{attrs:{id:"_1-1-本地基本挂载光盘操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-本地基本挂载光盘操作"}},[e._v("#")]),e._v(" 1.1 本地基本挂载光盘操作")]),e._v(" "),t("p",[e._v("#mount /dev/cdrom /mnt           //挂载光盘镜像")]),e._v(" "),t("p",[e._v("#df -Th            //查看是否挂载")]),e._v(" "),t("p",[e._v("#cd /etc/yum.repos.d/                //更改配置，以Media.repo为例yi")]),e._v(" "),t("p",[e._v("以下图为例")]),e._v(" "),t("p",[t("img",{attrs:{src:"yum/1.PNG",alt:"yum"}})]),e._v(" "),t("h3",{attrs:{id:"_1-2-配置本地yum源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-配置本地yum源"}},[e._v("#")]),e._v(" 1.2 配置本地YUM源")]),e._v(" "),t("p",[e._v("yum的一切配置信息都储存在一个叫yum.repos.d的配置文件中，通常位于/etc/yum.repos.d目录下")]),e._v(" "),t("p",[e._v("备份yum.repos.d下的所有文件，例如在文件后加入.bak进行备份")]),e._v(" "),t("p",[e._v("如图")]),e._v(" "),t("p",[t("img",{attrs:{src:"yum/bak.png",alt:"备份"}})]),e._v(" "),t("p",[e._v("创建一个新的yum源配置文件，yum源配置文件的结尾必须是.repo\n[root@xuegod63 yum.repos.d]# vim  CentOS7.repo  #写入以下红色内容\n[CentOS7]"),t("br"),e._v("\nname=CentOS-server"),t("br"),e._v("\nbaseurl=file:///mnt"),t("br"),e._v("\nenabled=1"),t("br"),e._v("\ngpgcheck=0"),t("br"),e._v("\n参数说明：\n[CentOS7]        ---\x3eyum的ID，必须唯一\nname=CentOS-server     -----\x3e描述信息\nbaseurl=file:///mnt    -------\x3e /mnt表示的是光盘的挂载点  . file:后面有3个///\nenabled=1   ------\x3e启用\ngpgcheck=0   ----\x3e取消验证")]),e._v(" "),t("p",[e._v("清空并生成缓存列表\n[root@localhost ~]# yum clean all\t\t\t\t#清空yum缓存\n[root@localhost ~]# yum list\t\t\t\t\t\t#生成缓存列表\n验证一下\n[root@xuegod63 yum.repos.d]# yum -y install vim")]),e._v(" "),t("h3",{attrs:{id:"_1-3-更改网络yum源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-更改网络yum源"}},[e._v("#")]),e._v(" 1.3 更改网络yum源")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup \nwget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\nmv /etc/yum.repos.d/epel.repo /etc/yum.repos.d/epel.repo.backup\nmv /etc/yum.repos.d/epel-testing.repo /etc/yum.repos.d/epel-testing.repo.backup\nwget -O /etc/yum.repos.d/epel.repo http://mirrors.aliyun.com/repo/epel-7.repo\n")])])]),t("p",[e._v("ps:yum repolist  列出yum源信息；")]),e._v(" "),t("h3",{attrs:{id:"_1-4-开机自动挂载光盘"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-开机自动挂载光盘"}},[e._v("#")]),e._v(" 1.4 开机自动挂载光盘")]),e._v(" "),t("p",[e._v("#vim /etc/fstab")]),e._v(" "),t("p",[e._v("/mnt/CentOS-6.5.iso\t/media\tiso9660\tdefaults, loop,ro\t0 0")]),e._v(" "),t("p",[e._v("#mount -a")]),e._v(" "),t("h2",{attrs:{id:"第二章-网络配置静态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#第二章-网络配置静态"}},[e._v("#")]),e._v(" 第二章 网络配置静态")]),e._v(" "),t("p",[e._v("/etc/sysconfig/network-scripts/ifcfg-eno16777728为网卡配置文件，后面的数字为查询ip add命令显示的你要更改的有ip的网卡")]),e._v(" "),t("p",[e._v("重要文件--网卡配置文件\nTYPE=Ethernet                                                     --指定网络类型 以太网Eehernet 电话10M 军用（帧中继） 金融公司（FastEthernet）\nBOOTPROTO=none                                             --网络启动协议 如何让主机得到IP地址\na. 自己手动配置 none static （静态）\nb. 自动获取地址 dhcp （动态）\nNAME=eth0                                                         --主机网卡的名称 逻辑名称\nUUID=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx     --虚拟主机的硬件标识\nDEVICE=eth0                                                        --主机网卡的名称 设备名称物理名称\nONBOOT=yes                                                       --设置网卡是否处于开启状态（激活状态）\nIPADDR=xxx.xxx.xxx.xxx                                          --静态ip地址\nPREFIX=24                                                             --子网掩码\nGATEWAY=XXX.XXX.XXX.XXX                               --网关\nDNS1=XXX.XXX.XXX.XXX")]),e._v(" "),t("p",[e._v("网关")]),e._v(" "),t("p",[e._v("#vi /etc/sysconfig/network\nNETWORKING=yes\nHOSTNAME=wgxy")]),e._v(" "),t("p",[e._v("DNS")]),e._v(" "),t("p",[e._v("#vim /etc/resolv.conf\t\t\t//dns")]),e._v(" "),t("p",[e._v("#Generated by NetworkManager\ndomain localdomain\nsearch localdomain\nnameserver 192.168.112.2")]),e._v(" "),t("p",[t("img",{attrs:{src:"yum/2.PNG",alt:"网络配置"}})]),e._v(" "),t("p",[t("img",{attrs:{src:"yum/3.PNG",alt:"注意"}})])])}),[],!1,null,null,null);t.default=s.exports}}]);