$(document).ready(main);

var contador = 1;

function main(){
	$('.nav-mobile').click(function(){
		if(contador==1){
			$('.li-mobile').animate({
				height: '140'
			});
			contador=0;
		}else{
			$('.li-mobile').animate({
				height: '0'
			});
			contador=1;
		}
	});
	
};