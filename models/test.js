var test = [
      {
            prompt: 'Select all the links within the element that has id "description".',
            note: 'Then click "check".', 
            val: '#description a'
      },
      {
            prompt: 'Select all the elements with class="box" that are immediate children of divs (not grandchildren).'
      },
      {
            prompt: 'Select all the headers (h1-h6) on a page.'
      },
      {
            prompt: 'Select all the links which have href="/destination".'
      },
      {
            prompt: 'Select all the password inputs on the page.'
      },
      {
            prompt: 'Select the element with id="wrapper".'
      },
      {
            prompt: 'Select all the elements with class="class_one" or class="class_two".'
      },
      {
            prompt: 'Select both all the divs with class="sub_div" that are descendants of the element with id="main_div" and all of the list items within unordered lists that have class="special_list".',
            note: '(Note: it\'s the unordered lists that have class="special_list".)'
      },
      {
            prompt: 'Select the heading 1 (specifically, not just any element--yeah, it\'s slightly inefficient) with id="main_heading".'
      },
      {
            prompt: 'Select all of the list items with class="important_item" within unordered lists that have class="important_list" within divs that have class="important_div" within the element that has id="main".'      },            
      {
            prompt: 'Select all the inputs with class="classified".'
      },
      {
            prompt: 'Select everything.'
      },
      {
            prompt: 'Select all the tables on the page.'
      },
      {
            prompt: 'Select the element with id="footer".'
      },
      {
            prompt: 'Select all the links (only) when the mouse is hovering over them and also the element with id="skip_button" (only) when the mouse is hovering over it.'      }
];
        
module.exports = test;