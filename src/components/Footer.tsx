const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              Technical Services
            </h3>
            <p className="text-white/80 leading-relaxed">
              Professional technical solutions for all your technology needs. 
              Reliable, efficient, and expert support you can trust.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Client & Server Solutions</li>
              <li>Hardware Repair & Upgrade</li>
              <li>Data Recovery Services</li>
              <li>Software Installation & Setup</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-white/80">
              <p>raviavidi933@gmail.com</p>
              <p>Professional Technical Support</p>
              <p>Available for Remote & On-site Service</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
          <p>&copy; 2024 Technical Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;