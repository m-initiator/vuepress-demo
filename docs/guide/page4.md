# 其它要求

## Windows

* 如果要使用硬件加速，则需要安装一系列的SDK。目前只使用了<code>qsv</code>，这里简单说一下Media SDK的安装
    1. 更新到最新的显卡驱动
    2. 去Intel官网下载[Intel Media SDK](https://software.intel.com/en-us/media-sdk/choose-download/client),需要intel账号才能下载
    3. 安装Intel Media SDK。如果安装失败则需要考虑是不是显卡驱动问题

## Linux

* Media SDK的安装
<blockquote><p>这个我没有安装成功，先不写</p></blockquote>

* 如果提示<code>not found -lasound</code>的话则是缺少<code>alsa</code>，需要去ALSA项目主页下载[alsa-lib](http://www.alsa-project.org/main/index.php/Main_Page)并安装.