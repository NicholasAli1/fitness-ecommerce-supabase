import React from "react";

const LegalPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16">
      <h1 className="text-4xl font-bold mb-12">Terms of Use</h1>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using My Fitness AI's website and services, you
            agree to be bound by these Terms of Use, our Privacy Policy, and any
            other guidelines or policies we may publish from time to time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            2. Service Description
          </h2>
          <p className="text-gray-600 leading-relaxed">
            My Fitness AI provides AI-powered fitness training and equipment
            services. While we strive to ensure the accuracy of our AI
            recommendations, they should not be considered as professional
            medical advice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities that occur under your
            account. You must immediately notify us of any unauthorized use of
            your account.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">4. Payment Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            All purchases are final and non-refundable unless otherwise
            specified. Subscription fees are billed in advance on a recurring
            basis. You may cancel your subscription at any time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">5. Privacy Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            Your privacy is important to us. Please review our Privacy Policy to
            understand how we collect, use, and protect your personal
            information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">
            6. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            My Fitness AI and its affiliates shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages
            arising out of or relating to your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to modify these terms at any time. Continued
            use of our services after such modifications constitutes acceptance
            of the updated terms.
          </p>
        </section>

        <div className="mt-12 p-6 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-sm">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-gray-600 text-sm mt-2">
            For questions about these terms, please contact us at
            legal@myfitnessai.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalPage;
