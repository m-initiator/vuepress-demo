# 安装步骤

## 使用qmake
1. 安装IDE（QtCreator），推荐把整个Qt SDK下载下来，链接：[https://download.qt.io/official_releases/qt/](https://download.qt.io/official_releases/qt/)

::: tip 编译的时候
Windows系统推荐<strong>Mingw 64bit</strong></br>
Linux系统使用<strong>GCC 64bit</strong>,不要使用<strong>32bit</strong>
:::

2. 打开QtCreator，打开rtplivelib项目，构建即可生成lib库

## 使用cmake
1. 先进入build目录,根据系统选择相应的脚本
2. 在toolChain.cmake文件修改c/c++编译器的路径
3. 运行脚本,再调用<code>make && make install</code>即可完成编译和安装，目前仅支持Windows系统

```
cd build/msys_mingw64/
./make-mingw64-Makefiles-Release.sh
make -j8 && make install
```