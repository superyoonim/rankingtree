import { useState } from 'react';

import './Auth.css';

const Auth = () =>  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(true);

   const onChange = (event) => {
    const {
        target: { name, value },
    } = event;
    if (name === "email"){
        setEmail(value);
    } else if (name === "password") {
        setPassword(value);
    }
   };

   const onSubmit = (event) => {
    event.preventDefault();
    if(newAccount) {
        //creat newAcount
    } else {
        //log in
    }
   }

return (
    <main className='login'>
        <div className='loginTitle'>LOGIN</div>
        <section className='loginBox'>
            <div className='inputBox'>
            <form onSubmit={onSubmit}>
                <input 
                className='emailBox'
                name="email" 
                type="email" 
                placeholder="이메일 ID" 
                required 
                value={email}
                onChange={onChange}
                />
                <br />
                <input
                className='passwordBox'
                name="password" 
                type="password" 
                placeholder="비밀번호" 
                required
                value={password}
                onChange={onChange} 
                />
                
            </form>
            </div>
           
            <div className='checkedBox'>       
                <input type="checkbox" />아이디 기억하기
            </div>

            <div className='buttonBox'>
            <input className='blueButton' type="submit" value={newAccount ? "로그인" : "Create Acount" } />
            </div>
           
            <div className='secondButtonBox'>
                <input className='joinButton' type="submit" value={newAccount ? "회원가입" : "Log In"} />
                <button className='searPassButton'>비밀번호 찾기</button>
                <button className='searAccButton'>계정 찾기</button>
            </div>
            <div className='lineBox'>또는</div>
            <div className='iconBox'>
                <img className='kakaoIcon' src="images/kakaoIcon.png" alt="kakaoIcon" />
                <img className='googleIcon' src="images/googleIcon.png" alt="googleIcon" />
                <img className='naverIcon' src="images/naverIcon.png" alt="naverIcon" />
            </div>


        </section>
    </main>




/*


    <div className='login'>
        <div className='topBox'>
            <h1>LOGIN</h1>
        </div>
        <div className='loginBox'>
            <form onSubmit={onSubmit}>
                <input 
                name="email" 
                type="email" 
                placeholder="Email" 
                required 
                value={email}
                onChange={onChange}
                />
                <input
                name="password" 
                type="password" 
                placeholder="Password" 
                required
                value={password}
                onChange={onChange} 
                />
                <br />
                <label>
                    <input type="checkbox" />아이디 기억하기</label>
                <br />
                <input type="submit" value={newAccount ? "Create Acount" : "Log In"} />
                
            </form>
            <div>
                <button>회원가입</button>
                <button>비밀번호 찾기</button>
                <button>계정 찾기</button>
            </div>
            <div>
                <button>continue with Naver</button>
                <button>continue with Google</button>
                <button>continue with Kakao</button>
            </div>
        </div>
    </div>
    */
)
}

export default Auth;
