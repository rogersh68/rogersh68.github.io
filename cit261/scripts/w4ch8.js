//Search

//Accessing form elements
const form = document.forms.search;


//Form events
const input = form.elements.searchInput;

// focus event
input.addEventListener('focus', () => alert('focused'), false);


// blur event
input.addEventListener('blur', () => alert('blurred'), false);


// change event
input.addEventListener('change', () => alert('changed'), false);


//Submitting a form
const form = document.forms['search'];
form.addEventListener('submit', search, false);

function search() {
    alert(' Form Submitted');
}

/* stop the form from being submitted
function search(event) {
    alert('Form Submitted');
    event.preventDefault();
}
*/

// shows what user searched for
function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();


    /* should show "Search Here" in input field.
    input.value = 'Search Here';
    */

    // will make the text disappear when user clicks in, and reappear when they click out.
    input.addEventListener('focus', function () {
        if (input.value === 'Search Here') {
            input.value = ''
        }
    }, false);

    input.addEventListener('blur', function () {
        if (input.value === '') {
            input.value = 'Search Here';
        }
    }, false);
}



//Hero Form

//assign the form to a variable and add event listener for submission.
const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

//this function will return an object based on the info from the form.
function makeHero(event) {
    event.preventDefault(); // prevent the form from being submitted
    const hero = {}; // create an empty object
    hero.name = form.heroName.value; // create a name property based on the input field's value
    alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
    hero.realName = form.realName.value; // process input info
    hero.category = form.category.value;
    hero.age = form.age.value;
    hero.city = form.city.value;
    hero.origin = form.origin.value;

    // iterate over collection of checkbox super powers
    hero.powers = [];
    for (let i = 0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);

            /* can also use:
            hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
            */

            return hero;
        }

        // validation: exclude any superhero namnes that begin with an 'X'
        form.addEventListener('submit', validate, false);

        function validate(event) {
            const firstLetter = form.heroName.value[0];
            if (firstLetter.toUpperCase() === 'X') {
                event.preventDefault();
                alert('Your name is not allowed to start with X!');

            }

            //send user error message before submitting form
            const label = form.querySelector('label');
            const error = document.createElement('div');
            error.classList.add('error');
            error.textContent = '! Your name is not allowed to start with X.';
            label.append(error);

            function validateInline() {
                const heroName = this.value.toUpperCase();
                if (heroName.startsWith('X')) {
                    error.style.display = 'block';
                } else {
                    error.style.display = 'none';
                }
            }
        }
    }
}
