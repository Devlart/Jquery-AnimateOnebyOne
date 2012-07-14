## How it works

This plugin will execute the function Jquery "Animate" every x seconds to bring up all the elements one by one and not a single

## How to use it?

It's very simple, just add these lines:

        $('#main .divcontentsite .navigation li').animateOneByOne({
          css:{
          	opacity: '1'
          },
          duration: 750,
          interval: 200,
          callback: function(){
          	alert('All elements are animated');
          } 
        });


## Demo

[Click here](http://devlart.fr/animateOneByOne) for a live demo.