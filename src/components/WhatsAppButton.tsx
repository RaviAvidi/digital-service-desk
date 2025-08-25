import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Get stored member phone numbers from localStorage
  const getStoredMembers = () => {
    const stored = localStorage.getItem('whatsapp-members');
    return stored ? JSON.parse(stored) : ['917075699278', '919059084900', '919948238375'];
  };
  
  const message = "Hi! I'm interested in your technical services. Could you please provide more information?";
  
  const handleWhatsAppClick = () => {
    const members = getStoredMembers();
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp chat for each member who has a phone number
    members.forEach((phoneNumber: string, index: number) => {
      if (phoneNumber.trim()) {
        // Remove any non-numeric characters except +
        const cleanPhone = phoneNumber.replace(/[^\d+]/g, '');
        const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
        
        // Add slight delay between opening multiple tabs
        setTimeout(() => {
          window.open(whatsappUrl, '_blank');
        }, index * 200);
      }
    });
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-whatsapp to-whatsapp-dark hover:from-whatsapp-dark hover:to-whatsapp hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce rounded-full p-3 border-2 border-white/20"
      aria-label="Contact WhatsApp Team"
      title="Send message to our team members"
    >
      <MessageCircle 
        className="w-8 h-8 text-white"
        fill="currentColor"
      />
    </button>
  );
};

export default WhatsAppButton;
