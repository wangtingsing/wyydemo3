webpackJsonp([3],{GP23:function(t,s,e){"use strict";var a=e("Dd8w"),n=e.n(a),i=e("NYxO"),o={name:"songlistItem",data:function(){return{}},props:{like:{type:Boolean,default:!1}},computed:n()({},Object(i.b)({sindex:"sindex",tracks:"tracks",ispause:"ispause"})),watch:{sindex:function(){console.log("-------====++++"),console.log(this.sindex),this.sindex>this.tracks.length&&(this.sindex=0),this.goplay(this.tracks[this.sindex].id,this.sindex)}},methods:{goplay:function(t,s){console.log(t),this.$store.commit("togglefooter",{songid:t,flag:!0}),this.$store.commit("updateIndex",s),this.ispause||this.$store.commit("togglePause")}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"songlist-content clearfix"},[e("ul",t._l(t.tracks,function(s,a){return e("li",{key:a,on:{click:function(e){return t.goplay(s.id,a)}}},[e("div",{staticClass:"songindex"},[t._v(t._s(a+1))]),t._v(" "),e("div",{staticClass:"songname"},[s.name?e("div",{staticClass:"play-name"},[t._v(t._s(s.name))]):e("div",{staticClass:"play-name"},[e("span",[t._v(t._s(s.searchWord))]),t._v(" "),s.iconUrl?e("span",{staticClass:"song-icon"},[e("img",{attrs:{src:s.iconUrl,alt:""}})]):t._e()]),t._v(" "),s.ar?e("div",{staticClass:"songer"},[t._v(t._s(s.ar[0].name)+" - "+t._s(s.al.name))]):e("div",{staticClass:"songer"},[t._v(t._s(s.content))])]),t._v(" "),s.score?e("div",{staticClass:"more hotscore"},[t._v(t._s(s.score))]):e("div",{staticClass:"more"},[t._m(0,!0)])])}),0)])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("span",[s("i",{staticClass:"iconfont icon-diandiandian"})])}]};var r=e("VU/8")(o,c,!1,function(t){e("fw9w")},"data-v-b4946fc6",null);s.a=r.exports},dirx:function(t,s){},fw9w:function(t,s){},k74z:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("Cz8s"),n=e("GP23"),i=(e("oAV5"),e("LlOk")),o={name:"search",data:function(){return{keywords:"",tracks:[],placeholder:"",hotlist:[],typeSearch:["综合","单曲","云村","视频","歌手","专辑","歌单","主播电台","用户"],searchresult:!1}},created:function(){var t=this;Object(i.h)().then(function(s){t.placeholder=s.data.data.showKeyword}),Object(i.f)().then(function(s){console.log(s.data.data),t.hotlist=s.data.data})},watch:{keywords:function(t){"string"==typeof t&&0!=t.trim().length&&this.debounce(this.changeStr,1e3)}},components:{anttop:a.a,songlistItem:n.a},methods:{debounce:function(t,s){null!==this.fun&&clearTimeout(this.fun),this.fun=setTimeout(t,s)},changeStr:function(){0!=this.keywords.length&&Object(i.i)(this.keywords).then(function(t){console.log(t)})}}},c={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"search-item"},[e("div",{staticClass:"backcolor"}),t._v(" "),e("div",{staticClass:"headerc"},[e("anttop",[e("div",{staticClass:"serchInput",attrs:{slot:"center"},slot:"center"},[e("el-input",{attrs:{placeholder:t.placeholder},model:{value:t.keywords,callback:function(s){t.keywords=s},expression:"keywords"}})],1),t._v(" "),e("div",{staticClass:"selectsongers",attrs:{slot:"right"},slot:"right"},[e("span",[e("i",{staticClass:"iconfont icon-haoyou"})])])])],1),t._v(" "),e("div",{staticClass:"hotsearch"},[t._v("热搜榜")]),t._v(" "),e("div",{staticClass:"song-content"},[e("songlistItem",{attrs:{tracks:t.hotlist}})],1),t._v(" "),t.searchresult?e("div",{staticClass:"search-result"},[e("div",{staticClass:"search-type"},[e("ul",[e("ul",t._l(t.lrcArr,function(s,a){return e("li",{key:a},[t._v(t._s(s))])}),0)])]),t._v(" "),e("div",{staticClass:"content-res"})]):t._e()])},staticRenderFns:[]};var r=e("VU/8")(o,c,!1,function(t){e("dirx")},"data-v-e537adc6",null);s.default=r.exports}});
//# sourceMappingURL=3.cbb902ab6cce69fb3a9e.js.map