# creative web

## Link collection

### Introduction into HTML, CSS & more
http://learn.shayhowe.com/  
http://learnlayout.com/  
http://www.codecademy.com/#!/exercises/0  

### Article & Tutorials
http://net.tutsplus.com/  
http://coding.smashingmagazine.com/  
http://coding.smashingmagazine.com/2009/08/04/designing-a-html-5-layout-from-scratch/   
http://alistapart.com   
http://webdesign.tutsplus.com/ 
http://tympanus.net/codrops/ 

### Which CSS3 / HTML5 specs are save to use 
http://caniuse.com

### CSS properties explained 
https://developer.mozilla.org/en-US/docs/Web/CSS  
http://www.w3schools.com/  
http://css-tricks.com/snippets/css/

### Very helpful community 
http://stackoverflow.com

### Grids
**CSS Grid System**  
https://github.com/lukasoppermann/gridified

**Grid & mehr NUR für sehr moderne Browser**  
http://philipwalton.github.io/solved-by-flexbox/

## Validatoren (Fehler im Code finden)
**CSS** http://jigsaw.w3.org/css-validator/#validate_by_input  
**HTML** http://validator.w3.org/

## BTK SERVER Zugang
http://blogs.btk-fh.de/it/fileserver/

### repository of the old workshop
https://github.com/lukasoppermann/Contemporary-webdesign 

## Presentations

28.10.2013  
**Git & github (Hanju Kim)**  
**understanding css & selector importance (Maximilien Weiss)**  

## Code snippets
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

### Smooth scrolling   
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
