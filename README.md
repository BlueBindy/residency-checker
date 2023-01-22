### Intro to Residency-Checker
The Residency Checker website is a single-page HTML, CSS and JavaScript project. The goal for the website is to allow British citizens to check if they meet the residency requirement needed for Irish naturalisation. The requirement includes simultaneous satisfaction of two different residency requirements and this often confuses applicants. The website consists of a tool allowing users to enter their residency pattern content. The user is then presented with a summary of their elibigility. 
## Demo
<a href="https://bluebindy.github.io/residency-checker/">Click here for a live demo</a>

Several screenshots of the website can be found below illustrating the progression of the site before and after user use.


### Page on load
This screenshot is what a user will see before they have entered any data. They can read an introduction to the website at the top of the page. They have input boxes to enter their data; an information icon presenting (on mouseover) an explanation of limits on the timeframe available for eligible days; and a submit button. If a user enters invalid data (that is, data that is less than 0 or greater than 366) and clicks submit they are presented with an alert asking them to adjust their entries to the valid range. If a user fails to enter residential days in the compulsory sections (the current calendar year and also the last 365 days continuous residence section) they receive an alert asking them to rectify their entries.

![Screenshot of website on page load](/docs/docs-images/screenshot-preuse.png "Website screenshot on page  load")

### Page on submit
This screenshot is taken after a user has entered sample residential days, hit submit and received their summary results. In this example, residential days have been entered for the most recent calendar year as well as the last 365 day period. Results of their eligibility have been presented in a box that appears on click of the submit button. The content of this box is not available until valid entries have been made and submit is clicked. When the screen is refreshed the page reloads with all entries cleared and summary results removed. 

![Screenshot of website page](/docs/docs-images/screenshot.png "Website screenshot")

### Page on 404 error  
A screenshot of the page that loads when a non-existent URL is sought (the 404 error page) is found below. This page notifies the user of the error and provides a link to navigate back to the existing page. 

![Screenshot of website page](/docs/docs-images/screenshot-404.png "Website screenshot")



## Technologies Used
HTML, CSS, JavaScript

## UX
# User Stories
As a British citizen wanting to naturalise as Irish, I want a clear indication of whether my residency pattern is eligible. If it is not, I want a comparison of my current residency and what I would need to be eligible. 

# Strategy
The strategic aim is to create a site that users find easy to use, gives clear answers and prevents common user errors. Ease of use is defined as relieving the user of any need to compare their residency to requirements or even understand the requirements, but merely enter their history of residence. The provision of clear answers is defined by a brief, factual assessment of their eligibility, with simple directions for remedy if necessary. The common errors that are to be prevented include invalid number of days in a year (fewer than 0 or greater than 366), or missing entries (that is, a failure to enter residential days in at least the most recent year in both sections.)

# Scope
This version is intended to offer a single tool as a minimum viable product (MVP). Subsequent iterations are intended to include a tool that allows the user to review the documents they have available to check if they meet the minimum requirements for proof of residency. 

# Structure
The single page structure is intended to reduce confusion by making the user journey obvious to the user. There is no navigation (except as a link on the 404 error page) and no external links (except the required credit for use of the favicon) to reduce clutter and maximise simplicity. The page is intended to be useable as a discrete page but it could be added to a broader website as a page as well. 

# Skeleton (insert wirefames)


NEED TO DO THIS 

# Surface
The colour scheme is primarily limited to black text on a white page. The limited palette of this design and use of whitespace is intended to maximise simplicity, increase credibility and readability. The title and associated icon (together serving as a logo) is green as a visual reference to Ireland. The sans serif font (Roboto) was selected for its modernity, cleanliness and simplicity, to match the overall design. 

# Features
### Features included in this current version
The website includes a an information icon explaining why the ninth year is linked to the current date (with details revealed on mouseover.) 

The principle purpose of the website is achieved by the provision of an eligibility summary report presented on user submission. This is designed to appear after the user clicks submit to increase the prominence after calculation and to maximise simplicity prior to submission.

Entry to the input boxes can be made by the toggle buttons available in each input box, and these are automatically limited to valid data. However, the user can also type data into the input boxes and so user error warnings are provided if the user enters invalid data. Similarly, if the user does not complete all the essential sections they receive an error warning and request to correct it. If the user makes both errors simultaneously (invalid and incomplete data) they are asked to complete all essential sections first, and if there is still invalid data on second submission they receive a second invalid data warning. This is to prevent the user being presented with two error warnings immediately after each other, as this makes for a poor user experience and potentially increases confusion. 

The calendar years presented on the website are calculated to ensure they automatically reflect the eligibile period (9 years prior to the current day's date.) Similarly, the previous 365 period that determines 'continuous residency' is calculated automatically based on the the 365 days prior to the date the user is engaging with the website. 

There is also a 404 error page with a link to the correct page so the user can navigate there.

### Features planned for later versions
A second tool is planned for later versions - specifically a tool to assess whether the user has the requisite documents to prove their residency once they have achieved eligible residential days.

# Deployment
The site can be deployed by navigating to the repository site on GitHub (https://github.com/BlueBindy/residency-checker) and then selecting 'Settings' tab. From here, select 'Code and Automation', then 'Pages'. Set branch to 'main' and click save. From within the Code tab, confirm that  'Environments' now lists an active github-page with date of deployment. 

When using Gitpod, files can be added to staging by using 'git add .' on the bash terminal. Commit files by using 'git commit -m "" '. "git push" will push files to Github. The website is deployed to GitHub Pages and the home page is index.html. 

Fiona Thompson created the original repository under in GitHub under username BlueBingy. It is available at: https://github.com/BlueBindy/residency-checker. Clone the repository to run locally by using git clone https://github.com/BlueBindy/residency-checker.git in a terminal. To create a repository that is not forked from the original, use "git remote rm origin" in the terminal.

# Testing
Lighthouse
Validation
JShint

# Acknowledgements and Copyright
Fonts used were https://fonts.google.com/specimen/Roboto+Condensed 
Icons from Fontawesome: https://fontawesome.com/
icon used as favicon from Icons 8, used under licence (free for link) https://icons8.com/license
Favicon insertion technique based on W3 schools tutorial
File format converted using convertio.co  
Code structure for inserting current year into HTML suggested by Riley Jones on StackOverflow

Copyright and acknowledgements
Resources

Fonts are from Google Fonts. Logo icon is from FontAwesome and favicon is from Icons8.

Mentoring from Brian Macharia. All errors and ommissions the responsibility of Fiona Thompson.

README structure based on Code Institute's example. The structure and approach to Testing reflects guidance from Brian Macharia.

Content
All content is written by Fiona Thompson.

ENDS

+++++++++++++++++++++++++++++++++++++

Get Settled readme:



Skeleton
The wireframe for the home page, desktop version:

Screenshot of wireframe for home page

The wireframe for the How To page, desktop version: Screenshot of wireframe for home page

The wireframe for the FAQ page, desktop version: Screenshot of wireframe for home page

The wireframe for the How To page, mobile version:
Screenshot of wireframe for home page

Testing
1. Functionality Testing
All tests peformed on 'bluebindy.github.io/get_settled/' on Chrome, Safari and Firefox browsers on a 13-inch early 2015 Macbook Air using MacOS Monterey v12.5.1. The exception to this is the Lighthouse accesssibility test which was performed on Chrome only.

Test label: Social media links
Test action: Hover over link, click link, view opened page, return to website via browser tab, click elsewhere on website.Repeat on Chrome, Firefox and Safari.
Expected outcome: On mouse over, hover hand, green highlight and black bottom border appears. Click opens correct page in new tab. Expected page for social links is home page of relevant social media platform as there are no social media accounts created for this project. On return to website, icon remains briefly green highlighted, with black bottom border before changing to a paler green with bottom border. Highlight and bottom border disappear when screen refreshed or somewhere else on page clicked.
Test outcome: PASS

Test label: Embedded text links
Test action: Hover over link, click link, view opened page, return to website via browser tab, click elsewhere on website. Repeat on Chrome, Firefox and Safari.
Expected outcome: Hover hand, green higlight and black bottom border appears on mouse over; click opens correct page in new tab. On return to website, icon remains briefly green highlighted, with black bottom border before changing to a paler green with bottom border. Highlight and bottom border disappear when screen refreshed or somewhere else on page clicked.
Test outcome: PASS after code modifications were incorporated for Safari and Firefox and with a README exception when viewed from GitHub.

Initially Firefox and Safari browser defaults were overriding CSS color choices on unvisited and visited links. A class was added to the text links to increase their specificity to override the browser defaults in turn. When the class was targetted with CSS color preferences the color presentation in Safari and Firefox aligned with the Chrome experience and the desired experience.
When viewed from GitHub, the text links in README do not open in a new window. A number of sources (StackOverflow, LaraCast forum, Code Institute Tutor session) suggest that GitHub does not allow this feature based on HTML code. Users who wish to open these links in a new tab can instead use: CTRL+click (on Windows and Linux) or CMD+click (on MacOS).
Test label: Email form
Test action: Enter first name, last name and email address into appropriate fields and click 'Send' ('appropriate text'). Click send without entering first name, last name and email address ('missing data'). Click send after entering email address without '@' ('incorrect data'). Repeat on Chrome, Firefox and Safari.
Expected outcome: When appropriate text is entered, the Code Insitute's formdump page opens in a new tab, confirming details entered. On return to website, entered data is cleared when website is refreshed. When missing or incorrect data is entered (specifically, something other than a functioning email is entered in the Email field, or nothing is entered in First Name or Last Name) a user error warning appears and data is not sent.
Test outcome: PASS

Test label: Navigation menu
Test action: Hover over menu link, click link, view selected website page page, return to a different website via menu link click. Repeat for Safari, Chrome and Firefox.
Expected outcome: On mouse over, a hover hand, green highlight and black bottom border appears. On click, the user is taken to the correct website page. Clicking on Get Settled logo produces hover hand but no highlight or underline and takes user to Home page. No highlight or bottom borner remains when user is on selected web page. Clicking navigation links should not open a new tab but keep user on the same tab.
Test outcome: PASS

Test label: Images
Test action: Hard refresh broswer cache, navigate to web page with image, time image load time, inspect image. Manually minimise desktop screen size and inspect image. Repeat on Chrome, Firefox and Safari. Repeat using Chrome Developer Tools set for iPhone 5/SE (320 by 568), Surface Duo (540 by 720), iPad Mini (768 by 1024) and Pro Display XDR (6016 by 3384).
Expected outcome: On page load, all images (both decorative and semantic) appear and load with less than 1 second delay and are not stretched or distorted.
Test outcome: PASS after file compression and conversion to WebP.

Test label: Fonts
Test action: Inspect fonts after hard cache refresh on Chrome, Safari and Firefox browsers. Repeat while manually adjusting window size from minimum to maximum.
Expected outcome: On page load, Oswald font loads and is legible.
Test outcome: PASS after modifications.

Initially Oswald did not load on Safari browser, but the default sans serif was produced instead. CSS code 'font-display: swap' was added to the body element to trigger loading of Oswald (based on a developer.mozilla.org suggestion). Oswald successfully loaded on Safari after this code addition. However, this CSS code failed the W3 Jigsaw test ('Property font-display doesn't exist: swap') and on inspection, as it was apparent it is alreaddy embedded in the Google Fonts url import, it was removed. The failure to load Oswald font error could not be reproduced on later testing after the code was removed. Instead, Oswald loaded on Safari on all subsequent tests.
Test label: Responsivity
Test action: Manually minimise desktop screen size and inspect each web page. Repeat on Chrome, Firefox and Safari. Repeat using Chrome Developer Tools set for iPhone 5/SE (320 by 568), Surface Duo (540 by 720), iPad Mini (768 by 1024) and Pro Display XDR (6016 by 3384).
Expected outcome: When the website is viewed on a range of screen sizes, the layout automatically re-assembles in an intuitive, legible and expected layout. Navigation menu, social media links, email form and embedded text links are accessible.
Test outcome: PASS after code modification for H3 text overlay on FAQ image.

Initially this text did not stay in an appropriate position; on very small screens it either migrated up or disappeared. Positioning was modified from cardinal to percentage units as suggested by Brian Macharia. This modification resulted in the text appearing as expected on a range of screens.
Test label: Code format compliance
Test action: Review all HTML (particularly attributes) and CSS (particularly rules) code, and all file and directory names.
Expected outcome: No uppercase letters used; no spaces found. Multiple words in HTML and CSS declarative code are joined using hyphens, except for repository level names which should use an underscore where necessary. All names are distinctive and intrinsically meaningful. CSS code is filed in an file external to HTML pages and linked to the HTML page in the HEAD element.
Test outcome: PASS after discrepancies were modified (particularly variations in use of hyphen and underscore in attribute names).

Test label: Images and links include accessibility labels.
Test action: Review all images and links for accessibility label or clarify why not present.
Expected outcome: All semantically relevant images include self-explanatory accessibility label.All text links include self-explanatory label as part of text.
Test outcome: PASS. Images used for decorative purposes only have no accessibility labels, but this is acceptable.

Test label: File organisation
Test action: Review all files and directories
Expected outcome: Index.html is registered as 'Home' page via listing as entry file for the site on GitHub Pages. All static files to be published on the website are within assets/images.css/ . All files for README.md are within documentation-images/ . All css files are within assets/css/ .All files are grouped by type.
Test outcome: PASS.

2. Browser Compatability
Test label: Browser compatibility
Test action: Request website (using 'bluebindy.github.io/get_settled/') on Chrome, Firefox and Safari browsers.
Expected outcome: Website appears (including all images) as expected, with all elements, within 2 seconds.
Test outcome: PASS after modifications listed in manual testing section.

5. Accessibility
Test label: Accessibility testing
Test action: Perform two Lighthouse tests using Chrome Developer Tools (First Mode Navigation and Device Mobile and then second, Mode Navigation and Device Desktop.) across all pages (to check for consistency of results.)
Expected outcome: Best Practices, SEO and Accessibility should return 95+ and Performance should return 90+.
Test outcome: PASS after initial feedback was incorporated.

Mobile results were 100 for Accessibility, Best Practices and SEO; Performance was 97. Desktop results were 100 for Accessibility, Best Practices and SEO; Performance was 98.
Feedback included compressing images (for the web page and also README images) and converting to WebP for Performance. Additional Performance feedback included using preload and dns-prefetch for the Google Fonts in the HTML head to speed up page load but this produced varying results and was removed. Feedback also included providing additional padding for social media icons for Accessibility.
Producing stable Lighthouse results required all background browsers to be closed and icognito browser mode to be used.
6. Validator Testing
Test label: W3 HTML validation
Test action: Perform a W3 HTML validation test on all pages (Home, How To, FAQ and Page Not Found)
Expected outcome: W3 HTML validation passed with zero errors and ideally no warnings (desired not essential).
Test outcome: PASS (0 errors, 0 warnings) after initial feedback was incorporated.

Initial W3 HTML testing recommended additional H2/3/4 headings and fewer H1 headings. Some stray and unclosed tags were also highlighted. Feedback also suggested some sections were changed to divs unless headers were used. Headers for these sections (eg Line 18, index.html) were not semantically appropriate and so divs were used in all noted instances. After recommendations were implemented, W3 HTML testing indicated no errors or warnings.
Test label: W3 CSS validation (Jigsaw)
Test action: Perform a W3 CSS validation test
Expected outcome: W3 CSS validation passed with no issues outstanding
Test outcome: PASS after initial feedback was incorporated. Initial W3 CSS testing indicated some duplicate tags and an error in a function name. Once removed no further issues were reported.

