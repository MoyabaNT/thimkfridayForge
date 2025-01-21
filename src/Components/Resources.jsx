import React from 'react'
import Sidebar from './SideBar'
import Logo from '../Assets/Purple.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const Resources = () => {
  return (
    <div>

    <div className="bg-gradient-to-b from-gray-300 to-gray-100 min-h-screen p-4 ">
      <div className='text-purple-700'>
        <Sidebar />
        <div className="absolute top-0 right-0 p-4">
          <Link to='/HomePage'>
          <img 
            src={Logo} 
            alt="Logo" 
            className="w-24"
          />

          </Link>
        </div>
      </div>
      <h1 className='text-center font-bold text-purple-700 text-2xl'>Resources</h1>
      <div className='flex justify-center mt-14'>
        
        <div className='p-4 rounded-md lg:w-1/2 sm:w-full text-center shadow-2xl bg-gradient-to-b from-gray-200 to-gray-300'>
          <h1 className='text-2xl font-bold p-2 text-purple-700'>Understanding POPIA Compliance in the Context of BBBEE</h1>
          <p className='p-8 '><span className='font-bold text-purple-700'>Introduction:</span> POPIA and BBBEE are two important regulatory frameworks in South Africa that businesses need to navigate. Understanding how these regulations intersect is crucial for companies striving for compliance and good governance practices.</p>
          <p className='p-4'><span className='font-bold text-purple-700'>POPIA's Impact on BBBEE:</span> The Protection of Personal Information Act (POPIA) governs how businesses collect, process, and manage personal information. In the context of Broad-Based Black Economic Empowerment (BBBEE), POPIA's provisions are particularly relevant due to the collection and handling of personal data for BBBEE reporting purposes.</p>
          <ul>
            <p className='font-bold text-purple-700 p-4 text-xl'>Key Considerations:</p>
            <li className='p-2'><span className='font-bold text-purple-700'>Consent:</span> Personal information collected for BBBEE reporting should be stored securely, whether in digital or physical format. Access to this data should be restricted to authorized personnel.</li>
            <li className='p-2'><span className='font-bold text-purple-700'>Data Security:</span> POPIA requires businesses to implement appropriate security measures to safeguard personal information. This includes encryption, access controls, and regular security audits.</li>
            <li className='p-2'><span className='font-bold text-purple-700'>Data Subject Rights:</span> Individuals have rights under POPIA, including the right to access, correct, and delete their personal information. Businesses must facilitate these rights and respond promptly to requests</li>
            <li className='p-2'><span className='font-bold text-purple-700'>Lawful Processing:</span> Businesses must have a lawful basis for processing personal information for BBBEE purposes. This may include compliance with legal obligations, contractual necessity, or consent</li>
          </ul>
          
          <ul>
          <p className='text-purple-700 font-bold text-xl p-4'>Data Handling Practices:</p>
            <li className='p-2'><span className='font-bold text-purple-700'>Secure Storage: :</span> Businesses must obtain consent from individuals before collecting and processing their personal information for BBBEE purposes. Consent should be informed, specific, and freely given.</li>
            <li className='p-2'><span className='font-bold text-purple-700'>Data Sharing Agreements:</span>  When sharing personal information with verification agencies or government bodies for BBBEE reporting, businesses should have legally binding data sharing agreements in place to ensure compliance with POPIA.</li>
            <li className='p-2'><span className='font-bold text-purple-700'>Data Subject Rights:</span> Individuals have rights under POPIA, including the right to access, correct, and delete their personal information. Businesses must facilitate these rights and respond promptly to requests</li>
            <li className='p-2'><span className='font-bold text-purple-700'>Data Retention:</span> Businesses should establish clear policies for retaining personal information collected for BBBEE purposes. Retention periods should be based on legal requirements and business needs.</li>
          </ul>
          <p><span className='font-bold text-purple-700'>Data Breach Response:</span> In the event of a data breach involving personal information related to BBBEE compliance, businesses must comply with POPIA's requirements for reporting and responding to breaches. This includes notifying the Information Regulator and affected individuals without undue delay.</p>
          
          <p className='font-bold text-purple-700 p-4 text-xl'>Resource and Support:</p>
          <ul className='italic'>
            <li className='p-2'>
            The Information Regulator's website provides official guidance documents and resources on POPIA compliance. 
            </li>
            <li className='p-2'>
            Businesses may seek assistance from legal professionals or consulting firms specializing in data protection and compliance to ensure adherence to POPIA and BBBEE requirements.
            </li>
          </ul>
          <p className='p-2'><span className='font-bold text-purple-700'>Conclusion:</span> Compliance with both POPIA and BBBEE is essential for businesses operating in South Africa to protect personal information and promote economic transformation. By understanding the intersection of these regulatory frameworks and implementing appropriate measures, businesses can demonstrate their commitment to ethical data handling practices and contribute to sustainable development.</p>
          </div>
        </div>
        </div>
        <Footer />
        </div>


  )
}

export default Resources