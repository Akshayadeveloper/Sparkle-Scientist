//HTML:Creates a button that triggers the generateSparkles() function when clicked. Provides a body element for sparkle placement.

//CSS: Sets a black background for the body.

//Styles individual sparkles:
//Small, white, circular dots with a twinkling animation.

//Positioned randomly using absolute positioning.

//JavaScript: The generateSparkles() function:

//Creates multiple div elements with the "sparkle" class.

//Randomizes their position and size using Math.random().

//Appends them to the body element. 

//To use:

//Save this code as an HTML file (e.g., sparkles.html).

//Open the file in a web browser.

//Click the "Generate Sparkles!" button to create a random sparkle background.

//Click the button again to generate a new set of sparkles.

//Explanation of changes:

//Color Array:Added an array of colors (colors) to hold the color options for the sparkles.

//You can add or remove colors from this array as desired.

//Random Color Assignment:

//Within the generateSparkles() function's loop, a random color is selected from the colors array and applied to the sparkle's backgroundColor property.

//Now, each time you click the button, a new set of sparkles with various colors will be generated, creating a more vibrant and colorful effect.

//Key changes:

//Sparkle Size: Increased the width and height of the .sparkle class to 5px.

//Maximum Scale: Increased the maximum scale in the transform property to 3 for larger sparkles.

//Scientist Name Generation:

//Added an array of scientist names (scientistNames).

//Within the generateSparkles() function:

//Randomly selects a name from the array.

//Displays the selected name in the p element with the ID "scientistName".

//Button Text: Updated the button text to reflect the combined actions.

//Now, each button press will generate colorful, larger sparkles and display a randomly chosen scientist name!

    const scientistNames = [
"Thomas Edison - Electric light bulb (1879)", 
"Alexander Graham Bell - Telephone (1876)",
"Nikola Tesla - Alternating Current (AC) electrical system (1887)",
"Guglielmo Marconi - Radio (1901)",
"Philo Farnsworth - Television (1927)",
"Tim Berners-Lee - World Wide Web (1989)",
"Bill Gates - Personal computer operating system (1985)",
"Steve Jobs - Smartphone (2007)",
"James Watson and Francis Crick - DNA structure (1953)",
"Marie Curie - Radium and polonium (1898)",
"The Wright Brothers - Airplane (1903)",
"Karl Benz - Automobile (1885)",
"Johannes Gutenberg - Printing press (1440)",

      // Add more scientist names here
    ];

    function generateSparkles() {
      const body = document.body;
      const sparkleCount = 50; // Adjust sparkle count as desired

      const colors = ["white", "yellow", "cyan", "pink", "purple", "orange", "green", "blue"];

      for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");

        // Randomize color, position, and size
        sparkle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        sparkle.style.left = Math.random() * window.innerWidth + "px";
        sparkle.style.top = Math.random() * window.innerHeight + "px";
        sparkle.style.transform = "scale(" + Math.random() * 3 + ")"; // Increased maximum size

        body.appendChild(sparkle);
      }

      // Generate and display a random scientist name
      const randomIndex = Math.floor(Math.random() * scientistNames.length);
      const scientistName = scientistNames[randomIndex];
      document.getElementById("scientistName").textContent = scientistName;
    }
  