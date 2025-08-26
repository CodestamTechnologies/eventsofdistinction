import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, MapPin, Users, Award, BookOpen, Heart, Shield, Target, Globe, Phone, Mail, Facebook, Instagram, Twitter, Star, TrendingUp, Flag, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/landing/navbar";

export default function ABVPDarbhangaPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background to-muted/20">
            <Navbar />
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://maxm-imggenurl.web.val.run/ABVP+student+organization+hero+banner+with+Indian+flag+and+students+in+traditional+attire+celebrating+unity+and+education+with+dynamic+lighting+and+enthusiasm"
                        alt="ABVP Darbhanga Hero"
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
                    <div className="mb-8">
                        <img
                            src="https://abvp.org/sites/abvp.org/themes/abvp3/abvp-logo-v2.svg"
                            alt="ABVP Logo"
                            className="w-32 h-32 mx-auto mb-6 filter brightness-0 invert"
                        />
                    </div>
                    <Badge variant="secondary" className="mb-6 bg-primary text-primary-foreground text-lg px-6 py-2">
                        Akhil Bharatiya Vidyarthi Parishad
                    </Badge>
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-primary to-destructive bg-clip-text text-transparent">
                        ABVP Darbhanga
                    </h1>
                    <p className="text-2xl md:text-3xl mb-8 text-muted-foreground font-medium">
                        Empowering Students, Building Nation, Serving Society
                    </p>
                    <p className="text-lg md:text-xl mb-12 text-muted-foreground/80 max-w-3xl mx-auto">
                        India&apos;s largest student organization dedicated to nation-building through student empowerment,
                        cultural preservation, and social service initiatives.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="lg" className="text-lg px-8 py-4">
                            Join Our Mission
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                            Learn More
                        </Button>
                        <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="py-16 px-4 bg-card">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-primary mb-2">15,000+</div>
                            <div className="text-muted-foreground">Active Members</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50+</div>
                            <div className="text-muted-foreground">Colleges Covered</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">200+</div>
                            <div className="text-muted-foreground">Events Annually</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">25+</div>
                            <div className="text-muted-foreground">Years of Service</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-muted/30 to-muted/50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://abvp.org/sites/abvp.org/themes/abvp3/abvp-logo-v2.svg"
                                alt="ABVP Logo"
                                className="w-24 h-24"
                            />
                        </div>
                        <h2 className="text-5xl font-bold mb-6">About ABVP Darbhanga</h2>
                        <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                            Akhil Bharatiya Vidyarthi Parishad (ABVP) is India&apos;s largest student organization,
                            established in 1948. Our Darbhanga unit has been serving the student community since 1998,
                            dedicated to nation-building through student empowerment and social service.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-primary/10 rounded-xl">
                                    <Target className="w-8 h-8 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        To develop students into responsible citizens who contribute positively to society
                                        while preserving and promoting Indian culture and values. We strive to create
                                        leaders who will shape the future of our nation.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-blue-500/10 rounded-xl">
                                    <Heart className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Our Values</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Unity, Discipline, Service, and Excellence - the core principles that guide
                                        every activity and decision of ABVP Darbhanga. We believe in the power of
                                        collective action and individual responsibility.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-green-500/10 rounded-xl">
                                    <Globe className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        A strong, united, and prosperous India where every student has the opportunity
                                        to excel and contribute to national development. We envision a future where
                                        education empowers and unites.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src="https://maxm-imggenurl.web.val.run/ABVP+students+discussing+and+planning+activities+in+a+meeting+room+with+Indian+flag+and+educational+materials+showing+serious+discussion+and+planning"
                                alt="ABVP Students Meeting"
                                className="rounded-2xl shadow-2xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* History Section */}
            <section className="py-20 px-4 bg-card">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">Our Journey</h2>
                        <p className="text-xl text-muted-foreground">
                            A legacy of service and leadership spanning over two decades
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                                    <Flag className="w-8 h-8 text-primary" />
                                </div>
                                <CardTitle className="text-2xl">1998 - Foundation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    ABVP Darbhanga was established with the vision of uniting students across
                                    various colleges and universities in the region. Started with just 50 members
                                    from 3 colleges.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <TrendingUp className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                                </div>
                                <CardTitle className="text-2xl">2005 - Expansion</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Significant growth phase with membership expanding to 15 colleges and 2000+
                                    active members. Established strong presence in rural areas.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="w-16 h-16 bg-green-500/10 rounded-xl flex items-center justify-center mb-4">
                                    <Star className="w-8 h-8 text-green-600 dark:text-green-400" />
                                </div>
                                <CardTitle className="text-2xl">2024 - Excellence</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    Today, ABVP Darbhanga stands as the most influential student organization
                                    in Bihar with 15,000+ members across 50+ institutions.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Activities Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-muted/20 to-muted/40">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">Our Activities</h2>
                        <p className="text-xl text-muted-foreground">
                            Comprehensive programs and initiatives that shape the future of our students and society
                        </p>
                    </div>

                    <Tabs defaultValue="educational" className="w-full">
                        <TabsList className="grid w-full grid-cols-6 mb-12">
                            <TabsTrigger value="educational">Educational</TabsTrigger>
                            <TabsTrigger value="social">Social Service</TabsTrigger>
                            <TabsTrigger value="cultural">Cultural</TabsTrigger>
                            <TabsTrigger value="leadership">Leadership</TabsTrigger>
                            <TabsTrigger value="sports">Sports</TabsTrigger>
                            <TabsTrigger value="events">Events</TabsTrigger>
                        </TabsList>

                        <TabsContent value="educational" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">Educational Programs</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Study Circles</h4>
                                                <p className="text-gray-600">Regular study sessions and group discussions on various subjects</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Career Guidance</h4>
                                                <p className="text-gray-600">Expert counseling on career choices and professional development</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Competitive Exam Prep</h4>
                                                <p className="text-gray-600">Specialized coaching for UPSC, BPSC, and other competitive exams</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Skill Development</h4>
                                                <p className="text-gray-600">Workshops on communication, technology, and soft skills</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://maxm-imggenurl.web.val.run/students+studying+together+in+a+library+with+books+and+educational+materials+showing+intense+study+session"
                                        alt="Educational Programs"
                                        className="rounded-2xl shadow-xl"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="social" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">Social Service Initiatives</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Blood Donation Camps</h4>
                                                <p className="text-gray-600">Regular blood donation drives across colleges and communities</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Tree Plantation</h4>
                                                <p className="text-gray-600">Environmental conservation through massive tree plantation drives</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Community Outreach</h4>
                                                <p className="text-gray-600">Educational support for underprivileged children</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Disaster Relief</h4>
                                                <p className="text-gray-600">Active participation in relief work during natural calamities</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://maxm-imggenurl.web.val.run/students+participating+in+social+service+activities+like+blood+donation+and+community+outreach+showing+compassion+and+dedication"
                                        alt="Social Service"
                                        className="rounded-2xl shadow-xl"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="cultural" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">Cultural Activities</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">National Festivals</h4>
                                                <p className="text-gray-600">Grand celebrations of Independence Day, Republic Day, and other national events</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Cultural Performances</h4>
                                                <p className="text-gray-600">Traditional dance, music, and drama performances</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Heritage Preservation</h4>
                                                <p className="text-gray-600">Promotion of Indian culture and traditional values</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Inter-College Competitions</h4>
                                                <p className="text-gray-600">Cultural competitions fostering unity and talent</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://maxm-imggenurl.web.val.run/students+celebrating+Indian+culture+and+festivals+with+traditional+attire+and+performances+showing+joy+and+enthusiasm"
                                        alt="Cultural Activities"
                                        className="rounded-2xl shadow-xl"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="leadership" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">Leadership Development</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Leadership Training</h4>
                                                <p className="text-gray-600">Comprehensive workshops on leadership skills and management</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Public Speaking</h4>
                                                <p className="text-gray-600">Training in oratory skills and effective communication</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Organizational Skills</h4>
                                                <p className="text-gray-600">Event management and team coordination training</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Mentorship Program</h4>
                                                <p className="text-gray-600">Senior members mentoring junior students</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://maxm-imggenurl.web.val.run/leadership+training+session+with+students+learning+public+speaking+and+organizational+skills+showing+confidence+and+growth"
                                        alt="Leadership Development"
                                        className="rounded-2xl shadow-xl"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="sports" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">Sports & Fitness</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Annual Sports Meet</h4>
                                                <p className="text-gray-600">Large-scale sports competitions across multiple disciplines</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Yoga Sessions</h4>
                                                <p className="text-gray-600">Regular yoga and meditation classes for mental well-being</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Fitness Challenges</h4>
                                                <p className="text-gray-600">Monthly fitness challenges and health awareness programs</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Team Building</h4>
                                                <p className="text-gray-600">Sports activities fostering team spirit and camaraderie</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://maxm-imggenurl.web.val.run/students+participating+in+sports+tournaments+and+fitness+activities+with+energy+and+enthusiasm+showing+team+spirit"
                                        alt="Sports & Fitness"
                                        className="rounded-2xl shadow-xl"
                                    />
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="events" className="space-y-8">
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h3 className="text-3xl font-bold mb-6">Events & Seminars</h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">National Integration</h4>
                                                <p className="text-gray-600">Programs promoting unity in diversity and national harmony</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Awareness Campaigns</h4>
                                                <p className="text-gray-600">Social issues awareness and community education programs</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Knowledge Sharing</h4>
                                                <p className="text-gray-600">Seminars on current affairs and national development</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                                            <div>
                                                <h4 className="font-semibold">Youth Conferences</h4>
                                                <p className="text-gray-600">Annual youth conferences addressing contemporary challenges</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <img
                                        src="https://maxm-imggenurl.web.val.run/seminar+and+awareness+campaign+with+students+and+speakers+discussing+important+topics+showing+engagement+and+learning"
                                        alt="Events & Seminars"
                                        className="rounded-2xl shadow-xl"
                                    />
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Leadership Hierarchy Section */}
            <section className="py-20 px-4 bg-card">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">Our Leadership Hierarchy</h2>
                        <p className="text-xl text-muted-foreground">
                            Meet the dedicated leaders who guide ABVP Darbhanga towards excellence
                        </p>
                    </div>

                    {/* National Level */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold mb-8 text-center text-primary">National Leadership</h3>
                        <div className="grid md:grid-cols-3 gap-8">
                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-32 h-32 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+senior+Indian+leader+with+professional+appearance+and+authoritative+expression+wearing+traditional+attire" />
                                        <AvatarFallback>NS</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-2xl">Narendra Singh</CardTitle>
                                    <CardDescription className="text-primary font-semibold text-lg">
                                        National President
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Leading ABVP at the national level with over 20 years of experience in student leadership
                                        and organizational management.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-32 h-32 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+senior+Indian+leader+with+professional+appearance+and+determined+expression+wearing+formal+attire" />
                                        <AvatarFallback>RK</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-2xl">Rajesh Kumar</CardTitle>
                                    <CardDescription className="text-primary font-semibold text-lg">
                                        National General Secretary
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        Coordinating national activities and ensuring smooth operations across all state units
                                        with strategic vision and organizational skills.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-32 h-32 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+senior+Indian+leader+with+professional+appearance+and+visionary+expression+wearing+traditional+attire" />
                                        <AvatarFallback>AS</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-2xl">Amit Sharma</CardTitle>
                                    <CardDescription className="text-primary font-semibold text-lg">
                                        National Vice President
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        Supporting national leadership with innovative programs and strong community
                                        engagement initiatives across the country.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* State Level */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold mb-8 text-center text-blue-600">Bihar State Leadership</h3>
                        <div className="grid md:grid-cols-4 gap-6">
                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+leader+with+professional+appearance+and+confident+expression+wearing+formal+attire" />
                                        <AvatarFallback>VP</AvatarFallback>
                                    </Avatar>
                                    <CardTitle>Vikram Patel</CardTitle>
                                    <CardDescription className="text-blue-600 font-semibold">
                                        State President
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+woman+leader+with+professional+appearance+and+determined+expression" />
                                        <AvatarFallback>AS</AvatarFallback>
                                    </Avatar>
                                    <CardTitle>Anjali Singh</CardTitle>
                                    <CardDescription className="text-blue-600 font-semibold">
                                        State General Secretary
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+leader+with+professional+appearance+and+enthusiastic+expression" />
                                        <AvatarFallback>MK</AvatarFallback>
                                    </Avatar>
                                    <CardTitle>Mohan Kumar</CardTitle>
                                    <CardDescription className="text-blue-600 font-semibold">
                                        State Vice President
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-24 h-24 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+leader+with+professional+appearance+and+serious+expression" />
                                        <AvatarFallback>SP</AvatarFallback>
                                    </Avatar>
                                    <CardTitle>Sunil Prasad</CardTitle>
                                    <CardDescription className="text-blue-600 font-semibold">
                                        State Treasurer
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>

                    {/* District Level - Darbhanga */}
                    <div className="mb-16">
                        <h3 className="text-3xl font-bold mb-8 text-center text-green-600">Darbhanga District Leadership</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-28 h-28 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+leader+with+professional+appearance+and+confident+expression" />
                                        <AvatarFallback>AP</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-xl">Arjun Patel</CardTitle>
                                    <CardDescription className="text-green-600 font-semibold text-lg">
                                        District President
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Leading ABVP Darbhanga with vision and dedication, focusing on student empowerment
                                        and national development. Engineering student from LNMU.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-28 h-28 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+woman+student+leader+with+professional+appearance+and+determined+expression" />
                                        <AvatarFallback>PS</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-xl">Priya Sharma</CardTitle>
                                    <CardDescription className="text-green-600 font-semibold text-lg">
                                        District General Secretary
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Coordinating activities and ensuring smooth operations while promoting
                                        women&apos;s leadership in student organizations. Law student from CMLS.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-28 h-28 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+leader+with+professional+appearance+and+enthusiastic+expression" />
                                        <AvatarFallback>RK</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-xl">Rahul Kumar</CardTitle>
                                    <CardDescription className="text-green-600 font-semibold text-lg">
                                        District Vice President
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Supporting the organization&apos;s mission through innovative programs and
                                        strong community engagement initiatives. Medical student from DMCH.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-28 h-28 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+leader+with+professional+appearance+and+serious+expression" />
                                        <AvatarFallback>NS</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-xl">Nisha Singh</CardTitle>
                                    <CardDescription className="text-green-600 font-semibold text-lg">
                                        District Treasurer
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Managing financial resources and ensuring transparency in all financial
                                        operations. Commerce student from CM College.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-28 h-28 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+leader+with+professional+appearance+and+energetic+expression" />
                                        <AvatarFallback>AM</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-xl">Amit Mishra</CardTitle>
                                    <CardDescription className="text-green-600 font-semibold text-lg">
                                        District Organizing Secretary
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Organizing events and coordinating with various college units.
                                        Engineering student from MIT Darbhanga.
                                    </p>
                                </CardContent>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-28 h-28 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+leader+with+professional+appearance+and+confident+expression" />
                                        <AvatarFallback>SK</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-xl">Sneha Kumari</CardTitle>
                                    <CardDescription className="text-green-600 font-semibold text-lg">
                                        District Joint Secretary
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">
                                        Supporting general secretary in administrative tasks and member coordination.
                                        Arts student from LNMU.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* College Unit Leaders */}
                    <div>
                        <h3 className="text-3xl font-bold mb-8 text-center text-purple-600">College Unit Leaders</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-20 h-20 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+with+professional+appearance" />
                                        <AvatarFallback>AK</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-lg">Akshay Kumar</CardTitle>
                                    <CardDescription className="text-purple-600 font-semibold">
                                        LNMU President
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-20 h-20 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+woman+student+with+professional+appearance" />
                                        <AvatarFallback>RS</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-lg">Riya Sharma</CardTitle>
                                    <CardDescription className="text-purple-600 font-semibold">
                                        CMLS President
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-20 h-20 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+with+professional+appearance" />
                                        <AvatarFallback>VP</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-lg">Vikash Patel</CardTitle>
                                    <CardDescription className="text-purple-600 font-semibold">
                                        DMCH President
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-20 h-20 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+with+professional+appearance" />
                                        <AvatarFallback>MK</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-lg">Manoj Kumar</CardTitle>
                                    <CardDescription className="text-purple-600 font-semibold">
                                        CM College President
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-20 h-20 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+with+professional+appearance" />
                                        <AvatarFallback>AS</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-lg">Ankit Singh</CardTitle>
                                    <CardDescription className="text-purple-600 font-semibold">
                                        MIT President
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-20 h-20 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+woman+student+with+professional+appearance" />
                                        <AvatarFallback>PK</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-lg">Pooja Kumari</CardTitle>
                                    <CardDescription className="text-purple-600 font-semibold">
                                        Women&apos;s College President
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-20 h-20 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+with+professional+appearance" />
                                        <AvatarFallback>RP</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-lg">Rahul Prasad</CardTitle>
                                    <CardDescription className="text-purple-600 font-semibold">
                                        Science College President
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            <Card className="text-center hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <Avatar className="w-20 h-20 mx-auto mb-4">
                                        <AvatarImage src="https://maxm-imggenurl.web.val.run/portrait+of+a+young+Indian+student+with+professional+appearance" />
                                        <AvatarFallback>SM</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-lg">Saurabh Mishra</CardTitle>
                                    <CardDescription className="text-purple-600 font-semibold">
                                        Engineering College President
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">Our Achievements</h2>
                        <p className="text-xl text-gray-600">
                            Celebrating the milestones and successes that define our journey
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-orange-100 rounded-xl">
                                    <Award className="w-8 h-8 text-orange-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Best Student Organization Award</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Recognized as the most active and impactful student organization in Bihar
                                        for three consecutive years (2022-2024) by the State Education Department.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-green-100 rounded-xl">
                                    <Users className="w-8 h-8 text-green-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">15,000+ Active Members</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Successfully mobilized and engaged over 15,000 students across 50+ colleges
                                        and universities in Darbhanga and surrounding districts.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-blue-100 rounded-xl">
                                    <Heart className="w-8 h-8 text-blue-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">150+ Blood Donation Camps</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Organized more than 150 blood donation camps, contributing over 50,000 units
                                        of blood to the healthcare system and saving countless lives.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-purple-100 rounded-xl">
                                    <BookOpen className="w-8 h-8 text-purple-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Educational Excellence</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Helped 2,500+ students achieve their academic goals through mentoring,
                                        coaching, and support programs. 500+ students cleared competitive exams.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-red-100 rounded-xl">
                                    <Shield className="w-8 h-8 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Cultural Recognition</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Won 25+ awards in inter-college cultural competitions and organized
                                        100+ cultural events promoting Indian heritage and values.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="p-4 bg-yellow-100 rounded-xl">
                                    <TrendingUp className="w-8 h-8 text-yellow-600" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Leadership Development</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Trained 1,000+ students in leadership skills. 200+ alumni are now
                                        successful professionals and community leaders.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <img
                                src="https://maxm-imggenurl.web.val.run/award+ceremony+with+ABVP+students+receiving+recognition+and+appreciation+certificates+showing+pride+and+achievement"
                                alt="Award Ceremony"
                                className="rounded-2xl shadow-xl"
                            />
                            <img
                                src="https://maxm-imggenurl.web.val.run/blood+donation+camp+with+students+donating+blood+and+medical+professionals+present+showing+dedication+and+service"
                                alt="Blood Donation Camp"
                                className="rounded-2xl shadow-xl"
                            />
                            <img
                                src="https://maxm-imggenurl.web.val.run/students+celebrating+academic+success+with+certificates+and+achievement+recognition+showing+joy+and+accomplishment"
                                alt="Academic Success"
                                className="rounded-2xl shadow-xl"
                            />
                            <img
                                src="https://maxm-imggenurl.web.val.run/large+group+of+ABVP+members+participating+in+a+community+service+activity+showing+unity+and+dedication"
                                alt="Community Service"
                                className="rounded-2xl shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="py-20 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">Upcoming Events</h2>
                        <p className="text-xl text-gray-600">
                            Join us in our upcoming activities and programs
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="w-5 h-5 text-orange-600" />
                                    <span className="text-sm text-gray-500">December 15, 2024</span>
                                </div>
                                <CardTitle className="text-xl">National Integration Day</CardTitle>
                                <CardDescription>
                                    Celebrating unity in diversity with cultural programs and discussions
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src="https://maxm-imggenurl.web.val.run/national+integration+day+celebration+with+students+from+different+backgrounds+uniting+together+showing+harmony+and+unity"
                                    alt="National Integration Day"
                                    className="rounded-lg mb-4 w-full h-48 object-cover"
                                />
                                <p className="text-gray-600 mb-4">
                                    A grand celebration featuring cultural performances, discussions on national unity,
                                    and traditional food festival from different states.
                                </p>
                                <Button className="w-full">Register Now</Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="w-5 h-5 text-orange-600" />
                                    <span className="text-sm text-gray-500">December 20, 2024</span>
                                </div>
                                <CardTitle className="text-xl">Career Guidance Seminar</CardTitle>
                                <CardDescription>
                                    Expert guidance on career choices and professional development
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src="https://maxm-imggenurl.web.val.run/career+guidance+seminar+with+professionals+sharing+insights+with+students+showing+engagement+and+learning"
                                    alt="Career Guidance Seminar"
                                    className="rounded-lg mb-4 w-full h-48 object-cover"
                                />
                                <p className="text-gray-600 mb-4">
                                    Interactive session with industry experts, career counselors, and successful
                                    professionals sharing insights on various career paths.
                                </p>
                                <Button className="w-full">Register Now</Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="w-5 h-5 text-orange-600" />
                                    <span className="text-sm text-gray-500">December 25, 2024</span>
                                </div>
                                <CardTitle className="text-xl">Blood Donation Camp</CardTitle>
                                <CardDescription>
                                    Annual blood donation drive for community health
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src="https://maxm-imggenurl.web.val.run/blood+donation+camp+setup+with+medical+equipment+and+volunteers+ready+to+donate+showing+preparation+and+dedication"
                                    alt="Blood Donation Camp"
                                    className="rounded-lg mb-4 w-full h-48 object-cover"
                                />
                                <p className="text-gray-600 mb-4">
                                    Large-scale blood donation camp with medical professionals, health check-ups,
                                    and awareness programs on blood donation.
                                </p>
                                <Button className="w-full">Register Now</Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="w-5 h-5 text-orange-600" />
                                    <span className="text-sm text-gray-500">January 5, 2025</span>
                                </div>
                                <CardTitle className="text-xl">Youth Leadership Summit</CardTitle>
                                <CardDescription>
                                    Empowering young leaders for tomorrow&apos;s challenges
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src="https://maxm-imggenurl.web.val.run/youth+leadership+summit+with+young+leaders+discussing+and+planning+future+initiatives+showing+enthusiasm+and+vision"
                                    alt="Youth Leadership Summit"
                                    className="rounded-lg mb-4 w-full h-48 object-cover"
                                />
                                <p className="text-gray-600 mb-4">
                                    Three-day leadership summit with workshops, panel discussions, and networking
                                    opportunities for emerging student leaders.
                                </p>
                                <Button className="w-full">Register Now</Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="w-5 h-5 text-orange-600" />
                                    <span className="text-sm text-gray-500">January 15, 2025</span>
                                </div>
                                <CardTitle className="text-xl">Annual Sports Meet</CardTitle>
                                <CardDescription>
                                    Inter-college sports competition and fitness celebration
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src="https://maxm-imggenurl.web.val.run/annual+sports+meet+with+students+participating+in+various+sports+activities+showing+energy+and+competition"
                                    alt="Annual Sports Meet"
                                    className="rounded-lg mb-4 w-full h-48 object-cover"
                                />
                                <p className="text-gray-600 mb-4">
                                    Week-long sports festival featuring cricket, football, athletics, and indoor
                                    games with prizes and recognition for winners.
                                </p>
                                <Button className="w-full">Register Now</Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-xl transition-shadow">
                            <CardHeader>
                                <div className="flex items-center gap-3 mb-3">
                                    <Calendar className="w-5 h-5 text-orange-600" />
                                    <span className="text-sm text-gray-500">January 26, 2025</span>
                                </div>
                                <CardTitle className="text-xl">Republic Day Celebration</CardTitle>
                                <CardDescription>
                                    Grand celebration of India&apos;s Republic Day
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <img
                                    src="https://maxm-imggenurl.web.val.run/republic+day+celebration+with+students+participating+in+flag+hoisting+and+cultural+programs+showing+patriotism"
                                    alt="Republic Day Celebration"
                                    className="rounded-lg mb-4 w-full h-48 object-cover"
                                />
                                <p className="text-gray-600 mb-4">
                                    Flag hoisting ceremony, cultural performances, patriotic songs, and
                                    discussions on constitutional values and democracy.
                                </p>
                                <Button className="w-full">Register Now</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold mb-6">Get In Touch</h2>
                        <p className="text-xl text-gray-300">
                            Join ABVP Darbhanga and be part of the change
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-orange-500 rounded-xl">
                                    <MapPin className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Address</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        ABVP Darbhanga Office<br />
                                        Near LNMU Campus, Tower Chowk<br />
                                        Darbhanga, Bihar - 846004<br />
                                        India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-orange-500 rounded-xl">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Phone</h3>
                                    <p className="text-gray-300">+91 98765 43210</p>
                                    <p className="text-gray-300">+91 87654 32109</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-orange-500 rounded-xl">
                                    <Mail className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Email</h3>
                                    <p className="text-gray-300">abvpdarbhanga@gmail.com</p>
                                    <p className="text-gray-300">info@abvpdarbhanga.org</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="p-4 bg-orange-500 rounded-xl">
                                    <Clock className="w-8 h-8" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Office Hours</h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        Monday - Saturday<br />
                                        9:00 AM - 6:00 PM<br />
                                        Sunday: 10:00 AM - 2:00 PM
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <img
                                src="https://maxm-imggenurl.web.val.run/ABVP+office+building+with+students+entering+and+exiting+showing+active+participation+and+modern+facility"
                                alt="ABVP Office"
                                className="rounded-2xl shadow-xl w-full h-64 object-cover"
                            />

                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold">Follow Us</h3>
                                <div className="flex gap-4">
                                    <Button variant="outline" className="flex items-center gap-3 flex-1">
                                        <Facebook className="w-5 h-5" />
                                        Facebook
                                    </Button>
                                    <Button variant="outline" className="flex items-center gap-3 flex-1">
                                        <Instagram className="w-5 h-5" />
                                        Instagram
                                    </Button>
                                    <Button variant="outline" className="flex items-center gap-3 flex-1">
                                        <Twitter className="w-5 h-5" />
                                        Twitter
                                    </Button>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-2xl font-semibold">Quick Links</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <Button variant="outline" className="justify-start">
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        Join ABVP
                                    </Button>
                                    <Button variant="outline" className="justify-start">
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        Events Calendar
                                    </Button>
                                    <Button variant="outline" className="justify-start">
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        Photo Gallery
                                    </Button>
                                    <Button variant="outline" className="justify-start">
                                        <ArrowRight className="w-4 h-4 mr-2" />
                                        Contact Form
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-16 px-4 bg-slate-900 text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-4 gap-8 mb-12">
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src="https://abvp.org/sites/abvp.org/themes/abvp3/abvp-logo-v2.svg"
                                    alt="ABVP Logo"
                                    className="w-16 h-16 filter brightness-0 invert"
                                />
                                <h3 className="text-2xl font-bold">ABVP Darbhanga</h3>
                            </div>
                            <p className="text-gray-300 leading-relaxed">
                                Empowering students, building character, and serving the nation through
                                education, culture, and social service since 1998.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Our Activities</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Leadership</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Events</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Activities</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li><a href="#" className="hover:text-white transition-colors">Educational Programs</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Social Service</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Cultural Events</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Sports & Fitness</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Leadership Training</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
                            <ul className="space-y-2 text-gray-300">
                                <li>Near LNMU Campus</li>
                                <li>Darbhanga, Bihar - 846004</li>
                                <li>Phone: +91 98765 43210</li>
                                <li>Email: abvpdarbhanga@gmail.com</li>
                            </ul>
                        </div>
                    </div>

                    <Separator className="mb-8" />

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400">
                            © 2024 ABVP Darbhanga. All rights reserved.
                        </p>
                        <div className="flex gap-6 text-gray-400">
                            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
                            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
                            <span className="hover:text-white transition-colors cursor-pointer">Contact Us</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
