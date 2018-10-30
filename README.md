# React Flickr

This is an easy Flickr made with React.

It consists of a gallery with some cards composed by an image, username and a caption.
Clicking on a card leads you to Flickr original post.

## How to use it
You'll find a Heroku link with the deployed app in the description, but if you'd like to see it locally:

```
git clone git@github.com:ClaraAmeller/flickr.git
npm install
npm start
```

## Challenges
Definitely the main challenge has been creating the app from scratch without the glorious `create-react-app`.
With this project I understood that my "I know React, I write it everyday" means "I know how to write and read React on something already built".

Another one has been testing. I can count with one hand the times I've written a test from scratch, and it was in Rails.
Here I had to search and read a lot of articles about which testing frameworks were nice for React and finally decided to go with Jest.

Then, saw a lot of these articles were also using the Enzyme utility, so decided to also use that. And it was easy!

Not the configuration... That was hard. For someone who has never started a project from scratch without scaffolding, configuring the testing was a mess. You'll probably find some dumb mistakes, some things that aren't needed or messy ways to do easy things.

To wrap it up with the challenges, I think the app itself is pretty simple; I know it's not completley done but without taking into account the configuration parts, I think it's a sweet project.

## What's next
I really wanted to make the Gallery responsive and also show a modal when clicking on an image to show extra info like tags, likes or geolocation, but I exceeded the hours I wanted to dedicate to this project.

I'll try to continue working on this just for fun and because I think it's a really good way to learn.