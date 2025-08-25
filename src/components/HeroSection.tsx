import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-tech-primary/10 via-transparent to-tech-accent/10" />
      
      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          FRDS TECH
          <span className="block bg-gradient-to-r from-white to-tech-accent bg-clip-text text-transparent">
            Technical Services
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Expert solutions for all your technology needs. From hardware repairs to software installations, 
          we deliver reliable and efficient technical support.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            variant="secondary"
            onClick={scrollToContact}
            className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 shadow-glow"
          >
            Get Started
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            View Services
          </Button>
        </div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-tech-accent/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-tech-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
    </section>
  );
};

export default HeroSection;
