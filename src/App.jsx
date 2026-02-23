import Nav from './components/Nav'
import Footer from './components/Footer'
import { Outlet, useNavigate } from 'react-router-dom'
import PageSlideTransition from "./components/PageSlideTransition"
import { useState } from "react"

function App() {
  const navigate = useNavigate();

  const [transition, setTransition] = useState({
    active: false,
    image: "",
    bgImage: "",
    transitionImgClass: ""
  });

  const navigateWithTransition = (path, image, bgImage, transitionImgClass) => {
    setTransition({
    active: true,
    image,
    bgImage,
    transitionImgClass
  });

    setTimeout(() => {
      navigate(path);
    }, 1800); // quando tela já cobriu tudo

    setTimeout(() => {
      setTransition({
      active: false,
      image: "", 
      bgImage: "", 
      transitionImgClass: "" 
    });
    }, 2500); // fim animação
  };

  return (
    <>
      <Nav navigateWithTransition={navigateWithTransition} />

      <PageSlideTransition
        active={transition.active}
        image={transition.image}
        bgImage={transition.bgImage}
        transitionImgClass={transition.transitionImgClass}
      />

      <Outlet />

      <Footer />
    </>
  )
}

export default App
