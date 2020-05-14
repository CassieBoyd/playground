const people = [
    { name: 'Wes', cool: true, country: 'Canada' },
    { name: 'Scott', cool: true, country: 'Merica' },
    { name: 'Snickers', cool: false, country: 'Dog Country' },
  ];
  
  // people.forEach((person, index) => {
  //   console.group(`${person.name}`); // .groupCollapsed for auto collapsing
  //   console.log(person.country);
  //   console.log(person.cool);
  //   console.log("Done!");
  //   console.groupEnd(`${person.name}`);
  // });
  
  people.forEach((person, index) => {
    //debugger; //can also click line in source tab on dev tools to add breakpoint
    console.log(`${person.name}`);
  });

  // Console Methods
  console.table(people);

  // Callstack
  // Stack trace- what function called what function called what function
  
  // Grabbing Elements
  
  // Breakpoints
  
  // Scope
  
  // Network Requests
  
  // Break On Attribute
  
  // Some Setup Code
  
  function doctorize(name) {
    console.count(`running doctorize for ${name}`)
    return `Dr. ${name}`;
  }
  
  function greet(name) {
    doesntExist();
    return `Hello ${name}`;
  }
  
  function go() {
    const name = doctorize(greet('Wes'));
    console.log(name);
  }
  
  const button = document.querySelector('.bigger');
  button.addEventListener('click', function(e) {
    const newFontSize =
      parseFloat(getComputedStyle(e.currentTarget).fontSize) + 1;
    e.currentTarget.style.fontSize = `${newFontSize}px`;
  });
  
  // A Dad joke fetch
  async function fetchDadJoke() {
    const res = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        Accept: 'text/plain',
      },
    });
    const joke = await res.text();
    console.log(joke);
    return joke;
  }