//1.Create your own resume data in JSON Format
var resume = {
    "name":"Tharani K",
    "age": "34",
    "email": "sherley.tharani@gmail",
    "eduQual":"B.Sc",
    "nationality":"Indian",
    "yrsOfExp":"13yrs of Professional Experience",
    "certification": "DevOps SRE Foundation Certified",
    "techSkills":"I have knowledge in the Techincal skills like Java,Oracle,Linux",
    "techTools": "I'm familiar with Tech Tools like JIRA,SNOW,ADO,Eclipse,Geneos,Bitbucket,Rundeck",
    "currDesignation": "I'm a Technical Manager-SRE in Standard Chartered Global Business Pvt Ltd",
    "natureOfJob": "My natured of Job --> Production Support,SRE,L1/L2/L3 Support,Incident Management, Change Management, Preventive and Proactive, ITRS Monitoring",
    "aboutMe": "I am a Troubleshooter, Solution seeker, Proactive, Innovator, Creator Thinker, Collaborative, Upholder, Enthusiastic person"
}

//2. for the above JSON, iterate over all for loops (for, for in, for of, forEach)
var keyArr = Object.keys(resume)

//for loop
for(var a=0;a<keyArr.length;a++){
    console.log(resume[keyArr[a]])
}

//for-in loop
for(var key in resume){
    console.log(resume[key])
}

//for-of loop
for(var keyEle of keyArr){
    console.log(resume[keyEle])
}

//for-each
keyArr.forEach(val => console.log(resume[val]))