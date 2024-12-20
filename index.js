// Pre-defined colors
const colors = [
    "#FF5733", // Red-Orange
    "#33FF57", // Green
    "#5733FF", // Blue
    "#FFC300", // Yellow
    "#DAF7A6", // Light Green
    "#FF33A6", // Pink
    "#33FFF5", // Aqua
    "#C70039", // Crimson
    "#900C3F", // Maroon
    "#581845", // Purple
    "#FF8C00", // Dark Orange
    "#4682B4", // Steel Blue
    "#32CD32", // Lime Green
    "#FFD700", // Gold
    "#40E0D0", // Turquoise
];

// Get the button
const button = document.getElementById("colorButton");

// Function to change background color
button.addEventListener("click", () => {
    // Get a random color from the colors array
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Change the background color
    document.body.style.backgroundColor = randomColor;
});
