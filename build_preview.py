#!/usr/bin/env python3
"""把 index.html + style.css + app.js + content.json 打包成一个单文件「双击打开.html」。

改完源文件后跑一次：
    python3 build_preview.py

单文件版不需要服务器，双击就能开，数据存在浏览器里。
正式版（server.py）数据存在 data.json，手机电脑共用一份。
"""

import json
import os
import re

ROOT = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(ROOT, "双击打开.html")
PAGES_OUT = os.path.join(ROOT, "docs", "index.html")

BANNER = (
    '<div class="banner">这是浏览器本地版：不用装任何东西直接能用，但数据只存在'
    '这一个浏览器里——换设备、换浏览器、清缓存都可能会丢。想要数据稳定保留、'
    '手机电脑共用一份，下载本地跑的完整版（server.py，见 README）。</div>'
)


def read(name):
    with open(os.path.join(ROOT, name), "r", encoding="utf-8") as f:
        return f.read()


def main():
    html = read("index.html")
    css = read("style.css")
    js = read("app.js")
    content = json.loads(read("content.json"))

    # 外链的 css/js 换成内联，manifest 之类单文件用不到的去掉
    html = html.replace(
        '<link rel="stylesheet" href="style.css">',
        "<style>\n" + css + "\n</style>",
    )
    html = re.sub(r'\s*<link rel="manifest"[^>]*>', "", html)
    html = html.replace("<title>来陪宝宝玩</title>", "<title>来陪宝宝玩（预览）</title>")

    inline = (
        "<script>window.__CONTENT__ = "
        + json.dumps(content, ensure_ascii=False)
        + ";</script>\n<script>\n"
        + js
        + "\n</script>"
    )
    html = html.replace('<script src="app.js"></script>', inline)
    html = html.replace("<body>", "<body>\n" + BANNER, 1)

    with open(OUT, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"已生成 {os.path.basename(OUT)}（{len(html)/1024:.0f} KB）")

    os.makedirs(os.path.dirname(PAGES_OUT), exist_ok=True)
    with open(PAGES_OUT, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"已生成 docs/index.html（GitHub Pages 用，跟双击打开.html内容一样）")


if __name__ == "__main__":
    main()
