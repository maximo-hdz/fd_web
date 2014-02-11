function show_hide_table( elemento, titulo ){
	if( $(elemento).css('display') == 'block' ){
		$(elemento).hide();
		$(titulo).removeClass('abierto').addClass('cerrado');
	}else{
		$(elemento).show();
		$(titulo).removeClass('cerrado').addClass('abierto');
	}
}