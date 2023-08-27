
var sQuery = '<?php echo $sQuery; ?>';
jQuery(document).ready(function () {
  jQuery(window).scroll(function () {
    var scrollTop = jQuery(this).scrollTop();
    var button1Offset = jQuery('#collapse-one').offset().top;
    var button2Offset = jQuery('#collapse-two').offset().top;
    var button3Offset = jQuery('#collapse-three').offset().top;
    var button4Offset = jQuery('#collapse-four').offset().top;
    var button5Offset = jQuery('#collapse-five').offset().top;

    // Reset all button highlights
    jQuery('.myDIV div').removeClass('active');

    // Highlight the buttons based on the scroll position
    if (scrollTop >= button1Offset && scrollTop < button2Offset-200) {
      jQuery('#headingOne').addClass('active');
    } else if (scrollTop >= button2Offset-600 && scrollTop < button3Offset-300) {
      jQuery('#heading2').addClass('active');
    } else if (scrollTop >= button3Offset-300 && scrollTop < button4Offset-300) {
      jQuery('#heading3').addClass('active');
    } else if (scrollTop >= button4Offset-300 && scrollTop < button5Offset-400) {
      jQuery('#heading4').addClass('active');
    }
    else if (scrollTop >= button5Offset-400) {
      jQuery('#heading5').addClass('active');
    }
  });
});
