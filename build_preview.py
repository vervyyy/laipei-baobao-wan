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

BANNER = (
    '<div class="banner">这是单文件预览版：双击就能开，不用装任何东西，'
    '但数据只存在这个浏览器里。想让手机和电脑共用一份数据，跑 server.py（见 README）。</div>'
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


if __name__ == "__main__":
    main()
