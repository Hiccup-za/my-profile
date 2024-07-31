/**
 * Sets the inner HTML content of an element with the specified ID.
 * @param {string} id - The ID of the target element.
 * @param {string} content - The HTML content to be set.
 */
function setInnerHTML(id, content) {
    document.getElementById(id).innerHTML = content;
}

/**
 * Map of element IDs to corresponding string properties.
 * @type {Object.<string, string>}
 */
const contentMap = {
    'aboutMe1': 'aboutMe1',
    'aboutMe2': 'aboutMe2',
    'aboutMe3': 'aboutMe3',
    'aboutMe4': 'aboutMe4',
    'kohortexp': 'kohortexp',
    'kohort1': 'kohort1',
    'kohort2': 'kohort2',
    'kohort3': 'kohort3',
    'kohort4': 'kohort4',
    'kohortreason': 'kohortreason',
    'deltaexp': 'deltaexp',
    'delta1': 'delta1',
    'delta2': 'delta2',
    'delta3': 'delta3',
    'deltareason': 'deltareason',
    'entersektexp': 'entersektexp',
    'entersekt1': 'entersekt1',
    'entersekt2': 'entersekt2',
    'entersekt3': 'entersekt3',
    'entersekt4': 'entersekt4',
    'entersektreason': 'entersektreason',
    'dvtexp': 'dvtexp',
    'dvt1': 'dvt1',
    'dvt2': 'dvt2',
    'dvt3': 'dvt3',
    'dvtreason': 'dvtreason',
    'techstack': 'techstack',
    'technicalexperience': 'technicalexperience',
    'sideproject1p': 'sideproject1p',
    'sideproject1list': 'sideproject1list',
    'sideproject2p': 'sideproject2p',
    'sideproject2list': 'sideproject2list',
    'footer': 'footer'
};

// Iterate through the contentMap and set innerHTML for each element
Object.entries(contentMap).forEach(([id, stringProp]) => {
    setInnerHTML(id, strings[stringProp]);
});

// Wait for the DOM to be fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'company-button'
    const companyButtons = document.querySelectorAll('.company-button');
    // Select all elements with the class 'company-content'
    const companyContents = document.querySelectorAll('.company-content');

    /**
     * Handles the click event for company buttons.
     * @param {Event} event - The click event object.
     */
    function handleCompanyButtonClick(event) {
        // Get the company name from the data-company attribute
        const company = this.getAttribute('data-company');
        
        // Remove 'active' class from all buttons
        companyButtons.forEach(btn => btn.classList.remove('active'));
        // Add 'active' class to the clicked button
        this.classList.add('active');

        // Remove 'active' class from all company content sections
        companyContents.forEach(content => {
            content.classList.remove('active');
        });
        // Add 'active' class to the corresponding company content section
        document.getElementById(company).classList.add('active');
    }

    // Add click event listeners to each company button
    companyButtons.forEach(button => {
        button.addEventListener('click', handleCompanyButtonClick);
    });
});

/**
 * Initiates the download of the CV file.
 */
function downloadCV() {
    // Path to your CV file
    const cvPath = 'christopher_zeuch_cv.pdf';
    
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = cvPath;
    
    // Set the download attribute with the desired filename
    link.download = 'christopher_zeuch_cv.pdf';
    
    // Append the link to the body
    document.body.appendChild(link);
    
    // Programmatically click the link to trigger the download
    link.click();
    
    // Remove the link from the body
    document.body.removeChild(link);
}