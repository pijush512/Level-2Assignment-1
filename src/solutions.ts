const multiplyValue = (value: number, multiplier?: number ): number => {
    if(multiplier === undefined){
        return value * 2;
    }
    else{
        return value * multiplier;
    }
}


const processInput = (value: string | number | boolean): string | number =>{
    if(typeof value === "string"){
        return value.trim().toLowerCase();
    }
    else if(typeof value === "number"){
        return value * 10;
    }
    else if (typeof value === "boolean") {
        if(value === true){
            return "Active"
        }
        else{
            return "Inactive"
        }
    }
    return "";
};


const formatCoordinate = (coordinate: readonly[number, number, string]) => {
    const [latitude, longitude, locationName] = coordinate;
    return `Location: ${locationName} (${latitude}, ${longitude})`;
};


const concatenateArrays = <T>(...arrays: T[][]) => {
    return arrays.flat() as T[];
};



interface Course {
    title: string,
    students: number,
    isPublished: boolean,
};

const getPopularCourses = (courses: Course[], minStudents: number) => {
    return courses.filter((course) => {
        return course.isPublished === true && course.students >= minStudents;
    }
    )
};

const courses = [
  { title: "TypeScript Mastery", students: 120, isPublished: true },
  { title: "Draft Course", students: 200, isPublished: false },
  { title: "Basic HTML", students: 45, isPublished: true },
  { title: "Next.js Pro", students: 85, isPublished: true }
];


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    return items.map(item => item[key]);
};
const users = [
  { id: 1, name: "Rakib", role: "Admin" },
  { id: 2, name: "Sadia", role: "Editor" },
  { id: 3, name: "Tariq", role: "Subscriber" }
];


class Employee {
    protected name: string;
    private baseSalary: number;

    constructor(name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    }

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string) {
        super(name, baseSalary);
        this.department = department;
    }

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}

const manager = new Manager("Alice", 50000, "Engineering");

