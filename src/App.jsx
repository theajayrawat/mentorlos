import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FutureImpactMessage from "./components/FutureImpactMessage";
import JoinMentorlo from "./components/JoinMentorlo";
import MentorshipProgramBanner from "./components/MentorshipProgramBanner";
import MentorshipProgramBenefits from "./components/MentorshipProgramBenefits";
import Navbar from "./components/Navbar";
import WhyChooseMentorlo from "./components/WhyChooseMentorlo";

function App() {
  return (
    
    <div className="menterlo">
    
       <Navbar />
       <MentorshipProgramBanner />
       <MentorshipProgramBenefits />
       <WhyChooseMentorlo />
       <Features />
       <FutureImpactMessage />
       {/* <JoinMentorlo /> */}
       <Footer />
    </div>
  );
}

export default App;
