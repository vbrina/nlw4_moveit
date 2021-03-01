# 👨‍💻 Next Level Week 4 - Frontend
## 📌 About the app - MoveIt
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This application is to people apply the Pomodoro Technique with some different features that include exercising during the pause.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This workout once made, the user gain some XP to further share with their friends in a social media and be able to be like this: 😎</p>

## 🌐 Try yourself
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To access this app in a production enviroment, access this <a href="https://move-it-vbrina.vercel.app/">LINK</a>, enter you Github username and enjoy 😀</p>

## ⚙ Configuring
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>FIRST OF ALL</strong> you need to clone this repository. To do that, you just have to:
<pre>git clone https://github.com/vbrina/nlw4_moveit.git</pre>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project is being made with React. So once you clone the repository, you need to install all its dependencies, that's why you should run:
<pre>npm install</pre>
<p>or</p>
<pre>yarn install</pre>

## 📓 Class #1
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;On this first workshop, was introduced the concept of React, such as Components, Props and States. With that, we've started creating the frontend project:</p>
<pre>yarn create react-app nlw4_moveit --template typescript</pre>
<p>Ps.: This project is using <strong>TypeScript</strong> because <strong>IS THE BEST PROGRAMMING LANGUAGE EVER!</strong> 😂😂</p>
<br />
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;The first component that we've made is a Experience Bar. Its purpouse is to show the user his XP Level when he completes the workouts during the breaks.</p>

#### 🤔 What's different?
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've made eslint + prettier configuration. <i>Once you use it, you'll always use it!</i> 🤙</p>

## 🎯 Class #2
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this class, we forgot <strong>almost</strong> everything that we've made in the fist class. Basically, we moved the entire application to a <strong>Next.js</strong> application.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;With that, a new frontend project was created, using:</p>
<pre>yarn create next-app nlw4_moveit</pre>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;As we are using <strong>TypeScript</strong> to develop our app, some changes were required. Because when you create a project like the code above, the default project is created using <strong>JavaScript</strong>. What you have to do is to rename all <i><strong>.js</strong></i> files to <i><strong>.tsx</strong></i></p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Moving forward, in this class, we've learned the concepts for SPA, SSR, SSG and its differences.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;When we talk about components, were made some components that are very important to our app. A <strong>Profile</strong> component, that shows the user's name and his level. Below the Profile component, we have a <strong>Completed Challenges</strong> component, that shows to the user how many challenges he have made so far. Also, we made the most important component in this app, because it's all about Pomodoro Technique. The <strong>Countdown Timer</strong> component, that counts (rly?) from 25 minutes to 0. Below this component, a <strong>Button</strong> was made to <strong>start</strong> the countdown.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Were Added some assets to the project, including an favicon.</p>

#### 🤔 What's different?
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've decided not to follow the Instructor's folders scheme in matters of styles, putting all the <i><strong>module.css</strong></i> files together with its components. I believe that this is the best way to organize an app's styles, because you can keep the file's tracking all the time without having to search too much.</p>

## 📈 Class #3
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In this class we've learned <strong>A LOT</strong>. The main feature that we worked on, was the ChallengeBox component. Why was that so important? Because we could learn about a very used thing that React "gives" to us, the Context API.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Context API is a very important feature to learn, because with this, you have a very simple and easy way to manage your states and be able to access them in <i>whatever</i> component you want.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Also we finished our Countdown component, making it communicate with the ChallengeBox component to trigger a challenge as the Countdown comes to 0. The Challenge is randomly chosen and is available in the <i>challenges.json</i> file and you can add as much challenges as you want. Only the <i>Failed</i> button on the ChallengeBox is executing some action. The ExperienceBar now fill according to your XP gain completing challenges, but as I said before, you're still not able to complete challenges.</p>

#### 🤔 What's different?
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've made some styles changes in the ChallengeBox and the Start/Stop button, adding more box-shadow.</p>

## ✔ Class #4
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This was the shortest class that we've had in this week. But it was very helpful with some stuff. The main feature was that we'he finished the ChallengeBox component, making its buttons have <i>onClick</i> actions, including: complete a challenge and modify all the states used, fail the challenge and not modify the states. These two actions make the Countdown reset to the original time. Also was added a notification sound when a new Challenge is shown.</p>

#### 🤔 What's different?
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've decided to use some external design lib to change some components, like:</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <strong>Message</strong> component. Is used when a new challenge is shown.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- <strong>Progress Bar</strong> component. Is replacing the progress bar that was "homemade".</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To make the app more stylish, I've made a different style for the Levels. Now the user is able to see his current XP in a line below the Progress Bar. Also, the necessary XP to increase your level and your previous XP to increase you level, are with some different styles from the original ones.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Ps.: This feature that shows to the user his previous XP to increase his level is a feature that I implemented too.</p>

## 🏁 Class #5
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Finally in the last class of the week, we've could do a LOT of some very nice stuff for the future of the app.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We've made a Modal component that appears to the user when he increases his level. Also were implemented some Cookies management, saving the user progress in case of a F5 press or a comeback in the future.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In the end of the class, we were able to Deploy our application in a production enviroment. Was used the Vercel enviroment to do that. The link to access my app is on the description of this repository.</p>

#### 🤔 What's different?
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I've created a Home page to the app, so the user can enter with his Github username (this is to show the user's Name and Profile Picture in the Profile component). If the username is invalid, the Profile component will return a message, warning the user that that username is an invalid one. In this case, all the cookies are <strong>reseted</strong> to default too.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;In Profile component, I've added an Logout Button, so the user can logout of the app. In this case, all the cookies are <strong>deleted</strong>.</p>
