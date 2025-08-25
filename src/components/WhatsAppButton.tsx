const WhatsAppButton = () => {
  const whatsappNumbers = [
    "917075699278", // Sales Team
    "917075699279", // Technical Support  
    "917075699280", // Customer Service
  ];
  
  const message = "Hi! I'm interested in your technical services. Could you please provide more information?";
  
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp chat for all numbers
    whatsappNumbers.forEach((phoneNumber, index) => {
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
      // Add small delay between opens to prevent browser blocking
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, index * 500);
    });
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 hover:scale-110 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce rounded-full p-3"
      aria-label="Contact us on WhatsApp"
      title="Send message to our team"
    >
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 24 24" 
        fill="white"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.56-.01-.188 0-.495.074-.754.371-.26.297-.99.968-.99 2.36 0 1.393.99 2.737 1.128 2.925.139.188 1.943 2.97 4.708 4.165.658.285 1.172.456 1.572.583.661.21 1.263.18 1.738.109.53-.079 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2.546 20.2a.5.5 0 0 0 .635.635l3.032-.892A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
      </svg>
    </button>
  );
};

export default WhatsAppButton;
