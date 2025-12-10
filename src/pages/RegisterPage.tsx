import React from 'react';
import { courses, internships, registerItem } from '../data/mockData';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';

export function RegisterPage() {
    const { role } = useAuth();

    if (role !== 'user') {
        return (
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center justify-center min-h-screen"
            >
                <p className="text-lg">You must be a logged‑in user to register for courses or internships.</p>
            </motion.div>
        );
    }

    const handleRegister = (id: string) => {
        registerItem(id);
        alert('Registered successfully!');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto py-8"
        >
            <h2 className="text-2xl font-bold mb-6">Available Courses</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
                {courses.map((course) => (
                    <div key={course.id} className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                        <p className="mb-4 text-muted-foreground">{course.description}</p>
                        <Button onClick={() => handleRegister(course.id)}>Register</Button>
                    </div>
                ))}
            </div>

            <h2 className="text-2xl font-bold mb-6">Available Internships</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {internships.map((intern) => (
                    <div key={intern.id} className="p-6 border rounded-lg shadow-sm">
                        <h3 className="text-xl font-semibold mb-2">{intern.title}</h3>
                        <p className="mb-2 text-muted-foreground">{intern.company}</p>
                        <p className="mb-4 text-muted-foreground">{intern.description}</p>
                        <Button onClick={() => handleRegister(intern.id)}>Register</Button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}
