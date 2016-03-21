$( function (){
	for(var x=1; x<4; x++) {
		for (var y=1;y<4; y++) {
			$('<div></div>').addClass('field')
			.attr('id','field'+x.toString()+'-'+y.toString())
			.css({left:(x-1)*50, top:(y-1)*50}).appendTo('#map');

		};
	}
	var checkSight=false;
	$('.field').on('click',function(){
		if($(this). hasClass('field-cross')|| $(this). hasClass('field-nought'))
			return;
		checkSight=!checkSight;
		$(this).addClass(checkSight?'field-cross': 'field-nought');
		function check(x,y){
				return $('#field'+x.toString()+'-'+y.toString())
			. hasClass(checkSight?'field-cross':'field-nought');
		}
		if (
			(check(1,1)&&check(1,2)&&check(1,3))
			||(check(2,1)&&check(2,2)&&check(2,3))
			||(check(3,1)&&check(3,2)&&check(3,3))
			||(check(1,1)&&check(2,1)&&check(3,1))
			||(check(1,2)&&check(2,2)&&check(3,2))
			||(check(1,3)&&check(2,3)&&check(3,3))
			||(check(1,1)&&check(2,2)&&check(3,3))
			||(check(1,3)&&check(2,2)&&check(3,1))
			){
			alert("Выйграл"+(checkSight?'x':'0'));
		$('.field').off('click');
		}
	});
});