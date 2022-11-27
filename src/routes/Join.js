import './Join.css';

const Join = () =>  {

return (
    <main className='mainJoin'>
        <div className='logoJoin'>
        <img src="images/joinLogo.png" alt="joinLogo" />
        </div>
        <form className='inputJoin'>
            <div className='emailJoin'>
                이메일
                <br/>
                <input 
                className='InputJoin'
                name="email" 
                type="email" 
                placeholder="Email ID" 
                required 
                />
                <br/> 
                <button
                className='smallButtonJoin'>이메일 확인</button>
            </div>
            <div className='passwordJoin'>
                비밀번호
                <br/>
                <input 
                className='InputJoin'
                name="password" 
                type="password" 
                placeholder="Password" 
                required 
                />
                <br/> 
               <div className='smallJoin'>
                특수문자/문자/숫자 포함 형태의 8자리 이상 조합
                </div>
            </div>
            <div className='checkJoin'>
                비밀번호 재확인
                <br/>
                <input 
                className='InputJoin'
                name="password" 
                type="password" 
                placeholder="Double check" 
                required 
                />
                <br/> 
                <button
                className='smallButtonJoin'>비밀번호 재확인</button>
            </div>
            <div className='nicknameJoin'>
                닉네임
                <br/>
                <input 
                className='InputJoin'
                name="nickname" 
                type="name" 
                placeholder="Nickname" 
                required 
                />
                <br/> 
                <button
                className='smallButtonJoin'>닉네임 중복확인</button>
            </div>
        </form>
        <div className='buttonJoin'>
            <button className='bigButtonJoin'>
                회원가입
            </button>
        </div>
        
    </main>

)
}

export default Join;
