#!/usr/bin/env python3
"""本地「来陪宝宝玩」服务器：零依赖，只用标准库，双击/命令行都能跑。
数据全部存在本机的 data.json 里，不联网、不上传。"""

import json
import os
import socket
from http.server import BaseHTTPRequestHandler, HTTPServer
from urllib.parse import unquote

PORT = 8877
ROOT = os.path.dirname(os.path.abspath(__file__))
DATA_FILE = os.path.join(ROOT, "data.json")

DEFAULT_STATE = {
    "diary": [],
    "favorites": [],
    "weekPlan": {"mon": [], "tue": [], "wed": [], "thu": [], "fri": [], "sat": [], "sun": []},
    "toys": [],
    "books": [],
    "screenTime": {},
    "themeOverride": None,
    "safetyChecklist": {},
    "customActivities": {"gross": [], "fine": [], "lang": [], "cog": [], "eng": [], "social": []},
    "achievedStages": {"gross": [], "fine": [], "lang": [], "cog": [], "eng": []}
}

STATIC_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
}


def load_state():
    if not os.path.exists(DATA_FILE):
        return dict(DEFAULT_STATE)
    try:
        with open(DATA_FILE, "r", encoding="utf-8") as f:
            data = json.load(f)
        merged = dict(DEFAULT_STATE)
        merged.update(data)
        return merged
    except (json.JSONDecodeError, OSError):
        return dict(DEFAULT_STATE)


def save_state(state):
    with open(DATA_FILE, "w", encoding="utf-8") as f:
        json.dump(state, f, ensure_ascii=False, indent=2)


def local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        return s.getsockname()[0]
    except OSError:
        return "127.0.0.1"
    finally:
        s.close()


class Handler(BaseHTTPRequestHandler):
    def log_message(self, fmt, *args):
        pass  # 安静一点，别刷屏

    def _send_json(self, obj, status=200):
        body = json.dumps(obj, ensure_ascii=False).encode("utf-8")
        self.send_response(status)
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_GET(self):
        if self.path == "/api/state":
            return self._send_json(load_state())
        path = unquote(self.path.split("?")[0])  # 中文文件名要先解码
        if path == "/":
            path = "/index.html"
        file_path = os.path.join(ROOT, path.lstrip("/"))
        if not os.path.abspath(file_path).startswith(ROOT) or not os.path.isfile(file_path):
            self.send_response(404)
            self.end_headers()
            return
        ext = os.path.splitext(file_path)[1]
        with open(file_path, "rb") as f:
            body = f.read()
        self.send_response(200)
        self.send_header("Content-Type", STATIC_TYPES.get(ext, "application/octet-stream"))
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if self.path == "/api/state":
            length = int(self.headers.get("Content-Length", 0))
            raw = self.rfile.read(length)
            try:
                incoming = json.loads(raw)
            except json.JSONDecodeError:
                return self._send_json({"error": "bad json"}, 400)
            save_state(incoming)
            return self._send_json({"ok": True})
        self.send_response(404)
        self.end_headers()


def main():
    if not os.path.exists(DATA_FILE):
        save_state(DEFAULT_STATE)
    ip = local_ip()
    server = HTTPServer(("0.0.0.0", PORT), Handler)
    print("=" * 44)
    print("来陪宝宝玩 已启动")
    print(f"  这台电脑上打开：   http://localhost:{PORT}")
    print(f"  手机（同一WiFi）打开： http://{ip}:{PORT}")
    print("  按 Ctrl+C 停止服务")
    print("=" * 44)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n已停止。")


if __name__ == "__main__":
    main()
