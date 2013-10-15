# creative web

## Link collection

**Tutorials**
http://net.tutsplus.com/  
http://coding.smashingmagazine.com/  
http://coding.smashingmagazine.com/2009/08/04/designing-a-html-5-layout-from-scratch/  

http://tympanus.net/codrops/ 

**repository of the old workshop**  
https://github.com/lukasoppermann/Contemporary-webdesign 


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
