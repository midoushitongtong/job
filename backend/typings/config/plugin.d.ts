// This file is created by egg-ts-helper@1.25.2
// Do not modify this file!!!!!!!!!

import 'egg';
import 'egg-onerror';
import 'egg-session';
import 'egg-i18n';
import 'egg-watcher';
import 'egg-multipart';
import 'egg-security';
import 'egg-development';
import 'egg-logrotator';
import 'egg-schedule';
import 'egg-static';
import 'egg-jsonp';
import 'egg-view';
import 'egg-sequelize';
import 'egg-validate';
import 'egg-cors';
import 'egg-redis';
import 'egg-session-redis';
import 'egg-socket.io';
import { EggPluginItem } from 'egg';
declare module 'egg' {
  interface EggPlugin {
    onerror?: EggPluginItem;
    session?: EggPluginItem;
    i18n?: EggPluginItem;
    watcher?: EggPluginItem;
    multipart?: EggPluginItem;
    security?: EggPluginItem;
    development?: EggPluginItem;
    logrotator?: EggPluginItem;
    schedule?: EggPluginItem;
    static?: EggPluginItem;
    jsonp?: EggPluginItem;
    view?: EggPluginItem;
    sequelize?: EggPluginItem;
    validate?: EggPluginItem;
    cors?: EggPluginItem;
    redis?: EggPluginItem;
    sessionRedis?: EggPluginItem;
    io?: EggPluginItem;
  }
}