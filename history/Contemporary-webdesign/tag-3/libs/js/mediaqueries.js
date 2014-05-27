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
