/* const header = document.querySelector("header");
const headerItems = document.querySelector(".header-item");
const headerContainer = document.querySelector('.header-container');

const headerItemsOptions = {

};

const headerItemsObserver = new IntersectionObserver(function(entries,
     headerItemsObserver
    ) {
    entries.forEach(entry =>{
        console.log(entry.target);
    })
}, headerItemsOptions);

headerItemsObserver.observe(headerItems) */

const header = document.querySelector('header');
const issues = document.querySelectorAll('.issues-container a');

let observerOptions = {
    rootMargin: '0px',
    threshold: 0.5
}

var observer = new IntersectionObserver(observerCallback, observerOptions);

function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
          //do something
            issues.forEach((issue,i) =>{
                issue.classList.remove('bold-issue')
            })
          if(entry.target.id === 'issue-5'){
            header.classList.add('sky-background');
            header.classList.remove('orange-background');
            header.classList.remove('yellow-background');
            header.classList.remove('blue-background');
            header.classList.remove('red-background');
          }  else if(entry.target.id === 'issue-4'){
            issues[1].classList.add('bold-issue');
            header.classList.add('orange-background');
            header.classList.remove('sky-background');
            header.classList.remove('yellow-background');
            header.classList.remove('blue-background');
            header.classList.remove('red-background');
          }  else if(entry.target.id === 'issue-3'){
            issues[2].classList.add('bold-issue');
            header.classList.add('yellow-background');
            header.classList.remove('sky-background');
            header.classList.remove('orange-background');
            header.classList.remove('blue-background');
            header.classList.remove('red-background');
          }  else if(entry.target.id === 'issue-2'){
            issues[3].classList.add('bold-issue');
            header.classList.add('blue-background');
            header.classList.remove('sky-background');
            header.classList.remove('orange-background');
            header.classList.remove('yellow-background');
            header.classList.remove('red-background');
          }
          else{
            issues[4].classList.add('bold-issue');
            header.classList.add('red-background');
            header.classList.remove('sky-background');
            header.classList.remove('orange-background');
            header.classList.remove('yellow-background');
            header.classList.remove('blue-background');
          }
        } else{

        }
    });
};
document.querySelectorAll('.header-item').forEach((i) => {
    if (i) {
        observer.observe(i);
    }
});