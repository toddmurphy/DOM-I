// import { link } from 'fs';

const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

//navigation links
const links = document.querySelectorAll('a');
links[0].textContent = 'Services';
links[1].textContent = 'Product';
links[2].textContent = 'Vision';
links[3].textContent = 'Features';
links[4].textContent = 'About';
links[5].textContent = 'Contact';

//Change navigation links to color 'green'
links.forEach(item => (item.style.color = 'green'));

//Add two new elements -> add two 'a' to <nav> using appendChild()
//Step 1: Select the element we want to add 'a' to
const navElement = document.querySelector('nav');

//Step 2: use 'createElement' to add new 'a' to navElement
const newATag = document.createElement('a');

//Step 3: use textContent to add a name
newATag.textContent = 'Pricing';

//Step 4: Finally, we add the child(pricing) to the element we created(nav);
navElement.appendChild(newATag);

newATag.style.color = 'green';

//2nd nav item - use '.prepend' to add to beginning
const navElementTwo = document.querySelector('nav');

const secondATag = document.createElement('a');
secondATag.textContent = 'Blog';
navElementTwo.prepend(secondATag);

secondATag.style.color = 'green';

//cta -> this works without breaks wrapping
// const cta = document.querySelector('.cta-text h1');
// cta.textContent = 'DOM is Awesome';
// cta.style.flexWrap = 'wrap';
const ctaCollection = document.querySelector('.cta-text h1');

const ctaOne = document.createTextNode('DOM');
console.log(ctaOne);

const brOne = document.createElement('br');
console.log(brOne);

const ctaTwo = document.createTextNode('is');
console.log(ctaTwo);

const brTwo = document.createElement('br');
console.log(brTwo);

const ctaThree = document.createTextNode('Awesome');
console.log(ctaThree);

ctaCollection.append(ctaOne);
ctaCollection.append(brOne);
ctaCollection.append(ctaTwo);
ctaCollection.append(brTwo);
ctaCollection.append(ctaThree);

console.log(ctaCollection);

//cta button
const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = 'Get Started';

//cta header image
const headerImage = document.querySelector('#cta-img');
headerImage.src = 'img/header-img.png';

//Features and About Title
const featureTitle = document.querySelectorAll('.top-content .text-content h4');
featureTitle[0].textContent = 'Features';
featureTitle[1].textContent = 'About';
featureTitle[0].style.background = 'black';
featureTitle[0].style.color = 'white';
featureTitle[1].style.background = 'black';
featureTitle[1].style.color = 'white';

//Features and About content
const featureContent = document.querySelectorAll(
  '.top-content .text-content p'
);
featureContent[0].textContent =
  'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
featureContent[1].textContent =
  'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//middle page image
const middleImage = document.querySelector('#middle-img');
middleImage.src = 'img/mid-page-accent.jpg';

//Services titles and content
//Services titles
const servicesTitle = document.querySelectorAll(
  '.bottom-content .text-content h4'
);
servicesTitle[0].textContent = 'Services';
servicesTitle[1].textContent = 'Product';
servicesTitle[2].textContent = 'Vision';

//Services content
const servicesContent = document.querySelectorAll(
  '.bottom-content .text-content p'
);

servicesContent[0].textContent =
  'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
servicesContent[1].textContent =
  'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
servicesContent[2].textContent =
  'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//contact
const footerTitle = document.querySelector('.contact h4');
footerTitle.textContent = 'Contact';

const contactText = document.querySelectorAll('.contact p');
contactText[0].textContent = '123 Way 456 Street Somewhere, USA';
contactText[1].textContent = '1 (888) 888-8888';
contactText[2].textContent = 'sales@greatidea.io';

//footer
const copyTitle = document.querySelector('footer p');

copyTitle.textContent = 'Copyright Great Idea! 2018';

copyTitle.style.background = 'blue';
copyTitle.style.color = 'white';
