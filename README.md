# signpost

[![Build Status](https://travis-ci.com/fac18/signpost.svg?branch=master)](https://travis-ci.com/fac18/signpost)

[![codecov](https://codecov.io/gh/fac18/signpost/branch/master/graph/badge.svg)](https://codecov.io/gh/fac18/signpost)

A community-driven service for those experiencing or at risk of homelessness in Islington

## Readme Contents:

- [Team](#team)
- [Overview](#overview)
- [Installation Guide](#installation-guide)
- [User Stories](#user-stories)
- [Design Process](#design-process)
- [First Build Sprint](#first-build-sprint)
- [Second Build Sprint](#second-build-sprint)
- [Potential Future Developments](#potential-future-developments)
- [Learning Outcomes](#learning-outcomes)
- [Tech Stack](#tech-stack)


### Team

🐰Scrum master: [Renata](https://github.com/renatajarmova)\
🐝UX/UI lead: [Beth](https://github.com/bethanyios) \
✅DevOps lead: [Rosa](https://github.com/rosalie-baxter)\
🥐Quality assurance lead: [Gillian](https://github.com/yeo-yeo)

### Overview

Signpost is an app/desktop website that lets people experiencing or at risk of homelessness find services relevant for them. Services are organised into categories and displayed as pins on a map. Further information such as opening hours and contact details are available for each service. Users can contribute their own suggestions and services to make sure the data is relevant and maintainable.

### 💾Installation Guide


1. Clone the repo `git clone https://github.com/fac18/signpost.git`
2. Intall the dependencies by running `npm i && cd client && npm i && cd ..`
3. Set up two `.env` files (ask for the keys if you're reviewing us). There should be two .env files, one in the client folder root and one in the server folder root too. \*
4. To check tests run `npm test`
5. Start the server with `npm run start:dev` and go to `localhost:3000` \*


### User Stories
[User stories doc](https://docs.google.com/document/d/1HgGcLrVzai1T27yJSQyO0vW0nqcD8waRmjuJtfOCnys/edit)


### Design Process

#### Initial Exploration

<p float="left">
<img src="https://imgur.com/Dxz4Pws.jpg" width="400">
<img src="https://imgur.com/JvDTjEz.jpg" width="300">
</p>

#### Moodboard and similar services

<p float="left">
<img width="400" alt="Screenshot 2020-01-10 at 12 22 04" src="https://user-images.githubusercontent.com/28454190/72152779-e6051500-33a3-11ea-8da9-cc4b4b5b1d7f.png">
<img src="https://user-images.githubusercontent.com/28454190/72152271-6591e480-33a2-11ea-899e-c1ac508054da.JPG" width="300">
</p>

#### 'Crazy 8' rapid page sketching

<img src="https://user-images.githubusercontent.com/28454190/72152268-6591e480-33a2-11ea-818b-04d14e880281.JPG" width="400">

#### User story brainstorming

<img src="https://user-images.githubusercontent.com/28454190/72152269-6591e480-33a2-11ea-908f-ba7a28c0b50b.JPG" width="400">

#### Collaborated Storyboard

<img src="https://user-images.githubusercontent.com/28454190/72152267-64f94e00-33a2-11ea-9a74-fc6ea6ac04f5.JPG" width="400">

#### User Research

Our top 5 user research insights were:

1. Non-linguistic communication is very important, since many users will have a low level of English, and others a low level of literacy. Accessibility is also particularly relevant as many users may be older and are more likely to have health problems.

- _We have designed our app with a lot of icons and very simple language support (e.g. one word) to make communication as clear as possible. We have tried to minimise longer supporting text, e.g. making info about the app an optional step that the user can ignore. We have added next buttons instead of automatic transitions to give slower readers the chance to read bridging screens (e.g. after submitting an edit)._

2. Mental health issues are very prominent in the community, influencing the profile of average users.

- _We have designed the user journey to be as simple as possible, with a minimal number of steps, to lower barriers as much as possible. See also pt 3._

3. Building trust and reassurance are very popular, since this community is vulnerable and may have had bad experiences from people and services offering 'help' in the past. Their outlook may also be made worse by mental health problems. Collection of data is a particularly sensitive issue.

- _We've designed our prototype with minimal use of personal data (just location, if consented to), no log in to avoid saving personal information, reassuring design and privacy statement available_

4. The target community is very diverse with different levels of need. Some people will definitely not be able to help themselves much with an app.

- _We recognised that our target user is unlikely to be an 'entrenched rough sleeper' or someone with severe mental health issues. These people clearly need intensive expert support, which an app can't provide. While we want to make our app as inclusive as possible for people in difficulty, we see our target user more as a 'fallen on hard times' type who has some capacity to recognise and seek help for their problems, and will respond more easily to given support._

5. Data is not available in one easy-to-use package (e.g. a well-maintained API), so we will need to manually collect and enter data points.

- _In light of this, it would make sense to focus on one particular area of services or geography. We have chosen to focus on Islington._

#### Prototyping

Prototyping wasn't too hard because the previous steps had given us a very clear idea of what we wanted to build 😊
We made a list of all the 'screens' and divided them up between us

##### Figma snapshots

![](https://i.imgur.com/GuOQCWf.png =500x)
![](https://i.imgur.com/xZDmCoX.png =400x)
![](https://i.imgur.com/xwhVcSq.png)
![](https://i.imgur.com/5b621aM.png =450x)

#### User Testing

We wrote our user testing script and questions, and tracked responses in [this Google Doc](https://docs.google.com/document/d/1lQWcgmyjNmRlyZqQc-Wxc6-UaOgbgnxEwWQv-LosjRs/edit)

#### More Prototyping

Our changes following user testing:

- Add info page about app purpose
- Change category order
- Add help page for map
- Add help prompt if no interaction at beginning
- Make back to services button more prominent
- Add label to edit button and more interactions
- Add next buttons
- Colour

### 🏃First Build Sprint


Mon/Tues: slow start: planning and researching. Lots of big initial blockers.
Weds: trying to figure out how to build Express backend with React front end, also how to overwrite Git project
Thurs: Lift off! Move Google Maps call to front end, stick with Express for AirTable. Connected pages by using React Router
Fri: Displayed markers by accessing dummy data - made improvements with making a connection between both our map API and our airtable API - made initial style for main pages - added all of necessary svg icons - rendered the components in App by passing their states too so they can be updated/accessed where needed.

### 🏃Second Build Sprint

Monday: Sprint #1 mini presentations (we've talked about what we've found interesting from the prev. week and showed our estimates and actuals to the class). Start new week with a new sprint planning. Continue with styling/svg and connections between routes. Connected both the map API and the airtable API, managed to display the pins with the correct data accessed from our database. Initial search bar that finds the places inputed by the user.
Tuesday: Updated database - small map error handling has been implemented - initial move to make the app responsive for mobile as our approach was more desktop at the beginning. - set up CodeCov and Travis - EsLint and prettier have been configured - made services' element clickable by adding mailto: and phone: - add SVG animation for thank you page and add a small pop-up after being in the map for 6 seconds, needs fixing. We have separated the tasks and each one has taken an specific task to do. Pretty well organised.
Wednesday: Kill the InfoBar when moving onto different pages and coming back to the map. Added svg loading animation.
Thursday: Sorted mobile responsiveness. Made the postdata function work to airtable from the backend. React testing. Fixed travis/node_modules bug to get our first.
Friday: Presentation!

![](https://i.imgur.com/JpnwXGq.png)

- Mon/Tues: slow start: planning and researching.  Lots of big initial blockers.
- Weds: trying to figure out how to build Express backend with React front end, also how to overwrite Git project
- Thurs: Lift off! Move Google Maps call to front end, stick with Express for AirTable. Connected pages by using React Router
- Fri: Displayed markers by accessing dummy data - made improvements with making a connection between both our map API and our airtable API - made initial style for main pages - added all of necessary svg icons - rendered the components in App by passing their states too so they can be updated/accessed where needed.

### 🏃Second Build Sprint

![](https://i.imgur.com/yJ2205u.png)

- Monday: Sprint #1 mini presentations (we've talked about what we've found interesting from the prev. week and showed our estimates and actuals to the class). Start new week with a new sprint planning. Continue with styling/svg and connections between routes. Connected both the map API and the airtable API, managed to display the pins with the correct data accessed from our database. Initial search bar that finds the places inputed by the user. 
- Tuesday: Updated database - small map error handling has been implemented - initial move to make the app responsive for mobile as our approach was more desktop at the beginning. - set up CodeCov and Travis - EsLint and prettier have been configured - made services' element clickable by adding mailto: and phone: - add SVG animation for thank you page and add a small pop-up after being in the map for 6 seconds, needs fixing. We have separated the tasks and each one has taken an specific task to do. Pretty well organised. 
- Wed + Thursday: Kill the InfoBar when moving onto different pages and coming back to the map + Make posts requests to the airtable database. Display open/closed options to each service
>>>>>>> master

Problems: entering opening hours into Airtable in consistent way - no data validation

### Google analytics

![](https://i.imgur.com/gFoYnle.png)

### Potential Future Developments

- Add more data to Airtable
- Expand geographical location
- Add more error handling
- Test Google Map and stop it loading multiple times
- Add filtering function for personalisation
- Develop other features: night shelter availability,

### Learning Outcomes

We learnt:

#### 🎨 DESIGN

Rapid prototyping\
User research\
User testing, using Figma to build a prototype\
SVG files

#### 💽INFRASTRUCTURE

Building a React app with an Express backend\
...and setting up Travis and Codecov with them\
Airtable\
Google Maps and Geocoding APIs

#### 🤸REACT

React Router\
React Refs\
React useReducer\
Styled components

#### ✅ TESTING

Testing with React Router\
jest.useFakeTimers\
Mocking

### 💻 Tech Stack

React, Express, AirTable Google Maps API, Google Geocoding API

### Presentation

![](https://i.imgur.com/Xburh7t.png)

https://www.canva.com/design/DADyewMfXjQ/iKPmKiOdVbBxuggMUKcB1A/view?utm_content=DADyewMfXjQ&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink

We used canvas for our presentation, amending the style to match our design scheme.
To make it more interesting, and to learn from each other, we decided to talk about what another team member had worked on. We pulled up interesting cases and specific elements in order to highlight important points.
