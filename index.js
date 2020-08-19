//Creation two objects with  key and value

const job = [{id:a, charact:"remote"}, {id:b, charact:"flexible hours"},{id:c, charact:"office based"} ];
const applicants = [{name:Esmee, skill:"React"}, {name:Phil, skill:"AWS"}, {name:Perrine, skill:"Python"};

// here a let executing the mapping

//console.log(job)
//console.log(applicants);
function jobMatch (job, applicants ) {


//But how to match to objects? How to evaluate
//here doing a for loop, or forEach do or .map methods to iterate through index
 let matchJobtoApplicants = job.map (//something, something//) =>
//evaluation happens there using 
  let match = applicants.find(job => job.id ===  skills)
// populate the DOM where the matching list will be displayed:
 const html = ` <p>${job.id} + ${job.charact} + " is perfect match for " ${applicants.name) + " skills= " ${applicants.skill}</p>`;

 document.body.innerHTML = html

}

//call the function here
jobMatch();