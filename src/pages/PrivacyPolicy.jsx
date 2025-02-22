import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">Privacy Policy</h1>

        <section className="space-y-8">
          <div className="bg-white rounded-lg shadow-xl p-6 mb-8 transition-all hover:shadow-2xl">
            <p className="text-lg text-gray-800">
              Solution Provider website is owned by Solution Provider, which is a data controller of your personal data.
            </p>
            <p className="text-lg text-gray-800 mt-4">
              We have adopted this Privacy Policy, which determines how we are processing the information collected by Solution Provider, which also provides the reasons why we must collect certain personal data about you. Therefore, you must read this Privacy Policy before using Solution Provider website.
            </p>
            <p className="text-lg text-gray-800 mt-4">
              We take care of your personal data and undertake to guarantee its confidentiality and security.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 mb-8 transition-all hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Personal information we collect:</h2>
            <p className="text-lg text-gray-800">
              When you visit the Solution Provider, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the installed cookies on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products you view, what websites or search terms referred you to the Site, and how you interact with the Site. We refer to this automatically-collected information as “Device Information.” Moreover, we might collect the personal data you provide to us (including but not limited to Name, Surname, Address, payment information, etc.) during registration to be able to fulfill the agreement.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 mb-8 transition-all hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why do we process your data?</h2>
            <p className="text-lg text-gray-800">
              Our top priority is customer data security, and, as such, we may process only minimal user data, only as much as it is absolutely necessary to maintain the website. Information collected automatically is used only to identify potential cases of abuse and establish statistical information regarding website usage. This statistical information is not otherwise aggregated in such a way that it would identify any particular user of the system.
            </p>
            <p className="text-lg text-gray-800 mt-4">
              You can visit the website without telling us who you are or revealing any information, by which someone could identify you as a specific, identifiable individual. If, however, you wish to use some of the website’s features, or you wish to receive our newsletter or provide other details by filling a form, you may provide personal data to us, such as your email, first name, last name, city of residence, organization, telephone number. You can choose not to provide us with your personal data, but then you may not be able to take advantage of some of the website’s features.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 mb-8 transition-all hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your rights:</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-800">
              <li>The right to be informed.</li>
              <li>The right of access.</li>
              <li>The right to rectification.</li>
              <li>The right to erasure.</li>
              <li>The right to restrict processing.</li>
              <li>The right to data portability.</li>
              <li>The right to object.</li>
              <li>Rights in relation to automated decision-making and profiling.</li>
            </ul>
            <p className="text-lg text-gray-800 mt-4">
              If you would like to exercise these rights, please contact us through the contact information below.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 mb-8 transition-all hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Links to other websites:</h2>
            <p className="text-lg text-gray-800">
              Our website may contain links to other websites that are not owned or controlled by us. Please be aware that we are not responsible for such other websites or third parties' privacy practices. We encourage you to be aware when you leave our website and read the privacy statements of each website that may collect personal information.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 mb-8 transition-all hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Information security:</h2>
            <p className="text-lg text-gray-800">
              We secure information you provide on computer servers in a controlled, secure environment, protected from unauthorized access, use, or disclosure. We keep reasonable administrative, technical, and physical safeguards to protect against unauthorized access, use, modification, and personal data disclosure in its control and custody. However, no data transmission over the Internet or wireless network can be guaranteed.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 mb-8 transition-all hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Legal disclosure:</h2>
            <p className="text-lg text-gray-800">
              We will disclose any information we collect, use or receive if required or permitted by law, such as to comply with a subpoena or similar legal process, and when we believe in good faith that disclosure is necessary to protect our rights, protect your safety or the safety of others, investigate fraud, or respond to a government request.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-xl p-6 mb-8 transition-all hover:shadow-2xl">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact information:</h2>
            <p className="text-lg text-gray-800">
              If you would like to contact us to understand more about this Policy or wish to contact us concerning any matter relating to individual rights and your Personal Information, you may send an email to{' '}
              <a href="mailto:solution.provider.desk@gmail.com" className="text-indigo-600 hover:underline">solution.provider.desk@gmail.com</a>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
