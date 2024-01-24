import Navbar from '../Components/Layouts/Navbar'
import FirstSection from '../Components/About/FirstSection'
import SecondSection from '../Components/About/SecondSection'
import ThirdSection from '../Components/About/ThirdSection'
import FourthSection from '../Components/About/FourthSection'
import Footer from '../Components/Layouts/Footer'

const About = () => {
    return (
        <>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
            {/* The lilypad promise  */}
            <FourthSection />
        </>
    )
}

export default About