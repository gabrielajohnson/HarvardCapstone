"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[416],{3416:function(t,i,a){a.r(i),a.d(i,{default:function(){return r}});var s=a(3396),n=a(7139);const l=["href"],e=(0,s._)("p",{id:"descHighlighted"},null,-1),d={id:"descOriginal"};function o(t,i,a,o,h,c){return(0,s.wg)(),(0,s.iD)("div",null,[(0,s._)("h2",null,(0,n.zw)(h.title_original),1),(0,s._)("h3",null,"Podcast: "+(0,n.zw)(h.podcast_title_highlighted),1),(0,s._)("a",{href:h.audio,class:"button",target:"_blank"},"View Podcast",8,l),(0,s._)("p",null,(0,n.zw)(h.audio_length_sec),1),e,(0,s._)("p",d,(0,n.zw)(h.description_original),1),(0,s._)("p",null,(0,n.zw)(h.image),1),(0,s._)("p",null,(0,n.zw)(h.thumbnail),1),(0,s._)("p",null,(0,n.zw)(h.itunes_id),1),(0,s._)("p",null,(0,n.zw)(h.listennotes_url),1),(0,s._)("p",null,(0,n.zw)(h.explicit_content),1),(0,s._)("p",null,(0,n.zw)(h.link),1),(0,s._)("p",null,(0,n.zw)(h.podcast_listennotes_url),1),(0,s._)("p",null,(0,n.zw)(h.podcast_id),1),(0,s._)("p",null,(0,n.zw)(h.podcast_publisher_original),1),(0,s._)("p",null,(0,n.zw)(h.podcast_image),1),(0,s._)("p",null,(0,n.zw)(h.podcast_thumbnail),1),(0,s._)("p",null,(0,n.zw)(h.podcast_genre_ids),1)])}var h=a(70),c={props:["id"],data(){return{podcast:{},country:String,audio:String,audio_length_sec:String,description_highlighted:String,description_original:String,title_original:String,title_highlighted:String,image:String,thumbnail:String,itunes_id:String,listennotes_url:String,explicit_content:String,link:String,podcast_listennotes_url:String,podcast_id:String,podcast_title_highlighted:String,podcast_title_original:String,podcast_publisher_original:String,podcast_image:String,podcast_thumbnail:String,podcast_genre_ids:Array}},async mounted(){const t=await h.ZP.get("/api/podcasts/"+this.id);this.podcast=await t.data,this.country=await this.podcast[0].country,this.audio=await this.podcast[0].audio,this.audio_length_sec=await this.podcast[0].audio_length_sec,this.description_highlighted=await this.podcast[0].description_highlighted,this.description_original=await this.podcast[0].description_original,this.title_original=await this.podcast[0].title_original,this.title_highlighted=await this.podcast[0].title_highlighted,this.image=await this.podcast[0].image,this.thumbnail=await this.podcast[0].thumbnail,this.itunes_id=await this.podcast[0].itunes_id,this.listennotes_url=await this.podcast[0].listennotes_url,this.explicit_content=await this.podcast[0].explicit_content,this.link=await this.podcast[0].link,this.podcast_listennotes_url=await this.podcast[0].podcast.listennotes_url,this.podcast_id=await this.podcast[0].podcast.id,this.podcast_title_highlighted=await this.podcast[0].podcast.title_highlighted,this.podcast_title_original=await this.podcast[0].podcast.title_original,this.podcast_publisher_original=await this.podcast[0].podcast.publisher_original,this.podcast_image=await this.podcast[0].podcast.image,this.podcast_thumbnail=await this.podcast[0].podcast.thumbnail,this.podcast_genre_ids=await this.podcast[0].podcast.genre_ids;var i=document.getElementById("descHighlighted");i.innerHTML=this.description_highlighted;var a=document.getElementById("descOriginal");a.innerHTML=this.description_original}},_=a(89);const p=(0,_.Z)(c,[["render",o]]);var r=p}}]);
//# sourceMappingURL=416.4dd9974a.js.map