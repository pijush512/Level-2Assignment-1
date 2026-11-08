;
const getPopularCourses = (courses, minStudents) => {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    });
};
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];
console.log(getPopularCourses(courses, 80));
export {};
//# sourceMappingURL=problem-5.js.map