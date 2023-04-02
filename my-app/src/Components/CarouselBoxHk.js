import img1 from '../img/assets/anime-girl-knife-butterflies-uhdpaper.com-4K-8.2922.jpg';
// import Img from '../img/anime-girl-playing-guitar-art-4k-wallpaper-3840x2160-uhdpaper.com-465.0_b.jpg';
// import Img3 from '../img/anime-girl-sky-lantern-sunset-art-school-uniform-student-uhdpaper.com-4K-8.2930.jpg';
// import Img4 from '../img/anime-girl-sleeping-drawing-computer-cats-uhdpaper.com-4K-8.2914.jpg';
import img5 from '../img/assets/anime-girls-train-digital-art-uhdpaper.com-4K-8.2932.jpg';
import {Component} from "react";
import Carousel from 'react-bootstrap/Carousel'
import ReactBootstrapCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import '../css/allPage.css';
class CarouselBoxHk extends Component {
    render() {
        return (
            // <Carousel>
            //     <Carousel.Item>
            //         <img className="d-block w-100" src={img1} alt="Ocean"/>
            //     </Carousel.Item>
            //     {/*<Carousel.Item>*/}
            //     {/*    <img className="d-block w-100" src={img} alt="Ocean"/>*/}
            //     {/*</Carousel.Item>*/}
            //     {/*<Carousel.Item>*/}
            //     {/*    <img className="d-block w-100" src={img3} alt="Ocean"/>*/}
            //     {/*</Carousel.Item>*/}
            //     {/*<Carousel.Item>*/}
            //     {/*    <img className="d-block w-100" src={img4} alt="Ocean"/>*/}
            //     {/*</Carousel.Item>*/}
            //     <Carousel.Item>
            //         <img className="d-block w-100" src={img5} alt="Ocean"/>
            //     </Carousel.Item>
            // </Carousel>
            <Carousel fade className="Carousel">

                {/*<Carousel.Item className="imge">*/}
                {/*    <img*/}
                {/*        className="d-block w-100"*/}
                {/*        src={img1}*/}
                {/*        alt="First slide"*/}
                {/*    />*/}
                {/*</Carousel.Item>*/}
                {/*<Carousel.Item className="imge">*/}
                {/*    <img*/}
                {/*        className="d-block w-100"*/}
                {/*        src={img5}*/}
                {/*        alt="Second slide"*/}
                {/*    />*/}
                {/*</Carousel.Item>*/}
                {/*/!*<Carousel.Item>*!/*/}
                {/*/!*    <img*!/*/}
                {/*/!*        className="d-block w-100"*!/*/}
                {/*/!*        src="holder.js/800x400?text=Third slide&bg=20232a"*!/*/}
                {/*/!*        alt="Third slide"*!/*/}
                {/*/!*    />*!/*/}

                {/*/!*    <Carousel.Caption>*!/*/}
                {/*/!*        <h3>Third slide label</h3>*!/*/}
                {/*/!*        <p>*!/*/}
                {/*/!*            Praesent commodo cursus magna, vel scelerisque nisl consectetur.*!/*/}
                {/*/!*        </p>*!/*/}
                {/*/!*    </Carousel.Caption>*!/*/}
                {/*/!*</Carousel.Item>*!/*/}

            </Carousel>
        );
    }
}
export default CarouselBoxHk;