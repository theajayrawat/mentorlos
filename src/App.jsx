import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import FutureImpactMessage from "./components/FutureImpactMessage";
import JoinMentorlo from "./components/JoinMentorlo";
import MentorshipProgramBanner from "./components/MentorshipProgramBanner";
import MentorshipProgramBenefits from "./components/MentorshipProgramBenefits";
import Navbar from "./components/Navbar";
import WhyChooseMentorlo from "./components/WhyChooseMentorlo";
import GetInTouch from "./components/GetInTouch";

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
       <GetInTouch/>  
       <Footer />
    </div>
  );
}

export default App;
