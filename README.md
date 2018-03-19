# Social Share Exercise

This project contains a social share created with React using create-react-app.

## Getting started
* `yarn install` or `npm install`
* `yarn start` or `npm run start`

## Demo
Preview of this project can be found at [fpo.website/logojoy](http://fpo.website/logojoy/)

## Notes

Below are some rationale to explain my choices and thought process:

* Social share only works for a single hard-coded image and share copy, as there's no back-end portion to the exercise,
and making copies of the same HTML file to upload for demonstration purpose may be a bit excessive. But the share
component is built to handle different URL/hash/IDs.

* In InVision, share thumbnails preview trigger is on **hover**. In cases like these I would normally double check with 
the designer to confirm that's what they want, because this opens up questions such as:

    * Is there a difference between the **hover** and **selected** state
        * If not, why not? As the experience could be confusing for the user
        * If so, what would indicate **hover** and **selected**
        
    * If hover is what the designer is looking for, how should **click** be indicated?
        * Also, how would this be handled in mobile?
    
    * In this case, I opted for **click** because there is less complexity and still achieve similar results UX-wise.
    Also, it'd be a more consistent experience with mobile.