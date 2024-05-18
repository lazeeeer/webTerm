// Define commands and their corresponding outputs
const commands = {

    'about': `
        <div>
            <p>Hello! I'm Lazar Krstic! I'm a upcoming Electrical engineering graduate with a large interest in hardware and embedded systems. To see some of my previous projects and work experience, try entering some commands below! .</p>
            <div>
                <img src="images/catpfp.png" alt="Your Name" style="width: 150px; height: auto; border-radius: 50%; margin-top: 10px;">
            </div>
        </div>
    `,

    'projects': `

    <h2> List of projects: </h2>

    <div class="project">
        <h3> CUDA Image Processor | C++, CUDA </h3>
        <p> Created a terminal application using C++ and CUDA to create a simple image processor capable of applying general convolution for image blurring, sharpenning, and edge detection... The program can be configured to use either the CPU or CUDA platform for its internal processing, showcasing the increase in efficieny when parallel programming is applied.</p>

        <div class="project-link">
            <a href="https://github.com/lazeeeer/Image_Processing" target="_blank"> Link to the GitHub repo! </a>
        </div>
    </div>

    <div class="project">
        <h3> Qualcomm MUX Switching Array | C++, Python, VISA </h3>
        <p> During my time interning at Qualcomm as part of the hardware validation team, I was tasked with creating the drivers for an array of digital muxes and integrating them with our test enviornment. This was completed using Python and the PyVisa library to communicate to the mux array via the VISA instrument protocol. After integrating the python control script into out C++ testing enviornment, we were able to precisely control and automate the array to quickly switch to whatever signal configuration is needed for testing.  .</p>
        <p> This allowed for a 1-time wire setup that is capable of swapping to any necessary configuration, as well as helped reduce time between tests by eliminating the need of re-wiring the hardware for each test... <p>
    </div>
`,

    'skills': '<p>I\'m proficient in [Your Skills].</p>',
    'portfolio': '<p>Here is a link to my portfolio: <a href="[Portfolio URL]" target="_blank">Portfolio</a></p>',
    'contact': '<p>You can contact me via email at [Your Email Address].</p>',
    'resume': '<p>You can download my resume from this link: <a href="[Resume URL]" target="_blank">Resume</a></p>',
    'clear': clearTerminal
};

// Function to clear the terminal output
function clearTerminal() {
    document.getElementById('outputArea').innerHTML = '';
}

// Function to handle user input
function handleInput() {
    const input = document.getElementById('commandInput').value.toLowerCase().trim();
    const outputArea = document.getElementById('outputArea');

    if (input === '') return;

    if (commands.hasOwnProperty(input)) {
        if (typeof commands[input] === 'function') {
            commands[input]();
        } else {
          outputArea.innerHTML += commands[input];
          outputArea.innerHTML += '<br>';
          //outputArea.innerHTML += '<hr>'; //adding in a horizontal line
        }
    } else {
        outputArea.innerHTML += '<p>Command not found. Type "help" for a list of available commands.</p>';
        outputArea.innerHTML += '<br>';
        //outputArea.innerHTML += '<hr>'; //adding in a horizontal line
    }

    // Clear input field after processing
    document.getElementById('commandInput').value = '';

    // Scroll to bottom of input field
    document.getElementById('commandInput').scrollIntoView({ behavior: 'smooth', block: 'end' });
}

// Event listener for handling input
document.getElementById('commandInput').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        handleInput();
    }
});
