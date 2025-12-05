const OurPolicy = () => {
  const policies = [
    {
      title: "Privacy Policy",
      description:
        "We respect your privacy and ensure your data is secure. We do not share your personal information without consent.",
    },
    {
      title: "Terms of Service",
      description:
        "By using our services, you agree to comply with our terms and conditions, ensuring a safe and fair experience for all users.",
    },
    {
      title: "Refund Policy",
      description:
        "Our refund policy is straightforward: if you are not satisfied with our services, contact us within 30 days for a resolution.",
    },
  ];

  return (
    <main className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-[#F26D52] text-center mb-10">
          Our Policy
        </h1>

        <div className="space-y-8">
          {policies.map((policy, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {policy.title}
              </h2>
              <p className="text-gray-600">{policy.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurPolicy;
