setTimeout(function() {
              $('#menu2').append('<li class="slide-line"></li>');
              $('#menu2 li.slide-line').show();
            }, 0);

            jQuery(document).on('mouseenter', '#menu2 li a', function () {

              var $this = jQuery(this),
              offset = $this.offset(),

              offsetBody = jQuery('#box2').offset();
              TweenMax.to(jQuery('#menu2 .slide-line'), 0.5, {
                css:{
                  width: $this.outerWidth() - 30 +'px',
                  left: (offset.left-offsetBody.left) + 15 +'px'
                },
                overwrite:"all",

                ease:Back.easeOut
              });

            }).on('mouseleave', '#menu2 li', function () {

              var $this = jQuery(this),
      
              $active = $this.parent().find("a.active"),

              offset = $active.offset(),

              offsetBody = jQuery('#box2').offset();

              TweenMax.to(jQuery('#menu2 .slide-line'), 0.5, {
                css:{
                  width: $active.outerWidth() - 30 + 'px',
                  left: (offset.left-offsetBody.left)+ 15 +'px'
                },
                overwrite:"all",
                ease:Power4.easeInOut
              });
            });
