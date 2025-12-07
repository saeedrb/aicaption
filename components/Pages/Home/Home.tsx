import HomePageBanner from '@/components/Sections/HomePageBanner/HomePageBanner';
import Navbar from '@/components/Sections/Navbar/Navbar';
import Features from '@/components/Sections/Features/Features';
import Description from '@/components/Sections/Description/Description';

const Home: React.FC = () => {
  return (
    <div className={'pageWrapper'}>
        <Navbar />
        <HomePageBanner />
        <Features />
        <Description />
    </div>
  )
}

export default Home