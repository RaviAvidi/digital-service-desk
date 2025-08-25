import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  // Replace with your actual WhatsApp community invite link
  const whatsappCommunityLink = "https://chat.whatsapp.com/invite/GZL4EAFv58LEzHHphKtNxA";
  
  const message = "Hi! I'm interested in your technical services. Could you please provide more information?";
  
  const handleWhatsAppClick = () => {
    // Open WhatsApp community with pre-filled message
    const encodedMessage = encodeURIComponent(message);
    const communityUrl = `${whatsappCommunityLink}?text=${encodedMessage}`;
    window.open(communityUrl, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-gradient-to-br from-whatsapp to-whatsapp-dark hover:from-whatsapp-dark hover:to-whatsapp hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce rounded-full p-3 border-2 border-white/20"
      aria-label="Join our WhatsApp Community"
      title="Join our technical services community"
    >
      <MessageCircle 
        className="w-8 h-8 text-white"
        fill="currentColor"
      />
    </button>
  );
};

export default WhatsAppButton;
