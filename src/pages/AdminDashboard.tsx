import React, { useState } from 'react';
import { courses, internships, registrations, registerItem } from '../data/mockData';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';

export function AdminDashboard() {
    const [courseList, setCourseList] = useState(courses);
    const [internshipList, setInternshipList] = useState(internships);
    const [newCourse, setNewCourse] = useState({ title: '', description: '' });
    const [newInternship, setNewInternship] = useState({ title: '', company: '', description: '' });

    const addCourse = () => {
        if (!newCourse.title) return;
        const newItem = { id: uuidv4(), title: newCourse.title, description: newCourse.description };
        setCourseList([...courseList, newItem]);
        setNewCourse({ title: '', description: '' });
    };

    const addInternship = () => {
        if (!newInternship.title) return;
        const newItem = { id: uuidv4(), title: newInternship.title, company: newInternship.company, description: newInternship.description };
        setInternshipList([...internshipList, newItem]);
        setNewInternship({ title: '', company: '', description: '' });
    };

    const deleteCourse = (id: string) => {
        setCourseList(courseList.filter((c) => c.id !== id));
        delete registrations[id];
    };

    const deleteInternship = (id: string) => {
        setInternshipList(internshipList.filter((i) => i.id !== id));
        delete registrations[id];
    };

    const editCourse = (id: string) => {
        const title = prompt('New title');
        const description = prompt('New description');
        if (title !== null && description !== null) {
            setCourseList(
                courseList.map((c) => (c.id === id ? { ...c, title, description } : c))
            );
        }
    };

    const editInternship = (id: string) => {
        const title = prompt('New title');
        const company = prompt('New company');
        const description = prompt('New description');
        if (title !== null && company !== null && description !== null) {
            setInternshipList(
                internshipList.map((i) => (i.id === id ? { ...i, title, company, description } : i))
            );
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto py-8"
        >
            <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>

            {/* Courses Section */}
            <section className="mb-12">
                <h3 className="text-xl font-semibold mb-4">Courses</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                    {courseList.map((course) => (
                        <div key={course.id} className="p-4 border rounded-lg shadow-sm">
                            <h4 className="font-medium">{course.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{course.description}</p>
                            <p className="text-xs mb-2">Registrations: {registrations[course.id] ?? 0}</p>
                            <div className="flex gap-2">
                                <Button variant="outline" onClick={() => editCourse(course.id)}>Edit</Button>
                                <Button variant="destructive" onClick={() => deleteCourse(course.id)}>Delete</Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Add New Course</h4>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newCourse.title}
                        onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                        className="border p-1 mr-2"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newCourse.description}
                        onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                        className="border p-1 mr-2"
                    />
                    <Button onClick={addCourse}>Add Course</Button>
                </div>
            </section>

            {/* Internships Section */}
            <section>
                <h3 className="text-xl font-semibold mb-4">Internships</h3>
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                    {internshipList.map((intern) => (
                        <div key={intern.id} className="p-4 border rounded-lg shadow-sm">
                            <h4 className="font-medium">{intern.title}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{intern.company}</p>
                            <p className="text-sm text-muted-foreground mb-2">{intern.description}</p>
                            <p className="text-xs mb-2">Registrations: {registrations[intern.id] ?? 0}</p>
                            <div className="flex gap-2">
                                <Button variant="outline" onClick={() => editInternship(intern.id)}>Edit</Button>
                                <Button variant="destructive" onClick={() => deleteInternship(intern.id)}>Delete</Button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="border p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Add New Internship</h4>
                    <input
                        type="text"
                        placeholder="Title"
                        value={newInternship.title}
                        onChange={(e) => setNewInternship({ ...newInternship, title: e.target.value })}
                        className="border p-1 mr-2"
                    />
                    <input
                        type="text"
                        placeholder="Company"
                        value={newInternship.company}
                        onChange={(e) => setNewInternship({ ...newInternship, company: e.target.value })}
                        className="border p-1 mr-2"
                    />
                    <input
                        type="text"
                        placeholder="Description"
                        value={newInternship.description}
                        onChange={(e) => setNewInternship({ ...newInternship, description: e.target.value })}
                        className="border p-1 mr-2"
                    />
                    <Button onClick={addInternship}>Add Internship</Button>
                </div>
            </section>
        </motion.div>
    );
}
