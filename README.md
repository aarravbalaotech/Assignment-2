Aarrav Bala Personal Portfolio Website

- This ReadMe just notes down the info from the rubric to clarify that the project follows th erubric and instructions.

This is my personal portfolio website built using Express.js and Node.js, featuring a responsive design with Bootstrap and Font Awesome integration. The website showcases my professional profile through multiple pages including Home, About Me, Projects, and Contact Me sections.

Features

1. Core Pages
- **Home Page**: Home page with main portfolio highlights
- **About Me**: Personal and professional background information
- **Projects**: Showcase of completed projects and work
- **Contact Me**: Contact form and professional contact information

### 2. Technical Implementation

#### Express.js and Node.js Integration
- Built with Express.js framework for robust server-side functionality
- Implements EJS templating engine for dynamic content rendering
- Express routes configured for each page using app.get() method
- View templates with res.render() implementation
-i did a lot of resreach and exploring adn found some very cool and new ways to use node

### Site Structure
1. **Express Generator Implementation**
   - Site scaffolded using Express Generator with --views=ejs option
   - Proper EJS templating engine configuration

2. **Asset Organization**
   - All assets properly organized in public folder:
     - `/public/Content/` - CSS files
     - `/public/Content/images/` - Image assets
     - `/public/Content/videos/` - Video content
     - `/public/Scripts/` - JavaScript files

3. **Framework Integration**
   - Twitter Bootstrap implementation for responsive design
   - Font Awesome integration for icons
   - Custom CSS styling with Bootstrap foundation

4. **Routing Structure**
   - All routes defined in `/routes/index.js`
   - Organized routing structure for each page
   - Clean URL paths with semantic naming

5. **View Templates**
   - EJS templates for all pages
   - Shared layout template implementation
   - Partials for header and footer components
   - Footer includes GitHub and LinkedIn profile links

### 3. Version Control and Deployment

#### GitHub Repository
- Public repository with organized structure
- Regular commits showing development progress
- Proper documentation and code organization

#### Cloud Deployment
- Live deployment on cloud platform
- Fully functional and stable deployment
- Accessible through public URL

## Project Structure
```
├── app.js                 # Main application file
├── package.json          # Project dependencies
├── public/              # Static assets
│   ├── Content/        # CSS and media files
│   │   ├── app.css
│   │   ├── images/
│   │   └── videos/
│   └── Scripts/        # Client-side JavaScript
│       └── app.js
├── routes/             # Express routes
│   ├── index.js
│   └── users.js
└── views/             # EJS templates
    ├── index.ejs
    ├── aboutme.ejs
    ├── projects.ejs
    ├── contactme.ejs
    ├── error.ejs
    └── partials/
        ├── header.ejs
        ├── footer.ejs
        ├── main_nav.ejs
        └── bottom_nav.ejs
```

## Technologies Used
- Node.js
- Express.js
- EJS Templating Engine
- Bootstrap
- Font Awesome
- JavaScript
- CSS3
- HTML5
-W3Schools Bootsrap template for web
-Also used A CSS elements from W3Schools in app.css

## Setup and Installation-for A local test
1. Clone the repository
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Access the website at: `http://localhost:4000`
## Render Cloud Test instructions
1.Here is the link for the render cloud page -
 https://aarrav-bala-portfolio.onrender.com 
2.It was succesfully deplyoed and if there are any issues becasue of server inactivity shoot me an email at aarrav.bala@ontariotechu.net-I have been having issues with server inactivity when not inuse so just try the link out and let me know 

## Submission Requirements
1. Live Portfolio Site: (https://aarrav-bala-portfolio.onrender.com)
2. GitHub Repository: [\[Link to repository\]](https://github.com/aarravbalaotech/Assignment-2)
3. ZIP File: Submitted via Canvas

Ai and content use-
Co-pilot and Claude was used only to fix and help me out with code errors and syntax-wasnt used for full file progrma generation-The unfamilliar  botsrap templates were used after i did a lot of exploring and found the use of cards and othe rbootsrap library features-i also used Ai just to do my final checks and genrate the readme file which i heavily modifed after generation becasue it was terrible.-in conclusion Ai was only used for Enhancing the bad code (error fixes and syntax fixing )and was not used or straight up generation-Some external code and template elemtns were used from W3Schools- i lost the link for it so you just have my word for it 



## Author
Aarrav Bala

## License
This project is licensed under the ISC License