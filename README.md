# Front-end

The How-To app is built for users who are interested in reading 'How-To's' and users who wish to post their own tutorials. Here is the link to the deployed site: https://how-to-dls5aefb1.now.sh/

Users must regiister and login first. Once finished, the user is redirected to the articles page which displays various articles as examples that the user can use for inspiration upon creating their own. There is a search bar within that component that allows you to search for a specific article on that page. Upon clicking the New Article button, you are sent to the next page which contains a form which a tutorial name, description, steps, and tags. Upon submitting this form, it should display the data on the next page. There are edit and delete buttons for the users finished forms if they wish to change their tutorial!

Team Contribution: Pair programmed everyday with React I people to get the foundation of the app coded out, communicated with backend every day to make sure .post, .get, .put, and .delete requests were up and running, communicated with UX people for color-scheme ideas as well. Built out all necessary components for our app to run smoothly.

React Fundamentals: As the React II developer, I implemented various components to connect our app together such as creating a store in index.js, creating a utils folder to setup axiosWithAuth and AuthRouter respectively, making the actions and reducers for use with API calls, building out multiple forms with edit functionality and delete functionality, and overall structuring as well as deploying of the app.

React Composition: I usedmultiple dependencies involving redux such as React-redux, Redux-thunk, Redux, and Redux-logger, these were all setup in index to ensure that the created store would authorize users to login with a private route, as well as get my components and API calls connected to eachother from actions to reducers to the components actually calling the API.

SPA - AJAX: We included a baseURL in axiosWithAuth, then each component containing an API call was linked to that URL. We included .post for the login action, registration action, and new tutorials as well as a .delete for deleting a completed form. We included .get for getting a tutorial and .put for editing a completed form.
