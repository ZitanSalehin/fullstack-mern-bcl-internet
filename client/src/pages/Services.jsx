const Services = () => {
  const services = [
    {
      title: "High-Speed Home Internet",
      desc: `We provide high-speed fiber optic internet designed for smooth browsing, 
      HD streaming, online gaming, and reliable work-from-home experiences. 
      Our network is built with redundancy to ensure minimal downtime 
      and consistent performance for households across Bangladesh.`,
      icon: "📶",
    },
    {
      title: "Corporate Internet Solutions",
      desc: `Our corporate connections come with static IP support, dedicated 
      bandwidth, guaranteed uptime, and 24/7 priority business support. 
      We design stable, secure and scalable connectivity for banks, 
      enterprises, SMEs, educational institutions, and government offices.`,
      icon: "🏢",
    },
    {
      title: "Network Security & Cyber Protection",
      desc: `We implement next-level cybersecurity solutions including firewalls, 
      secure VPN tunnels, intrusion prevention systems, DDoS protection, 
      and enterprise-grade network monitoring to safeguard critical data 
      and infrastructure.`,
      icon: "🛡️",
    },
    {
      title: "Hosting & Web Development",
      desc: `We offer domain registration, SSD web hosting, cloud storage, and modern 
      website development services. Our team builds optimized and secure 
      websites tailored for businesses, e-commerce stores, and organizations.`,
      icon: "🌐",
    },
    {
      title: "IP Telephony (VoIP)",
      desc: `Our IP telephony solutions help organizations improve communication with 
      crystal-clear voice quality, call routing, IVR setup, call monitoring, 
      and scalable multi-branch connectivity.`,
      icon: "☎️",
    },
    {
      title: "Dedicated Customer Support",
      desc: `Our customer support team is available 24/7 through hotline, live chat, 
      email, and physical service points. We ensure timely responses, on-site 
      assistance, and guaranteed issue resolution.`,
      icon: "🤝",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-[#00719c]">
          Our Services
        </h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          We offer reliable internet, modern digital solutions, and
          industry-leading customer service to ensure seamless connectivity for
          both home and business users.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition p-8 flex flex-col items-center text-center"
          >
            <div className="text-5xl mb-4">{item.icon}</div>

            <h3 className="text-xl font-semibold text-[#00719c] mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
