import React from 'react';
import DaoSection from "../components/dao/daoSection";

const TermsSection = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-xl md:text-2xl font-semibold mb-4">{title}</h2>
    <div className="space-y-3 ">{children}</div>
  </div>
);

export default function Terms() {
  return (
    <div className="min-h-screen text-white " style={{textAlign:"justify "}}>
        <div className="max-w-4xl mx-auto px-4 pt-4 pb-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Legal Disclaimer</h1>
          <p className="text-gray-600 mb-8">Last updated on October 28, 2024.</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="mb-6">
              Please read this disclaimer carefully before using https://lamproslabs.io (hereinafter referred to as the "Website", and the services offered therein as "Our Services").
            </p>
            
            <p className="mb-6">
              The terms of use of the Website contained herein (the "Terms of Use") are entered into by and between the Website user ("You") and Lumos Fintech LTD (hereinafter referred to as the "Foundation" or "We/Our/Us").
            </p>

            <TermsSection title="Acceptance of Terms">
              <p>
                By using the Website and clicking past this legal disclaimer page, you confirm that you accept this legal disclaimer, the Terms of Use and agree to comply. If you do not agree, you must not use the Website.
              </p>
            </TermsSection>

            <TermsSection title="User Representations">
              <p>You represent and warrant that you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>are of legal age to form a binding contract;</li>
                <li>have not been previously suspended or removed from using Our Services;</li>
                <li>have full power and authority to enter into this agreement with Lumos Fintech LTD, and in doing so will not violate any other agreement to which you are a party.</li>
              </ul>
            </TermsSection>

            <TermsSection title="Legal Entity Representatives">
              <p>If you are registering to use Our Services on behalf of a legal entity, you further represent and warrant that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>such legal entity is duly organized and validly existing under the applicable laws of the jurisdiction of its organization;</li>
                <li>you are duly authorized by such legal entity to act on its behalf.</li>
              </ul>
            </TermsSection>

            <TermsSection title="Information and Advice Disclaimer">
              <p>The information provided on the Website is for informational purposes and does not constitute investment advice, financial legal, regulatory, accounting, tax or similar advice, and You should not treat any of the Website's content as such.</p>
            </TermsSection>

            <TermsSection title="Usage Restrictions">
              <p>By accessing or using the Website or Our Services, you confirm and agree that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>you are not currently residing in restricted jurisdictions (including Afghanistan, Belarus, etc.);</li>
                <li>your access to and use of the Website and Our Services is lawful in your country of residence.</li>
              </ul>
            </TermsSection>

            <TermsSection title="Investment Risks">
              <p>The investment in cryptocurrencies involves a high degree of risk and can lead to loss of money and prices having large range fluctuations. The information published on the Website cannot and does not guarantee that amounts invested will not be lost.</p>
            </TermsSection>

            <TermsSection title="Security">
              <p>Security audits don't eliminate risks completely. The Website is not guaranteed to be secure or free from bugs or viruses.</p>
            </TermsSection>

            <TermsSection title="Limitation of Liability">
              <p>To the fullest extent allowed by applicable law, in no event shall the owners of, or contributors to, the Website be liable for any damages of any kind, including, but not limited to, indirect, special, incidental, punitive, or consequential damages.</p>
            </TermsSection>

            <TermsSection title="Arbitration">
              <p>Except for disputes related to intellectual property, any dispute shall be finally resolved by binding arbitration by the Judicial Arbitration and Mediation Services (JAMS) pursuant to its Comprehensive Arbitration Rules and Procedures.</p>
            </TermsSection>

            <TermsSection title="Changes">
              <p>We may revise and update the Terms of Use in this Legal Disclaimer from time to time in Our sole discretion and without notice. All changes are effective immediately when We post them.</p>
            </TermsSection>

            <TermsSection title="Third-Party Services">
              <p>We may employ third party companies to facilitate the Wallet integration with Our Services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>For WalletConnect, please consult their privacy policy</li>
                <li>For Coinbase Wallet, please consult their legal agreements</li>
                <li>For (Gnosis) Safe, please consult their privacy policy</li>
              </ul>
            </TermsSection>

            <TermsSection title="Intellectual Property Rights">
              <p>The Website and its entire contents are owned by the Foundation and its licensors and affiliates, and are protected by United States and international copyright, trademark, and other intellectual property laws.</p>
            </TermsSection>
          </div>
        </div>
    </div>
  );
}