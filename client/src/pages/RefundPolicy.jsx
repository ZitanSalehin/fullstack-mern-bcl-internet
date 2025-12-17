const RefundPolicy = () => {
  return (
    <main className="bg-gray-50 py-16 px-6 md:px-20">
      {/* Page Title */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#00719C] mb-4">
          Refund & Cancellation Policy
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Please read our refund, cancellation, and payment rules to understand
          how BCL Online Service manages billing and service termination.
        </p>
      </div>

      {/* Main Policy Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-100 space-y-8">
        {/* Section 1 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00719C] mb-3">
            1. Service Activation
          </h2>
          <p className="text-gray-700 leading-relaxed">
            All services provided by BCL ONLINE SERVICE are activated after the
            payment is confirmed. Activation time may vary based on the
            customer's location and availability of technical resources.
          </p>
        </section>

        {/* Section 2 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00719C] mb-3">
            2. Refund Eligibility
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>
              Refund is applicable only if the service cannot be delivered by
              our team.
            </li>
            <li>
              No refund is applicable after the service has been installed or
              activated.
            </li>
            <li>
              Installation charges, equipment costs, and processing fees are
              non-refundable.
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00719C] mb-3">
            3. Cancellation Policy
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Customers may cancel their service request before installation
            completion. After installation, the service will be considered
            active and non-refundable.
          </p>
        </section>

        {/* Section 4 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00719C] mb-3">
            4. Billing & Payments
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>All payments must be cleared before service activation.</li>
            <li>
              Monthly invoices must be paid before the due date to avoid service
              interruption.
            </li>
            <li>
              Late payments may result in temporary disconnection without prior
              notice.
            </li>
          </ul>
        </section>

        {/* Section 5 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00719C] mb-3">
            5. Non-Refundable Items
          </h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            <li>Installation charges</li>
            <li>Fiber optic cable cost</li>
            <li>ONU/router device charges</li>
            <li>Service visit charges</li>
            <li>Any special promotional package fees</li>
          </ul>
        </section>

        {/* Section 6 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00719C] mb-3">
            6. Service Disconnection
          </h2>
          <p className="text-gray-700 leading-relaxed">
            If a customer requests service termination, all outstanding dues
            must be cleared. Failure to pay pending bills may result in
            permanent service disconnection.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-2xl font-semibold text-[#00719C] mb-3">
            7. Contact for Refund or Billing Support
          </h2>
          <p className="text-gray-700">
            For billing, payment verification, or refund support, please
            contact:
          </p>

          <div className="mt-4 p-4 bg-gray-50 border rounded-xl text-gray-700">
            <p>
              <strong>TNT:</strong> +8809639001133
            </p>
            <p>
              <strong>Mobile:</strong> 01971497025, 01971497026, 01971497023
            </p>
            <p>
              <strong>Email:</strong> info@bclonline.net
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default RefundPolicy;
