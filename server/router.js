/**
 * Created by B on 2017/6/1.
 */
"use strict";
const kRouter = require('koa-router');
const send = require('koa-send');
const path = require('path');
const configer = require('../server.config');
const marked = require('marked');

let router = new kRouter();

// static server
router.get(['/static/', '/static/:filename'], async (ctx) => {
  let filename = ctx.params.filename || 'index.html';
  await send(ctx, filename, {root: configer.static_path})
});
router.get('/static/:path/:filename', async (ctx) => {
  await send(ctx, `${ctx.params.path}/${ctx.params.filename}`, {root: configer.static_path})
});

// markdown 解析

router.get('/post/:postname', async (ctx)=>{
  let postname = ctx.params.postname || 'post-sample';
});

module.exports = router;