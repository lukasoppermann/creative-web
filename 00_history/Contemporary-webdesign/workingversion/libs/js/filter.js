$(function() {
	$('#filters .filter-link').on('click', function() {
		$('#filters .current').removeClass('current');
		$(this).addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
				
		if(filterVal == 'all') {
			$('#items .portfolio-item.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('#items .portfolio-item').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		
		return false;
	});
});