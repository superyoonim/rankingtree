import './ProductPageDetails.css';
import { FaHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaShareSquare } from "react-icons/fa";

import ImageGallery from 'react-image-gallery';


const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];

// class MyGallery extends React.Component {
//   render() {
//     return <ImageGallery items={images} />;
//   }
// }

const ProductPageDetails = () =>  {

return (

    

    <section className='MainCenter'>

        <div className='MainBox'>
            <div className='screen1'>
             <div className='screen1-1'>LikeLion NFT Project</div>
             <div className='screen1-2'>
             Block |   Ranking Tree 게시물의 객관적인 평점입니다
             <ul>통계를 낼 수 있는 정보가 부족합니다</ul></div>
             <div className='screen1-3'></div>
             <div className='screen1-4'>
             
               Leaf |   일반적인 유저들의 평점입니다
                <ul>통계를 낼 수 있는 정보가 부족합니다</ul>
             </div>
            </div>
            <div className='screen2'>
            <div className='screen2-1'>
                등록일 2022.11.11
                <br/>
                Last Updated 2022.11.11
            </div>
            <div className='screen2-2'></div>
            <div className='screen2-3'>
            <div className='screen2-3-1'>
                <FaStar size="20"/> 즐겨찾기
            {/* <img src="images/starIcon.png" alt="starIcon" /> */}
            </div>
            <div className='screen2-3-2'>
                <FaHeart size="20"/> 좋아요
            {/* <img src="images/heartIcon.png" alt="heartIcon" /> */}
            </div>
            <div className='screen2-3-3'>
                <FaShareSquare size="20"/> 공유하기
            {/* <img src="images/shareIcon.png" alt="shareIcon" /> */}
            </div>
            </div>

            </div>
        </div>
        <div className='MainTitle'>Product Info</div>
        <section className='SubBox'>
            <div className='SubBoxLeft'> 
            <div className='floor1'>
                <div className='floor1-1'>Name
                    <div className='normalFont'>  LikeLion NFT Project</div>
                    </div>
                <div className='floor1-1'>by
                <div className='normalFont'>  (주)멋쟁이 사자처럼</div>
                </div>
                <div className='floor1-1'>Chain  
                <div className='normalFont'>  Klaytn</div>
                </div>
                <div className='floor1-1'>Links 
                <div className='normalFont'> </div>
                </div>
            </div>
            
   
            </div>
   
            <div className='SubBoxRight'>
                <div className='topBox1'>
                <ImageGallery style={{width:"10%"}} items={images} />;
                {/* <ImageGallery
        items={images}
        showFullscreenButton={false}
        showThumbnails={false}
      />
      <style>
        {`.image-gallery-image {
          width: 50%;
          height: auto !important;
        }`}
      </style> */}
                </div>
                <div className='topBox2'>
     </div>
            {/* <img src="images/subRight.png" alt="subRight" /> */}
            </div>
        </section>
        <div className='iconPlus'>
        <img src="images/PFPIcon.png" alt="PFPIcon" />
        <img src="images/NFTIcon.png" alt="NFTIcon" />
        <img src="images/CoinIcon.png" alt="CoinIcon" />
        </div>
        <div className='SubExplain'>
            <div className='BoldFont'>Product 소개</div>
            <br/>
            <div>
            우리들 만나고헤어지는 모든 일들이어쩌면 어린애들 놀이 같아슬픈 동화 속에 구름 타고멀리 날으는 작은 요정들의슬픈 이야기처럼
그러나 우리들날지도 못하고 울지만사랑은 아름다운 꿈결처럼고운 그대 손을 잡고 밤하늘을날아서 궁전으로 갈 수도 있어
난 오직 그대 사랑하는 마음에바보같은 꿈 꾸며이룰 수 없는 저 꿈의 나라로길을 잃고 헤매고있어그러나 우리들날지도 못하고 울지만사랑은 아름다운 꿈결처럼고운 그대 손을 잡고 밤하늘을날아서 궁전으로 갈 수도 있어
난 오직 그대 사랑하는 마음에밤하늘을 날아서그대 잠든 모습 바라보다가입 맞추고 날아가고파그러나 우리들날지도 못하고 울지만사랑은 아름다운 꿈결처럼고운 그대 손을 잡고 밤하늘을날아서 궁전으로 갈 수도 있어난 오직 그대 사랑하는 마음에밤하늘을 날아서그대 잠든 모습 바라보다가입 맞추고 날아가고파
그러나 우리들날지도 못하고 울지만사랑은 아름다운 꿈결처럼고운 그대 손을 잡고 밤하늘을날아서 궁전으로 갈 수도 있어
우리들 만나고헤어지는 모든 일들이어쩌면 어린애들 놀이 같아슬픈 동화 속에 구름 타고멀리 날으는 작은 요정들의슬픈 이야기처럼
그러나 우리들날지도 못하고 울지만사랑은 아름다운 꿈결처럼고운 그대 손을 잡고 밤하늘을날아서 궁전으로 갈 수도 있어
난 오직 그대 사랑하는 마음에바보같은 꿈 꾸며이룰 수 없는 저 꿈의 나라로길을 잃고 헤매고있어그러나 우리들날지도 못하고 울지만사랑은 아름다운 꿈결처럼고운 그대 손을 잡고 밤하늘을날아서 궁전으로 갈 수도 있어

            </div>

        </div>
        <div className='SubBoxLast'> 댓글 0 </div>
        <div className='CloseBox'>
            <div className='CloseBoxLeft'> 
            Rate your Impression
            <br/>
            <form className="mb-3" name="myform" id="myform" method="post">
        <fieldset>
        
          <input type="radio" name="reviewStar" defaultValue={5} id="rate1" /><label htmlFor="rate1">♠</label>
          <input type="radio" name="reviewStar" defaultValue={4} id="rate2" /><label htmlFor="rate2">♠</label>
          <input type="radio" name="reviewStar" defaultValue={3} id="rate3" /><label htmlFor="rate3">♠</label>
          <input type="radio" name="reviewStar" defaultValue={2} id="rate4" /><label htmlFor="rate4">♠</label>
          <input type="radio" name="reviewStar" defaultValue={1} id="rate5" /><label htmlFor="rate5">♠</label>
        </fieldset>
      
      </form>
            {/* <img src="images/Leaf.png" alt="Leaf" /> */}

            
            </div>
            <div className='CloseBoxRight'>
            Comments
            <br/><br/>
            <input 
            type="text" 
            className='InputBoxPro'
            value="댓글을 입력해주세요" />
            <button
            className='ButtonBoxPro'>등록</button>
            </div>
        </div>
    </section>
)
}



export default ProductPageDetails;