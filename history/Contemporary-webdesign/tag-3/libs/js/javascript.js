// document ready
$(function(){
    var contact_offset = 0, // define variable
        $contact = $('#contact'); // cache selection
    // open contact
    $('#contact_link').on('click', function(){
        $contact.toggleClass('active'); // adds or removes "active" class from #contact (closes or opens contact)
    });
    // open contact & menu
    $('#menu').on('click', function(){
        $contact.toggleClass('active'); // adds or removes "active" class from #contact (closes or opens contact)
        $('nav').toggleClass('active');  // adds or removes "active" class from .navigation (closes or opens contact)
    });
    // close contact
    $('#about_link, #portfolio_link').on('click', function(){
        // check if contact is active
        if( $contact.hasClass('active') )
        {
            contact_offset = $contact.height(); // set contact_offset to contact height
        }
        // removes "active" class from #contact (closes contact)
        $contact.removeClass('active');
    });
    // -----------------------------------
    // smooth scrolling
    $('a[href*=#]').on('click', function() // selector: every a element that contains a # (hash)
    {
        if( location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') // pathname = part after hostname 
        // e.g. /test/something (! No hash included); this checks if the pathname is the same
         || location.hostname == this.hostname ) // hostname = www.example.com; this checks if location (browser url bar)
            // hostname is the same as the hostname in the clicked link
        {
            // get hash e.g. "#about"
            var target = $(this.hash);
            // checks if target is jQuery selection with an item present, else it tries to select the item with the name tag = hash
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            // if target exists 
            if( target.length )
            {
                // scroll animation
                $('html,body').animate({
                    // offset.top = distance top of website to top of target
                    scrollTop: target.offset().top - contact_offset // substract contact_offset to get accurat result
                // 1000 = duration 1000ms (milliseconds) = 1 second
                }, 1000);
                // deactivate default linking behavior (opening new page)
                return false;
            }
        }
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
    
});