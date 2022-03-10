
///////////////

// Tasks

///////////////




// task 3.0

var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
    {text: 'google', href: 'https://www.google.com'},
    {text: 'NYT', href: 'https://www.nyt.com'}
  ];



// Task 1.0

// Select and cache the <main> element in a variable named mainEl.

let mainEl = document.querySelector("main"); 

console.log(mainEl)

// Why not querySelectorall ?



// Task 1.1

// Set the background color of mainEl to the value stored in the --main-bg CSS custom property.

// Hint: Assign a string that uses the CSS var()function like this: 'var(--main-bg)'

mainEl.style.backgroundColor = 'var(--main-bg)';

console.log(mainEl)



// Task 1.2

// Set the content of mainEl to <h1>SEI Rocks!</h1>.

mainEl.innerHTML = '<h1>SEI Rocks!</h1>';





// Task 1.3

// Add a class of flex-ctr to mainEl.

// Hint: Element.classList API     

mainEl.classList.add("flex-ctr");





// Task 2.0

// Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.

let topMenuEl = document.getElementById("top-menu");




// Task 2.1

// Set the height topMenuElelement to be 100%.

topMenuEl.style.height = '100%';







// Task 2.2

// Set the background color of topMenuElto the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';








// Task 2.3

// Add a class of flex-around to topMenuEl.


topMenuEl.classList.add("flex-around");






// Task 3.0

// Copy the following data structure to the top of script.js: 

// Menu data structure
/*
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

*/








// Task 3.1

// Iterate over the entire menuLinks array and for each "link" object:

    // at this point I have not appended

// console.log(aEl)

for (let link of menuLinks) {
    let aEl = document.createElement("a")     // 
    aEl.innerHTML = link.text
    aEl.setAttribute("href", link.href)
    topMenuEl.appendChild(aEl)
    console.log(aEl)
}







// link.innerHTML = "<a></a>"




// (I created directly on HTML???)

// let aTag = document.querySelector("a"); 

// console.log(aTag)

// - On the new element, add an href attribute with its value set to the href property of the "link" object.



// aEl.setAttribute("href", "link")



// ????

// - Set the new element's content to the value of the text property of the "link" object.

// aEl.innerHTML = "<p><strong>Hello!!!</strong></p>"


//aTag.innerHTML = menuLinks.text
//aTag.innerHTML += `<a href="${link.href}">${link.text}<a>`;

// ????
 


// - Append the new element to the topMenuElelement.








// Congrats!