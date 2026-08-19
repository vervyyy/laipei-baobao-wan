#!/bin/bash
cd "$(dirname "$0")"
open "http://localhost:8877"
python3 server.py
