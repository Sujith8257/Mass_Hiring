// Dummy data for different roles
const dummyData = {
    'software-developer': [
        { name: 'John Doe', domain: 'Frontend Development' },
        { name: 'Jane Smith', domain: 'Backend Development' },
        { name: 'Alice Johnson', domain: 'Fullstack Development' },
        { name: 'Bob Brown', domain: 'Mobile Development' },
        { name: 'Charlie Davis', domain: 'DevOps' }
    ],
    'web-developer': [
        { name: 'Emily Evans', domain: 'Frontend Development' },
        { name: 'Frank Green', domain: 'Backend Development' },
        { name: 'Grace Hall', domain: 'Fullstack Development' },
        { name: 'Henry Adams', domain: 'UI/UX Design' },
        { name: 'Ivy Harris', domain: 'Web Performance' }
    ],
    'database-manager': [
        { name: 'Jack Wilson', domain: 'Database Administration' },
        { name: 'Kathy Miller', domain: 'Data Warehousing' },
        { name: 'Leo Taylor', domain: 'Database Design' },
        { name: 'Mia Lewis', domain: 'Data Security' },
        { name: 'Nathan Walker', domain: 'Data Analysis' }
    ]
};

document.querySelector('.signup-button').addEventListener('click', function() {
    document.getElementById('page1').style.display = 'block';
    this.style.display = 'none';
});

function nextPage(currentPage) {
    const currentInputs = document.querySelectorAll(`#page${currentPage} input, #page${currentPage} select`);
    let allValid = true;
    currentInputs.forEach(input => {
        if (!input.value) {
            input.style.border = '2px solid red';
            allValid = false;
        } else {
            input.style.border = '';
        }
    });

    if (allValid) {
        document.getElementById(`page${currentPage}`).style.display = 'none';
        document.getElementById(`page${currentPage + 1}`).style.display = 'block';
    }
}

function chooseRole(role) {
    document.getElementById('page4').style.display = 'none';
    if (role === 'recruiter') {
        document.getElementById('page5-recruiter').style.display = 'block';
    } else if (role === 'jobseeker') {
        document.getElementById('page5-jobseeker').style.display = 'block';
    }
}

function showRecommendations(role) {
    let selectedRole = '';
    let selectedLocation = '';

    if (role === 'recruiter') {
        selectedRole = document.getElementById('recruiter-role').value;
        selectedLocation = document.getElementById('recruiter-location').value;
        document.getElementById('page5-recruiter').style.display = 'none';
        document.getElementById('page6-recruiter').style.display = 'block';
    } else if (role === 'jobseeker') {
        selectedRole = document.getElementById('experience').value;
        selectedLocation = document.getElementById('jobseeker-location').value;
        document.getElementById('page5-jobseeker').style.display = 'none';
        document.getElementById('page6-jobseeker').style.display = 'block';
    }

    if (selectedRole) {
        const recommendations = dummyData[selectedRole];
        const randomRecommendations = recommendations.sort(() => 0.5 - Math.random()).slice(0, 5);

        let recommendationList = '';
        randomRecommendations.forEach(recommendation => {
            recommendationList += `<li>${recommendation.name} - ${recommendation.domain} - ${selectedLocation}</li>`;
        });

        if (role === 'recruiter') {
            document.getElementById('recruiter-recommendations').innerHTML = recommendationList;
        } else if (role === 'jobseeker') {
            document.getElementById('jobseeker-recommendations').innerHTML = recommendationList;
        }
    }
}
