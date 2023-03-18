const jobs=[
    {
        id:1,
        company:"Meta",
        job_title:"Software Engineer",
        image:"https://img.icons8.com/fluency/96/null/meta.png",
        location:"Hyderabad",
        job_type:"Full time",
        salary:120000,
        posted_date:"11 day ago",
        industry:"IT industry",
        founded:2004,
        contactno:9838905327,
        email:"sumil197@gmail.com",
        opening:10,
        experience:2,
        link:"https://www.facebook.com/"
    },
    {
        id:2,
        company:"Google",
        job_title:"UI/UX Designer",
        image:"https://img.icons8.com/color/96/null/google-logo.png",
        location:"Mumbai",
        job_type:"Full time",
        salary:60000,
        posted_date:"9 day ago",
        industry:"IT industry",
        founded:1998,
        contactno:9448444897,
        email:"shreyas123@gmail.com",
        opening:5,
        experience:1,
        link:"https://www.google.com/"
    },
    {
        id:3,
        company:"Notion",
        job_title:"Senior Manager",
        image:"https://img.icons8.com/ios/50/null/notion.png",
        location:"Hyderabad",
        job_type:"Full time",
        salary:100000,
        posted_date:"9 day ago",
        industry:"IT industry",
        founded:2005,
        contactno:9838905327,
        email:"surya@gmail.com",
        opening:3,
        experience:0,
        link:"https://www.notion.so/"
    },
    {
        id:4,
        company:"FedEx",
        job_title:"Marketing Executive",
        image:"https://img.icons8.com/color/48/null/fedex.png",
        location:"Mumbai",
        job_type:"Full time",
        salary:30000,
        posted_date:"8 day ago",
        industry:"IT industry",
        founded:1989,
        contactno:9838905327,
        email:"sarthak082@gmail.com",
        opening:10,
        experience:1,
        link:"https://www.fedex.com/"
    },
    {
        id:5,
        company:"Citi Bank",
        job_title:"Finance Analyst",
        image:"https://img.icons8.com/color/48/null/citibank.png",
        location:"Mumbai",
        job_type:"Full time",
        salary:60000,
        posted_date:"7 day ago",
        industry:"financial services",
        founded:1999,
        contactno:9838905327,
        email:"ninad194@gmail.com",
        opening:2,
        experience:1,
        link:"https://www.online.citibank.co.in/"
    },
    {
        id:6,
        company:"Notion",
        job_title:"Content Writer",
        image:"https://img.icons8.com/ios/50/null/notion.png",
        location:"Hyderabad",
        job_type:"Internship",
        salary:10000,
        posted_date:"7 day ago",
        industry:"IT industry",
        founded:2005,
        contactno:9838905327,
        email:"surya@gmail.com",
        opening:3,
        experience:0,
        link:"https://www.notion.so/"
    },
    {
        id:7,
        company:"Disney",
        job_title:"Video Editor",
        image:"https://img.icons8.com/color/48/null/disney-logo.png",
        location:"Mumbai",
        job_type:"Full time",
        salary:40000,
        posted_date:"6 day ago",
        industry:"Entertainment",
        founded:1923,
        contactno:9812548974,
        email:"sumil197@gmail.com",
        opening:10,
        experience:0,
        link:"https://www.disneyplus.com/"
    },
    {
        id:8,
        company:"Notion",
        job_title:"Marketing",
        image:"https://img.icons8.com/ios/50/null/notion.png",
        location:"Hyderabad",
        job_type:"Internship",
        salary:25000,
        posted_date:"5 day ago",
        industry:"IT industry",
        founded:2005,
        contactno:9838905327,
        email:"surya@gmail.com",
        opening:3,
        experience:0,
        link:"https://www.notion.so/"
    },
    {
        id:9,
        company:"Apple",
        job_title:"iOS Developer ",
        image:"https://img.icons8.com/ios-glyphs/30/null/mac-os.png",
        location:"Bangalore",
        job_type:"Full time",
        salary:120000,
        posted_date:"3 day ago",
        industry:"IT industry",
        founded:1976,
        contactno:9838905327,
        email:"ayesha0114@gmail.com",
        opening:6,
        experience:1,
        link:"https://www.apple.com/"
    },
    {
        id:10,
        company:"American Bank",
        job_title:"Chartered Accountant",
        image:"https://img.icons8.com/fluency/96/null/bank-of-america.png",
        location:"Mumbai",
        job_type:"Full time",
        salary:50000,
        posted_date:"1 day ago",
        industry:"financial services",
        founded:1989,
        contactno:9123456785,
        email:"anas0814@gmail.com",
        opening:2,
        experience:2,
        link:"https://www.bankofamerica.com/"
    },
    {
        id:11,
        company:"FedEx",
        job_title:"Sales Executive",
        image:"https://img.icons8.com/color/48/null/fedex.png",
        location:"Mumbai",
        job_type:"Full time",
        salary:30000,
        posted_date:"1 day ago",
        industry:"IT industry",
        founded:1989,
        contactno:9838905327,
        email:"sarthak082@gmail.com",
        opening:10,
        experience:1,
        link:"https://www.fedex.com/"
    },
    {
        id:12,
        company:"BetterMind",
        job_title:"Web Designer",
        image:"../img/companyLogo-whitebg.jpg",
        location:"Mumbai",
        job_type:"Full time",
        salary:80000,
        posted_date:"1 day ago",
        industry:"Mental Service",
        founded:2021,
        contactno:9838905327,
        email:"ajaykvmaurya@gmail.com",
        opening:10,
        experience:1,
        link:"https://bettermind.pythonanywhere.com/"
    }
]

function displayjobs(n){
    var jobtodisplay=document.querySelector(".job-display-containers")
    if(jobtodisplay){
        jobtodisplay.innerHTML=``;
        for(var i=jobs.length-(n*6)-1;i>jobs.length-(n*6)-7;i--){
            if(i<0){
                break;
            }
            jobtodisplay.innerHTML+=`
            <div class="job-container" onclick="rundetails(${jobs[i].id});">
            <div>
              <img src="${jobs[i].image}"/>
            </div>
            <div>
              <h2>${jobs[i].company}</h2>
              <h1>${jobs[i].job_title}</h1>
              <ul type="none">
                <li><i class="fa-solid fa-location-dot"></i> ${jobs[i].location}</li>
                <li><i class="fa-solid fa-clock"></i> ${jobs[i].job_type}</li>
                <li><i class="fa-solid fa-indian-rupee-sign"></i> ${jobs[i].salary}/month</li>
                <li><i class="fa-regular fa-calendar"></i> ${jobs[i].posted_date}</li>
              </ul>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima facere, numquam maiores quam unde eum saepe? Tempore cupiditate expedita qui.</p>
            </div>
          </div>
            `
        }
    }
}

function jobdetails(n){
    var jobcontainer=document.querySelector(".mainContent");
    if(jobcontainer){
        jobcontainer.innerHTML=`
        <div class="allDeatils">
        <div class="subLeftContainer">
        <div class="applyNow">
          <div class="applyNowLeft">
            <img src="${jobs[n-1].image}" alt="image">
            <p>${jobs[n-1].job_title}</p>
            <span>91 Springboard,<br>
              <center>${jobs[n-1].location}</center>
            </span>
            <a href="#"><button>Apply Now</button></a>
          </div>
          <div class="hr">
            <hr>
          </div>
          <div class="applyNowRight">
            <ul class="detailsList">
              <li><i class="fa-regular fa-credit-card"></i>${new Intl.NumberFormat().format(jobs[n-1].salary)}/Month</i></li>
              <li><i class="fa-solid fa-square-phone"></i>${jobs[n-1].contactno}</li>
              <li><i class="fa-sharp fa-regular fa-envelope"></i>${jobs[n-1].email}</li>
              <li><i class="fa-regular fa-clock"></i><span class="og">${jobs[n-1].job_type}</span></li>
              <li><i class="fa-regular fa-user"></i><span style="color: red;">${jobs[n-1].opening} open position</span></li>
              <li><i class="fa-sharp fa-solid fa-expand"></i>${jobs[n-1].experience} year exp.</li>
            </ul>
          </div>
        </div>
        <div class="jobDescription">
          <div class="containerTitle">Job Description</div>
          <p>A web designer is a professional who is responsible for creating the visual design and layout of websites.A
            web designer typically works closely with clients or stakeholders to understand their needs and goals for
            the website, and then uses their expertise to create a design that meets those requirements.<br>In addition
            to designing the overall look and feel of a website, web designers may also be responsible for creating or
            selecting graphics, optimizing images for web use, and selecting appropriate fonts and layouts. They may
            also work with other professionals, such as developers and content creators, to ensure that the website is
            both visually appealing and user-friendly. The role of a web designer is crucial in the development of any
            website, as they are responsible for creating the first impression that visitors have of the site.</p>
        </div>
        <div class="jobSkill" style="height: 275px;">
          <div class="containerTitle">Job Requirements</div>
          <ul class="js">
            <li>Proficiency in web design tools and technologies</li>
            <li>Knowledge of design principles</li>
            <li>User experience (UX) design</li>
            <li>Responsive design</li>
            <li>Communication skills</li>
            <li>Project management</li>
          </ul>
        </div>
        <div class="location">
          <div class="containerTitle">Location</div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.7223874016863!2d72.87090001469818!3d19.119830987062706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c822f889bc3f%3A0x83365d308ee0dc44!2s91springboard%2074%20Techno%20Park%2C%20Andheri%20East!5e0!3m2!1sen!2sin!4v1676617315177!5m2!1sen!2sin"
            width="790.875" height="450" style="border:0;" allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </div>
        <div class="subRightContainer">
        <div class="workDetails">
          <div class="worklt">
          <div class="worklogo"><img src="../img/work.svg" alt=""></div><div class="workTitle">Work Details</div>
          </div>
          <hr>
          <ul>
            <li>Experience<br><span class="subt">Min ${jobs[n-1].experience} year</span></li>
            <li>Work Level<br><span class="subt">Entry-Level</span></li>
            <li>Employment Type<br><span class="subt">${jobs[n-1].job_type}</span></li>
            <li>Salary<br><span class="subt">${new Intl.NumberFormat().format(jobs[n-1].salary)}/month</span></li>
            <li>Last Date<br><span class="subt">11<sup>th</sup>April</span></li>
          </ul>
        </div>
        <div class="companyInfo">
          <div class="companyLogoName">
            <img src="${jobs[n-1].image}" alt="">
            <h4 style="font-size: 25px;">${jobs[n-1].company}</h4>
          </div>
          <hr>
          <ul>
            <li>Industry<br><span class="subt">${jobs[n-1].industry}</span></li>
            <li>Founded in<br><span class="subt">${jobs[n-1].founded}</span></li>
            <li>Phone<br><span class="subt"><a href="tel: 1800-599-0019">1800-599-0019</a></span></li>
            <li>Email<br><span class="subt">${jobs[n-1].email}</span></li>
            <li>Location<br><span class="subt">91 Springboard, ${jobs[n-1].location}</span></li>
            <li>Website<br><span class="subt"><a target="_blank" href="${jobs[n-1].link}">${jobs[n-1].company.toLowerCase()}.com</a></span></li>
          </ul>
        </div>
        <div class="workingHours"></div>
        </div>
        </div>
        `
    }

}
function rundetails(n){
    localStorage.setItem("id",n);
    window.location.href='jobDetails.html';
    jobdetails(n);
}
var jobid=parseInt(localStorage.getItem("id"));
jobdetails(jobid);
displayjobs(0)
