const jobs = [
    {
        company: "Photosnap",
        position: "Senior Frontend Developer",
        posted: "1d ago",
        type: "Full Time",
        location: "USA Only",
        skills: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
        img: "back5.svg" // Placeholder for company logo
    },
    {
        company: "Manage",
        position: "Fullstack Developer",
        posted: "1d ago",
        type: "Part Time",
        location: "Remote",
        skills: ["Fullstack", "Midnight", "Python", "React"],
        img: "back6.svg"
    },
    {
        company: "Account",
        position: "Junior Frontend Developer",
        posted: "2d ago",
        type: "Part Time",
        location: "USA only",
        skills: ["Frontend", "Junior", "JavaScript", "React", "Sass"],
        img: "back7.svg"
    },
    {
        company: "MyHome",
        position: "Junior Frontend Developer",
        posted: "5d ago",
        type: "Contract",
        location: "USA Only",
        skills: ["Frontend", "Junior", "CSS", "JavaScript"],
        img: "back8.svg"
    },
    {
        company: "Loop Studios",
        position: "Software Engineer",
        posted: "1w ago",
        type: "Full Time",
        location: "Worldwide",
        skills: ["Fullstack", "Midnight", "JavaScript", "Ruby", "Sass"],
        img: "back9.svg"
    },
    {
        company: "Facelt",
        position: "Junior Backend Developer",
        posted: "2w ago",
        type: "Full Time",
        location: "UK only",
        skills: ["Backend", "Junior", "Ruby", "Ruby", "RoR"],
        img: "back10.svg"
    },
    {
        company: "Shortly",
        position: "Junior Backend Developer",
        posted: "2w ago",
        type: "Full Time",
        location: "Worldwide",
        skills: ["Fronted", "Junior", "HTML", "Javascript", "Sass"],
        img: "back11.svg"
    },
    {
        company: "Insure",
        position: "Junior FRontend Developer",
        posted: "2w ago",
        type: "Full Time",
        location: "USA only",
        skills: ["Frontend", "Junior", "JavaScript", "Vue", "Sass"],
        img: "back12.svg"
    },
    {
        company: "Eyecam Co.",
        position: "Full stack Engineer",
        posted: "3w ago",
        type: "Full Time",
        location: "Worldwide",
        skills: ["Fullstack", "Midnight", "JavaScript", "Python", "Django"],
        img: "back13.svg"
    },
    {
        company: "The Air Filter Company",
        position: "Front-end Dev",
        posted: "1mo ago",
        type: "Part Time",
        location: "Worldwide",
        skills: ["Frontend", "Junior", "JavaScript", "React", "Sass"],
        img: "back14.svg"
    },
];

let selectedFilters = [];

function renderJobs() {
    const jobListings = document.getElementById("job-listings");
    jobListings.innerHTML = ""; 
    
    const filteredJobs = jobs.filter(job => 
        selectedFilters.every(filter => job.skills.includes(filter))
    );
    
    filteredJobs.forEach(job => {
        const jobCard = document.createElement("div");
        jobCard.className = "job-card";
        jobCard.innerHTML = `
            <img src="${job.img}" alt="${job.company} logo" class="company-logo">
            <div class="job-details">
                <h2>${job.company}</h2>
                <p>${job.position}</p>
                <p>${job.posted} ● ${job.type} ● ${job.location}</p>
                <div class="job-tags">
                    ${job.skills.map(skill => `<span class="job-tag">${skill}</span>`).join("")}
                </div>
            </div>
        `;
        jobListings.appendChild(jobCard);

        jobCard.querySelectorAll(".job-tag").forEach(tag => {
            tag.addEventListener("click", () => addFilter(tag.textContent));
        });
    });
}

function addFilter(filter) {
    if (!selectedFilters.includes(filter)) {
        selectedFilters.push(filter);
        renderFilters();
        renderJobs();
    }
}

function removeFilter(filter) {
    selectedFilters = selectedFilters.filter(f => f !== filter);
    renderFilters();
    renderJobs();
}

function renderFilters() {
    const filterBar = document.getElementById("filter-bar");
    filterBar.innerHTML = ""; 
    
    selectedFilters.forEach(filter => {
        const filterItem = document.createElement("div");
        filterItem.className = "filter-item";
        filterItem.innerHTML = `${filter} <span>×</span>`;
        filterItem.querySelector("span").addEventListener("click", () => removeFilter(filter));
        filterBar.appendChild(filterItem);
    });
}

renderJobs();