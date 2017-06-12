/**
 * Created by B on 2017/6/1.
 */
'user strict'
const koa = require('koa');
const path = require('path');
const configer = require('./server.config');

const app = new koa();
const router = require('./server/router')

app.use(router.routes());

app.listen(configer.port);