# 👨‍💻 Next Level Week 4 - Frontend
## ⚙ Configuring
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This project is being made with React. So once you clone the repository, just make sure to install all its dependencies, that's why you need to run:
<pre>npm install</pre>
<p>or</p>
<pre>yarn install</pre>

## 📌 About the app - MoveIt
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This application is to people apply the Pomodoro Technique with some different features that include exercising during the pause.</p>
<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;This workout once made, the user gain some XP to further share with their friends in a social media and be able to be like this: 😎</p>

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
