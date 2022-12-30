/**
 * EVENTS are actions performed by the client on the browser
 * like:
 *      - click - clicking a like button on the browser will sent the postID and userID to the
 *                 server and update the UI
 * 
 * EVENT SYSTEM offers events on the response to an action done
 * 
 * EVENT LISTENERS: executes function of our choice when an event occurs allowing us to program
 *                  behaviour
 * 
 * To create event listners in js, we use 'addEventListener()'
 */

/*
EVENT BUBBLING -

    An event that starts at an element bubbles up the hierarchy until it reaches the top most
        html element.
    Eg: a button is clicked inside a div, body inside an html file
        - that button click. looks for event-listner, once found computes the function
            and triggers an event
        - user clicks, a click event is observed, If an event listener is registerd, it will
            intercept and invoke the function attached. And look for its parent class
        - agter that, the parent element is invoked and tired to find an event handler.
        - this finding event handler continues till the top most html tag is known as event bubbling

*/

/* EVENT CAPTURING:
 *  While event bubbling occurs from bottom to top, event capturing occurs top to bottom
 * 
 * 
 */