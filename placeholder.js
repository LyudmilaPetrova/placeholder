/**
 *  www.hagenburger.net/BLOG/HTML5-Input-Placeholder-Fix-With-jQuery.html
 *
 *
 */

(function($)
{
  $.fn.placeholder= function() {
    return this.each(function() {
      
      $(this).focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
          input.val('');
        }
      }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
          input.val(input.attr('placeholder'));
        }
      }).blur();
      
      // А надо ли?
      $(this).parents('form').submit(function() {
        $(this).find('[placeholder]').each(function() {
          var input = $(this);
          if (input.val() == input.attr('placeholder')) {
            input.val('');
          }
        })
      });
    });
  }

})(jQuery);