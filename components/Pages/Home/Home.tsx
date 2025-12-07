import HomePageBanner from '@/components/Sections/HomePageBanner/HomePageBanner';
import Navbar from '@/components/Sections/Navbar/Navbar';
import Features from '@/components/Sections/Features/Features';
import Description from '@/components/Sections/Description/Description';
import Footer from '@/components/Sections/Footer/Footer';

const Home: React.FC = () => {
  return (
    <div className={'pageWrapper'}>
        <Navbar />s
        <HomePageBanner />
        <Features />
        <Description />
        <Footer />
    </div>
  )
}

export default Home