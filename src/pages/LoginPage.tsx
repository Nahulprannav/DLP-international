import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';

export function LoginPage() {
    const [selectedRole, setSelectedRole] = useState<'guest' | 'user' | 'admin'>('guest');
    const [adminPassword, setAdminPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        if (selectedRole === 'admin' && adminPassword !== 'admin123') {
            alert('Invalid admin password');
            return;
        }
        login(selectedRole);
        if (selectedRole === 'guest') navigate('/');
        else if (selectedRole === 'user') navigate('/register');
        else if (selectedRole === 'admin') navigate('/admin');
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center min-h-screen bg-gray-100"
        >
            <h2 className="text-2xl font-bold mb-4">Select Role to Sign In</h2>
            <div className="flex gap-4 mb-6">
                {['guest', 'user', 'admin'].map((role) => (
                    <Button
                        key={role}
                        variant={selectedRole === role ? 'default' : 'outline'}
                        onClick={() => setSelectedRole(role as any)}
                    >
                        {role.charAt(0).toUpperCase() + role.slice(1)}
                    </Button>
                ))}
            </div>
            {selectedRole === 'admin' && (
                <input
                    type="password"
                    placeholder="Admin password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="mb-4 p-2 border rounded"
                />
            )}
            <Button onClick={handleLogin}>Proceed</Button>
        </motion.div>
    );
}
