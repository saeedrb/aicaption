import HomePageBanner from '@/components/Sections/HomePageBanner/HomePageBanner';
import Navbar from '@/components/Sections/Navbar/Navbar';
import Features from '@/components/Sections/Features/Features';

const Home: React.FC = () => {
  return (
    <div className={'pageWrapper'}>
        <Navbar />
        <HomePageBanner />
        <Features />
    </div>
  )
}

export default Home