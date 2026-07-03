// object destructure
// instead of writing each time user.name we can destructure the object

const course={
    courseName:"acbd",
    courseInstructor:"ppp",
}

console.log(course.courseInstructor);

const {courseInstructor} = course; //instead of using course.courseInstructor we can directly use courseInstructor
console.log(courseInstructor)

let {courseInstructor:instructor} = course; //we can use courseInstructor property of course objecr using instructor
console.log(instructor)

instructor="ggg"

console.log(course)

