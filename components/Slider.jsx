import React from "react";

const Slider = () => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="item1" className="carousel-item w-full">
          <img
            src="https://scontent.fdac27-2.fna.fbcdn.net/v/t39.30808-6/412803976_122125266434089181_34256929985393582_n.png?_nc_cat=106&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeGI6rxurYSr1iA9IRI0WkeBeAuk8pfZ8rd4C6Tyl9nyt1Oq6eZJkme25xaMKe8Inxt2asuuDl6DfcBFgFK-pmsf&_nc_ohc=06s7RVWt5m8AX-Gu5pA&_nc_ht=scontent.fdac27-2.fna&oh=00_AfBDJo3PC7UobVV7Ib1QRtbFY-xZwW1bBitopV5KZyxkFg&oe=658EF3C5"
            className="w-full"
          />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
          />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
          />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img
            src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
          />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
};

export default Slider;
