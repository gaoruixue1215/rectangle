$(function(){
    $forkMeGH.show("https://github.com/PeiYumeng/rectangle");
    $bszPageFooter.show("body");
    //get dom elem
    var $width = $('#width'),
          $height = $('#height'),
          $btnCal = $('#calculate'),
          $perimeter = $('#perimeter'),
          $area = $('#area');
    
    /*calc button click event*/
    $btnCal.click(function(){
        //get value
        var w = Number($width.val()),
            h = Number($height.val());
             
        //calculate
        var p = Math.round(2*(w+h)*Math.pow(10,4))/Math.pow(10,4);
            a = Math.round(w*h*Math.pow(10,4))/Math.pow(10,4);
        //output
        $perimeter.val(p);
        $area.val(a)
    });
});
