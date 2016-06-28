$(function(){
//到top
	$('#db').hover(
		function(){
			$('#db .bj').hide();
			$('#db .wz').show();
			$(this).css('backgroundColor','#333')
		},
		function(){
			$('#db .bj').show();
			$('#db .wz').hide();
			$(this).css('backgroundColor','#ccc')
		}
	);
//每页函数
	function hy(page,dz){
	$.ajax({
		url:dz,
		data:{num:'10','page':page},
		type:'GET',
		headers:{'apikey':'2dff9384f9db2e2a5ae19341a4416e36'},
		dataType:'json',
		success:function(data){

            $.each(data.newslist,function(i,v){

            	var li=$('<li></li>');
            	var aa=$('<a><a/>');
            	aa.attr('href',v.url);
            	li.append(aa);
            	aa.addClass('aa');
            	var img=$('<img src="'+v.picUrl+'">');
            	var tl=$('<div>'+v.title+'</div><br>');
            	var ms=$('<div>'+v.description+' '+v.ctime+'</div>');
            	$('.neirong>ul').append(li);
            	li.append(img).append(tl).append(ms);
            	li.addClass('lis');
            	img.addClass('images');
            	tl.addClass('tl');
            	ms.addClass('ms');
            });
		},
	});}
//初始页
	var page=1;
	hy(page,'http://apis.baidu.com/txapi/weixin/wxhot');
//下一页
	$('.zj').click(function(){
		$('#c #nr li:lt(10)').remove();
		page++;
		hy(page,'http://apis.baidu.com/txapi/weixin/wxhot');
	})
//切换分组
		$('.center .top li').each(function(i){
		$(this).click(function(){
			$('#c #nr li:lt(10)').remove();
			$('.center .top li').css('color','blue');
			$(this).css('color','green');
			hy(i,'http://apis.baidu.com/txapi/weixin/wxhot');
		})
	 })
});