$(function(){
	for (i=100 ;i>0 ; i--){
		$(".works").append('<div class="work">' +
								'<div class="pic" >'+
									'<img src="images/day'+i+'.jpg" style="display:none">'+
								'</div>'+
								'<div class="day">'+
									'<p>'+i+'</p>'+
								'</div>'+
								'<div class="loader">'+
									'<div class="loader-inner cube-transition">'+
										'<div></div>'+
									'</div>'+
								'</div>'+
							'</div>');

	}

	$(".pic img").load(function(){
			console.log($(this).attr("src"));
			console.log($($(this).parent()).attr('class'));
			//console.log($(this).parent.attr('class'));

			$(this).show();
			$(this).parent().parent().find(".loader").hide();
	});

	$(".pic img").error(function(){
			$(this).parent().parent().hide();

	});

		$.ajax({url:"links.json",
				type: "GET", 
				data: {},
				cached: false,
				dataType: "json",
				success: function(data){
						var linkHtml = '';
						var linkTpl = '<div class="link ${name}"><a href="${url}" target="_blank"><i class="mdi mdi-${icon}"></i></a></div>';

						data.forEach(function(link) {
							linkHtml += linkTpl.replace('${name}', link.name).replace('${url}', link.url).replace('${icon}', link.icon);
						});

						$('.user .links').html(linkHtml);
					}
				});	


})
