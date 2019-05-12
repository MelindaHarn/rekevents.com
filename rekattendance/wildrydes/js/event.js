

    var currentTab = 0; // Current tab is set to be the first tab (0)
    showTab(currentTab); // Display the current tab

    function showTab(n) {
        // This function will display the specified tab of the form ...
        var x = document.getElementsByClassName("tab");
        x[n].style.display = "block";
        // ... and fix the Previous/Next buttons:
        if (n == 0) {
            document.getElementById("prevBtn").style.display = "none";
        } else {
            document.getElementById("prevBtn").style.display = "inline";
        }
        if (n == (x.length - 1)) {
            document.getElementById("nextBtn").innerHTML = "Submit";
        } else {
            document.getElementById("nextBtn").innerHTML = "Next";
        }
        // ... and run a function that displays the correct step indicator:
        fixStepIndicator(n)
    }

    function nextPrev(n) {
        // This function will figure out which tab to display
        var x = document.getElementsByClassName("tab");
        // Exit the function if any field in the current tab is invalid:
        if (n == 1 && !validateForm()) return false;
        // Hide the current tab:
        x[currentTab].style.display = "none";
        // Increase or decrease the current tab by 1:
        currentTab = currentTab + n;
        // if you have reached the end of the form... :
        if (currentTab >= x.length) {
          //...the form gets submitted:
          document.getElementById("regForm").submit();
          return false;
        }
        // Otherwise, display the correct tab:
        showTab(currentTab);
    }

    function validateForm() {
        // This function deals with validation of the form fields
        var x, y, i, valid = true;
        x = document.getElementsByClassName("tab");
        y = x[currentTab].getElementsByTagName("input");
        // A loop that checks every input field in the current tab:
        for (i = 0; i < y.length; i++) {
          // If a field is empty...
          if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
          }
        }
        // If the valid status is true, mark the step as finished and valid:
        if (valid) {
          document.getElementsByClassName("step")[currentTab].className += " finish";
        }
        return valid; // return the valid status
    }
      
      function fixStepIndicator(n) {
        // This function removes the "active" class of all steps...
        var i, x = document.getElementsByClassName("step");
        for (i = 0; i < x.length; i++) {
          x[i].className = x[i].className.replace(" active", "");
        }
        //... and adds the "active" class to the current step:
        x[n].className += " active";
    }




    // Create variables for each tab
    // var current_tab, next_tab, preevious_tab; //tabs
    // var left, opacity, scale; //tab properties

    // $(".next").click(function () {

    //     current_tab = $(this).parent();
    //     next_tab = $(this).parent().next();
    //     //activate next step on progressbar using the index of next_tab
    //     $("#progressbar li").eq($(".step-content").index(next_tab)).addClass("active");

    //     next_tab.show(); //show the next tab content
    //     // hide the current tab content with style
    //     current_tab.animate({ opacity: 0 }, {
    //         step: function (now, mx) {
    //             scale = 1 - (1 - now) * 0.2;
    //             left = (now * 50) + "%";
    //             opacity = 1 - now;
    //             current_tab.css({ 'transform': 'scale(' + scale + ')' });
    //             next_tab.css({ 'left': left, 'opacity': opacity });
    //         },
    //         duration: 800,
    //         complete: function () {
    //             current_tab.hide();
    //         },
    //         easing: 'easeInOutBack'
    //     });

    // });

    // $(".previous").click(function(){
    //     current_tab = $(this).parent();
    //     next_tab = $(this).parent().next();
    //     //activate next step on progressbar using the index of next_tab
    //     $("#progressbar li").eq($("#msform .step-content").index(next_tab)).addClass("active");

    //     next_tab.show(); //show the next tab content
    //     // hide the current tab content with style
    //     current_tab.animate({opacity: 0}, {
    //         step:function(now, mx) {
    //             scale = 1 - (1 - now)*0.2;
    //             left=(now*50) + "%";
    //             opacity = 1 - now;
    //             current_tab.css({'transform':'scale('+scale+')'});
    //             next_tab.css({'left':left,'opacity':opacity});
    //         },
    //         duration: 800,
    //         complete: function() {
    //             current_tab.hide();
    //         },
    //         easing:'easeInOutBack'
    //     })
    // })


// $(document).ready(function () {
//     var tab = $('.tabs>div');
//     var now = 0; // current shown tab
//     tab.hide().first().show();
//     $("input[name=next]").click(function (e) {
//       tab.eq(now).hide();
//       now = (now + 1 < tab.length) ? now + 1 : 0;
//       tab.eq(now).show();
//     });
//   });
