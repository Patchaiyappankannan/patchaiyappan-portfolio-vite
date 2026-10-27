export const RESUME = import.meta.env.BASE_URL + "Patchaiyappan_K_Resume.pdf";
export const PHOTO = import.meta.env.BASE_URL + "profile.jpg";
export const LI = "https://www.linkedin.com/in/patchaiyappan-kannan-a820581a0";
export const GH = "https://github.com/Patchaiyappankannan";
export const MAIL = "patchaiyappan26kannan@gmail.com";
export const NAV = [["home","Home"],["about","About"],["experience","Experience"],["projects","Projects"],["skills","Skills"],["education","Education"],["contact","Contact"]];

export const JOBS = [
 { role:"Software Developer", org:"ASK Technology — Chennai", when:"February 2026 – Present",
   intro:"Working on enterprise ERP and SaaS applications with a focus on frontend development, backend APIs, database operations, validations and complex business workflows.",
   projects:[
    { n:"HARPA — Garment Manufacturing ERP", d:"Developed and maintained ERP modules including:", items:["Production","Purchase","Inventory","Quality Control","Sales","Reporting"], stack:"React.js • Node.js • Express.js • Sequelize • PostgreSQL" },
    { n:"Balaji — ERP System", d:"Developed business modules including:", items:["Product Master","Product Management","Sales Order","Purchase Order","Sales Invoice","Inventory","Billing","Order Management","GST"], stack:"React.js • Node.js • SQL Server" },
    { n:"ERP 360 — SaaS Application", d:"Worked on a multi-module SaaS ERP covering:", items:["GRN","Quality Control","Return","Work Order","Job Work","Fabric Issue","DC Trim In","Purchase","Sales","Inventory"], more:"Responsibilities: UI development, REST API development, database queries, validations and business workflow implementation.", stack:"React.js • Node.js • Express.js • Sequelize • SQL Server" }]},
 { role:"Software Developer Intern", org:"DGi WORX — Chennai", when:"July 2025 – November 2025",
   projects:[
    { n:"Credo Star — Online Course Platform", d:"Developed a scalable online course platform using React with TypeScript and Vite.", items:["Authentication","Course Enrollment","User Dashboards","Responsive UI/UX","Backend API Integration"], stack:"Frontend: React • TypeScript • Vite • Material UI  |  Backend: Python • FastAPI • PostgreSQL" },
    { n:"FarmGro Eco-Trails — Agri-Tourism Platform", d:"Developed public-facing pages and booking interfaces.", items:["Responsive layouts","Simple booking experiences","Rural connectivity","Offline-friendly pages"], stack:"HTML • CSS • JavaScript • Python • FastAPI • PostgreSQL" },
    { n:"API Development & Integration", d:"Developed backend APIs using Python FastAPI and PostgreSQL, integrated them with frontend applications and implemented application business logic." },
    { n:"Authentication & Course Management", d:"Implemented:", items:["Secure login","User enrollment","Course workflows","Dashboard components"] }]},
 { role:"Junior Software Developer", org:"Promethean Software Solutions — Pondicherry", when:"December 2023 – June 2025",
   projects:[
    { n:"Medshyne — Organization Onboarding", d:"Developed organization onboarding interfaces using React.js and integrated backend APIs using Node.js and MySQL.", stack:"React.js • Node.js • MySQL" },
    { n:"Medshyne — Doctor App & HCR App", d:"Built role-based applications for doctors and healthcare representatives.", items:["Authentication","Scheduling","Role-based functionality","Secure data access"] },
    { n:"Medshyne — Super Admin Panel", d:"Developed a responsive administrative dashboard for managing healthcare organizations.", stack:"React.js • Bootstrap" },
    { n:"East Coast Hospital — Dialysis Module", d:"Implemented patient scheduling and monitoring functionality.", items:["Patient workflow","Scheduling","Monitoring","Real-time data updates"], stack:"React.js" },
    { n:"Office Website Enhancement", d:"Improved the company’s React-based website.", items:["Performance","Accessibility","SEO","User Experience"] }]},
];
export const CARDS = [
 ["01","HARPA","Garment Manufacturing ERP","Enterprise ERP","Enterprise ERP solution supporting apparel manufacturing operations including production, purchasing, inventory, quality, sales and reporting.","Production, purchase, inventory, quality control, sales, reporting","Developed and maintained the ERP modules.",["React.js","Node.js","Express.js","Sequelize","PostgreSQL"],[["Login","harpa-login.jpg"],["Dashboard","harpa-dashboard.jpg"]]],
 ["02","ERP 360","Multi-Module SaaS ERP","SaaS / ERP","SaaS ERP application supporting GRN, QC, returns, work orders, job work, fabric issues, purchasing, sales and inventory workflows.","GRN, QC, return, work order, job work, fabric issue, DC trim in","Built UI, REST APIs, database queries, validations and business workflows.",["React.js","Node.js","Express.js","Sequelize","SQL Server"],[["Login","erp360-login.jpg"],["Dashboard","erp360-dashboard.jpg"]]],
 ["03","Balaji ERP","Business Management ERP","Enterprise Application","ERP system covering product management, sales, purchasing, invoices, inventory, billing, order management and GST.","Product master, sales and purchase orders, sales invoice, billing, GST","Developed the business modules end to end on the frontend and APIs.",["React.js","Node.js","SQL Server"],[["Login","balaji-login.jpg"]]],
 ["04","Credo Star","Online Course Platform","EdTech","Scalable learning platform featuring authentication, course enrollment and user dashboards.","Authentication, course enrollment, user dashboards","Built the React frontend and FastAPI backend APIs during my internship.",["React","TypeScript","Vite","Material UI","FastAPI","PostgreSQL"],[["Dashboard","credostar-admin.jpg"],["Verify","credostar-verify.jpg"]]],
 ["05","Medshyne","Healthcare Management Applications","Healthcare","Worked across organization onboarding, Doctor App, HCR App and Super Admin functionality.","Onboarding, role-based apps, admin dashboard","Developed the React interfaces and integrated Node.js APIs.",["React.js","Node.js","MySQL","Bootstrap"],[["Landing","medshyne-landing.jpg"],["Organization","medshyne-org.jpg"],["Super admin","medshyne-superadmin.jpg"]]],
 ["06","FarmGro Eco-Trails","Agri-Tourism Platform","Travel / AgriTech","Responsive agri-tourism platform with simple booking workflows and pages optimized for rural connectivity.","Booking flow, offline-friendly pages","Built the public pages, booking interfaces and FastAPI services.",["HTML","CSS","JavaScript","FastAPI","PostgreSQL"]],
 ["07","East Coast Hospital","Hospital Management Platform","Healthcare","Hospital web platform where I implemented patient scheduling and monitoring functionality in the dialysis module.","Patient workflow, scheduling, monitoring, real-time data updates","Implemented the dialysis module's scheduling and monitoring features in React.js.",["React.js"],[["Website","eastcoast-landing.jpg"],["Admin","eastcoast-admin.jpg"]]],
];
export const SKILLS = [
 ["Frontend",["React.js","JavaScript","TypeScript","HTML5","CSS3","Bootstrap","Material UI","Axios"]],
 ["Backend",["Node.js","Express.js","Python","FastAPI"]],
 ["Databases",["SQL Server","PostgreSQL","MySQL","MongoDB"]],
 ["Development tools",["Git","Postman","Visual Studio Code"]],
 ["Engineering",["RESTful APIs","API Integration","Testing & Debugging","Responsive Development","Agile Collaboration"]],
];
export const CORE = ["React.js","React","Node.js","Python","FastAPI","TypeScript","SQL Server"];

export const shotSrc = f => import.meta.env.BASE_URL + "shots/" + f;
