"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[658],{8658:function(i,t,e){e.r(t),e.d(t,{default:function(){return p}});var a=e(3396),n=e(7139);const o={class:"movieDetail"},r={key:0},s=(0,a._)("b",null,"adult",-1),l=["src"],d=["href"],m=["src"];function u(i,t,e,u,h,v){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("h2",null,(0,n.zw)(h.title),1),(0,a._)("p",null,(0,n.zw)(h.release_date),1),h.adult?((0,a.wg)(),(0,a.iD)("p",r,[(0,a.Uk)("This is an "),s,(0,a.Uk)(" film")])):(0,a.kq)("",!0),(0,a._)("img",{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+h.backdrop_path},null,8,l),(0,a._)("p",null,"Rating: "+(0,n.zw)(h.vote_average)+" out of 10",1),(0,a._)("p",null,"Vote Count: "+(0,n.zw)(h.vote_count),1),(0,a._)("a",{href:"https://www.themoviedb.org/movie/"+this.id,target:"_blank",class:"button"},"View Movie",8,d),(0,a._)("p",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(h.genre_ids,(i=>((0,a.wg)(),(0,a.iD)("span",{key:i.id},(0,n.zw)(h.genres.find((({id:t})=>t===i)).name),1)))),128))]),(0,a._)("p",null,(0,n.zw)(h.original_title),1),(0,a._)("p",null,(0,n.zw)(h.overview),1),(0,a._)("p",null,(0,n.zw)(h.popularity),1),(0,a._)("img",{src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2/"+h.poster_path},null,8,m),(0,a._)("p",null,(0,n.zw)(h.video),1)])}var h=e(70),v={props:["id"],data(){return{movie:{},country:String,adult:Boolean,backdrop_path:String,genre_ids:Array,original_language:String,original_title:String,overview:String,popularity:Number,poster_path:String,release_date:String,title:String,video:Number,vote_average:Number,vote_count:Number,genres:[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]}},async mounted(){const i=await h.ZP.get("/api/movies/"+this.id);this.movie=await i.data,this.country=await this.movie[0].country,this.adult=await this.movie[0].adult,this.backdrop_path=await this.movie[0].backdrop_path,this.genre_ids=await this.movie[0].genre_ids,this.original_language=await this.movie[0].original_language,this.original_title=await this.movie[0].original_title,this.overview=await this.movie[0].overview,this.popularity=await this.movie[0].popularity,this.poster_path=await this.movie[0].poster_path,this.release_date=await this.movie[0].release_date,this.title=await this.movie[0].title,this.video=await this.movie[0].video,this.vote_average=await this.movie[0].vote_average,this.vote_count=await this.movie[0].vote_count}},_=e(89);const g=(0,_.Z)(v,[["render",u]]);var p=g}}]);
//# sourceMappingURL=658.13010fc9.js.map