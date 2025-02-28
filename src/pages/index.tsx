import Carousel from './components/Carousel/carousel';
import Navbar from './components/Navbar/navbar';

function Index() {

  const images = [
    'https://res.cloudinary.com/de4imnkqu/image/upload/v1729866834/yhaiohskih1kizbbejvb.webp',
    'https://res.cloudinary.com/de4imnkqu/image/upload/v1729866834/yhaiohskih1kizbbejvb.webp',
    'https://res.cloudinary.com/de4imnkqu/image/upload/v1729866834/yhaiohskih1kizbbejvb.webp',
  ];

  return (
    <div>
      <Navbar />
      <Carousel images={images} />
    </div>
  );
}

export default Index;