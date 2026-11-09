// interface Course {
//     title: string,
//     students: number,
//     isPublished: boolean,
// };
// const getPopularCourses = (courses: Course[], minStudents: number) => {
//     return courses.filter((course) => {
//         return course.isPublished === true && course.students >= minStudents;
//     }
//     )
// };
// const courses = [
//   { title: "TypeScript Mastery", students: 120, isPublished: true },
//   { title: "Draft Course", students: 200, isPublished: false },
//   { title: "Basic HTML", students: 45, isPublished: true },
//   { title: "Next.js Pro", students: 85, isPublished: true }
// ];
// console.log(getPopularCourses(courses, 80))
const pluckValues = (items, key) => {
    return items.map(item => item[key]);
};
const users = [
    { id: 1, name: "Rakib", role: "Admin" },
    { id: 2, name: "Sadia", role: "Editor" },
    { id: 3, name: "Tariq", role: "Subscriber" }
];
console.log(pluckValues(users, "name"));
console.log(pluckValues(users, "id"));
export {};
//# sourceMappingURL=problem-5.js.map