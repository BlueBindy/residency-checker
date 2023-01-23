### Introduction to Residency-Checker
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

Skeleton
The wireframe desktop version:

Screenshot of wireframe for home page pre use

The wireframe for page post use: Screenshot of wireframe 

The wireframe for page pre use, mobile version:
Screenshot of wireframe

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
All tests peformed on 'bluebindy.github.io/residency-checker/' on Chrome, Safari and Firefox browsers on a 13-inch early 2015 Macbook Air using MacOS Monterey v12.6.2. The exception to this is the Lighthouse accesssibility test which was performed on Chrome only.
### 1. Functionality Testing
### Test label: Input box toggle limits
| Test step | Outcome |
| --- | --- |
| Test action | Manually check upper and lower limits of entry toggles on input boxes on Chrome, Firefox and Safari. |
| Expected outcome | Values above 366 and below 0 should not be possible. |
| Notes | None to add |
| Test outcome | PASS |

### Test label: Info icon mouseover
| Test step | Outcome |
| --- | --- |
| Test action | Mouse over information icon on Chrome, Firefox and Safari. |
| Expected outcome | Explanatory text should appear on mouseover and disappear when mouse moves away. |
| Notes | None to add |
| Test outcome | PASS |

### Test label: Calculation of days and dates for previous 9 years 
| Test step | Outcome |
| --- | --- |
| Test action | Manually review the calendar years presented on page load in the calendar year section  |
| Expected outcome | Years presented on page load should show (in order down the page) current year through to 9 years previous. The ninth year should begin with a date 3287 days before current date. |
| Notes | None to add |
| Test outcome | PASS |

### Test label: Calculation of dates of last 365 days 
| Test step | Outcome |
| --- | --- |
| Test action | Manually review the range of 365 days presented on page load in the continuous residency section |
| Expected outcome | The dates presented should be from 365 days before the current date to the current date |
| Notes | None to add |
| Test outcome | PASS |

### Test label: Error message for incomplete data 
| Test step | Outcome |
| --- | --- |
| Test action | Enter any pattern of data (valid or invalid) as long as one of the essential input boxes is missing data and click submit. Repeat by entering valid data into both essential input boxes.  |
| Expected outcome | On submit, an empty but essential input box should produce an alert message requesting both essential input boxes have an entry before continuing. When both essential input boxes have data, after submit is clicked, valid data should produce a results summary.  |
| Notes | None to add |
| Test outcome | PASS |

### Test label: Error message for invalid data 
| Test step | Outcome |
| --- | --- |
| Test action | Enter data in both essential text boxes. Enter invalid data (below 0 or above 366) in any input box (essential text box or other) and click submit. Repeat with valid data. |
| Expected outcome | When invalid data is entered, an alert message should appear requesting only data between 0 and 366 days. Note that intended action is for this alert to be overridden by an alert message requiring both essential input boxes if either essential input box is empty. No alert message should appear if essential input boxes plus any other have valid data entered; instead a summary report should be produced. Empty non-essential input boxes should not create an alert. |
| Notes | None to add |
| Test outcome | PASS |

### Test label: Eligibility message
| Test step | Outcome |
| --- | --- |
| Test action | Enter valid data in essential input boxes plus any others and click submit. Refresh the page. |
| Expected outcome | On submit, a results summary box should appear below the submit button. Eligibility should be calculated and reported on three fronts: total residency days by calendar year, continuous residency in the previous 365 days and thirdly on whether both residential criteria are met simultaneously or not. On refresh, all data and results should be cleared. |
| Notes | None to add |
| Test outcome | PASS |


### Test label: 404 error page
| Test step | Outcome |
| --- | --- |
| Test action | Peform a browser search for a url such as: https://bluebindy.github.io/residency-checker/xxxx  |
| Expected outcome | A 404 error page should load alerting the user to the non-existence of the page and offering a link tthat successfully opens the existing page. |
| Notes | None to add |
| Test outcome | PASS |

### Test label: icon rendering
| Test step | Outcome |
| --- | --- |
| Test action | Hard refresh broswer cache, navigate to web page, time icon load time, inspect icon. Manually minimise desktop screen size and inspect image. Repeat on Chrome, Firefox and Safari. Repeat using Chrome Developer Tools set for iPhone 5/SE (320 by 568), Surface Duo (540 by 720), iPad Mini (768 by 1024) and Pro Display XDR (6016 by 3384).|
| Expected outcome | Icon loads within 1 second of refresh and renders without distortion or lack of clarity |
| Notes | None to add |
| Test outcome | PASS |


### Test label: External link opens in new tab
| Test step | Outcome |
| --- | --- |
| Test action | Click on both credit links for the favicon at the bottom of the page |
| Expected outcome | Both links should open in a new tab. |
| Notes | Note that when viewed from GitHub, the text links in README are not expected to open in a new window. Users who wish to open these links in a new tab can instead use: CTRL+click (on Windows and Linux) or CMD+click (on MacOS). |
| Test outcome | PASS |

### Test label: Fonts
| Test step | Outcome |
| --- | --- |
| Test action | View fonts on page load in Chrome, Safari and Firefox. |
| Expected outcome | On page load, Roboto font loads and is legible. |
| Notes | None to add |
| Test outcome | PASS |


### Test label: File organisation
| Test step | Outcome |
| --- | --- |
| Test action | Manually review all files and directories |
| Expected outcome | Index.html is registered as 'Home' page via listing as entry file for the site on GitHub Pages. All static files to be published on the website are within assets/images/ . All files for README.md are within docs/ and not within assets/ . All css files are within assets/css/ .All files are grouped by type. |
| Notes | None to add |
| Test outcome | PASS |

### Test label: Images and links include accessibility labels
| Test step | Outcome |
| --- | --- |
| Test action | Review all images and links for accessibility label or clarify why not present. |
| Expected outcome | All semantically relevant images include self-explanatory accessibility label.All text links include self-explanatory label as part of text. |
| Notes | None to add |
| Test outcome | PASS |

### Test label: Responsivity
| Test step | Outcome |
| --- | --- |
| Test action | Manually minimise desktop screen size and inspect each web page. Repeat on Chrome, Firefox and Safari. Repeat using Chrome Developer Tools set for iPhone 5/SE (320 by 568), Surface Duo (540 by 720), iPad Mini (768 by 1024) and Pro Display XDR (6016 by 3384). |
| Expected outcome | When the website is viewed on a range of screen sizes, the layout automatically re-assembles in an intuitive, legible and expected layout. Navigation menu, social media links, email form and embedded text links are accessible. |
| Notes | None to add |
| Test outcome | PASS |


### Test label: Code format standardisation
| Test step | Outcome |
| --- | --- |
| Test action | Manually review all HTML (particularly attributes) and CSS (particularly rules) code, and all file and directory names.|
| Expected outcome | No uppercase letters used; no spaces found. Multiple words in HTML and CSS declarative code are joined using hyphens, except for repository level names which should use an underscore where necessary. All names are distinctive and intrinsically meaningful. CSS code is filed in an file external to HTML pages and linked to the HTML page in the HEAD element. JavaScript link is at bottom of html body section |
| Notes | None to add |
| Test outcome | PASS |

### Test label: Console errors
| Test step | Outcome |
| --- | --- |
| Test action | Review console for warnings and errors in Chrome Developer Tools|
| Expected outcome | No errors and (ideally but not essential) no warnings. |
| Notes | On review, when the deployed site was viewed in a non-Incognito Chrome broswer, a warning error was reported in console (Error with Permissions-Policy header: Unrecognized feature: 'interest-cohort'.) Takash Futada on StackOverflow suggests that this error is caused because 'All GitHub Pages sites served from the github.io domain will now have a Permissions-Policy: interest-cohort=() header set' (quote from github.blog) disabling Google's 3rd party cookie alternative. A potential fix (<meta http-equiv="Permissions-Policy" content="interest-cohort=()" />), suggested by Saff.gh on StackOverflow did prevent the console error, but caused W3 HTML validator to return an error (Bad value Permissions-Policy for attribute http-equiv on element meta.) As the console error is not reported when the deployed site is viewed in an Incognito Chrome browser and the suggested fix does create a W3 Validator error it was removed and the non-Incognito browser error was ignored.  |
| Test outcome | PASS |




### 2. Browser Compatibility testing
### Test label: Browser compatibility
| Test step | Outcome |
| --- | --- |
| Test action | Request website (using 'bluebindy.github.io/residency-checker/') on Chrome, Firefox and Safari browsers.|
| Expected outcome | Website appears (including all images) as expected, with all elements, within 2 seconds. |
| Notes | When the locally-hosted website was viewed in a non-Incognito Chrome window, an error occured (Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received.) StackOverflow contributor, Chrostip Schaejn, suggested that this was caused by various Chrome extensions and could be resolved by whitelisting the relevant extension. This causal analysis was supported when the deployed site was tested in an Incognito Chrome broswer and the error did not occur. As such, no action (eg whitelisting) was taken.  |
| Test outcome | PASS |

### 3. Accesibility testing
### Test label: Accessibility compatibility
| Test step | Outcome |
| --- | --- |
| Test action | Perform two Lighthouse tests using Chrome Developer Tools (First Mode Navigation and Device Mobile and then second, Mode Navigation and Device Desktop.)|
| Expected outcome | Best Practices, SEO and Accessibility should return 95+ and Performance should return 90+. |
| Notes | Producing stable Lighthouse results required all background browsers to be closed and icognito browser mode to be used. |
| Test outcome | PASS |


### 4. Validator Testing
### CSS validator testing
| Test step | Outcome |
| --- | --- |
| Test action | Test code using Jigsaw validator|
| Expected outcome | Validation passed with no errors and ideally no warnings (desired not essential.) |
| Notes | None to add |
| Test outcome | PASS |

### HTML validator testing
| Test step | Outcome |
| --- | --- |
| Test action | Perform a W3 HTML validation test on website page |
| Expected outcome | W3 HTML validation passed with zero errors and ideally no warnings (desired not essential) |
| Notes | 1) W3 Validator returns multiple Info notices regarding trailing slashes on void elements. These trailing slashes are inserted by the Prettier extension in Glitch when code is uploaded for formatting and code length shortening. Despite the W3 Info notice, they were left in place after testing that the potential clash with unquoted attribute values was not causing the website to malfunction. A second W3 Validator error regarding the for attributes in labels was reported. This was found to be a coding syntax error and was fixed and found to be resolved on subsequent testing.  |
| Test outcome | PASS after modifications. |

### Javascript validator testing
| Test step | Outcome |
| --- | --- |
| Test action | Perform a JSHint validation test |
| Expected outcome | Validation passed with zero issues and ideally no warnings (desired but not essential.) |
| Notes | None to add |
| Test outcome | PASS |


# Acknowledgements and Copyright
Fonts used were https://fonts.google.com/specimen/Roboto+Condensed 
Icon in logo from Fontawesome: https://fontawesome.com/
Icon used as favicon from Icons 8, used under licence (free for link) https://icons8.com/license
Favicon insertion technique based on W3 schools tutorial
File format converted using convertio.co 
Sweetalert used to modify generic user alerts
Code formatted using Prettier on Glitch 
Code structure for inserting current year into HTML suggested by Riley Jones on StackOverflow
README structure based on Code Institute's example. The structure and approach to Testing reflects guidance from Brian Macharia.

Mentoring from Brian Macharia. All errors and ommissions the responsibility of Fiona Thompson.

All content is written by Fiona Thompson.

ENDS

-------------------------