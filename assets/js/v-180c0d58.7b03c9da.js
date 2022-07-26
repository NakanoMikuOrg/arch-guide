(self.webpackChunkarch_guide=self.webpackChunkarch_guide||[]).push([[265],{5254:(l,e,n)=>{"use strict";n.r(e),n.d(e,{data:()=>a});const a={key:"v-180c0d58",path:"/apps/collaboration.html",title:"多屏协同",lang:"zh-CN",frontmatter:{sidebarDepth:2},excerpt:"",headers:[{level:3,title:"📲 二人同心，其利断金",slug:"📲-二人同心-其利断金",children:[]},{level:3,title:"🔖 这一节将会讨论：",slug:"🔖-这一节将会讨论",children:[]},{level:2,title:"🤖 安卓设备投屏（scrcpy）",slug:"🤖-安卓设备投屏-scrcpy",children:[{level:3,title:"有线连接",slug:"有线连接",children:[]},{level:3,title:"无线连接",slug:"无线连接",children:[]},{level:3,title:"快捷使用",slug:"快捷使用",children:[]}]},{level:2,title:"🍎 苹果设备投屏（UxPlay）",slug:"🍎-苹果设备投屏-uxplay",children:[]},{level:2,title:"🔗 KDE Connect",slug:"🔗-kde-connect",children:[]}],filePathRelative:"apps/collaboration.md",git:{updatedTime:1656780873e3,contributors:[{name:"Seele",email:"48525679+Seele0oO@users.noreply.github.com",commits:1},{name:"icekylin",email:"wminid@yeah.net",commits:1}]}}},839:(l,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>mn});var a=n(6252);const s=n.p+"assets/img/scrcpy-1.67813f20.jpg",m=n.p+"assets/img/scrcpy-2.38ecfa69.jpg",t=n.p+"assets/img/scrcpy-3.e48e114e.png",c=n.p+"assets/img/scrcpy-4.487b14b0.png",r=n.p+"assets/img/scrcpy-5.b34d8035.png",u=n.p+"assets/img/scrcpy-6.c94479f0.jpg",i=n.p+"assets/img/scrcpy-7.c876cb46.png",W=n.p+"assets/img/scrcpy-8.901c9032.png",o=n.p+"assets/img/scrcpy-9.fcdad162.png",d=n.p+"assets/img/uxplay-1.3abc6d78.png",p=n.p+"assets/img/uxplay-2.4b066a63.png",h=n.p+"assets/img/uxplay-3.fe934fa2.png",g=n.p+"assets/img/uxplay-4.37680bd6.png",k=n.p+"assets/img/kdeconnect-1.f6c3416d.png",b=n.p+"assets/img/kdeconnect-2.d9382ee5.jpg",U=n.p+"assets/img/kdeconnect-3.1c7a62f3.png",y=(0,a.Wm)("h1",{id:"多屏协同",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#多屏协同","aria-hidden":"true"},"#"),(0,a.Uk)(" 多屏协同")],-1),f=(0,a.Wm)("blockquote",null,[(0,a.Wm)("h3",{id:"📲-二人同心-其利断金",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#📲-二人同心-其利断金","aria-hidden":"true"},"#"),(0,a.Uk)(" 📲 二人同心，其利断金")]),(0,a.Wm)("p",null,"本小节内容讨论如何投屏安卓或苹果设备到 archlinux 上以及安卓设备如何和 archlinux 协同工作。")],-1),x=(0,a.Wm)("h3",{id:"🔖-这一节将会讨论",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#🔖-这一节将会讨论","aria-hidden":"true"},"#"),(0,a.Uk)(" 🔖 这一节将会讨论：")],-1),v={class:"custom-container details"},_=(0,a.Wm)("summary",null,"目录",-1),w={class:"table-of-contents"},E=(0,a.Uk)("# 📲 二人同心，其利断金"),S=(0,a.Uk)("# 🔖 这一节将会讨论："),P=(0,a.Uk)("# 🤖 安卓设备投屏（scrcpy）"),B=(0,a.Uk)("# 有线连接"),D=(0,a.Uk)("# 无线连接"),A=(0,a.Uk)("# 快捷使用"),C=(0,a.Uk)("# 🍎 苹果设备投屏（UxPlay）"),z=(0,a.Uk)("# 🔗 KDE Connect"),O={class:"custom-container tip"},j=(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),I=(0,a.Uk)("指南中带有 "),R=(0,a.Wm)("sup",null,"aur",-1),K=(0,a.Uk)(" 角标的软件代表是在 "),L={href:"https://aur.archlinux.org/",target:"_blank",rel:"noopener noreferrer"},N=(0,a.Uk)("AUR"),G=(0,a.Uk)("（Arch User Repository）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。"),q=(0,a.Uk)("指南中带有 "),H=(0,a.Wm)("sup",null,"cn",-1),F=(0,a.Uk)(" 角标的软件代表是在 "),T={href:"https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/",target:"_blank",rel:"noopener noreferrer"},X=(0,a.Uk)("archlinuxcn"),M=(0,a.Uk)("（Arch Linux 中文社区仓库）中用户自行打包的软件。不在 arch 官方支持范围内，可能会出现各种问题如更新不及时、无法安装、使用出错等。"),V=(0,a.Uk)("指南中带有 "),Y=(0,a.Wm)("sup",null,"EULA",-1),Z=(0,a.Uk)(" 角标的软件代表是 "),J={href:"https://www.gnu.org/proprietary/proprietary.html",target:"_blank",rel:"noopener noreferrer"},Q=(0,a.Uk)("专有软件"),$=(0,a.Uk)("。请自行斟酌是否使用。"),ll=(0,a.Wm)("h2",{id:"🤖-安卓设备投屏-scrcpy",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#🤖-安卓设备投屏-scrcpy","aria-hidden":"true"},"#"),(0,a.Uk)(" 🤖 安卓设备投屏（scrcpy）")],-1),el={href:"https://github.com/Genymobile/scrcpy/blob/master/README.zh-Hans.md",target:"_blank",rel:"noopener noreferrer"},nl=(0,a.Uk)("scrcpy"),al=(0,a.Uk)(" 可以显示并控制通过 USB 或无线连接的安卓设备，且不需要任何 root 权限。"),sl=(0,a.Wm)("p",null,"scrcpy 有以下优点：",-1),ml=(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,"轻量（原生，仅显示设备屏幕）"),(0,a.Wm)("li",null,"性能（30 ~ 60fps）"),(0,a.Wm)("li",null,"质量（分辨率可达 1920×1080 或更高）"),(0,a.Wm)("li",null,"低延迟（35 ~ 70ms）"),(0,a.Wm)("li",null,"快速启动（最快 1 秒内即可显示第一帧）"),(0,a.Wm)("li",null,"无侵入性（不会在设备上遗留任何程序）")],-1),tl=(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,"安卓版本要大于等于 5.0。")],-1),cl=(0,a.Uk)("安装 "),rl={href:"https://aur.archlinux.org/packages/scrcpy/",target:"_blank",rel:"noopener noreferrer"},ul=(0,a.Uk)("scrcpy"),il=(0,a.Wm)("sup",null,"cn / aur",-1),Wl=(0,a.Uk)(" 以及 "),ol={href:"https://archlinux.org/packages/community/x86_64/android-tools/",target:"_blank",rel:"noopener noreferrer"},dl=(0,a.Uk)("安卓工具包"),pl=(0,a.Uk)("："),hl=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" pacman -S scrcpy android-tools\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),gl=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"yay -S aur/scrcpy android-tools\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),kl=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"yay -S scrcpy-git android-tools\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),bl=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("打开安卓设备的 "),(0,a.Wm)("code",null,"设置"),(0,a.Uk)(" > "),(0,a.Wm)("code",null,"开发人员选项"),(0,a.Uk)("（多次点击 "),(0,a.Wm)("code",null,"关于手机（平板）"),(0,a.Uk)(" 中的 "),(0,a.Wm)("code",null,"版本号"),(0,a.Uk)("，提示处在 "),(0,a.Wm)("code",null,"开发者模式"),(0,a.Uk)(" 后即可在设置中找到）> 打开 "),(0,a.Wm)("code",null,"USB 调试"),(0,a.Uk)("：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:s,alt:"scrcpy-1"})]),(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,[(0,a.Uk)("部分设备还需要开启 "),(0,a.Wm)("code",null,"USB 调试（安全设置）"),(0,a.Uk)("。")])])],-1),Ul=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("通过数据线连接安卓设备和计算机 > 将 "),(0,a.Wm)("code",null,"USB 连接方式"),(0,a.Uk)(" 改为 "),(0,a.Wm)("code",null,"传输文件"),(0,a.Uk)("：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:m,alt:"scrcpy-2"})])],-1),yl=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"在终端执行以下命令："),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"adb devices\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])]),(0,a.Wm)("p",null,"终端上也会显示连接的安卓设备号："),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:t,alt:"scrcpy-3"})]),(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,"如果是第一次执行这条命令（或没有永远信任计算机），在安卓设备上应该会出现一个确认使用该电脑调试安卓设备的通知，确认即可。")]),(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,[(0,a.Uk)("有些设备可能会自动关闭 "),(0,a.Wm)("code",null,"USB 调试"),(0,a.Uk)("，若没有显示请确认 "),(0,a.Wm)("code",null,"USB 调试"),(0,a.Uk)(" 开启。")])])],-1),fl=(0,a.Wm)("h3",{id:"有线连接",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#有线连接","aria-hidden":"true"},"#"),(0,a.Uk)(" 有线连接")],-1),xl=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"保持数据线连接，直接在终端执行以下命令即可："),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"scrcpy\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:c,alt:"scrcpy-4"})]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:r,alt:"scrcpy-5"})])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"关闭窗口即可结束连接")])],-1),vl=(0,a.Wm)("h3",{id:"无线连接",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#无线连接","aria-hidden":"true"},"#"),(0,a.Uk)(" 无线连接")],-1),_l=(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"保持数据线连接，执行以下命令："),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)("adb tcpip "),(0,a.Wm)("span",{class:"token number"},"8848"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token comment"},"# 可自定义端口，默认为 5555"),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"开启成功之后就可以拔掉数据线了")]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("打开安卓设备的 "),(0,a.Wm)("code",null,"设置"),(0,a.Uk)(" > "),(0,a.Wm)("code",null,"关于手机（平板）"),(0,a.Uk)(" > "),(0,a.Wm)("code",null,"状态信息"),(0,a.Uk)("（或类似位置）> 查看手机（平板）的 "),(0,a.Wm)("code",null,"IP 地址"),(0,a.Uk)("：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:u,alt:"scrcpy-6"})])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"在终端执行以下命令即可看到现在的安卓设备界面了："),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)("adb connect ANDROID_IP:8848 "),(0,a.Wm)("span",{class:"token comment"},"# 刚刚自定义的端口"),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])]),(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,[(0,a.Uk)("部分设备可能无法通过无线连接（断开数据线后会自动关闭 "),(0,a.Wm)("code",null,"USB 调试"),(0,a.Uk)("），会显示以下错误信息：")]),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)("failed to connect to "),(0,a.Wm)("span",{class:"token number"},"192.168"),(0,a.Uk)(".x.xxx:xxxx\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])])])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"连接成功后在终端执行以下命令即可看到现在的安卓设备界面了："),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"scrcpy\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:i,alt:"scrcpy-7"})]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:W,alt:"scrcpy-8"})]),(0,a.Wm)("div",{class:"custom-container tip"},[(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示"),(0,a.Wm)("p",null,"若报以下错误："),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Uk)("adb: error: failed to get feature set: "),(0,a.Wm)("span",{class:"token function"},"more"),(0,a.Uk)(" than one device/emulator\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])]),(0,a.Wm)("p",null,"请执行以下步骤后再尝试："),(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("通过 "),(0,a.Wm)("code",null,"adb devices"),(0,a.Uk)(" 命令查看信息，找到不存在的设备（因连接失败留下的，显示为 "),(0,a.Wm)("code",null,"offline"),(0,a.Uk)("）")])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"断开不存在的设备："),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"adb disconnect HOST:PORT\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:o,alt:"scrcpy-9"})])])])])]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"关闭窗口即可结束连接")])],-1),wl=(0,a.Wm)("h3",{id:"快捷使用",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#快捷使用","aria-hidden":"true"},"#"),(0,a.Uk)(" 快捷使用")],-1),El=(0,a.Wm)("p",null,"下面介绍一些快捷使用的方法。",-1),Sl=(0,a.Wm)("h4",{id:"常用快捷键",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#常用快捷键","aria-hidden":"true"},"#"),(0,a.Uk)(" 常用快捷键")],-1),Pl=(0,a.Wm)("table",null,[(0,a.Wm)("thead",null,[(0,a.Wm)("tr",null,[(0,a.Wm)("th",{style:{"text-align":"left"}},"作用"),(0,a.Wm)("th",{style:{"text-align":"left"}},"快捷键")])]),(0,a.Wm)("tbody",null,[(0,a.Wm)("tr",null,[(0,a.Wm)("td",{style:{"text-align":"left"}},"返回"),(0,a.Wm)("td",{style:{"text-align":"left"}},[(0,a.Wm)("code",null,"meta"),(0,a.Uk)(" + "),(0,a.Wm)("code",null,"B")])]),(0,a.Wm)("tr",null,[(0,a.Wm)("td",{style:{"text-align":"left"}},"主界面"),(0,a.Wm)("td",{style:{"text-align":"left"}},[(0,a.Wm)("code",null,"meta"),(0,a.Uk)(" + "),(0,a.Wm)("code",null,"H")])]),(0,a.Wm)("tr",null,[(0,a.Wm)("td",{style:{"text-align":"left"}},"多任务界面"),(0,a.Wm)("td",{style:{"text-align":"left"}},[(0,a.Wm)("code",null,"meta"),(0,a.Uk)(" + "),(0,a.Wm)("code",null,"S")])]),(0,a.Wm)("tr",null,[(0,a.Wm)("td",{style:{"text-align":"left"}},"关闭手机屏幕（电脑上的界面正常显示）"),(0,a.Wm)("td",{style:{"text-align":"left"}},[(0,a.Wm)("code",null,"meta"),(0,a.Uk)(" + "),(0,a.Wm)("code",null,"O")])]),(0,a.Wm)("tr",null,[(0,a.Wm)("td",{style:{"text-align":"left"}},"开启手机屏幕"),(0,a.Wm)("td",{style:{"text-align":"left"}},"右键单击")]),(0,a.Wm)("tr",null,[(0,a.Wm)("td",{style:{"text-align":"left"}},"展开通知栏"),(0,a.Wm)("td",{style:{"text-align":"left"}},[(0,a.Wm)("code",null,"meta"),(0,a.Uk)(" + "),(0,a.Wm)("code",null,"N")])]),(0,a.Wm)("tr",null,[(0,a.Wm)("td",{style:{"text-align":"left"}},"折叠通知栏"),(0,a.Wm)("td",{style:{"text-align":"left"}},[(0,a.Wm)("code",null,"meta"),(0,a.Uk)(" + "),(0,a.Wm)("code",null,"Shift"),(0,a.Uk)(" + "),(0,a.Wm)("code",null,"N")])])])],-1),Bl=(0,a.Wm)("h4",{id:"文件传输",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#文件传输","aria-hidden":"true"},"#"),(0,a.Uk)(" 文件传输")],-1),Dl=(0,a.Wm)("p",null,"若需要将计算机的文件传到安卓设备，直接将文件拖拽到计算机上的安卓设备界面即可。文件默认存放在用户的主目录下。",-1),Al=(0,a.Uk)("若感觉不太方便可使用 "),Cl=(0,a.Uk)("KDE Connect"),zl=(0,a.Uk)(" 协同 scrcpy 使用。"),Ol=(0,a.Wm)("h4",{id:"屏幕常亮",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#屏幕常亮","aria-hidden":"true"},"#"),(0,a.Uk)(" 屏幕常亮")],-1),jl=(0,a.Wm)("p",null,[(0,a.Uk)("在连接到电脑之后很可能都希望手机息屏而计算机端的镜像可以常亮，虽然可以通过键盘快捷键 "),(0,a.Wm)("code",null,"meta"),(0,a.Uk)(" + "),(0,a.Wm)("code",null,"O"),(0,a.Uk)(" 来实现，但这种方式实现的亮屏会在达到手机屏幕休眠时间之后自动黑屏。")],-1),Il=(0,a.Wm)("p",null,"所以想要实现常亮的话需要在启动 scrcpy 的时候添加一个可以保持屏幕唤醒的参数：",-1),Rl=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"scrcpy --turn-screen-off --stay-awake\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Kl=(0,a.Wm)("p",null,[(0,a.Uk)("若亮屏是常用选项，可将这个命令设置为 scrcpy 的别名（alias）。只需要使用以下命令在 "),(0,a.Wm)("code",null,"~/.zshrc"),(0,a.Uk)(" 或者 "),(0,a.Wm)("code",null,"~/.bashrc"),(0,a.Uk)(" 中添加如下内容 > 重新打开终端或者 "),(0,a.Wm)("code",null,"source"),(0,a.Uk)(" 该文件即可：")],-1),Ll=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token builtin class-name"},"echo"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},"'alias scrcpy=\"scrcpy --turn-screen-off --stay-awake\"'"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token operator"},">>"),(0,a.Uk)(" ~/.bashrc\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Nl=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token builtin class-name"},"echo"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},"'alias scrcpy=\"scrcpy --turn-screen-off --stay-awake\"'"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token operator"},">>"),(0,a.Uk)(" ~/.zshrc\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Gl=(0,a.Wm)("h2",{id:"🍎-苹果设备投屏-uxplay",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#🍎-苹果设备投屏-uxplay","aria-hidden":"true"},"#"),(0,a.Uk)(" 🍎 苹果设备投屏（UxPlay）")],-1),ql={href:"https://github.com/antimof/UxPlay",target:"_blank",rel:"noopener noreferrer"},Hl=(0,a.Uk)("UxPlay"),Fl=(0,a.Uk)(" 是一款将 iPadOS 或 IOS 投屏到 Linux 的软件。该项目是 UNIX / 类 UNIX 系统中 AirPlay 服务器的早期原型。"),Tl=(0,a.Uk)("通过投屏到 archlinux 可以方便的在 "),Xl=(0,a.Uk)("Zoom"),Ml=(0,a.Uk)(" 等各种情景下将内容分享给他人（课堂演示等等）。"),Vl=(0,a.Wm)("details",{class:"custom-container details"},[(0,a.Wm)("summary",null,"视频指南（视频不清晰请前往哔哩哔哩观看）"),(0,a.Wm)("div",{style:{position:"relative",padding:"30% 45%","margin-top":"32px"}},[(0,a.Wm)("iframe",{style:{position:"absolute",width:"100%",height:"100%",left:"0",top:"0"},src:"//player.bilibili.com/player.html?aid=972705991&bvid=BV1fp4y1t71r&cid=328263624&page=1&as_wide=1&high_quality=1&danmaku=1",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true"})])],-1),Yl=(0,a.Uk)("安装 "),Zl={href:"https://aur.archlinux.org/packages/uxplay-git/",target:"_blank",rel:"noopener noreferrer"},Jl=(0,a.Uk)("UxPlay"),Ql=(0,a.Wm)("sup",null,"aur",-1),$l=(0,a.Uk)("："),le=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"yay -S uxplay-git\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),ee=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("启动 "),(0,a.Wm)("code",null,"avahi-daemon"),(0,a.Uk)(" 服务：")]),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" systemctl start avahi-daemon.service\nsystemctl status avahi-daemon.service "),(0,a.Wm)("span",{class:"token comment"},"# 复查一下"),(0,a.Uk)("\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br"),(0,a.Wm)("span",{class:"line-number"},"2"),(0,a.Wm)("br")])])],-1),ne=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("确保计算机和 iPad 或者 iPhone 连接至同一个 "),(0,a.Wm)("strong",null,"5Ghz"),(0,a.Uk)(" 无线网络")])],-1),ae=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"在终端执行以下命令启动 UxPlay："),(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"uxplay\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:d,alt:"uxplay-1"})])],-1),se=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("在 iPad 或 iPhone 中打开屏幕镜像，选择并连接 "),(0,a.Wm)("code",null,"Uxplay"),(0,a.Uk)("，等待一会即可：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:p,alt:"uxplay-2"})]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:h,alt:"uxplay-3"})])],-1),me={class:"custom-container tip"},te=(0,a.uE)('<p class="custom-container-title">ℹ️ 提示</p><p>每次运行 UxPlay 之前都需要开启 <code>avahi-daemon</code> 服务，若觉得麻烦可将其添加到自动启动中：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl <span class="token builtin class-name">enable</span> avahi-daemon.service\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>或者使用以下命令创建 <code>uxplay</code> 命令的别名（alias），只需要使用以下命令在 <code>~/.zshrc</code> 或者 <code>~/.bashrc</code> 中添加如下内容 &gt; 重新打开终端或者 <code>source</code> 该文件即可：</p>',4),ce=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token builtin class-name"},"echo"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},"'alias uxplay=\"sudo systemctl start avahi-daemon.service && uxplay\"'"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token operator"},">>"),(0,a.Uk)(" ~/.bashrc\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),re=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token builtin class-name"},"echo"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token string"},"'alias scrcpy=\"sudo systemctl start avahi-daemon.service && uxplay\"'"),(0,a.Uk)(),(0,a.Wm)("span",{class:"token operator"},">>"),(0,a.Uk)(" ~/.zshrc\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),ue={class:"custom-container tip"},ie=(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),We=(0,a.Uk)("若使用了 "),oe=(0,a.Uk)("透明代理"),de=(0,a.Uk)("，请将 "),pe=(0,a.Wm)("code",null,"/usr/bin/uxplay",-1),he=(0,a.Uk)(" 添加到 "),ge=(0,a.Wm)("code",null,"/etc/cgproxy/config.json",-1),ke=(0,a.Uk)(" 中的 "),be=(0,a.Wm)("code",null,"program_noproxy",-1),Ue=(0,a.Uk)(" 一行（不使用透明代理的名单）："),ye=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:g,alt:"uxplay-4"})],-1),fe=(0,a.Wm)("h2",{id:"🔗-kde-connect",tabindex:"-1"},[(0,a.Wm)("a",{class:"header-anchor",href:"#🔗-kde-connect","aria-hidden":"true"},"#"),(0,a.Uk)(" 🔗 KDE Connect")],-1),xe={href:"https://kdeconnect.kde.org/",target:"_blank",rel:"noopener noreferrer"},ve=(0,a.Uk)("KDE Connect"),_e=(0,a.Uk)(" 提供了各种用于整合移动设备和计算机的功能。它可以将文件发送到另一台设备、控制它的媒体播放、发送远程输入、查看它的通知，以及做许多其它事情。"),we=(0,a.Uk)("安装 "),Ee={href:"https://archlinux.org/packages/extra/x86_64/kdeconnect/",target:"_blank",rel:"noopener noreferrer"},Se=(0,a.Uk)("KDE Connect"),Pe=(0,a.Wm)("sup",null,"extra / cn / aur",-1),Be=(0,a.Uk)(" 及其相关可选依赖："),De=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" pacman -S kdeconnect sshfs\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Ae=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,[(0,a.Wm)("span",{class:"token function"},"sudo"),(0,a.Uk)(" pacman -S skdeconnect-git sshfs\n")])]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),Ce=(0,a.Wm)("div",{class:"language-bash ext-sh line-numbers-mode"},[(0,a.Wm)("pre",{class:"language-bash"},[(0,a.Wm)("code",null,"yay -S aur/kdeconnect-git sshfs\n")]),(0,a.Wm)("div",{class:"line-numbers"},[(0,a.Wm)("span",{class:"line-number"},"1"),(0,a.Wm)("br")])],-1),ze=(0,a.Uk)("移动端可在 "),Oe={href:"https://play.google.com/store/apps/details?id=org.kde.kdeconnect_tp",target:"_blank",rel:"noopener noreferrer"},je=(0,a.Uk)("Google Play"),Ie=(0,a.Uk)(),Re={href:"https://apps.apple.com/us/app/kde-connect/id1580245991",target:"_blank",rel:"noopener noreferrer"},Ke=(0,a.Uk)("App Store"),Le=(0,a.Uk)("下载并安装"),Ne=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"将计算机和移动设备连接至同一个无线网络，根据提示信任并连接即可："),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:k,alt:"kdeconnect-1"})])],-1),Ge=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[(0,a.Uk)("为了让计算机可以访问移动设备的文件系统，需要在移动设备点击对应计算机右上角的 "),(0,a.Wm)("code",null,"更多按钮"),(0,a.Uk)("（三个点） > "),(0,a.Wm)("code",null,"插件设置"),(0,a.Uk)(" > 打开 "),(0,a.Wm)("code",null,"开放文件系统"),(0,a.Uk)(" > 点击 "),(0,a.Wm)("code",null,"开放文件系统"),(0,a.Uk)(" 进入 "),(0,a.Wm)("code",null,"开放文件系统设置"),(0,a.Uk)(" > "),(0,a.Wm)("code",null,"添加储存位置"),(0,a.Uk)(" > 选择要共享的文件夹：")]),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:b,alt:"kdeconnect-2"})])],-1),qe=(0,a.Wm)("li",null,[(0,a.Wm)("p",null,"然后便可以在 Dolphin 中查看并操作移动设备的文件系统了："),(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:U,alt:"kdeconnect-3"})])],-1),He={class:"custom-container tip"},Fe=(0,a.Wm)("p",{class:"custom-container-title"},"ℹ️ 提示",-1),Te=(0,a.Uk)("若使用了 "),Xe=(0,a.Uk)("透明代理"),Me=(0,a.Uk)("，请将 "),Ve=(0,a.Wm)("code",null,"/usr/lib/kdeconnectd",-1),Ye=(0,a.Uk)(" 添加到 "),Ze=(0,a.Wm)("code",null,"/etc/cgproxy/config.json",-1),Je=(0,a.Uk)(" 中的 "),Qe=(0,a.Wm)("code",null,"program_noproxy",-1),$e=(0,a.Uk)(" 一行（不使用透明代理的名单）："),ln=(0,a.Wm)("p",null,[(0,a.Wm)("img",{src:g,alt:"uxplay-4"})],-1),en=(0,a.Wm)("hr",null,null,-1),nn=(0,a.Wm)("p",null,"📔 本节参考资料：",-1),an={href:"https://www.dianbanjiu.com/post/android-%E6%89%8B%E6%9C%BA%E6%8A%95%E5%B1%8F%E5%88%B0-linux-%E4%B8%8B/",target:"_blank",rel:"noopener noreferrer"},sn=(0,a.Uk)("Android 手机投屏到 Linux 下"),mn={render:function(l,e){const n=(0,a.up)("RouterLink"),s=(0,a.up)("OutboundLink"),m=(0,a.up)("CodeGroupItem"),t=(0,a.up)("CodeGroup");return(0,a.wg)(),(0,a.j4)(a.HY,null,[y,f,(0,a.Wm)("blockquote",null,[x,(0,a.Wm)("details",v,[_,(0,a.Wm)("nav",w,[(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#📲-二人同心-其利断金"},{default:(0,a.w5)((()=>[E])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#🔖-这一节将会讨论"},{default:(0,a.w5)((()=>[S])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#🤖-安卓设备投屏-scrcpy"},{default:(0,a.w5)((()=>[P])),_:1}),(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#有线连接"},{default:(0,a.w5)((()=>[B])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#无线连接"},{default:(0,a.w5)((()=>[D])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#快捷使用"},{default:(0,a.w5)((()=>[A])),_:1})])])]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#🍎-苹果设备投屏-uxplay"},{default:(0,a.w5)((()=>[C])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)(n,{to:"#🔗-kde-connect"},{default:(0,a.w5)((()=>[z])),_:1})])])])])]),(0,a.Wm)("div",O,[j,(0,a.Wm)("p",null,[I,R,K,(0,a.Wm)("a",L,[N,(0,a.Wm)(s)]),G]),(0,a.Wm)("p",null,[q,H,F,(0,a.Wm)("a",T,[X,(0,a.Wm)(s)]),M]),(0,a.Wm)("p",null,[V,Y,Z,(0,a.Wm)("a",J,[Q,(0,a.Wm)(s)]),$])]),ll,(0,a.Wm)("p",null,[(0,a.Wm)("a",el,[nl,(0,a.Wm)(s)]),al]),sl,ml,tl,(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[cl,(0,a.Wm)("a",rl,[ul,(0,a.Wm)(s)]),il,Wl,(0,a.Wm)("a",ol,[dl,(0,a.Wm)(s)]),pl]),(0,a.Wm)(t,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{title:"cn"},{default:(0,a.w5)((()=>[hl])),_:1}),(0,a.Wm)(m,{title:"aur"},{default:(0,a.w5)((()=>[gl])),_:1}),(0,a.Wm)(m,{title:"aur (git)"},{default:(0,a.w5)((()=>[kl])),_:1})])),_:1})]),bl,Ul,yl]),fl,xl,vl,_l,wl,El,Sl,Pl,Bl,Dl,(0,a.Wm)("p",null,[Al,(0,a.Wm)(n,{to:"/apps/collaboration.html#%F0%9F%94%97-kde-connect"},{default:(0,a.w5)((()=>[Cl])),_:1}),zl]),Ol,jl,Il,Rl,Kl,(0,a.Wm)(t,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{title:"bash"},{default:(0,a.w5)((()=>[Ll])),_:1}),(0,a.Wm)(m,{title:"zsh"},{default:(0,a.w5)((()=>[Nl])),_:1})])),_:1}),Gl,(0,a.Wm)("p",null,[(0,a.Wm)("a",ql,[Hl,(0,a.Wm)(s)]),Fl]),(0,a.Wm)("p",null,[Tl,(0,a.Wm)(n,{to:"/apps/communication.html#zoom"},{default:(0,a.w5)((()=>[Xl])),_:1}),Ml]),Vl,(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[Yl,(0,a.Wm)("a",Zl,[Jl,(0,a.Wm)(s)]),Ql,$l]),le]),ee,ne,ae,se]),(0,a.Wm)("div",me,[te,(0,a.Wm)(t,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{title:"bash"},{default:(0,a.w5)((()=>[ce])),_:1}),(0,a.Wm)(m,{title:"zsh"},{default:(0,a.w5)((()=>[re])),_:1})])),_:1})]),(0,a.Wm)("div",ue,[ie,(0,a.Wm)("p",null,[We,(0,a.Wm)(n,{to:"/rookie/transparent.html#_7-%E9%85%8D%E7%BD%AE-cgproxy"},{default:(0,a.w5)((()=>[oe])),_:1}),de,pe,he,ge,ke,be,Ue]),ye]),fe,(0,a.Wm)("p",null,[(0,a.Wm)("a",xe,[ve,(0,a.Wm)(s)]),_e]),(0,a.Wm)("ol",null,[(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[we,(0,a.Wm)("a",Ee,[Se,(0,a.Wm)(s)]),Pe,Be]),(0,a.Wm)(t,null,{default:(0,a.w5)((()=>[(0,a.Wm)(m,{title:"extra"},{default:(0,a.w5)((()=>[De])),_:1}),(0,a.Wm)(m,{title:"cn (git)"},{default:(0,a.w5)((()=>[Ae])),_:1}),(0,a.Wm)(m,{title:"aur (git)"},{default:(0,a.w5)((()=>[Ce])),_:1})])),_:1})]),(0,a.Wm)("li",null,[(0,a.Wm)("p",null,[ze,(0,a.Wm)("a",Oe,[je,(0,a.Wm)(s)]),Ie,(0,a.Wm)("a",Re,[Ke,(0,a.Wm)(s)]),Le])]),Ne,Ge,qe]),(0,a.Wm)("div",He,[Fe,(0,a.Wm)("p",null,[Te,(0,a.Wm)(n,{to:"/rookie/transparent.html#_7-%E9%85%8D%E7%BD%AE-cgproxy"},{default:(0,a.w5)((()=>[Xe])),_:1}),Me,Ve,Ye,Ze,Je,Qe,$e]),ln]),en,(0,a.Wm)("blockquote",null,[nn,(0,a.Wm)("ul",null,[(0,a.Wm)("li",null,[(0,a.Wm)("a",an,[sn,(0,a.Wm)(s)])])])])],64)}}}}]);