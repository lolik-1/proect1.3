import Slider from "react-slick";
function SliderNike (){
    const settings = {
        dots: false,
        infinite: false,
        arrows : false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return(
        <Slider {...settings} >
            <div>
                <img className=" rounded-[15px]" src="./img/Port1.jpg"></img>
            </div>
            <div>
                <img className=" rounded-[15px]"  src="./img/Port2.jpg"></img>
            </div>
        </Slider> 
    )
}

export default SliderNike;