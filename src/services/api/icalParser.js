import ical from 'node-ical';

export async function parseAssignments(url) {
    try {
        const data = await ical.async.fromURL(url);

        let courses = []

        let response = {
            courses: [],
            assignments: []
        };

        for (const event of Object.values(data)){ // for each assignment or event in the calendar,
            if(event.summary){
                // (the event summary is a string of the assignment name and course name where the course name is in between brackets)
                // separate the assignment and course name
                summary = event.summary.split("[", 2);
                assignmentName = summary[0];
                courseName = summary[1].slice(0, -1);

                if(!courses.includes(courseName)) {
                    courses.push(courseName);
                }
                
                // format the date string to YYYY-MM-DD
                year = event.start.toLocaleString("default", {year: "numeric"});
                month = event.start.toLocaleString("default", {month: "2-digit"});
                day = event.start.toLocaleString("default", {day: "2-digit"});
                dueDate = year + "-" + month + "-" + day;

                assignment = {name: assignmentName, course: courseName, date: dueDate}
                response.assignments.push(assignment)
            }
        };
        response.courses = courses
        return response
    }
    catch(error){
        console.error(error);
    }
};