"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Menu,
    X,
    Sparkles,
    ChevronDown,
    Palette,
    MessageSquare
} from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#', hasDropdown: true },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: 'mailto:contact@codestamstore.com' }
];


const services = [
    { name: 'Corporate Conferences', href: '#services', icon: '🏢' },
    { name: 'Product Launches', href: '#services', icon: '🚀' },
    { name: 'Trade Shows', href: '#services', icon: '🏬' },
    { name: 'Community Meetups', href: '#services', icon: '👥' }
];

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <nav className="px-4 md:px-6 h-16 flex items-center justify-between">
                {/* Logo */}
                <motion.div
                    className="flex items-center gap-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/" className="flex items-center gap-3" title="EventCo - Event Management">
                        <div className="relative w-10 h-10 flex-shrink-0">
                            <Image
                                src="/codestam_logo.png"
                                alt="EventCo - Event Management"
                                fill
                                className="object-contain"
                                sizes="40px"
                                priority
                            />
                        </div>
                        <span className="font-bold text-xl">EventCo</span>
                    </Link>
                    <Badge variant="secondary" className="hidden sm:flex">
                        <Sparkles className="h-3 w-3 mr-1" aria-hidden="true" />
                        Events
                    </Badge>
                </motion.div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                    {navigation.map((item) => (
                        <div key={item.name} className="relative">
                            {item.hasDropdown ? (
                                <div
                                    onMouseEnter={() => setServiceDropdownOpen(true)}
                                    onMouseLeave={() => setServiceDropdownOpen(false)}
                                >
                                    <Button
                                        variant="ghost"
                                        className="gap-1"
                                        title="Browse our website services"
                                        aria-label="View website template categories and services"
                                    >
                                        {item.name}
                                        <ChevronDown className="h-4 w-4" aria-hidden="true" />
                                    </Button>
                                    <AnimatePresence>
                                        {serviceDropdownOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-2 w-80 bg-card border rounded-xl shadow-lg p-4"
                                            >
                                                <div className="grid grid-cols-1 gap-2">
                                                    {services.map((service) => (
                                                        <Link
                                                            key={service.name}
                                                            href={service.href}
                                                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                                                            title={`Browse ${service.name} templates`}
                                                        >
                                                            <span className="text-lg">{service.icon}</span>
                                                            <div>
                                                                <p className="font-medium text-sm">{service.name}</p>
                                                                <p className="text-xs text-muted-foreground">Custom development included</p>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                                <div className="mt-4 pt-4 border-t">
                                                    <Link
                                                        href="/explore"
                                                        className="flex items-center gap-2 p-3 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                                                        title="View all website templates"
                                                    >
                                                        <Palette className="h-4 w-4 text-primary" aria-hidden="true" />
                                                        <span className="font-medium text-sm text-primary">View All Templates</span>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ) : (
                                <Link href={item.href}>
                                    <Button
                                        variant="ghost"
                                        title={item.name === 'Pricing' ? 'View our pricing packages' : `Go to ${item.name}`}
                                    >
                                        {item.name}
                                    </Button>
                                </Link>
                            )}
                        </div>
                    ))}
                </div>

                {/* Search removed for focused marketing page */}
                <div className="hidden md:flex items-center gap-4" />

                {/* Right Side */}
                <div className="flex items-center gap-4">
                    {/* <ThemeToggleAdvanced /> */}
                    <div className="hidden md:flex items-center gap-2">
                        <Link href="mailto:contact@codestamstore.com?subject=Event%20Management%20Inquiry">
                            <Button
                                size="sm"
                                title="Contact us about your event"
                                aria-label="Get in touch for event management services"
                            >
                                <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" />
                                Get Proposal
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="md:hidden"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        title="Toggle mobile menu"
                        aria-label="Open or close mobile navigation menu"
                    >
                        {mobileMenuOpen ? (
                            <X className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <Menu className="h-5 w-5" aria-hidden="true" />
                        )}
                    </Button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden border-t bg-background"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {/* Mobile Navigation */}
                            <div className="space-y-2">
                                {navigation.map((item) => (
                                    <div key={item.name}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-between"
                                                    onClick={() => setServiceDropdownOpen(!serviceDropdownOpen)}
                                                    title="Browse website services"
                                                >
                                                    {item.name}
                                                    <ChevronDown className={`h-4 w-4 transition-transform ${serviceDropdownOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                                                </Button>
                                                <AnimatePresence>
                                                    {serviceDropdownOpen && (
                                                        <motion.div
                                                            initial={{ opacity: 0, height: 0 }}
                                                            animate={{ opacity: 1, height: 'auto' }}
                                                            exit={{ opacity: 0, height: 0 }}
                                                            className="ml-4 mt-2 space-y-2"
                                                        >
                                                            {services.map((service) => (
                                                                <Link
                                                                    key={service.name}
                                                                    href={service.href}
                                                                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors"
                                                                    onClick={() => setMobileMenuOpen(false)}
                                                                    title={`Browse ${service.name} templates`}
                                                                >
                                                                    <span className="text-lg">{service.icon}</span>
                                                                    <span className="text-sm">{service.name}</span>
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        ) : (
                                            <Link href={item.href}>
                                                <Button
                                                    variant="ghost"
                                                    className="w-full justify-start"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                    title={item.name === 'Pricing' ? 'View our pricing packages' : `Go to ${item.name}`}
                                                >
                                                    {item.name}
                                                </Button>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                            <div className="pt-4 border-t">
                                <Link href="mailto:contact@codestamstore.com?subject=Event%20Management%20Inquiry">
                                    <Button
                                        className="w-full"
                                        onClick={() => setMobileMenuOpen(false)}
                                        title="Contact us about your event"
                                    >
                                        <MessageSquare className="h-4 w-4 mr-2" aria-hidden="true" />
                                        Get Proposal
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
