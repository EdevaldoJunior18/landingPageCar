import Carousel from './components/Carousel/carousel';
import Estoque from './components/Estoque/estoque';
import Navbar from './components/Navbar/navbar';
import Sobre from './components/Sobre/sobre';
import Footer from './components/Footer/footer';

function Index() {
  const images = [
    'https://s3-alpha-sig.figma.com/img/8a39/2caf/542531547ad314ae4f930dd92a06de9c?Expires=1741564800&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d~50rk2IhBTbVPp2nu8KzTru8CileMNIkFo-G72PWXhFuSaRP-9rOWr6g4nokQSv39gDmd83NI4UMvnb16PSw4E~CbeVGcpvkGRZBhucc0wYO8lmNHE0oV6PZ6kJT4MS18Tm-Qjcz7TMJ~vx5T5r7RIetCy7YUTEvvDCzukUXVeFWjX24fgl8jZsIiAI8uvFa0AZyFPpUjbEtuGUaQRE0jkXvAIPOLAfg47agbcpbDuIfKH2s2adVZNFBzpnmI~NY~ndjDYz0g4NQHlEsxhOE1U5TJEV5LVUbUmVTvAdjsQDAH6t4c4l5yvo00jg~zJzZP0-gKaKPE22uRiiU0jvUw__',
    'https://res.cloudinary.com/de4imnkqu/image/upload/v1729866834/yhaiohskih1kizbbejvb.webp',
    'https://res.cloudinary.com/de4imnkqu/image/upload/v1729866834/yhaiohskih1kizbbejvb.webp',
  ];

  return (
    <div>
      <Navbar />
      <Carousel images={images} />
      <Estoque />
      <Sobre />
      <Footer />
    </div>
  );
}

export default Index;