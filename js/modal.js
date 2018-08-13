/*!
 * @name        jQuery Modal
 * @author      Matt Hinchliffe <http://i-like-robots.github.io/jQuery-Modal/>
 * @modified    Friday, June 14th, 2013, 13:24:15
 * @version     1.0.2
 */!function(a,b){"use strict";function c(c,d){return this.opts=a.extend({},{onopen:b,onhide:b,onupdate:b,fixed:!1,overlay:!0,blur:!0,escape:!0,width:640,maxWidth:"95%",height:480,maxHeight:"95%",namespace:"modal"},d),this.target=c,this.isOpen=!1,this.isInitialized=!1,this}c.prototype._init=function(){this.doc=a(document),this.wrapper=a('<div class="modal-wrapper">').css({position:this.opts.fixed?"fixed":"absolute",width:this.opts.width,maxWidth:this.opts.maxWidth,height:this.opts.height,maxHeight:this.opts.maxHeight,display:"none"}),this.close=a('<span class="modal-close" data-'+this.opts.namespace+"-close>Close</span>").appendTo(this.wrapper),this.content=a('<div class="modal-content">').appendTo(this.wrapper),this.wrapper.appendTo(this.target),this.overlay=!1,this.opts.overlay&&(this.overlay=a('<div class="modal-overlay"'+(this.opts.blur?"data-"+this.opts.namespace+"-close":"")+">").css({position:"absolute",top:0,left:0,width:"100%",display:"none"}).appendTo(this.target)),this.isBody=this.target===document.body,this.context=this.isBody?a(window):a(this.target).css("position","relative"),this.isInitialized=!0},c.prototype.align=function(){var a=this.wrapper.outerHeight(),b=this.wrapper.outerWidth(),c=this.context.outerHeight(),d=this.context.outerWidth(),e=this.opts.fixed?0:this.context.scrollTop();this.wrapper.css({top:c>a?(c-a)/2+e:e,left:d>b?(d-b)/2:0}),this.opts.overlay&&this.overlay.css("height",this.isBody?this.doc.height():c)},c.prototype.open=function(a,b){this.isInitialized||this._init();var c=this;this.isBody&&(this.context.on("resize."+this.opts.namespace,function(){c.align()}),this.doc.on("keyup."+this.opts.namespace,function(a){27===a.keyCode&&c.hide()})),this.doc.on("click.modal","[data-"+this.opts.namespace+"-close]",function(a){a.preventDefault(),c.hide()}),this.wrapper.add(this.overlay).stop().fadeIn(),this.isOpen=!0,a&&this.update(a),this.opts.onopen&&this.opts.onopen.call(this),b&&b.call(this)},c.prototype.update=function(a,b){this.content.html(a),this.isOpen&&this.align(),this.opts.onupdate&&this.opts.onupdate.call(this),b&&b.call(this)},c.prototype.resize=function(a,b){this.wrapper.css({width:a,height:b}),this.align()},c.prototype.hide=function(a){this.doc.off("."+this.opts.namespace),this.wrapper.add(this.overlay).stop().fadeOut(),this.isOpen=!1,this.opts.onhide&&this.opts.onhide.call(this),a&&a.call(this)},a.fn.modal=function(b,d){return this.each(function(){var e=d?"modal_"+d:"modal";a.data(this,e)||a.data(this,e,new c(this,b))})},"function"==typeof define&&define.amd?define(function(){return c}):"undefined"!=typeof module&&module.exports&&(module.exports=c)}(jQuery);