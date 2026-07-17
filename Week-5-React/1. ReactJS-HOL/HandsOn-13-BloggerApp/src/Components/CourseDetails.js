import React from 'react';

function CourseDetails() {
    const coursedet = (
        <div>
            <h3>Angular</h3>
            <p>4/5/2021</p>
            <h3>React</h3>
            <p>6/3/2021</p>
        </div>
    );

    return (
        <div className="mystyle1">
            <h1>Course Details</h1>
            {coursedet}
        </div>
    );
}

export default CourseDetails;