import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { motion } from 'motion/react';
import logo from '../data/dlp.jpg';

export function Header() {
  const { role, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
            <img src={logo} alt="DLP Logo" className="w-10 h-10 object-contain" />
            <span className="text-foreground font-medium">DLP International</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { name: 'Home', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'Features', path: '/features' },
              { name: 'Team', path: '/team' },
              { name: 'Contact', path: '/contact' },
            ].map((item, index) => (
              <Button
                key={item.name}
                variant={role !== 'guest' && item.path === '/register' ? 'default' : 'ghost'}
                asChild
              >
                <a href={item.path}>{item.name}</a>
              </Button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {role === 'guest' && (
              <Button variant="ghost" onClick={() => navigate('/login')}>Sign In</Button>
            )}
            {role === 'guest' && (
              <Button variant="default" onClick={() => navigate('/register')}>Get Started</Button>
            )}
            {role === 'user' && (
              <Button variant="default" onClick={handleLogout}>Logout</Button>
            )}
            {role === 'admin' && (
              <>
                <Button variant="ghost" onClick={() => navigate('/admin')}>Admin</Button>
                <Button variant="default" onClick={handleLogout}>Logout</Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => { /* mobile menu toggle placeholder */ }}>
            {/* Icon placeholder */}
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}