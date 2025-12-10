// Mock data for courses, internships, and registrations
export interface Course {
    id: string;
    title: string;
    description: string;
}

export interface Internship {
    id: string;
    title: string;
    company: string;
    description: string;
}

// Sample courses
export const courses: Course[] = [
    { id: 'c1', title: 'Web Development', description: 'Learn modern web development with React and Vite.' },
    { id: 'c2', title: 'Data Science', description: 'Introduction to data analysis and machine learning.' },
];

// Sample internships
export const internships: Internship[] = [
    { id: 'i1', title: 'Frontend Engineer Intern', company: 'TechCorp', description: 'Work on UI components using React.' },
    { id: 'i2', title: 'Data Analyst Intern', company: 'DataWorks', description: 'Assist in data cleaning and visualization.' },
];

// Registrations map: key is item id, value is number of registrations
export const registrations: Record<string, number> = {};

// Helper to register for an item
export function registerItem(itemId: string) {
    registrations[itemId] = (registrations[itemId] ?? 0) + 1;
}
