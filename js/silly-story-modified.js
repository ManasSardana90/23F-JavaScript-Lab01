
// Declare and initialize variables
var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

// Create the variable that contains the story string that will be modified
var storyText = 'It was 94 farenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but he was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// Create three arrays, insertX, insertY, and insertZ
var insertX = ['Donald Trump', 'Jackie Chan', 'Santa Claus'];
var insertY = ['Area 51', 'Death Valley', 'Aruba'];
var insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Add a click event listener to the randomize variable
randomize.addEventListener('click', result);

// Function to generate random stories
function result() {
    // Create a new variable called newStory and set it equal to storyText
    var newStory = storyText;

    // Get random values from the arrays
    var xItem = insertX[Math.floor(Math.random() * insertX.length)];
    var yItem = insertY[Math.floor(Math.random() * insertY.length)];
    var zItem = insertZ[Math.floor(Math.random() * insertZ.length)];

    // Replace placeholders in the story string
    newStory = newStory.replace(':insertx:', xItem);
    newStory = newStory.replace(':insertx:', xItem); // Replacing the second occurrence
    newStory = newStory.replace(':inserty:', yItem);
    newStory = newStory.replace(':insertz:', zItem);

    // If a custom name is entered, replace the default name in the story
    if(customName.value !== '') {
        newStory = newStory.replace('Bob', customName.value);
    }

    // If the metric radio button is checked, convert the temperature and weight in the story
    if(document.getElementById('metric').checked) {
        var weight = Math.round(300 * 0.453592) + ' kg'; // Convert pounds to kg
        var temperature = Math.round((94 - 32) * 5 / 9) + ' celsius'; // Convert fahrenheit to celsius
        newStory = newStory.replace('300 pounds', weight);
        newStory = newStory.replace('94 farenheit', temperature);
    }

    // Set the text content of the paragraph to the modified story string and make it visible
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
