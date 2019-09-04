# 支持的平台

<p class="description">了解更多Material-UI支持的从最新版到旧版的平台。</p>

## 浏览器

Material-UI支持所有主流浏览器和平台的最新稳定版本。 It also supports Internet Explorer 11. You don't need to provide any JavaScript polyfill as it manages unsupported browser features internally and in isolation.

| IE | Edge  | Firefox | Chrome | Safari | Googlebot |
|:-- |:----- |:------- |:------ |:------ |:--------- |
| 11 | >= 14 | >= 52   | >= 49  | >= 10  | ✅         |


因为 Googlebot 使用了Web rendering service - WRS （网络渲染服务）对页面进行索引，所以Material-UI能提供对它的支持非常重要。 [WRS regularly updates the rendering engine it uses](https://webmasters.googleblog.com/2019/05/the-new-evergreen-googlebot.html). 在没有重大问题的情况下，您可以指望能够渲染Material-UI的组件。

## 服务器

Because Material-UI supports server-side rendering, it needs to support the latest, stable releases of [Node.js](https://github.com/nodejs/node). 我们还会尝试支持[维护中的LTS版本](https://github.com/nodejs/Release#lts-schedule1) 。 Right now, it supports **node v8.x** and newer versions.

### CSS前缀

请注意，某些CSS功能[需要](https://github.com/cssinjs/jss/issues/279)额外的一步后处理，目的是添加供应商特定的前缀。 在[`jss-plugin-vendor-prefixer`](https://www.npmjs.com/package/jss-plugin-vendor-prefixer)的帮助下，这些前缀会自动添加到客户端上。

本文档中提供的CSS由 [`autoprefixer`](https://www.npmjs.com/package/autoprefixer)处理。 您可以通过[文档实现](https://github.com/mui-org/material-ui/blob/47aa5aeaec1d4ac2c08fd0e84277d6b91e497557/pages/_document.js#L123)受到启发。 请注意，它对页面的性能会产生影响。 这对于静态页面来说是必须的，但是在这渲染动态页面的时候需要平衡一下。尽量不要做任何处理。

## React

Material-UI supports the most recent versions of React, starting with ^16.8.0 (the one with the hooks). Have a look at our older [versions](/versions/) for backward compatibility.