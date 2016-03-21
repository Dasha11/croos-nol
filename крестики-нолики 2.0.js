var mapWidth=10;
var	mapHeight=10;
var	winLength=5;

$( function (){
	for(var x=1; x<=mapWidth; x++) {
		for (var y=1;y<=mapHeight; y++) {
			$('<div></div>').addClass('field')
			.data('x',x)
			  .data('y',y)
				.attr('id','field'+x.toString()+'-'+y.toString())
					.css({left:(x-1)*50, top:(y-1)*50}).appendTo('#map');
		}
	}
	var checkSight=false;
	var n=0;
	var m=0;
	$('.field').on('click', function(){
		if($(this).hasClass('field-cross') || $(this).hasClass('field-nought')) return;
		checkSight=!checkSight;
		$(this).addClass(checkSight?'field-cross':'field-nought');

		function check(x,y){
		  	return $('#field'+x.toString()+'-'+y.toString()).hasClass(checkSight? 'field-cross':'field-nought');
		  }
		
				var x=parseInt($(this).data('x'));
				var y=parseInt($(this).data('y'));
				var delta=-1;

				$.each([-1,1],function(index,offset){
							do {
						x+=offset;
					} while(check(x,y));

					delta=x-delta;			
			});
				if(delta>=winLength){
					alert("Выйграл" + " "+ (checkSight?'x':'0'));
					$('#map').addClass('game-over');
					$('.field').off('click');
				}
					/*alert(delta);*/
		 /* {
			alert ("Выиграли " +(checkSight? 'x':'o'));
			$('.field').off('click');
			}*/
	});
});