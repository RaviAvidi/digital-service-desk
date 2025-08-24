import { Card, CardContent } from "@/components/ui/card";
import { Monitor, HardDrive, Database, Download } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Client & Server",
    description: "Complete network setup, server configuration, and client-server architecture solutions for seamless connectivity and optimal performance.",
    features: ["Network Configuration", "Server Setup", "Remote Support", "System Integration"]
  },
  {
    icon: HardDrive,
    title: "Hardware",
    description: "Professional hardware diagnosis, repair, and upgrade services. From component replacement to performance optimization.",
    features: ["Hardware Diagnosis", "Component Repair", "System Upgrades", "Performance Tuning"]
  },
  {
    icon: Database,
    title: "Data Recovery",
    description: "Expert data recovery services for lost, corrupted, or damaged files. Safe and secure recovery with maximum data integrity.",
    features: ["File Recovery", "Drive Restoration", "Data Migration", "Backup Solutions"]
  },
  {
    icon: Download,
    title: "Software Installation",
    description: "Professional software installation, configuration, and optimization. Ensuring compatibility and peak performance for all applications.",
    features: ["System Installation", "Application Setup", "Driver Updates", "Software Configuration"]
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Technical Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions delivered by experienced professionals. 
            We handle everything from basic installations to complex system integrations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-tech transition-all duration-300 border-0 bg-white hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-tech-accent rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;