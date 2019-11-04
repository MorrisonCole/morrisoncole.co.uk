#!/usr/bin/env bash
cd "$(dirname "$0")" || exit

# Requires: npm install -g npm-check-updates
ncu -u --packageFile ../package.json
