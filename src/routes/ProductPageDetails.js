import './ProductPageDetails.css';

const ProductPageDetails = () =>  {

return (
    <section className='MainCenter'>
        <div className='MainBox'>
            <div className='screen1'>
             <div className='screen1-1'>LikeLion NFT Project</div>
             <div className='screen1-2'>Block
             <br/>
             Ranking Tree 게시물의 객관적인 평점입니다</div>
             <div className='screen1-3'></div>
             <div className='screen1-4'>
                Leaf
                <br/>
                일반적인 유저들의 평점입니다.
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
                즐겨찾기
            </div>
            <div className='screen2-3-2'>
                좋아요
            </div>
            <div className='screen2-3-3'>
                공유하기
            </div>
            </div>

            </div>
        </div>
        <div className='MainTitle'>Product Info</div>
        <section className='SubBox'>
            <div className='SubBoxLeft'> 
            <img src="images/subLeft.png" alt="subLeft" />
            </div>
            <div className='SubBoxRight'>
            <img src="images/subRight.png" alt="subRight" />
            </div>
        </section>
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
            <img src="images/Leaf.png" alt="Leaf" />
            </div>
            <div className='CloseBoxRight'>
            Comments
            <br/>
            <input 
            type="text" 
            className='IputBoxPro'
            value="댓글을 입력해주세요" />
            <button
            className='ButtonBoxPro'>등록</button>
            </div>
        </div>
    </section>
)
}

export default ProductPageDetails;