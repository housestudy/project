import Card from "../components/common/CCard"
import CButton from "../components/common/CButton"
import CInput from "../components/common/CInput"
import axios from "axios"
import { useInput } from "../hooks/useInput"

const ShowUserData = () => {

    axios.get('/user', null, {
        params: {
            'user_id' : sessionStorage.getItem('user_id'),
            'jwtToken' : sessionStorage.getItem('jwtToken')
        }
    })
    .then(res => {
        console.log('=================리스폰스')
        if(res.data.success === true) {
            console.log('res 받아오기 성공')
            // setLoca(res.data.userLocation)
        }
    })
}

export default function Profile() {
    const name = useInput('');
    const location = useInput('');
    const age = useInput('');
    const phoneNumber = useInput('');
    const email = useInput('');
    
    
    
    const updateUser = () => {
        // axios.put('')
    }

  return (
    <>
      <div>
        <CInput {...name}></CInput>
        <CInput {...location}></CInput>
        <CInput {...age}></CInput>
        <CInput {...phoneNumber}></CInput>
        <CInput {...email}></CInput>
        <CButton title={'회원정보 수정'} onClick={updateUser}></CButton>
        {/* <Card></Card> */}
      </div>
    </>
  )
}