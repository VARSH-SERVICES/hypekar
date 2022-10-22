import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import amogh from "../file/images/amogh.png" //I imported the images from the file folder
import raashi from "../file/images/raashi.jpeg"

import "./css-files/testimonals.css"

export default function Testimonals() {
 
    return (
        <Carousel 
       
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div>
            <img src={"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAZlBMVEX///8AAAD8/PyGhobw8PDd3d00NDS1tbXAwMD39/fFxcWAgIDOzs7X19fa2tq6urpxcXGamppkZGRKSkofHx8LCwsXFxdDQ0MoKCihoaEvLy/k5ORPT093d3enp6fq6uqRkZFYWFhSq4EPAAAEsElEQVRoge1a2YKqOhBkCQiCDrKooyMw//+Tx4AMAUK6GuHeF+s5pEin945lseF4+90pSjM/L+wi97M0Ou32nsPfiAkvcP2zrcPZdwNvM14RR5dCy9uhuESxWJ84jB++kbeD/4jDVZnF9w0ibnH7Xu/wh4RB3CI5rMIcZ2xmiSx+m/mYLmKWSI9vMQt3MbOE+8a9f13forbt69dC5nC5uHukiwwuWIFZImAzO+/dtAqX6erFMsPSI2OpnJevSG3bOSPI7Fdlltij1LvVqW17h1F/b0Bt29//HzVEvoXAW5Bix9WsyG++799ycyqjglA4D9zmVgfH1mrFMajRxMJoagKy67ysRt9VJfahwck4iDe76B10cAG+zebdK+DD83Lucwc5uztHDUSu9D4vNesOBN2ZqBa+8du44PTxnP7rkqC2rJLcI9V99kV+hvhk2jVp0ihB5maQR6Zd8nVqaORVRRC1ZUXURhOlOVJfGExzCNpJjPN2UtHw1IP0yyN1i6n1lHWpIK9vWC6RcuLkmg61WaauPlCrawa1ZdXUdmqVSha5Jlc6xZ3aLunXCmrtL4vasn6pDXsbJ/0Bt6QjfeSfnwqpvCPnifwpdCqc3rqQQhpYZiTSgbSbzswe1MLEyKMDqbyPdp0gm1d07ByDjKV+q22kyPFq6g90qt0KnQw8Nr9hRTqrV1ikE0x+n5TO8y/NMrqw2IK7kJsC2Sm/UUamA23GCuSW/BYhrb9NVAbaw2DhrgCoZv1nsNW34gdAU7UetO3YZweqPH/Y3D/Arh5UcF/HdSeFCmmG7rE+A9exQR2EnXVClj2Y3GR0kjghWtHoBQeI/koNxprFvEhGV4QSKR3lGxQsbqz9kyGuRYJzcOzYT+eCdm3xHjzQQ2iQg/Lh5E3oRKuwwIW4U8cbk/C5UQfDaEzC9/28HyR1OjD2Q/UcJGdQP/WcNRihxM4aOGSgX+tg7vfwWu8p5s97XObzRg/pqCqIsDim4qEvDO9Q7FJxWjAnOCeHsZMLDwkUugbYLZtHZW5ciVAGVicUVewumuTt4UnBCH5SxpVjOVVcJgwzVeGBcV5FWk4ec4i4ZA+NZT7C+mu/nq8T4pq3lQXVJR2Sgzl3cjivMmRdgs65rzWSKVc1+lZA1mNAHSpRo4NkQXb2GjR1KFB/P/WLUx1UiN419TfgVa/cQjSmBd/WeGS9WvPfS4Sk4NvjEH2mgv9YQiIwq9Grz2SuYK7cnmKHu1HuXZVlEvrP8gdhoakQ7jTI0E/VTrNgzOv7Xz91Pt/g1p9jzN5mn//M9c/5fdQx5nysoJbw28dT6CO7eihtC/K6xrvDUKvtg2Rb83vFOi8+deFiKFCNmfGbanpoEsKRi56YA2cYZ8YkQRgb7rgBelvvmacYu49Je3b0d/x2/TxGqfBUosP593v+bIzBhWrm38OZFreRaEalbq2dtSl/t56itVAuVC/RvkdTrP2YWvRGPuOwgq2OrRx8NhF5rVjJo6novNv8qV5PFbhTXwS/zc6mRxPtO641bbtDY+Omd1ztbMnf4Nl+m5ASd7lfMh1BEAHy3G0icnkoIDCethD5U+inTbb94IMPPvjggw8++C/wD1HdOcv2uysDAAAAAElFTkSuQmCC"} />
            <div className="myCarousel">
              <h3>Shirley Fultz</h3>
              <div>
				        			<span class="fa fa-map-marker"></span>
                      <h4><span>Feedback From:</span> pune</h4>
				        		</div>
              <p>
                It's freeing to be able to catch up on customized news and not be
                distracted by a social media element on the same site
              </p>
              <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
            </div>
          </div>
  
          <div>
            <img src={"data:image/png;base64,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"} />
            <div className="myCarousel">
              <h3>Daniel Keystone</h3>
              <div>
				        			<span class="fa fa-map-marker"></span>
                      <h4><span>Feedback From:</span> mumbai</h4>
				        		</div>
				        		
              {/* <h4>Designer</h4> */}
              <p>
                The simple and intuitive design makes it easy for me use. I highly
                recommend Fetch to my peers.
              </p>
              <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
            </div>
          </div>
  
          <div>
            <img src="data:image/jpeg;base64,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" />
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <div>
				        			<span class="fa fa-map-marker"></span>
                      <h4><span>Feedback From:</span> noida</h4>
				        		</div>
              <p>
                I enjoy catching up with Fetch on my laptop, or on my phone when
                I'm on the go!
              </p>
              <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
            </div>
          </div>
        </Carousel>
      );
    }
  

