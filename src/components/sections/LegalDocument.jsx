import React, { useEffect } from 'react';

const LegalDocument = ({ type, onClose }) => {
  
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const getHeaderTitle = () => {
    switch (type) {
      case 'privacy': return 'Privacy Policy';
      case 'terms': return 'Terms and Conditions';
      case 'cookie': return 'Cookie Policy';
      default: return 'Legal Registry';
    }
  };

  const getAccentColorClass = () => {
    switch (type) {
      case 'privacy': return 'from-orange-500 via-orange-600 to-red-500';
      case 'terms': return 'from-red-500 via-red-600 to-orange-500';
      case 'cookie': return 'from-cyan-400 via-cyan-500 to-blue-500';
      default: return 'from-orange-500 via-red-500 to-cyan-400';
    }
  };

  const getDotColorClass = () => {
    switch (type) {
      case 'privacy': return 'bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,1)]';
      case 'terms': return 'bg-red-500 shadow-[0_0_8px_rgba(239,68,68,1)]';
      case 'cookie': return 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)]';
      default: return 'bg-orange-500';
    }
  };

  const getShadowClass = () => {
    switch (type) {
      case 'privacy': return 'shadow-[0_0_50px_rgba(249,115,22,0.15)]';
      case 'terms': return 'shadow-[0_0_50px_rgba(239,68,68,0.15)]';
      case 'cookie': return 'shadow-[0_0_50px_rgba(34,211,238,0.15)]';
      default: return 'shadow-[0_0_50px_rgba(249,115,22,0.15)]';
    }
  };

  const getScrollbarClass = () => {
    switch (type) {
      case 'privacy': return 'scrollbar-thumb-orange-500/20';
      case 'terms': return 'scrollbar-thumb-red-500/20';
      case 'cookie': return 'scrollbar-thumb-cyan-500/20';
      default: return 'scrollbar-thumb-orange-500/20';
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[150] flex items-center justify-center p-4 md:p-6 bg-black/60 backdrop-blur-[3px] animate-fade-in pointer-events-auto"
      onClick={onClose}
    >
      {/* Modal Container */}
      <div 
        className={`relative w-full max-w-4xl h-[85vh] md:h-[80vh] bg-[#060b17]/95 border border-white/10 rounded-3xl ${getShadowClass()} flex flex-col overflow-hidden animate-scale-up pointer-events-auto`}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Top Glow Accent Bar */}
        <div className={`h-[3px] w-full bg-gradient-to-r ${getAccentColorClass()}`}></div>

        {/* Header Section */}
        <div className="p-6 md:p-8 border-b border-white/5 flex items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <span className={`w-2 h-2 rounded-full ${getDotColorClass()} animate-pulse`}></span>
              <span className="text-[10px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.25em]">Transmission Protocol</span>
            </div>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-wider">
              {getHeaderTitle()}
            </h2>
          </div>

          {/* Close Button */}
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-red-500 hover:bg-red-500/20 transition-all duration-300 group cursor-pointer flex-shrink-0"
            aria-label="Close registry"
          >
            <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className={`flex-1 overflow-y-auto p-6 md:p-8 space-y-6 text-sm text-gray-300 leading-relaxed scrollbar-thin ${getScrollbarClass()} scrollbar-track-transparent`}>
          
          {type === 'privacy' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-black text-lg md:text-xl tracking-wide border-b border-white/5 pb-2 mb-2 uppercase">Privacy Policy</h3>
                <p className="text-[10px] md:text-xs text-orange-500 uppercase tracking-widest font-semibold">Last updated: July 28, 2026</p>
              </div>

              <p>
                This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
              </p>

              <p>
                We use Your Personal Data to provide and improve the Service. We collect, use, and disclose Your information as described in this Privacy Policy and, where required by applicable law, only where We have a valid legal basis to do so, including Your consent (where consent is required).
              </p>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-orange-500/40 pl-3">// 1.0 Interpretation and Definitions</h4>
                <div className="space-y-3">
                  <h5 className="text-white font-bold text-sm">Interpretation</h5>
                  <p>
                    The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                  
                  <h5 className="text-white font-bold text-sm mt-4">Definitions</h5>
                  <p>For the purposes of this Privacy Policy:</p>
                  <ul className="space-y-3 text-gray-400 list-none pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Account</strong> means a unique account created for You to access Our Service or parts of Our Service.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Privacy Policy) refers to Signalive, 650 Market St, San Francisco, CA 94102, USA.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any other device by a website, containing the details of Your browsing history on that website, among its many uses.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Country/State</strong> refers to: California, United States.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Device</strong> means any device that can access the Service, such as a computer, a cell phone or a digital tablet.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Personal Data</strong> (or &quot;Personal Information&quot;) is any information that relates to an identified or identifiable individual. We use &quot;Personal Data&quot; and &quot;Personal Information&quot; interchangeably unless a law uses a specific term.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Service</strong> refers to the Website.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit).</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>User</strong> means any individual who accesses or uses the Service.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>Website</strong> refers to Signalive, accessible from <a href="https://app.signalive.net" className="text-orange-400 hover:underline" target="_blank" rel="noopener noreferrer">app.signalive.net</a>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500 mt-1.5">•</span>
                      <span><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-orange-500/40 pl-3">// 2.0 Collecting and Using Your Personal Information</h4>
                <div className="space-y-3">
                  <h5 className="text-white font-bold text-sm">Types of Data Collected</h5>
                  
                  <h6 className="text-white font-semibold text-xs mt-2">// 2.1 Personal Data</h6>
                  <p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
                  <ul className="space-y-1 text-gray-400 list-none pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500">•</span>
                      <span>Email address</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500">•</span>
                      <span>First name and last name</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-orange-500">•</span>
                      <span>Phone number</span>
                    </li>
                  </ul>

                  <h6 className="text-white font-semibold text-xs mt-4">// 2.2 Usage Data</h6>
                  <p>Usage Data is collected automatically when using the Service.</p>
                  <p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of Our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
                  <p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device's unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>

                  <h6 className="text-white font-semibold text-xs mt-4">// 2.3 Tracking Technologies and Cookies</h6>
                  <p>We use Cookies and similar tracking technologies to track the activity on Our Service and store certain information. Tracking technologies We use include beacons, tags, and scripts to collect and track information and to improve and analyze Our Service.</p>
                  <p>Where required by law, We use non-essential cookies (such as analytics, advertising, and remarketing cookies) only with Your consent. You can withdraw or change Your consent at any time using Our cookie preferences tool or through Your browser settings.</p>
                  <p>We use both Session and Persistent Cookies for the purposes set out below:</p>
                  <div className="space-y-4 mt-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden">
                      <strong className="text-white block mb-1 text-xs uppercase tracking-wider">Necessary / Essential Cookies</strong>
                      <p className="text-xs text-gray-400 mb-2">Type: Session Cookies | Administered by: Us</p>
                      <p className="text-xs text-gray-400">
                        Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden">
                      <strong className="text-white block mb-1 text-xs uppercase tracking-wider">Cookies Policy / Notice Acceptance Cookies</strong>
                      <p className="text-xs text-gray-400 mb-2">Type: Persistent Cookies | Administered by: Us</p>
                      <p className="text-xs text-gray-400">
                        Purpose: These Cookies identify whether users have accepted the use of cookies on the Website.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden">
                      <strong className="text-white block mb-1 text-xs uppercase tracking-wider">Functionality Cookies</strong>
                      <p className="text-xs text-gray-400 mb-2">Type: Persistent Cookies | Administered by: Us</p>
                      <p className="text-xs text-gray-400">
                        Purpose: These Cookies allow Us to remember choices You make when You use the Website, such as remembering Your Account login details or language preference.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-orange-500/40 pl-3">// 3.0 Use of Your Personal Data</h4>
                <p>The Company may use Personal Data for the following purposes:</p>
                <ul className="space-y-2 text-gray-400 list-none pl-1">
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span><strong>To provide and maintain Our Service</strong>, including to monitor the usage of Our Service.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span><strong>To manage Your Account:</strong> to manage Your registration as a user of the Service.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span><strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span><strong>To contact You:</strong> by email, telephone calls, SMS, or push notifications.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span><strong>To provide You</strong> with news, special offers, and general information about other goods or services.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span><strong>To manage Your requests:</strong> To attend and manage Your requests to Us.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-orange-500/40 pl-3">// 4.0 Retention of Your Personal Data</h4>
                <p>
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy.
                </p>
                <ul className="space-y-2 text-gray-400 list-none pl-1">
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span><strong>User Accounts:</strong> retained for the duration of Your Account relationship plus up to 24 months after account closure.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span><strong>Customer Support Data:</strong> up to 24 months from the date of ticket closure.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-orange-500 mt-1.5">•</span>
                    <span><strong>Usage Data:</strong> up to 24 months from the date of collection.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-orange-500/40 pl-3">// 5.0 Children's and Minors' Privacy</h4>
                <p>
                  The Service is not directed to, and We do not knowingly collect Personal Information from, anyone under the age of 16. If We become aware that We have collected Personal Information from anyone under the age of 16, We will take steps to remove that information from Our servers as soon as reasonably possible.
                </p>
              </div>

              <div className="p-5 border border-white/10 rounded-2xl bg-[#0b132c]/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/10 to-transparent blur-xl rounded-full"></div>
                <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">// 6.0 Contact Us</h4>
                <p className="mb-4 text-xs text-gray-400 leading-relaxed">
                  If You have any questions about this Privacy Policy, You can contact Us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-400 font-medium">
                  <div>
                    <span className="text-orange-500 uppercase tracking-widest font-bold block mb-1 text-[10px]">Direct Uplink</span>
                    info@signalive.net
                  </div>
                  <div>
                    <span className="text-orange-500 uppercase tracking-widest font-bold block mb-1 text-[10px]">Comm-Link</span>
                    +1 (415) 555-0119
                  </div>
                </div>
              </div>
            </div>
          )}

          {type === 'terms' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-black text-lg md:text-xl tracking-wide border-b border-white/5 pb-2 mb-2 uppercase">Terms and Conditions</h3>
                <p className="text-[10px] md:text-xs text-red-500 uppercase tracking-widest font-semibold">Last updated: July 28, 2026</p>
              </div>

              <p>
                Please read these terms and conditions carefully before using Our Service.
              </p>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 1.0 Interpretation and Definitions</h4>
                <div className="space-y-3">
                  <h5 className="text-white font-bold text-sm">Interpretation</h5>
                  <p>
                    The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                  
                  <h5 className="text-white font-bold text-sm mt-4">Definitions</h5>
                  <p>For the purposes of these Terms and Conditions:</p>
                  <ul className="space-y-3 text-gray-400 list-none pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span><strong>Affiliate</strong> means an entity that controls, is controlled by, or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span><strong>Country/State</strong> refers to: California, United States</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in these Terms and Conditions) refers to signalive, 650 Market St, San Francisco, CA 94102, USA.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span><strong>Device</strong> means any device that can access the Service such as a computer, a cell phone or a digital tablet.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span><strong>Service</strong> refers to the Website.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span><strong>Terms and Conditions</strong> (also referred to as &quot;Terms&quot;) means these Terms and Conditions, including any documents expressly incorporated by reference, which govern Your access to and use of the Service and form the entire agreement between You and the Company regarding the Service.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span><strong>Third-Party Social Media Service</strong> means any services or content (including data, information, products or services) provided by a third party that is displayed, included, made available, or linked to through the Service.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span><strong>Website</strong> refers to signalive, accessible from <a href="https://signalive.net" className="text-red-400 hover:underline" target="_blank" rel="noopener noreferrer">signalive.net</a></span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-red-500 mt-1.5">•</span>
                      <span><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 2.0 Acknowledgment</h4>
                <p>
                  These are the Terms and Conditions governing the use of this Service and the agreement between You and the Company. These Terms and Conditions set out the rights and obligations of all users regarding the use of the Service.
                </p>
                <p>
                  Your access to and use of the Service is conditioned on Your acceptance of and compliance with these Terms and Conditions. These Terms and Conditions apply to all visitors, users and others who access or use the Service.
                </p>
                <p>
                  By accessing or using the Service You agree to be bound by these Terms and Conditions. If You disagree with any part of these Terms and Conditions then You may not access the Service.
                </p>
                <p>
                  You represent that you are over the age of 18. The Company does not permit those under 18 to use the Service.
                </p>
                <p>
                  Your access to and use of the Service is also subject to Our Privacy Policy, which describes how We collect, use, and disclose personal information. Please read Our Privacy Policy carefully before using Our Service.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 3.0 Links to Other Websites</h4>
                <p>
                  Our Service may contain links to third-party websites or services that are not owned or controlled by the Company.
                </p>
                <p>
                  The Company has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites or services. You further acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods or services available on or through any such websites or services.
                </p>
                <p>
                  We strongly advise You to read the terms and conditions and privacy policies of any third-party websites or services that You visit.
                </p>
                
                <h5 className="text-white font-bold text-sm mt-4">// 3.1 Links from a Third-Party Social Media Service</h5>
                <p>
                  The Service may display, include, make available, or link to content or services provided by a Third-Party Social Media Service. A Third-Party Social Media Service is not owned or controlled by the Company, and the Company does not endorse or assume responsibility for any Third-Party Social Media Service.
                </p>
                <p>
                  You acknowledge and agree that the Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with Your access to or use of any Third-Party Social Media Service, including any content, goods, or services made available through them. Your use of any Third-Party Social Media Service is governed by that Third-Party Social Media Service's terms and privacy policies.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 4.0 Termination</h4>
                <p>
                  We may terminate or suspend Your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if You breach these Terms and Conditions.
                </p>
                <p>
                  Upon termination, Your right to use the Service will cease immediately.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 5.0 Limitation of Liability</h4>
                <p>
                  Notwithstanding any damages that You might incur, the entire liability of the Company and any of its suppliers under any provision of these Terms and Your exclusive remedy for all of the foregoing shall be limited to the amount actually paid by You through the Service or 100 USD if You haven't purchased anything through the Service.
                </p>
                <p>
                  To the maximum extent permitted by applicable law, in no event shall the Company or its suppliers be liable for any special, incidental, indirect, or consequential damages whatsoever (including, but not limited to, damages for loss of profits, loss of data or other information, for business interruption, for personal injury, loss of privacy arising out of or in any way related to the use of or inability to use the Service, third-party software and/or third-party hardware used with the Service, or otherwise in connection with any provision of these Terms), even if the Company or any supplier has been advised of the possibility of such damages and even if the remedy fails of its essential purpose.
                </p>
                <p>
                  Some states do not allow the exclusion of implied warranties or limitation of liability for incidental or consequential damages, which means that some of the above limitations may not apply. In these states, each party's liability will be limited to the greatest extent permitted by law.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 6.0 &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; Disclaimer</h4>
                <p>
                  The Service is provided to You &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; and with all faults and defects without warranty of any kind. To the maximum extent permitted under applicable law, the Company, on its own behalf and on behalf of its Affiliates and its and their respective licensors and service providers, expressly disclaims all warranties, whether express, implied, statutory or otherwise, with respect to the Service, including all implied warranties of merchantability, fitness for a particular purpose, title and non-infringement, and warranties that may arise out of course of dealing, course of performance, usage or trade practice. Without limitation to the foregoing, the Company provides no warranty or undertaking, and makes no representation of any kind that the Service will meet Your requirements, achieve any intended results, be compatible or work with any other software, applications, systems or services, operate without interruption, meet any performance or reliability standards or be error free or that any errors or defects can or will be corrected.
                </p>
                <p>
                  Without limiting the foregoing, neither the Company nor any of the company's provider makes any representation or warranty of any kind, express or implied: (i) as to the operation or availability of the Service, or the information, content, and materials or products included thereon; (ii) that the Service will be uninterrupted or error-free; (iii) as to the accuracy, reliability, or currency of any information or content provided through the Service; or (iv) that the Service, its servers, the content, or e-mails sent from or on behalf of the Company are free of viruses, scripts, trojan horses, worms, malware, timebombs or other harmful components.
                </p>
                <p>
                  Some jurisdictions do not allow the exclusion of certain types of warranties or limitations on applicable statutory rights of a consumer, so some or all of the above exclusions and limitations may not apply to You. But in such a case the exclusions and limitations set forth in this section shall be applied to the greatest extent enforceable under applicable law.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 7.0 Governing Law</h4>
                <p>
                  The laws of the Country/State (California, USA), excluding its conflicts of law rules, shall govern these Terms and Your use of the Service. Your use of the Application may also be subject to other local, state, national, or international laws.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 8.0 Disputes Resolution</h4>
                <p>
                  If You have any concern or dispute about the Service, You agree to first try to resolve the dispute informally by contacting the Company.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 9.0 United States Legal Compliance & EU Users</h4>
                <div className="space-y-2">
                  <p><strong>For European Union (EU) Users:</strong> If You are a European Union consumer, you will benefit from any mandatory provisions of the law of the country in which You are resident.</p>
                  <p><strong>United States Legal Compliance:</strong> You represent and warrant that (i) You are not located in a country that is subject to the United States government embargo, or that has been designated by the United States government as a &quot;terrorist supporting&quot; country, and (ii) You are not listed on any United States government list of prohibited or restricted parties.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 10.0 Severability, Waiver & Interpretation</h4>
                <div className="space-y-2">
                  <p><strong>Severability:</strong> If any provision of these Terms is held to be unenforceable or invalid, such provision will be changed and interpreted to accomplish the objectives of such provision to the greatest extent possible under applicable law and the remaining provisions will continue in full force and effect.</p>
                  <p><strong>Waiver:</strong> Except as provided herein, the failure to exercise a right or to require performance of an obligation under these Terms shall not affect a party's ability to exercise such right or require such performance at any time thereafter nor shall the waiver of a breach constitute a waiver of any subsequent breach.</p>
                  <p><strong>Translation Interpretation:</strong> These Terms and Conditions may have been translated if We have made them available to You on our Service. You agree that the original English text shall prevail in the case of a dispute.</p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-red-500/40 pl-3">// 11.0 Changes to These Terms and Conditions</h4>
                <p>
                  We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. If a revision is material We will make reasonable efforts to provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at Our sole discretion.
                </p>
                <p>
                  By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms. If You do not agree to the new terms, in whole or in part, please stop using the Service.
                </p>
              </div>

              <div className="p-5 border border-white/10 rounded-2xl bg-[#0b132c]/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-red-500/10 to-transparent blur-xl rounded-full"></div>
                <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">// 12.0 Contact Us</h4>
                <p className="mb-4 text-xs text-gray-400 leading-relaxed">
                  If you have any questions about these Terms and Conditions, You can contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-400 font-medium">
                  <div>
                    <span className="text-red-500 uppercase tracking-widest font-bold block mb-1 text-[10px]">Direct Uplink</span>
                    info@signalive.net
                  </div>
                  <div>
                    <span className="text-red-500 uppercase tracking-widest font-bold block mb-1 text-[10px]">Comm-Link</span>
                    +1 (415) 555-0119
                  </div>
                </div>
              </div>
            </div>
          )}

          {type === 'cookie' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-white font-black text-lg md:text-xl tracking-wide border-b border-white/5 pb-2 mb-2 uppercase">Cookies Policy</h3>
                <p className="text-[10px] md:text-xs text-cyan-400 uppercase tracking-widest font-semibold">Last updated: July 28, 2026</p>
              </div>

              <p>
                This Cookies Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used.
              </p>

              <p>
                Cookies do not typically contain any information that personally identifies a user, but personal information that We store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy, if and when We make it available within the Website or on our website.
              </p>

              <p>
                We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
              </p>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-cyan-400/40 pl-3">// 1.0 Interpretation and Definitions</h4>
                <div className="space-y-3">
                  <h5 className="text-white font-bold text-sm">Interpretation</h5>
                  <p>
                    The words whose initial letters are capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                  </p>
                  
                  <h5 className="text-white font-bold text-sm mt-4">Definitions</h5>
                  <p>For the purposes of this Cookies Policy:</p>
                  <ul className="space-y-3 text-gray-400 list-none pl-1">
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span><strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Cookies Policy) refers to signalive, 650 Market St, San Francisco, CA 94102, USA.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing details of your browsing history on that website among its many uses.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span><strong>Website</strong> refers to signalive, accessible from <a href="mailto:info@signalive.net" className="text-cyan-400 hover:underline">info@signalive.net</a>.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-cyan-400 mt-1.5">•</span>
                      <span><strong>You</strong> means the individual accessing or using the Website, or a company, or any legal entity on behalf of which such individual is accessing or using the Website, as applicable.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-cyan-400/40 pl-3">// 2.0 The use of the Cookies</h4>
                <div className="space-y-3">
                  <h5 className="text-white font-bold text-sm">Type of Cookies We Use</h5>
                  <p>
                    Cookies can be &quot;Persistent&quot; or &quot;Session&quot; Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close your web browser.
                  </p>
                  <p>
                    Where required by law, We will request your consent before using Cookies that are not strictly necessary. Strictly necessary Cookies are used to provide the Website and cannot be switched off in our systems.
                  </p>
                  <p>We use both session and persistent Cookies for the purposes set out below:</p>
                  
                  <div className="space-y-4 mt-4">
                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden">
                      <strong className="text-white block mb-1 text-xs uppercase tracking-wider">Necessary / Essential Cookies</strong>
                      <p className="text-xs text-gray-400 mb-2">Type: Session Cookies | Administered by: Us</p>
                      <p className="text-xs text-gray-400">
                        Purpose: These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-white/5 border border-white/5 relative overflow-hidden">
                      <strong className="text-white block mb-1 text-xs uppercase tracking-wider">Functionality Cookies</strong>
                      <p className="text-xs text-gray-400 mb-2">Type: Persistent Cookies | Administered by: Us</p>
                      <p className="text-xs text-gray-400">
                        Purpose: These Cookies allow Us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-cyan-400/40 pl-3">// 3.0 Your Choices Regarding Cookies</h4>
                <p>
                  If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in your browser and then delete the Cookies saved in your browser associated with the Website. You may use this option for preventing the use of Cookies at any time.
                </p>
                <p>
                  If You do not accept Our Cookies, You may experience some inconvenience in your use of the Website and some features may not function properly.
                </p>
                <p>
                  If You'd like to delete Cookies or instruct your web browser to delete or refuse Cookies, please visit the help pages of your web browser:
                </p>
                <ul className="space-y-2 text-gray-400 list-none pl-1">
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1.5">•</span>
                    <span>For Chrome: <a href="https://support.google.com/accounts/answer/32050" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Google Support Page</a></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1.5">•</span>
                    <span>For Microsoft Edge: <a href="https://support.microsoft.com/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Microsoft Support Page</a></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1.5">•</span>
                    <span>For Firefox: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Mozilla Support Page</a></span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-cyan-400 mt-1.5">•</span>
                    <span>For Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">Apple Support Page</a></span>
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className="text-white font-bold uppercase tracking-wider text-xs border-l-2 border-cyan-400/40 pl-3">// 4.0 Changes to this Cookies Policy</h4>
                <p>
                  We may update this Cookies Policy from time to time. The &quot;Last updated&quot; date at the top indicates when it was last revised.
                </p>
              </div>

              <div className="p-5 border border-white/10 rounded-2xl bg-[#0b132c]/50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-cyan-400/10 to-transparent blur-xl rounded-full"></div>
                <h4 className="text-white font-bold uppercase tracking-wider text-xs mb-3">// 5.0 Contact Us</h4>
                <p className="mb-4 text-xs text-gray-400 leading-relaxed">
                  If you have any questions about this Cookies Policy, You can contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-400 font-medium">
                  <div>
                    <span className="text-cyan-400 uppercase tracking-widest font-bold block mb-1 text-[10px]">Direct Uplink</span>
                    info@signalive.net
                  </div>
                  <div>
                    <span className="text-cyan-400 uppercase tracking-widest font-bold block mb-1 text-[10px]">Comm-Link</span>
                    +1 (415) 555-0119
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Footer Info Row */}
        <div className="px-6 py-4 md:px-8 bg-[#040810]/80 border-t border-white/5 flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest">
          <span>Signalive LLC © {new Date().getFullYear()}</span>
          <span>Security Protocol Active</span>
        </div>

      </div>
    </div>
  );
};

export default LegalDocument;
