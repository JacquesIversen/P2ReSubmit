# A pointless Quiz. 

## Introduction
 
This is a project done to display current Html/css/Javascript knowledge. In this webapp, user will meet no more than four questions/riddles to solve. 

<a href="https://ibb.co/rQXrwSn"><img src="https://i.ibb.co/8mQZ7pF/Screen-Shot-2023-03-07-at-5-22-26-PM.png" alt="Screen-Shot-2023-03-07-at-5-22-26-PM" border="0"></a>



## Structure
This app contains 3 sites:
- Home page 
- Game/quiz page
- End page

## Features
---
### Home page: This is a basic landing page with only 3 options. Either start the game or visit 2 links provided in the page bottom. All links will open in seperate taps, when clicked. Underline is chosen to make the user recognize  the link, instead of using ex. icons. 

<a href="https://ibb.co/crDbbwm"><img src="https://i.ibb.co/2kg88Sb/Screen-Shot-2023-03-07-at-6-11-04-PM.png" alt="Screen-Shot-2023-03-07-at-6-11-04-PM" border="0"></a>

### Game page: This design features a question displayed in the top beige box. 3 options in white-backgrounded boxes, a responsive next button, grey if inactive and blue if active. 
### "The click on your answer" box will respond depending on your answer. 
### Right bottom you'll find a quit button, taking you to the end page, displaying your current score. 

<a href="https://ibb.co/r4rpqM3"><img src="https://i.ibb.co/KFvsB7D/Screen-Shot-2023-03-07-at-6-11-58-PM.png" alt="Screen-Shot-2023-03-07-at-6-11-58-PM" border="0"></a>

### End page: Here you'll find same design as home page, containing same button design and same links. You'll be given the option though to return to the home page instead of startgame. End page does however contain a local highscore of your latest game. 

<a href="https://ibb.co/x69MFK3"><img src="https://i.ibb.co/Zx4h2RN/Screen-Shot-2023-03-07-at-6-17-37-PM.png" alt="Screen-Shot-2023-03-07-at-6-17-37-PM" border="0"></a>

## Features for future implementation:
---
- It would be considered alot more entertaining had the questions had a theme, or perhaps a common difficulty. A wider and more put together riddle content would be appreciated. 
- Displayed highscores and ability to save your score, perhaps along with either a username or 3 digit initials. 
- Responsive design when operating mouse. 

## Technologies
---
- HTML: The structure is devoloped using HTML as main language.
- CSS: Site is styled from custom CSS in external file.
- Javascript: Game logic and statements created using Js in external files. 
- VS Code editor: Whole site is devolved in Visual Studio Code IDE.
- GIT & GitHub: Committed and pushed through Git to Github and deployed through Pages. 
- Pexels.com for background design used in background and button. 

## Testing
--- 
All pages was tested to ensure user cant crash the app. 
Responsive is done to apply from 280px.

All pages has been tested one end to other. All button checked for correct output. 

## Bugs and fixes
---
Responsive was corrected, when tested on smaller iphone devices, design was faulty. 

## Validator Testing
### HTML tested in W3C Validator
- index.html: No errors or faults.
- startgame.html: No errors or faults. 
- end.html page is showing a warning on line 13 for empty h2. This can be avoided with just about any input, and will not effect the input taken from the js file. 

<a href="https://ibb.co/4p7GXb8"><img src="https://i.ibb.co/M7s4tzc/Screen-Shot-2023-03-07-at-6-48-46-PM.png" alt="Screen-Shot-2023-03-07-at-6-48-46-PM" border="0"></a>


### CSS tested in Jigsaw
- style.css: No errors or faults. 

<a href="https://ibb.co/cc9bqjW"><img src="https://i.ibb.co/qM806vH/Screen-Shot-2023-03-07-at-6-56-25-PM.png" alt="Screen-Shot-2023-03-07-at-6-56-25-PM" border="0"></a>

### JS tested in Esprima and Jshint. 
- No errors in Esprima, in neither js files.

<a href="https://ibb.co/dkhM3PW"><img src="https://i.ibb.co/WBT5dkx/Screen-Shot-2023-03-07-at-7-07-44-PM.png" alt="Screen-Shot-2023-03-07-at-7-07-44-PM" border="0"></a>

- No errors in Jshint in neither js files.
Calling undefined variables in 3 variables, all which is used on key. 

<a href="https://imgbb.com/"><img src="https://i.ibb.co/w7WjSbv/Screen-Shot-2023-03-07-at-7-16-15-PM.png" alt="Screen-Shot-2023-03-07-at-7-16-15-PM" border="0"></a>

### Lighthouse report
Heading elements are not in a sequentially-descending order, Pulling accessibility down. 
No Meta was done, hence why the SEO is considered so low. 

<a href="https://ibb.co/tPKRkV9"><img src="https://i.ibb.co/n8mpZxF/Screen-Shot-2023-03-07-at-7-21-38-PM.png" alt="Screen-Shot-2023-03-07-at-7-21-38-PM" border="0"></a>

## Deployment
---
The steps to deploy is as follows:

git add <file> - This command was used to add the file(s) to the staging area before they are committed.

git commit -m “commit message” - This command was used to commit changes to the local repository queue ready for the final step.

git push - This command was used to push all committed code to the remote repository on github.

Deployment to Github Pages
- The site was deployed to GitHub pages. The steps to deploy are as follows:
- In the GitHub repository, navigate to the Settings tab
- From the menu on left select 'Pages'
- From the source section drop-down menu, select the Branch: main
- Click 'Save'
- A live link will be displayed in a green banner when published successfully.

Livelink can be accessed here: https://jacquesiversen.github.io/P2ReSubmit/startgame.html




Deployment for this turned out to be a real bitch. Pages was redeployed numerous times to try and make the pathways work. As the final give up stroke hit, somehow the changes were updated in the live preview.. Oh the fun in that. 

Ex. The button would not update the url design due to a assets/images path, this was changed to ../(name)

link to end.html in script.js shown as /end.html and caused the system to crash. This procedure was repeated in all pathways in all files. 

<a href="https://ibb.co/ChWfMjM"><img src="https://i.ibb.co/m6S3XnX/Screen-Shot-2023-03-08-at-10-52-01-AM.png" alt="Screen-Shot-2023-03-08-at-10-52-01-AM" border="0"></a>

<a href="https://ibb.co/XztT2XH"><img src="https://i.ibb.co/D7QnV4d/Screen-Shot-2023-03-08-at-11-23-46-AM.png" alt="Screen-Shot-2023-03-08-at-11-23-46-AM" border="0"></a>

Livelink can be accessed here: https://jacquesiversen.github.io/P2ReSubmit/startgame.html


## Credits
---
- My Tutor Oscar for making me understand the syntax and rules of Javscript and Python. He made a great effort making me understand the different ways js can be written. 
- Pexels.com for image design for both background in body and buttons. 
- A great mishmash of 7 different quiz builds found mainly on SO. 

