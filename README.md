# Project Name: Art Gallery
I decided to create a mosaic art gallery website because I have a passion for painting and wanted to craft an immersive experience for visitors. This project utilized advanced CSS techniques like Grid, transitions, and animations to enhance the user interface. Users can not only view the artworks but also experience them with music and virtually place them in different settings.

#### Part 1:
![Art1 Demo](/client/public/images/art1.gif)
#### Part 2:
![Art2 Demo](/client/public/images/art2.gif)
#### Part 3:
![Art3 Demo](/client/public/images/art3.gif)

### Technologies: 

| Backend 	| Frontend 	|  Testing   	|
|---------	|----------	|------------	|
| Node    	| Vite     	| RTL       	|
| Express 	| React    	| Vitest    	|
| Postman 	| CSS/HTML  | JUnit        	|    


### Dependencies: 

| Backend      	| Frontend        	| Testing   |
|--------------	|-----------------	|----------	|
| cors         	| react-bootstrap 	|@testing-library/react    	|
| dotenv       	| emailjs-dom      	|@testing-library/jest-dom 	|
| concurrently 	| react-router-dom 	| vitest-dom                |
| nodemon      	| framer-motion     |          	                |                
|               | animejs           |                           |

## Tests Summary:
### Unit Tests:
1. The test verifies that the `HomePage` component renders correctly by checking the presence of key elements. It ensures the "About" section title and the mission statement are displayed as expected. The test uses `@testing-library/react` to render the component and asserts the presence of these elements in the DOM, confirming that the component's main content is correctly rendered.

2. The test suite mocks the `react-icons/fa` icons and the `Audio` constructor to simulate the behavior of the `BackgroundMusic` component. It verifies that the component renders correctly and that the play/pause functionality works as expected. The test checks for the presence of the play/pause button in the document and ensures that the mocked audio behavior integrates seamlessly with the component's functionality.
### Integration Tests:
1. The integration test suite for the `ArtworkDetail` component verifies that the component renders correctly within a `MemoryRouter` using mock artwork data. The first test ensures that the artwork details, such as the title, artist, and description, are displayed correctly, and the "Back to Gallery" link is present. The second test is set up to check the theme toggling functionality, ensuring that the component's dynamic features work as expected within the router context.

2. The integration test suite for the `ContactPage` component includes two main tests. The first test ensures that the `ContactPage` component renders correctly by checking the presence of form elements (name input, email input, message textarea, and send button) and contact information (phone number, email address, and physical address). The second test verifies the form submission process by simulating user input, submitting the form, and checking that the `emailjs.send` function is called once. It also confirms that the form fields are reset after submission. The `emailjs.send` function is mocked for these tests to control its behavior.

## Challenges:
Building a motion painting that moves along with the mouse can be challenging due to the need for precise tracking and smooth animation. Achieving a seamless and responsive motion requires careful handling of mouse events, calculations for the painting's position relative to the mouse, and updating the painting's position in real-time.

## Future Features:
Given additional time, I aim to expand the gallery's collection to include diverse art forms beyond paintings, such as sculptures, mixed media, and other innovative art styles. 

## Step-by-Step Setting up Instructions - To use this project as your starting point  🚀  
### To create the whole project


1. Go to your source directory in your terminal and run the command `https://github.com/zhjiang1103/artGallery.git NAMENEWDIRECTORY`

2. To clean the owner git out of the main directory, run the command `rm -rf .git`

3. Run the command `git init` to start your own git track 

4. Go to the server folder in the project (`cd server`) and run the command `npm install`

5. Go to the client folder in the project (`cd .. and cd client`) and run the command `npm install --save --legacy-peer-deps`

🔎 The `npm install` command installs the required dependencies defined in the package.json files and generates a node_modules folder with the installed modules.

6. If you want to run both servers concurrently (which is already a npm dependency on the server) you can keep the script in the package.json in the server that reads `"dev": " concurrently 'npm start' 'cd .. && cd client && npm run dev' "`. If you run the command `npm run dev` from within your server, both the client and backend servers will start.

7. Go to localhost:3000  💪

⚡ **Notes** ⚡  
* React requires **Node >= 14.0.0** & **npm >= 5.6**
* Please note that your backend server will run from `port 8080`, and your frontend React server will run from `port 3000`.


