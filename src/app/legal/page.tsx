import React from "react";

const LegalPage = () => {
  return (
    <div className="min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-15rem)] px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-16">
      <h1 className="text-4xl font-bold mb-8">Terms of Use</h1>
      <p className="text-gray-600 mb-8">
        Effective Date: {new Date().toLocaleDateString()}
      </p>

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
            medical advice. Always consult a qualified healthcare professional
            before starting any fitness program or making significant changes to
            your exercise routine.
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

        <section>
          <h2 className="text-2xl font-semibold mb-4">8. Children’s Access</h2>
          <p className="text-gray-600 leading-relaxed">
            Our website and services are not intended for children under the age
            of 13. By using our services, you represent that you are at least 13
            years old, or, if under the age of 18, that you have the consent of
            a parent or legal guardian to use the services. If we learn that a
            child under 13 has provided us with personal information, we will
            promptly delete such information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">9. User Content</h2>
          <p className="text-gray-600 leading-relaxed">
            You are responsible for any content you post on our website. By
            posting content, you grant My Fitness AI a non-exclusive, worldwide,
            royalty-free license to use, reproduce, and distribute your content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
          <p className="text-gray-600 leading-relaxed">
            We may terminate your access to our services at any time, for any
            reason, without notice.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">11. Entire Agreement</h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms of Use constitute the entire agreement between you and
            My Fitness AI regarding your use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">12. Governing Law</h2>
          <p className="text-gray-600 leading-relaxed">
            These Terms of Use shall be governed by and construed in accordance
            with the laws of the jurisdiction in which you reside. Any disputes
            arising out of or related to these Terms of Use shall be subject to
            the exclusive jurisdiction of the courts located in your
            jurisdiction.
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
