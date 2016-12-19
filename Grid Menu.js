<script type='text/javascript'>
function list_view(){
if(document.getElementsByClassName(&quot;post&quot;)) {elementArray = document.getElementsByClassName(&quot;post&quot;); while (elementArray.length) {elementArray[0].className = &quot;post-grid-view&quot;;}}
if(document.getElementsByClassName(&quot;post-title&quot;)) {elementArray = document.getElementsByClassName(&quot;post-title&quot;); while (elementArray.length) {elementArray[0].className = &quot;post-title-grid&quot;;}}
}
function grid_view(){
if(document.getElementsByClassName(&quot;post-grid-view&quot;)) {elementArray = document.getElementsByClassName(&quot;post-grid-view&quot;); while (elementArray.length) {elementArray[0].className = &quot;post&quot;;}}
if(document.getElementsByClassName(&quot;post-title-grid&quot;)) {elementArray = document.getElementsByClassName(&quot;post-title-grid&quot;); while (elementArray.length) {elementArray[0].className = &quot;post-title&quot;;}}
}
</script>
 <script type='text/javascript'>
posts_no_thumb_sum = 100;
posts_thumb_sum = 350;
</script>

<script type='text/javascript'>
//<![CDATA[
function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}
function createSummaryAndThumb(pID, pURL, pTITLE){
var div = document.getElementById(pID);
var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = posts_no_thumb_sum;
if(img.length>=1) {
imgtag = '<span class="posts-thumb" style="float:left; margin-right: 10px;"><a href="'+ pURL +'"><img src="'+img[0].src+'" /></a></span>';
summ = posts_thumb_sum;
}

else {
imgtag = '<span class="posts-thumb" style="float:left; margin-right: 10px;"><a href="'+ pURL +'" title="'+ pTITLE+'"><img src="http://2.bp.blogspot.com/-Gbn3dT1R9Yo/VPXSJ8lih_I/AAAAAAAALDQ/24wFWdfFvu4/s1600/sorry-image-not-available.png" style="margin-top: -30px;" /></a></span>';
summ = posts_thumb_sum;
}

var summary = imgtag + '<a href="'+ pURL +'"><div class="post-summary-text">' + removeHtmlTag(div.innerHTML,summ) + '</div></a>';
div.innerHTML = summary;
}
//]]>
</script>

<b:if cond='data:blog.pageType != &quot;static_page&quot;'>
<b:if cond='data:blog.pageType!= &quot;item&quot;'>
<style>
#list-view-button {font-family: Verdana; text-align:left;cursor:pointer;font-size: 14px;border-bottom: 5px solid #eaeaea;text-decoration: none;}
#list-view-button a{text-decoration: none; color: #666;}
.grid-view-button {background-color:#efefef;color:#666;padding:5px 10px;border-radius: 5px;font-size: 12px;}
.list-view-button {background-color:#efefef;color:#000;padding:5px 10px;border-radius: 5px;font-size: 12px;}
.post-grid-view {width:100%;height:250px;overflow: hidden;float:left;margin:0px 0px 20px !important;position:relative;display: block; -webkit-transition:all 0.5s ease 0s; -moz-transition:all 0.5s ease 0s; -o-transition:all 0.5s ease 0s; transition:all 0.5s ease 0s; }
.post-grid-view .posts-thumb {width:40% !important;height:250px !important;float:left;margin:0px;position:relative;border-top: 0px solid transparent !important;overflow: hidden;}
.post-grid-view .post-header {display: none;}
.post-grid-view .post-body img {min-width: 300px !important; min-height: 250px !important;display:block;width:100%!important;height:auto!important;max-width:800px!important;max-height:400px!important;border:none;outline:none;position:relative;margin: 0px;padding:0;}
.post-grid-view .post-summary-text {opacity: 1; background: none; width: 58%;font-size: 120% !important;clear: none !important; display: inline-block !important; padding: 80px 0px !important; color: #666 !important; text-shadow: none !important; float: right !important; text-align: left; position: relative !important; font-family: &#39;Open Sans Condensed&#39;, sans-serif;}
.post-grid-view .post-body {height: 250px;background:#f5f5f5; box-shadow: none !important;}
.post-title-grid a { font-size:170%;color: #777;font-family: &#39;Open Sans Condensed&#39;, sans-serif;}
.post-title-grid { position: absolute; left: 42%; top: 5%; z-index: 1;}
.post-grid-view .post-footer {left: 41%; display:block;position: absolute; bottom: 2%;font-size: 120%; background: transparent !important; border: 0px solid transparent !important;font-family: &#39;Open Sans Condensed&#39;, sans-serif;}
.post-grid-view .post-footer a{color: #128EC9;}
.post-grid-view a.comment-bubble {display: none;}
.main-inner .column-center-inner .section {margin: 0px !important;}
.post { -webkit-transition:all 0.5s ease 0s; -moz-transition:all 0.5s ease 0s; -o-transition:all 0.5s ease 0s; transition:all 0.5s ease 0s;}

#blog-pager {clear:both;}
.post {height:auto;width:32.2%;display:inline-block;text-decoration:none;float:left;margin:0 1% 1% 0%;overflow: hidden;padding:0!important;}
.date-header {display: none;}
h3.post-title a {font-size:90%;font-family: &#39;Open Sans Condensed&#39;, sans-serif;text-transform:uppercase;color:#fff;text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.1);font-weight: bold;}
h3.post-title {text-align: center; position:absolute;top:0;width:100%;overflow:hidden;margin:0px !important;padding-top: 30%; background-color: rgba(50, 126, 213, 0.8);transform: scale(1);opacity: 0;z-index: 10;height: 100%;transition: all 300ms ease-out 0s;}
h3.post-title:hover {opacity: 1;}
.posts-thumb {width:100%!important;height:200px!important;overflow:hidden;clear:both;}
.post-body {border-radius:2px;box-shadow:0 5px 4px 1px rgba(0,0,0,0.1);position:relative;overflow: hidden;}
.post-body a {text-decoration: none;}
.post-body img {display:block;width:100%!important;height:auto!important;max-width:800px!important;max-height:400px!important;min-width:200px!important;min-height:200px!important;border:none;outline:none;position:relative;margin: 0px;padding:0;}
.post-summary-text {display: none;}
a.comment-bubble {color:#fff;text-decoration:none;font-size:100%;width: 100%;text-align: center;position:absolute;top:175px;left: 0px;text-shadow:1px 2px 1px #333;font-family: &#39;Pacifico&#39;, cursive;z-index: 122;}
a.comment-bubble:before { content: &quot;Comments: &quot; url(http://4.bp.blogspot.com/-t1i_svebif4/VPMpZqPrKzI/AAAAAAAALAg/TRJ2Un238Gs/s1600/heart-active.png);}
.post-header,.post-footer {display:none;}
</style></b:if></b:if>
<link href='http://fonts.googleapis.com/css?family=Open+Sans+Condensed:300' rel='stylesheet' type='text/css'/>
<link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css'/>