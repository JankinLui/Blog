(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{522:function(s,a,t){s.exports=t.p+"assets/img/1.bf98a426.png"},523:function(s,a,t){s.exports=t.p+"assets/img/2.bcc19901.png"},524:function(s,a,t){s.exports=t.p+"assets/img/3.50aa8be3.png"},580:function(s,a,t){"use strict";t.r(a);var e=t(2),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"第一章-dvwa安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第一章-dvwa安装"}},[s._v("#")]),s._v(" 第一章 DVWA安装")]),s._v(" "),a("p",[s._v("下载dvwa压缩包")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("Wget https://github.com/ethicalhack3r/DVWA/archive/master.zip \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_1-1-安装所需环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-安装所需环境"}},[s._v("#")]),s._v(" 1.1 安装所需环境")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" yum "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-y")]),s._v(" httpd mysql-server mysql php php-mysql ph\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注：php-gd 库：gd 库是 php 处理图形的扩展库，gd 库提供了一系列用来处理图片的 API，使用 GD 库可以处理图片，或者生成图片。 在网站上 GD 库通常用来生成缩略图或者用来对图片加水印或者对网站数据生成报表及验证码")]),s._v(" "),a("p",[s._v("全部设置开机启动，然后启动服务")]),s._v(" "),a("h3",{attrs:{id:"_1-2-测试-lamp-环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-测试-lamp-环境"}},[s._v("#")]),s._v(" 1.2 测试 LAMP 环境:")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/www/html/test.php\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-vim line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<?")]),s._v("php         "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("phpinfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("?")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("访问 http://192.168.10.9/test.php 正常，说明 LAMP 环境支持 PHP 解析没有问题")]),s._v(" "),a("p",[a("img",{attrs:{src:t(522),alt:"DVWA"}})]),s._v(" "),a("h3",{attrs:{id:"_1-3-配置-mysql-数据-root-用户密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-配置-mysql-数据-root-用户密码"}},[s._v("#")]),s._v(" 1.3 配置 mysql 数据 root 用户密码")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('mysqladmin -u root password "123456" \n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注：若已经设置 mysql 数据 root 用户密码，则更改：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root –p687145 \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> set password=password(‘123456’); \nmysql> quit \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" root "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p123456")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql> show databases; \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("将下载的 dvwa 渗透系统代码上传到 Linux 上，并解压到网站根目录下")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" /var/www/html/  DVWA-1.9.zip \n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" /var/www/html/ \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#DVWA-1.9  test.php ")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" apache:apache /var/www/html/DVWA-1.9/ "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-R")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("编辑/dvwa/config/config.inc.php,配置数据库信息，user和password是MySQL的用户名和密码。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/www/html/DVWA-1.9/config/config.inc.php  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改的地方如下:")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-test line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("1 $_DVWA[ 'db_server' ]   = '127.0.0.1'; \n2 $_DVWA[ 'db_database' ] = 'dvwa'; \n3 $_DVWA[ 'db_user' ]     = 'root'; \n$_DVWA[ 'db_password' ] = '123456';     #只需要修改成你的 mysql 的 root 用户密码\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"_1-4-部署-dvwa-网站系统"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-部署-dvwa-网站系统"}},[s._v("#")]),s._v(" 1.4 部署 DVWA 网站系统")]),s._v(" "),a("p",[s._v("在浏览器中输入：http://192.168.112.63/DVWA-1.9/setup.php")]),s._v(" "),a("p",[a("img",{attrs:{src:t(523),alt:"DVWA"}})]),s._v(" "),a("h2",{attrs:{id:"第二章-解决报错信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二章-解决报错信息"}},[s._v("#")]),s._v(" 第二章 解决报错信息")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /etc/php.ini \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("改：")]),s._v(" "),a("div",{staticClass:"language-test line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("815行 allow_url_include = Off  为： allow_url_include = On\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" httpd restart \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_2-1-解决"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-解决"}},[s._v("#")]),s._v(" 2.1 解决")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/www/html/DVWA-1.9/config/config.inc.php \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("改：")]),s._v(" "),a("div",{staticClass:"language-vim line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),s._v(" $_DVWA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recaptcha_public_key'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),s._v(" $_DVWA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recaptcha_private_key'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n为： \n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("29")]),s._v("行 $_DVWA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recaptcha_public_key'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'6LdK7xITAAzzAAJQTfL7fu6I-0aPl8KHHieAT_yJg'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n$_DVWA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'recaptcha_private_key'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'6LdK7xITAzzAAL_uw9YXVUOPoIHPZLfw2K1n5NVQ'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[s._v("顺手把 dvwa 默认的难度给调整一下：")]),s._v(" "),a("div",{staticClass:"language-vim line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-vim"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),s._v(" $_DVWA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'default_security_level'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'low'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /var/www/html/DVWA-master/hackable/uploads\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("777")]),s._v(" /var/www/html/DVWA-master/external/phpids/0.6/lib/IDS/tmp/phpids_log.txt\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[a("img",{attrs:{src:t(524),alt:"DVWA"}})]),s._v(" "),a("p",[s._v("dvwa 的登录界面的默认用户名和密码为 admin 和 password\n点 Create / Reset Database 后，等 2 秒，它会自动跳转后台管理登录页")])])}),[],!1,null,null,null);a.default=n.exports}}]);