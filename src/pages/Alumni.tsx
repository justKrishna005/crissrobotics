import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import useScrollReveal from '../hooks/useScrollReveal';
import './Alumni.css';

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

// ─── Types ────────────────────────────────────────────────────────────────────

interface AlumniMember {
  name: string;
  role: string;
  vertical: string;
  image: string;
  linkedin?: string;
}

interface AlumniBatch {
  year: string;
  members: AlumniMember[];
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const alumniBatches: AlumniBatch[] = [
  {
    year: 'Founders',
    members: [
      { name: 'Swapnil Padhi', role: 'Alumni', vertical: 'Alumni', image: '../alumini images/swapnil_padhi_s_profile.webp' },
      { name: 'Uttank Jha', role: 'Alumni', vertical: 'Alumni', image: '../alumini images/uttank_jha_s_profile.webp' },
      { name: 'Abin Asokan', role: 'Alumni', vertical: 'Alumni', image: '../alumini images/abin_asokan_s_profile.webp' },
      { name: 'Sashank Krishna Sriram', role: 'Alumni', vertical: 'Alumni', image: '../alumini images/sashank_krishna_sriram_s_profile.webp' },
      { name: 'Tanishq Duhan', role: 'Alumni', vertical: 'Alumni', image: '../alumini images/tanishq_duhan_s_profile.webp' },
    ],
  },
  {
    year: 'Batch of 2020',
    members: [
      { name: 'Ayush Firodiya', role: 'Team Lead', vertical: 'Alumni', image: '../alumini images/ayush_firodiya.webp' },
      { name: 'Vedang Nadkarni', role: 'Vice Team Lead and Software Lead', vertical: 'Alumni', image: '../alumini images/vedang_nadkarni.webp' },
      { name: 'Hrishit Das', role: 'Lead Subsystem Engineer', vertical: 'Alumni', image: '../alumini images/hrishit_das.webp' },
      { name: 'Shreyash Singh', role: 'Team Manager', vertical: 'Alumni', image: '../alumini images/shreyash_singh.webp' },
      { name: 'Keshav Mittal', role: 'Team Manager', vertical: 'Alumni', image: '../alumini images/keshav_mittal.webp' },
      { name: 'Aditya Bhalerao', role: 'Electrical Team Lead', vertical: 'Alumni', image: '../alumini images/aditya_bhalerao.webp' },
      { name: 'Aditya Verma', role: 'Mechanical Team Lead', vertical: 'Alumni', image: '../alumini images/aditya_verma.webp' },
      { name: 'Pinapati Saketh', role: 'Science Team Lead', vertical: 'Alumni', image: '../alumini images/pinapati_saketh.webp' },
    ],
  },
  {
    year: 'Batch of 2021',
    members: [
      { name: 'Dev Parikh', role: 'Team Captain', vertical: 'Alumni', image: '../alumini images/dev_parikh.webp' },
      { name: 'Mahip Gorana', role: 'Management Lead', vertical: 'Alumni', image: '../alumini images/mahip_gorana.webp' },
      { name: 'Shuswabhit Shadangi', role: 'CTO & Team Director', vertical: 'Alumni', image: '../alumini images/shuswabhit_shadangi.webp' },
      { name: 'Shobhit Rathi', role: 'Operations Lead', vertical: 'Alumni', image: '../alumini images/shobhit_rathi.webp' },
      { name: 'Shubham Gupta', role: 'Science Lead', vertical: 'Alumni', image: '../alumini images/shubham_gupta.webp' },
      { name: 'Vedant Kabra', role: 'Electrical Team Lead', vertical: 'Alumni', image: '../alumini images/vedant_kabra.webp' },
      { name: 'Mathai Mathew Pulicken', role: 'Software Lead', vertical: 'Alumni', image: '../alumini images/mathai_mathew_pulicken.webp' },
      { name: 'Aryaman Agrawal', role: 'Astro-Biology Lead', vertical: 'Alumni', image: '../alumini images/aryaman_agrawal.webp' },
      { name: 'Rishi Agarwal', role: 'Software Lead', vertical: 'Alumni', image: '../alumini images/rishi_agarwal.webp' },
      { name: 'Aman Gupta', role: 'Mobility Lead', vertical: 'Alumni', image: '../alumini images/aman_gupta.webp' },
      { name: 'Devchand Bothra', role: 'Arm Lead', vertical: 'Alumni', image: '../alumini images/devchand_bothra.webp' },
      { name: 'Ashmit Srivastava', role: 'Web Dev Lead', vertical: 'Alumni', image: '../alumini images/ashmit_srivastava.webp' },
      { name: 'Akshita Raj Pandita', role: 'Social Media and Content Lead', vertical: 'Alumni', image: '../alumini images/akshita_raj_pandita.webp' },
      { name: 'Ojasva Goyal', role: 'Head of Events', vertical: 'Alumni', image: '../alumini images/ojasva_goyal.webp' },
      { name: 'Abhinav Mathur', role: 'DAV lead', vertical: 'Alumni', image: '../alumini images/abhinav_mathur.webp' },
      { name: 'Dhruv Garg', role: 'Management Team', vertical: 'Alumni', image: '../alumini images/dhruv_garg.webp' },
      { name: 'Vansh Agrawal', role: 'Management Team', vertical: 'Alumni', image: '../alumini images/vansh_agrawal.webp' },
      { name: 'Nek Manchanda', role: 'Management Team', vertical: 'Alumni', image: '../alumini images/nek_manchanda.webp' },
      { name: 'Pranav Malaiya', role: 'Management Team', vertical: 'Alumni', image: '../alumini images/pranav_malaiya.webp' },
      { name: 'Joshua Joseph John', role: 'Science Team', vertical: 'Alumni', image: '../alumini images/joshua_joseph_john.webp' },
      { name: 'Aditya Sharma', role: 'Drive Systems Leads', vertical: 'Alumni', image: '../alumini images/aditya_sharma.webp' },
    ],
  },
  {
    year: 'Batch of 2022',
    members: [
      { name: 'Nikhil Handa', role: 'Team Captain', vertical: 'Alumni', image: '../alumini images/nikhil_handa.webp' },
      { name: 'Chaitanya Agrawal', role: 'Team Manager', vertical: 'Alumni', image: '../alumini images/chaitanya_agrawal.webp' },
      { name: 'Moksh Gupta', role: 'APOGEE Coordinator', vertical: 'Alumni', image: '../alumini images/moksh_gupta.webp' },
      { name: 'Shravan Gupta', role: 'Events and Marketing Head', vertical: 'Alumni', image: '../alumini images/shravan_gupta.webp' },
      { name: 'Kanak Gupta', role: 'BOSM Coordinator', vertical: 'Alumni', image: '../alumini images/kanak_gupta.webp' },
      { name: 'Aarya Jindal', role: 'Web Dev Head', vertical: 'Alumni', image: '../alumini images/aarya_jindal.webp' },
      { name: 'Ayush Singla', role: 'Business Relations Head', vertical: 'Alumni', image: '../alumini images/ayush_singla.webp' },
      { name: 'Aditya Thole', role: 'Sponsorship Head', vertical: 'Alumni', image: '../alumini images/aditya_thole.webp' },
      { name: 'Jash Karani', role: 'Software Lead', vertical: 'Alumni', image: '../alumini images/jash_karani.webp' },
      { name: 'Ritvik Mongia', role: 'Software Integration Engineer', vertical: 'Alumni', image: '../alumini images/ritvik_mongia.webp' },
      { name: 'Amarthya Guru', role: 'Mechanical Lead', vertical: 'Alumni', image: '../alumini images/amarthya_guru.webp' },
      { name: 'Sanjeiv Suresh', role: 'Mechanical Integration Engineer', vertical: 'Alumni', image: '../alumini images/sanjeiv_suresh.webp' },
      { name: 'Harshith Reddy', role: 'Electrical Lead', vertical: 'Alumni', image: '../alumini images/harshith_reddy.webp' },
      { name: 'Vidyarenu Swamy', role: 'Electrical Vice Lead', vertical: 'Alumni', image: '../alumini images/vidyarenu_swamy.webp' },
      { name: 'Sohan Pattanayak', role: 'Payload Lead', vertical: 'Alumni', image: '../alumini images/sohan_pattanayak.webp' },
      { name: 'Shubhang Gautam', role: 'Experimentation Lead', vertical: 'Alumni', image: '../alumini images/shubhang_gautam.webp' },
      { name: 'Abhimanyu Bhowmik', role: 'Core Engineer', vertical: 'Alumni', image: '../alumini images/abhimanyu_bhowmik.webp' },
      { name: 'Shivang Shandilya', role: 'Core Engineer', vertical: 'Alumni', image: '../alumini images/shivang_shandilya.webp' },
      { name: 'Pranav Sud', role: 'Core Engineer', vertical: 'Alumni', image: '../alumini images/pranav_sud.webp' },
      { name: 'Sahaj Sethi', role: 'Core Engineer', vertical: 'Alumni', image: '../alumini images/sahaj_sethi.webp' },
      { name: 'Advait Shukla', role: 'Management Team', vertical: 'Alumni', image: '../alumini images/advait_shukla.webp' },
      { name: 'Deepak Saini', role: 'Management Team', vertical: 'Alumni', image: '../alumini images/deepak_saini.webp' },
      { name: 'Shiv Tiwari', role: 'Management Team', vertical: 'Alumni', image: '../alumini images/shiv_tiwari.webp' },
      { name: 'Vedant Sindhwani', role: 'Management Team', vertical: 'Alumni', image: '../alumini images/vedant_sindhwani.webp' },
    ],
  },
  {
    year: 'Batch of 2023',
    members: [
      { name: 'Ashray Saxena', role: 'Team Captain', vertical: 'Alumni', image: '../alumini images/ashray_saxena.webp' },
      { name: 'Vanshika Agarwal', role: 'Team Manager', vertical: 'Alumni', image: '../alumini images/vanshika_agarwal.webp' },
      { name: 'Manas Choudhary', role: 'Web Development Head', vertical: 'Alumni', image: '../alumini images/manas_choudhary.webp' },
      { name: 'Agrim Gupta', role: 'Web Development Head', vertical: 'Alumni', image: '../alumini images/agrim_gupta.webp' },
      { name: 'Saniddh Kumar', role: 'Events & Marketing Head & APOGEE Coordinator', vertical: 'Alumni', image: '../alumini images/saniddh_kumar.webp' },
      { name: 'Mansi Mittal', role: 'BOSM Coordinator', vertical: 'Alumni', image: '../alumini images/mansi_mittal.webp' },
      { name: 'Aishwarya', role: 'Events & Marketing Head', vertical: 'Alumni', image: '../alumini images/aishwarya.webp' },
      { name: 'Niharika Sharma', role: 'Operations & Logistics Head', vertical: 'Alumni', image: '../alumini images/niharika_sharma.webp' },
      { name: 'Shrey Thakkar', role: 'Operations & Logistics Head', vertical: 'Alumni', image: '../alumini images/shrey_thakkar.webp' },
      { name: 'Vidit Shah', role: 'Mechanical Lead', vertical: 'Alumni', image: '../alumini images/vidit_shah.webp' },
      { name: 'Ashwin Singh', role: 'Payload & Experimentation Lead', vertical: 'Alumni', image: '../alumini images/ashwin_singh.webp' },
      { name: 'Achyuthan Raghavan', role: 'Electrical Lead', vertical: 'Alumni', image: '../alumini images/achyuthan_raghavan.webp' },
      { name: 'Gautham Balachandran', role: 'Software Lead', vertical: 'Alumni', image: '../alumini images/gautham_balachandran.webp' },
      { name: 'Janak Matharu', role: 'Mechanical Vice Lead', vertical: 'Alumni', image: '../alumini images/janak_matharu.webp' },
      { name: 'Charvi Bansal', role: 'Payload & Experimentation Vice Lead', vertical: 'Alumni', image: '../alumini images/charvi_bansal.webp' },
      { name: 'Arsheya Singh Parmar', role: 'Electrical Vice Lead', vertical: 'Alumni', image: '../alumini images/arsheya_singh_parmar.webp' },
      { name: 'Aryan Chaudhary', role: 'Software Vice Lead', vertical: 'Alumni', image: '../alumini images/aryan_chaudhary.webp' },
      { name: 'Akshay Kumar', role: 'Research and Development Lead', vertical: 'Alumni', image: '../alumini images/akshay_kumar.webp' },
    ],
  },
];

const yearOptions = alumniBatches.map((b) => b.year);

// ─── Page ─────────────────────────────────────────────────────────────────────

const Alumni = () => {
  const [activeYear, setActiveYear] = useState(yearOptions[0]);
  const [isSticky, setIsSticky] = useState(false);
  const activeBatch = alumniBatches.find((b) => b.year === activeYear);

  useScrollReveal();

  useEffect(() => {
    const handleScroll = () => {
      // Add background when scrolled past the page header
      if (window.scrollY > window.innerHeight * 0.4 - 70) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="alumni-page animate-fade-in">
      {/* ── Header ── */}
      <header className="page-header page-header--photo" style={{ marginBottom: 0 }}>
        <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 className="page-title animate-slide-up delay-100">Alumni</h1>
          <p className="page-subtitle animate-slide-up delay-200">
            The engineers and leaders who built the foundation of CRISS Robotics.
          </p>
          <div className="hero-actions animate-slide-up delay-300" style={{ marginTop: '2.5rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/support-us" className="btn btn-solid">
              Support Our Alumni Campaign
            </Link>
          </div>
        </div>
        <div 
          className="scroll-indicator"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <ChevronDown size={32} strokeWidth={1.5} />
        </div>
      </header>

      {/* ── Year Selector ── */}
      <div className={`alumni-year-bar ${isSticky ? 'scrolled' : ''}`}>
        {yearOptions.map((year) => (
          <button
            key={year}
            className={`alumni-year-tab ${activeYear === year ? 'alumni-year-tab--active' : ''}`}
            onClick={() => setActiveYear(year)}
          >
            {year}
          </button>
        ))}
      </div>

      {/* ── Alumni Grid ── */}
      <section className="alumni-section">
        <div className="container">
          <h2 className="alumni-batch-title">
            {activeYear}
          </h2>

          {activeBatch && (
            <div className="alumni-grid" key={activeYear}>
              {activeBatch.members.map((member, index) => (
                <div
                  key={member.name}
                  className={`alumni-card scroll-reveal delay-${(index % 5) + 1}`}
                >
                  <div className="alumni-card-image">
                    <img src={member.image} alt={member.name} loading="lazy" />
                  </div>
                  <div className="alumni-card-body">
                    <h3 className="alumni-card-name">{member.name}</h3>
                    <p className="alumni-card-role">{member.role}</p>
                    <p className="alumni-card-vertical">{member.vertical}</p>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="alumni-card-linkedin"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedinIcon />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Alumni;
