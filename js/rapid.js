(function ( $, window, document, undefined ) {

    // Create the defaults once
    var pluginName = 'rapid',
        defaults = {
            propertyName: "value"
        };

    // The actual plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        // jQuery has an extend method that merges the
        // contents of two or more objects, storing the
        // result in the first object. The first object
        // is generally empty because we don't want to alter
        // the default options for future instances of the plugin
        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.pages = [];
        this.dialogs = [];

        this.init();
    }

    Plugin.prototype.init = function () {
        // Place initialization logic here
        // You already have access to the DOM element and
        // the options via the instance, e.g. this.element
        // and this.options

        var _plugin = this;

        $(this.element).find('[r-open]').on('click', function() {
            var target = $(this).attr('r-open');
            var targetEl = _plugin.lookup( target );
            if ( targetEl.is('[r-page]') ) {
                // route
            } else if ( targetEl.is('[r-dialog]') ) {
                targetEl.show();
            } else if ( targetEl.is('[r-modal]') ) {
                $('[r-dim]').first().show();
                targetEl.show();
            }
        });

        $(this.element).find('[r-dim]').on('click', function() {
            var closeable = [
                'dialog', 'modal', 'dim'
            ];
            var selector = _.map( closeable, function(element) {
                return '[r-' + element + ']';
            });
            $(_plugin.element).find( selector.join(', ') ).hide();
        });
    };

    Plugin.prototype.lookup = function( name ) {
        var openable = [
            'page', 'dialog', 'modal'
        ];
        var selector = _.map( openable, function(element) {
            return '[r-' + element + '="' + name + '"]';
        });
        return $(this.element).find(selector.join(', ')).first();
    };

    // A really lightweight plugin wrapper around the constructor,
    // preventing against multiple instantiations
    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName,
                new Plugin( this, options ));
            }
        });
    }

})( jQuery, window, document );
