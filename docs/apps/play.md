---
sidebarDepth: 2
---

# æ¸¸æå¨±ä¹

> ### ð¹ï¸ äººçå¾æé¡»å°½æ¬¢ï¼è«ä½¿éæ¨½ç©ºå¯¹æ
>
> æ¬å°èè®¨è®ºå¦ä½å¨ archlinux ä¸ ð¾ ç©æ¸¸æä»¥åç¸å³çä¿¡æ¯ï¼å¦æ¸¸æææãç®¡çå¤éç RGB åæç­ã

> ### ð è¿ä¸èå°ä¼è®¨è®ºï¼
>
> ::: details ç®å½
>
> [[toc]]
>
> :::

::: tip â¹ï¸ æç¤º

æåä¸­å¸¦æ <sup>aur</sup> è§æ çè½¯ä»¶ä»£è¡¨æ¯å¨ [AUR](https://aur.archlinux.org/)ï¼Arch User Repositoryï¼ä¸­ç¨æ·èªè¡æåçè½¯ä»¶ãä¸å¨ arch å®æ¹æ¯æèå´åï¼å¯è½ä¼åºç°åç§é®é¢å¦æ´æ°ä¸åæ¶ãæ æ³å®è£ãä½¿ç¨åºéç­ã

æåä¸­å¸¦æ <sup>cn</sup> è§æ çè½¯ä»¶ä»£è¡¨æ¯å¨ [archlinuxcn](https://www.archlinuxcn.org/archlinux-cn-repo-and-mirror/)ï¼Arch Linux ä¸­æç¤¾åºä»åºï¼ä¸­ç¨æ·èªè¡æåçè½¯ä»¶ãä¸å¨ arch å®æ¹æ¯æèå´åï¼å¯è½ä¼åºç°åç§é®é¢å¦æ´æ°ä¸åæ¶ãæ æ³å®è£ãä½¿ç¨åºéç­ã

æåä¸­å¸¦æ <sup>EULA</sup> è§æ çè½¯ä»¶ä»£è¡¨æ¯ [ä¸æè½¯ä»¶](https://www.gnu.org/proprietary/proprietary.html)ãè¯·èªè¡æéæ¯å¦ä½¿ç¨ã

:::

::: tip â¹ï¸ æç¤º

éè¯»æ¬ç« åè¯·ç¡®è®¤å·²å®è£å¥½æ¾å¡é©±å¨ï¼å¦åè¯·ååéç« è [æ¾å¡é©±å¨](../rookie/graphic-driver.md) å®ææ¾å¡é©±å¨çå®è£ã

:::

## ð Steam

<p class="shields normal-img-p">
  <a
    href="https://steamcommunity.com/id/ice-kylin/"
    target="_blank"
    rel="noopener noreferrer"
    ><img
      alt="mySteamFriend"
      src="https://img.shields.io/badge/dynamic/json?label=Steam%20Friends&amp;query=%24.data.totalSubs&amp;url=https%3A%2F%2Fapi.spencerwoo.com%2Fsubstats%2F%3Fsource%3DsteamFriends%26queryKey%3D76561198392223813&amp;logo=steam&amp;color=0b1a37&amp;labelColor=134375&amp;longCache=true"
  /></a>
</p>

> ð ç¸å³é¾æ¥ï¼
>
> - [archWiki ç¸å³åå®¹](<https://wiki.archlinux.org/title/Steam_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)

::: tip â¹ï¸ æç¤º

å¨æ­¥éª¤ [6. å®è£åºç¡åè½å](../rookie/desktop-env-and-app.md#_6-å®è£åºç¡åè½å) ä¸­è¥å·²å®è£ï¼åæ ééå¤å®è£ã

:::

[Steam](https://store.steampowered.com/) æ¯ [ç»´å°ç¦å¬å¸ï¼Valveï¼](https://www.valvesoftware.com/zh-cn/) æ¨åºçèåæ¸¸æååå¹³å°ãå¨ Steam ä¸è´­ä¹°å¹¶å®è£æ¸¸æä¸ä»ä»æ¯æ¯ææ­£ççåæ³ï¼æ´æ¯ç®åäºæ¸¸ç©æµç¨ãèçäºæ¶é´ã

2018 å¹´ 8 æ 22 æ¥ï¼Steam [å®£å¸](https://steamcommunity.com/games/221410/announcements/detail/1696055855739350561) è¦ç» Steam Play å¢å ä¸ä¸ªæ°ç»ä»¶ Protonï¼ç¨äºæ¯æå¨ Linux å¹³å°ä¸ç© Windows çæ¸¸æï¼è¿ä¸ªç»ä»¶æ¯ Wine çä¸ä¸ªåæ¯ãç»è¿è¿äºå¹´çåå±ï¼ä½éªå·²ç»å¾ä¸éäºãå³äºé Linux å¹³å°åççæ¸¸æï¼éè¿ Steam Play è¿è¡çå¼å®¹æ§åè¡¨å¯å¨ [ProtonDB](https://www.protondb.com/) æ¥è¯¢ã

1. å®è£ [Steam](https://archlinux.org/packages/multilib/x86_64/steam/)<sup>EULA</sup>ï¼

   ```sh
   sudo pacman -S steam
   ```

   ![steam-1](../static/apps/play/steam-1.png)

2. ä¸ºäºè½å¤å®è£ Windows ä¸çæ¸¸æï¼è¿éè¦å¨èåæ  `æ¥ç` > `è®¾ç½®` > ä¾§è¾¹æ  `Steam Play` > å¾é `ä¸ºææå¶ä»äº§åå¯ç¨ Steam Play`ï¼å¨ `è¿è¡å¶ä»äº§åæ¶ä½¿ç¨` ä¸­éæ© `Proton Experimental`ï¼ææ°çæ¬ï¼ï¼

   ![steam-2](../static/apps/play/steam-2.png)

   éåå³å¯å®è£ Windows å¹³å°ä¸çæ¸¸æï¼Steam ä¼èªå¨ä¸è½½å¹¶å®è£ç¸å³ç»ä»¶ï¼

   ![plants-vs-zombies](../static/apps/play/plants-vs-zombies.png)

::: tip â¹ï¸ æç¤º

å¦ææäºæ¸¸æå¯å¨æèæ¸¸ç©æé®é¢ï¼å¯ä»¥ç¨ç»ç«¯ä½¿ç¨ `steam` å½ä»¤å¯å¨ Steam å®¢æ·ç«¯ï¼å¹¶è§å¯æ¸¸æå´©æºæ¶çç»ç«¯æ¥éãä¸è¬é½æ¯ç¼ºå°æç§ä¾èµé æçï¼å¯ä»¥æ ¹æ®å·ä½æåµèªè¡å®è£ä¾èµã

åæ¶ï¼archWiki ä¹æä¾äºä¸ä¸ª [æ¥éé¡µé¢](https://wiki.archlinux.org/title/Steam/Game-specific_troubleshooting)ï¼è®°å½äºä¸äºæ¸¸æé®é¢çè§£å³æ¹å¼ã

:::

::: tip â¹ï¸ æç¤º

æ­¤å¤è¿æå®æ¹ Proton çæ´¾ççæ¬ï¼å¦ [Proton GE](https://github.com/GloriousEggroll/proton-ge-custom)ãå¯ä»¥æ¯æä¸äºé¢å¤çï¼å®æ¹æä¸æ¯æææ¯æä¸å®åçæ¸¸æã

:::

## ð¾ Lutris

[Lutris](https://lutris.net/) æ¯ Linux ä¸çå¼æºæ¸¸æå¹³å°ãå¯ä»¥ä½¿ç¨ Lutris å®è£ãç§»é¤ãéç½®ãå¯å¨åç®¡çæ¸¸æãå®å¯ä»¥å¨ä¸ä¸ªåä¸çé¢ä¸­ç®¡çç Linux æ¸¸æãWindows æ¸¸æãä»¿çæ§å¶å°æ¸¸æåæµè§å¨æ¸¸æãå®è¿åå«ç¤¾åºç¼åçå®è£èæ¬ï¼ä½¿å¾æ¸¸æçå®è£è¿ç¨æ´å ç®åã

Lutris æ¯æè¶è¿ 20 ä¸ªæ¨¡æå¨å¹¶ä¸æä¾äºä»ä¸åå¹´ä»£å°ç°å¨çå¤§å¤æ°æ¸¸æç³»ç»ãç®åæ¯æçæ¸¸æç³»ç»åæ¬ä½ä¸éäºï¼

::: details æ¯æåè¡¨

- Linux åç
- Windows
- Steamï¼Linux å Windowsï¼
- MS-DOS
- è¡æº
- Amiga çµè
- Atari 8 å 16 ä½è®¡ç®æºåæ§å¶å¨
- æµè§å¨ï¼Flash æè HTML5 æ¸¸æï¼
- Commmodore 8 ä½è®¡ç®æº
- åºäº SCUMM çæ¸¸æåå¶å®ç¹å»å¼åé©æ¸¸æ
- Magnavox OdysseyÂ²ãVideopac+
- Mattel Intellivision
- NEC PC-Engine Turbographx 16ãSupergraphxãPC-FX
- Nintendo NESãSNESãGame BoyãGame Boy AdvanceãDS
- Game Cube å Wii
- Sega Master SytemãGame GearãGenesisãDreamcast
- SNK Neo GeoãNeo Geo Pocket
- Sony PlayStation
- Sony PlayStation 2
- Sony PSP

:::

1. å®è£ [Lutris](https://archlinux.org/packages/community/any/lutris/)<sup>community / aur</sup>ï¼

   :::: code-group
   ::: code-group-item community

   ```sh
   sudo pacman -S lutris
   ```

   :::
   ::: code-group-item aur

   ```sh
   yay -S aur/lutris
   ```

   :::
   ::: code-group-item aur (git)

   ```sh
   yay -S lutris-git
   ```

   :::
   ::::

2. åè [ð· Wine](./daily.md#ð·-wine) å®è£ Wine

3. ç»å½ [Lutris å®æ¹ç½ç«](https://lutris.net/) > å¨å³ä¸è§ ð æç´¢æ¡ä¸­æç´¢ä½ æ³ç©çæ¸¸æ > è¿å¥æç´¢å°çæ¸¸æé¡µé¢åï¼å¯ä»¥çå°å¨ç¸åºçæ¬å³ä¾§æä¸ä¸ª `Install` æé®ï¼ç¹å»åå³å¯æèµ· Lutris è¿è¡å®è£

   ::: tip â¹ï¸ æç¤º

   è¿åºä»ç»éè¯»ç¸åä½ç½®ä¸æ¹çå®è£è¯´æã

   :::

## ð· åç Wine

éè¿åç Wine ä¹å¯è¿è¡ç®åç Windows å°æ¸¸æï¼ä½æ¯å¾å¤æåµä¸éè¦èªè¡å¤ç Windows ä¸çä¾èµé®é¢ãå¸¸ç¨çå·¥å·æ¯ [Winetricks](https://archlinux.org/packages/multilib/x86_64/winetricks/)ãä½æ¯è¿ç§æ¹å¼è´¹æ¶è´¹åï¼åªè¿è¡æ éå¤çä¾èµçå°æ¸¸ææè GalGame è¿å¥½ã

è¯¦ç»æ­¥éª¤è¯·åé [ð· Wine](./daily.md#ð·-wine)ã

## âï¸ æçä¸ç

> ð ç¸å³é¾æ¥ï¼
>
> - [archWiki ç¸å³åå®¹](<https://wiki.archlinux.org/title/Minecraft_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)>)

æçä¸çï¼Minecraftï¼æ¯ä¸ä¸ªå³äºå»æ¯åæ¾ç½®æ¹åçæ¸¸æãæ¸¸æä¸å¼å§ç©å®¶çä¸»è¦ç®çæ¯æ­å»ºåç§ç»æä½¿èªå·±åé­å¤æåºæ²¡çæªç©çæ»å»å¹¶çå­ä¸æ¥ï¼ä½éçæ¸¸æçè¿è¡ï¼ç©å®¶ä»¬å¯ä»¥åä½åé åºä¸äºä¸å¯æè®®çãå¯ææ³è±¡åçä¸è¥¿ã

1. å®è£ [Minecraft Launcherï¼æçä¸çå®æå¯å¨å¨ï¼](https://aur.archlinux.org/packages/minecraft-launcher/)<sup>EULA / cn / aur</sup>ï¼

   :::: code-group
   ::: code-group-item cn

   ```sh
   sudo pacman -S minecraft-launcher
   ```

   :::
   ::: code-group-item aur

   ```sh
   yay -S aur/minecraft-launcher
   ```

   :::
   ::::

   ::::: tip â¹ï¸ æç¤º

   é¤äºå®æ¹å¯å¨å¨ï¼è¿æç¬¬ä¸æ¹å¯å¨å¨ [HMCLï¼Hello Minecraft! Launcherï¼](https://hmcl.huangyuhui.net/)ï¼æ¯ææ¨¡ç»ç®¡çãæ¸¸æå®å¶ãèªå¨å®è£ï¼ForgeãLiteLoader å OptiFineï¼ãæ¨¡ç»ååå»ºãUI å®å¶ç­ã

   å®è£ [HMCL](https://aur.archlinux.org/packages/hmcl/)<sup>cn / aur</sup>ï¼

   :::: code-group
   ::: code-group-item cn

   ```sh
   sudo pacman -S hmcl
   ```

   :::
   ::: code-group-item aur

   ```sh
   yay -S aur/hmcl
   ```

   :::
   ::::

   :::::

2. æå¼ `Minecraft Launcher` > æ ¹æ®æç¤ºç»å½å¸å·å¹¶ä¸è½½ä¸»ç¨åºåå³å¯çç©ï¼

   ![minecraft-1](../static/apps/play/minecraft-1.png)

   ![minecraft-2](../static/apps/play/minecraft-2.png)

## ð® æ¸¸æææ

ä¸è¬æåµä¸ææéè¿æ°æ®çº¿è¿æ¥è®¡ç®æºå³å¯ç´æ¥ä½¿ç¨ãæ¯ææ çº¿çææï¼DUALSHOCKÂ® 3ãDUALSHOCKÂ® 4ãXbox 360ãXbox Oneã8BitDo ç­ï¼ä¹å¯ä»¥éè¿èçç´æ¥è¿æ¥ï¼æ éé¢å¤æä½ã

### Xbox æ çº¿ééå¨

è½ç¶æ çº¿ææä¸è¬æåµä¸å¯ä»¥éè¿èçç´è¿ï¼ä½æ¯éå¸¸è¿æ ·ä¼æè¾å¤§çå»¶è¿ãæ¨èä½¿ç¨ [Xbox æ çº¿ééå¨](https://www.microsoftstore.com.cn/accessories/microsoft-xbox-wireless-adapter) ä»¥è·å¾è¿ä¹æçº¿çä½å»¶è¿ä½éªã

ä¸ºäºå¨ archlinux ä¸ä½¿ç¨ Xbox æ çº¿ééå¨ï¼éè¦å®è£ç¬¬ä¸æ¹å¼æºé©±å¨ [xow](https://github.com/medusalix/xow)ã

1. å®è£ [xow](https://aur.archlinux.org/packages/xow-git/)<sup>cn / aur</sup>ï¼

   :::: code-group
   ::: code-group-item cn (git)

   ```sh
   sudo pacman -S xow-git
   ```

   :::
   ::: code-group-item aur

   ```sh
   yay -S xow
   ```

   :::
   ::: code-group-item aur (git)

   ```sh
   yay -S aur/xow-git
   ```

   :::
   ::::

2. å¯å¨ `xcow` æå¡ï¼

   ```sh
   sudo systemctl enable xow.service
   ```

3. éå¯è®¡ç®æºï¼æå¥ Xbox æ çº¿ééå¨å¹¶å ð¹ï¸ Xbox ææéå¯¹å³å¯

å®éä½éªå Windows ä¸å¹¶æ å·®å¼ãå¯¹å»¶è¿ææçé³æ¸¸ï¼å¦ [åµæ¯å¿«è·](https://store.steampowered.com/app/774171/Muse_Dash/)ï¼å¨æ¸¸æè®¾ç½®ä¸­å¾®è°åç§»å¼å³å¯ã

## ðï¸ æ§è½çæ§

ç±»ä¼¼ Windows ä¸ç [å¾®æ Afterburner](https://cn.msi.com/Landing/afterburner/graphics-cards)<sup>EULA</sup> æ§è½æ¾ç¤ºçé¨åï¼Linux ä¸ä¹æä¸æ¬¾åç±»è½¯ä»¶å¯ä»¥çæ§æ¸¸æä¸­ççµèæ§è½ï¼CPU å ç¨çãå¸§æ°ç­ç­ï¼ï¼åä¸º [MangoHud](https://github.com/flightlessmango/MangoHud)ã

1. å®è£ [MangoHud](https://aur.archlinux.org/pkgbase/mangohud/)<sup>aur</sup>ï¼

   :::: code-group
   ::: code-group-item aur

   ```sh
   yay -S mangohud lib32-mangohud
   ```

   :::
   ::: code-group-item aur (git)

   ```sh
   yay -S mangohud-git lib32-mangohud-git
   ```

   :::
   ::::

2. éè¿ä»¥ä¸æ¹æ³ä½¿ç¨ MangoHudï¼

   - éç¨æ¹æ³

     å¨å¯å¨çæ¸¸æåé¢æ·»å  `mangohud` åç¼ï¼

     ```sh
     mangohud game_command
     ```

   - Steam

     å¯¹äº Steam æ¸¸æï¼å¨ Steam åºä¸­å³é®æ¸¸æå°é¢ > ç¹å» `å±æ§...` > ä¾§è¾¹æ  `éç¨` > å¨ `å¯å¨éé¡¹` ä¸­æ·»å  `MANGOHUD=1 %command%`ï¼

     ![mangohud-1](../static/apps/play/mangohud-1.png)

   - Lutris

     å¯¹äº Lutris æ¸¸æï¼ç¹å»å³ä¸è§ç `æ´å¤æé®`ï¼ä¸ä¸ªç¹ï¼ > ç¹å» `System preferences`ï¼ç³»ç»è®¾ç½®ï¼ > éé¡¹å¡ `System preferences`ï¼ç³»ç»éé¡¹ï¼ > å¾é `Show advanced options`ï¼æ¾ç¤ºé«çº§éé¡¹ï¼> å¨ `Command prefix`ï¼å½ä»¤åç¼ï¼ä¸­æ·»å  `mangohud`ï¼

     ![mangohud-2](../static/apps/play/mangohud-2.png)

![mangohud-3](../static/apps/play/mangohud-3.png)

::: tip â¹ï¸ æç¤º

é¨åæ¸¸æå¯è½ä¸æ¯æ MangoHudã

:::

## ð¥ æ§è½æå

å¨æ¸¸æä¹åï¼å¦ææå¼ºççæ§è½éè¦ï¼å¯åç¡®ä¿ CPU å¤äºæ§è½æ¨¡å¼ã

1. æ§è¡ä»¥ä¸å½ä»¤ä½¿çµæºå¤äº `High Performance` æ¨¡å¼ï¼

   ```sh
   echo performance | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
   ```

   ::: tip â¹ï¸ æç¤º

   æ­¤æ¨¡å¼ä¼è®© CPU å¤äºæé«æ§è½ç¶æï¼é£æçè½¬ï¼å¦ææ£ç­æä¸ä½çè³ä¼éé¢ï¼å¾ä¸å¿å¤±ãè¯·æéä½¿ç¨ã

   :::

2. å¦æå¸æå°è®¾ç½®æ¹å `Power Save` æ¨¡å¼ï¼é£ä¹åªéè¦æ§è¡ä»¥ä¸å½ä»¤å³å¯ï¼

   ```sh
   echo powersave | sudo tee /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
   ```

## ð ç½æ¸¸å é

å¯¹äºå¨ Linux ä¸ç©ç½æ¸¸ï¼ç½ç»å éä¸ç´æ¯ä¸ä¸ªé¾é¢ï¼å°¤å¶æ¯å¨ç©ä¸äºå¤æç½æ¸¸çæ¶åãè¿éæä¾ä¸äºå¨ Linux ä¸å¯¹ç½æ¸¸å éçæè·¯ï¼

- ä¸äº âï¸ åºä¼æä¾ç½æ¸¸æ¸¸æèç¹ï¼è¿äºèç¹ä¸é¨ä¸ºæ¸¸æä¼åï¼éå¶æµéå¹¶ä¸æé«åçï¼ä¸è¬å¯ä»¥å¾å°è¾å¥½çå éææãå¨ Linux ä¸­éå [éæä»£ç](../rookie/transparent.md)ï¼åæ¶å¼å¯å¯¹ UDP æµéçä»£çå éï¼å³å¯ä»¥å¾å°ä¼åç½æ¸¸ç½éçææ
- è´­ä¹°åç½®å¸é¢ä¸åç½®æå¯å®è£å¸¸è§çç½æ¸¸å éå¨æä»¶çä¸­é«ç«¯ [è·¯ç±å¨](https://uu.163.com/router/crossover.html)ï¼ä¼¼ä¹ç¡®å¿åªè½å éä¸»æºï¼

## ð§ Fsync åæ ¸

ç»´å°ç¦å¬å¸åå¸äºä¸ä¸ªå¯ä»¥å¸®å©æåå¤§éå¤çº¿ç¨åºç¨è¿è¡å¸§ççç¹æ®åæ ¸è¡¥ä¸ãè¿å¯¹æ¹åæ¸¸ææ§è½æå¾å¤§å¸®å©ãç®åçæ¹æ³æ¯æ´æ¢ä¸º [linux-zen](https://archlinux.org/packages/extra/x86_64/linux-zen/) åæ ¸ï¼å¶ä» 5.2 çæ¬å¼å§å·²åæ¬ Fsync è¡¥ä¸ã

è¯¦ç»æ­¥éª¤è¯·åé [ð§ æ´æ¢å¯éåæ ¸](../advanced/optional-cfg-2.md#ð§-æ´æ¢å¯éåæ ¸)ã

## ð RGB åæ±¡æ

éè¿ [OpenRGB](https://openrgb.org/)ï¼æ è®ºæ¯é®çãé¼ æ ãCPU é£æãAIOï¼è¿æ¯å¶å®è¿æ¥çå¤å´è®¾å¤æç»ä»¶ï¼é½å¯ä»¥ç»ä¸è¿è¡ RGB ç¯åæ§å¶ã

1. å®è£ [OpenRGB](https://aur.archlinux.org/packages/openrgb/)<sup>cn / aur</sup>ï¼

   :::: code-group
   ::: code-group-item cn

   ```sh
   sudo pacman -S openrgb
   sudo pacman -S openrazer-driver-dkms # é·èç¨æ·éè¦å®è£
   ```

   :::
   ::: code-group-item aur

   ```sh
   yay -S aur/openrgb
   sudo pacman -S openrazer-driver-dkms # é·èç¨æ·éè¦å®è£
   ```

   :::
   ::: code-group-item aur (git)

   ```sh
   yay -S openrgb-git
   yay -S openrazer-driver-dkms-git # é·èç¨æ·éè¦å®è£
   ```

   :::
   ::::

2. ä¸ºäºè®©åæ ¸è½å¤è¯å«å°è®¾å¤æä»¶ï¼éè¦ä¸è½½ [60-openrgb.rules](https://gitlab.com/CalcProgrammer1/OpenRGB/-/blob/master/60-openrgb.rules)ï¼å¹¶å°å®å¤å¶å° `/etc/udev/rules.d` æä»¶å¤¹ä¸ï¼

   ```sh
   sudo cp /path/to/60-openrgb.rules /etc/udev/rules.d
   ls -ahl /etc/udev/rules.d # å¤æ¥ä¸ä¸
   ```

   ![openrgb-1](../static/apps/play/openrgb-1.png)

3. éå¯è®¡ç®æºæèéè¿ä»¥ä¸å½ä»¤éæ°è½½å¥ udev è§åï¼`.rules` æä»¶ï¼ï¼

   ```sh
   sudo udevadm control --reload-rules
   sudo udevadm trigger # å¼ºå¶åæ ¸è§¦åè®¾å¤äºä»¶ï¼ä¸»è¦ç¨äºéæ¾åæ ¸åå§åè¿ç¨ä¸­çå·æï¼coldplugï¼è®¾å¤äºä»¶
   ```

   ![openrgb-2](../static/apps/play/openrgb-2.png)

4. è¥æ¾å¡ãåå­æ¡æèä¸»æ¿ç­å¸¦æ RGB éè¦æ§å¶ï¼åè¿éè¦è½½å¥é¢å¤çé©±å¨ï¼

   :::: code-group
   ::: code-group-item Intel

   ```sh
   sudo modprobe i2c-dev # æ¾å¡ãåå­æ¡
   sudo modprobe i2c-i801 # è¯çç»
   ```

   :::
   ::: code-group-item AMD

   ```sh
   sudo modprobe i2c-dev # æ¾å¡ãåå­æ¡
   sudo modprobe i2c-piix4 # è¯çç»
   ```

   :::
   ::::

   ![openrgb-3](../static/apps/play/openrgb-3.png)

5. ä¸ºäºéªè¯é©±å¨è½½å¥æåµï¼è¿éè¦å®è£ [I<sup>2</sup>C Tools](https://archlinux.org/packages/community/x86_64/i2c-tools/)<sup>community / aur</sup>ï¼

   :::: code-group
   ::: code-group-item community

   ```sh
   sudo pacman -S i2c-tools
   ```

   :::
   ::: code-group-item aur (git)

   ```sh
   yay -S i2c-tools-git
   ```

   :::
   ::::

   ![openrgb-4](../static/apps/play/openrgb-4.png)

6. éªè¯é©±å¨è½½å¥æåµï¼

   ```sh
   sudo i2cdetect -l
   ```

   æ¥çè¾åºæ¯å¦å¸¦æä»¥ä¸å­æ®µï¼

   - `nvkm` å­æ®µ ââ å¸¦æåæ±¡æç NVIDIA æ¾å¡
   - `PIIX4` å­æ®µ ââ AMD è¯çç»
   - `I801` å­æ®µ ââ Intel è¯çç»

7. æå¼ `OpenRGB`ï¼å°èªå¨æ£æµæ¯æçå¤è®¾ï¼ç¶åä¾¿å¯ä»¥è¿è¡ç¯åæ§å¶äº

---

> ð æ¬èåèèµæï¼
>
> - [å¨ Linux ä¸ä½¿ç¨ Lutries ç®¡çä½ çæ¸¸æ](https://linux.cn/article-10200-1.html)
