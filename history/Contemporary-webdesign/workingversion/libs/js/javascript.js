$(function(){
/* jquery ready */

	// öffnet contact 
	$('#contact_link').on('click', function(){
		$('#contact').toggleClass('active');
		return false;
	});
	// öffnet menu auf mobile
	$('#menu').on('click', function(){
		$('#contact').toggleClass('active');
	});
	// -----------------------------------
    // Media Queries
    var body = $('body'); // cache jquery selection
    // define query actions
    var queries = [
        {
            context: 'mobile-portrait',
            match: function() {
                body.addClass('mobile portrait');
            },
            unmatch: function() {
                body.removeClass('mobile portrait');
            }
        },
        {
            context: 'mobile-landscape',
            match: function() {
                body.addClass('mobile landscape');
            },
            unmatch: function() {
                body.removeClass('mobile landscape');
            }
        },
        {
            context: 'tablet-small',
            match: function() {
                body.addClass('tablet small');
            },
            unmatch: function() {
                body.removeClass('tablet small');
            }
        },
        {
            context: 'tablet',
            match: function() {
                body.addClass('tablet wide');
            },
            unmatch: function() {
                body.removeClass('tablet wide');
            }
        },
        {
            context: 'screen',
            match: function() {
                body.addClass('screen hover');
            },
            unmatch: function() {
                body.removeClass('screen hover');
            }
        },
        {
            context: 'widescreen',
            match: function() {
                body.addClass('widescreen hover');
            },
            unmatch: function() {
                body.removeClass('widescreen hover');
            }
        }
    ];
    // Go!
    MQ.init(queries);
// -----------------------------------
// Smooth scrolling
$('a[href*=#]').on('click', function(){
	
	if( location.pathname.replace(/^\//,'') 
		 == this.pathname.replace(/^\//,'')
	 || location.hostname == this.hostname )
	 {
		 // suche nach dem Ziel zum Hinscrollen
		 var target = $(this.hash);
		 target = target.length ? target : 
		 $('[name=' + this.hash.slice(1) +']');
		 // wenn ein Ziel (target) exisiert, führe aus ...
		 if( target.length )
		 {
			 $('html,body').animate({
				 scrollTop: target.offset().top
			 }, 1000);
			 return false;
		 }
		
	 }
});
// -----------------------------------
// Debounce
;(function( $ )
{
	// debounced resize event (fires once every 100ms)
	$.fs_resize = function( c, t, f )
	{
		if( t == undefined ){ t = 100; }
		window.onresize = function(){
			clearTimeout( f );
			f = setTimeout( c, t)
		};
		return c;
	};	
	// add jquery to scope	
})( jQuery );
// -----------------------------------
// horizontal scroller
$(function(){
	
	var $win = $(window), $nav = $('nav'), images = $('.horizontal-scroll'), imgs = images.find('img'), width = 0,
		menuHeight = $nav.height(),
		windowHeight = $win.height();
	
	// for big screens
	if( $win.width() >= 500 )
	{	
		imgs.css({'width':'auto','height':'100%'});
		images.height(windowHeight-menuHeight);

		imgs.each(function(){
			width += $(this).outerWidth();
		});
		
		images.width(width);
	}
	// form mobile devices
	else
	{
		images.css({'width':'100%','height':'auto'});
		imgs.css({'width':'100%','height':'auto'});
	}
	
	
	$.fs_resize(function()
	{
		// for big screens
		if( $win.width() >= 500 )
		{
			width = 0;
			menuHeight = $('nav').height();
			windowHeight = $win.height();
			
			images.height(windowHeight-menuHeight);
			imgs.each(function(){
				width += $(this).outerWidth();
			});
			images.width(width);
			imgs.css({'width':'auto','height':'100%'});
		}
		// form mobile devices
		else
		{
			images.css({'width':'100%','height':'auto'});
			imgs.css({'width':'100%','height':'auto'});
		}
		
	});

});

/* close jquery ready */	
});