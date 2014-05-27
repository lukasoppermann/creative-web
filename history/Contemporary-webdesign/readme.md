# Contemporary Webdesign

These are the exercises for the contemporary webdesign workshop.


## CSS Grid System
https://github.com/lukasoppermann/gridified

## Grid & mehr NUR für sehr moderne Browser
http://philipwalton.github.io/solved-by-flexbox/

## Validatoren (Fehler im Code finden)
**CSS** http://jigsaw.w3.org/css-validator/#validate_by_input  
**HTML** http://validator.w3.org/

## BTK SERVER Zugang
http://blogs.btk-fh.de/it/fileserver/

## Slides from the workshopw
**day 1** [http://www.slideshare.net/slideshow/embed_code/26484797](http://www.slideshare.net/slideshow/embed_code/26484797)  
**day 2** [http://www.slideshare.net/slideshow/embed_code/26484937](http://www.slideshare.net/slideshow/embed_code/26484937)

## Helpful links
Which CSS3 / HTML5 are save to use http://caniuse.com

### CSS properties explained 
https://developer.mozilla.org/en-US/docs/Web/CSS  
http://www.w3schools.com/  
http://css-tricks.com/snippets/css/

### Libraries & Plugins 
https://github.com/

### Very helpful community 
http://stackoverflow.com

### Artikel & Tutorials

http://smashingmagazine.com/  
http://net.tutsplus.com/  
http://webdesign.tutsplus.com/  
http://alistapart.com    
http://tympanus.net/codrops/

### Retina Sprite

    @media
    only screen and (-Webkit-min-device-pixel-ratio: 2),
    only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (   min--moz-device-pixel-ratio: 2),
    only screen and (   -moz-min-device-pixel-ratio: 2),
    only screen and (     -o-min-device-pixel-ratio: 2/1),
    only screen and (        min-device-pixel-ratio: 2),
    only screen and (                min-resolution: 192dpi),
    only screen and (                min-resolution: 2dppx) {
	    .sprite, .pseudo-sprite:before{
		    background-image: url('../../layout/lukas-oppermann-sprite@2x.png');
		    background-size: 500px 360px;
	    }
    }
  
## Smooth scrolling   
Ihr braucht:
Ein Link `<a href="#einName">blabla</a>`   
An dem Ort wo hingescrollt werden soll `<a name="einName"><h3>Überschrift</h3></a>`  

    // -----------------------------------
    // Smooth scrolling
    $('a[href*=#]').on('click', function()
    {
    	if( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
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
