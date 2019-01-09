# dangshi

> This is the web about dangshi !

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
        <div class="list" @click="changeBody('home')">首页</div>
        <div class="list" @click="changeBody('zhongyang')">中央空调</div>
        <div class="list" @click="changeBody('banshi')">板式换热器维保</div>
        <div class="list" @click="changeBody('duolianji')">多联机机组维保</div>
        <div class="list" @click="changeBody('chanpin')">产品中心</div>
        <div class="list" @click="changeBody('case')">工程案例</div>
        <div class="list" @click="changeBody('news')">新闻资讯</div>
        <div class="list" @click="changeBody('aboutus')">关于我们</div>
        <div class="list" @click="changeBody('contactus')">联系我们</div>

