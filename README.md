# postxpromote

My entry for make.fun's **post-x-promote-make-your-own-bounty-01** bounty: promote
make.fun's make-your-own-bounty post on X.

[![bounty](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/yungkaaii/postxpromote/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/yungkaaii/postxpromote/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01)

## What this is

I quoted make.fun's post about making your own bounty and added my own take:
if you have an idea for a task, you can put a bounty on it and someone will
build it. The post URL is in `POST.json`.

## How the program works

`main.ts` (Node 22, standard library only) copies `POST.json` from the repo
root into the harness output directory. That's all it does — no network, no
clock, no other files.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```
