import React, { useEffect } from 'react'
import './ApplyJob.scss'
import { app } from "../../../../config/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { storage } from "../../../../config/firebase";
import { ref, getDownloadURL, uploadBytesResumable, uploadBytes } from "firebase/storage";
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { candidateAsync } from '../../../../redux/reduce/candidateReduce';
import publicAxios from '../../../../config/pulic.axios';
import { notification } from 'antd';
const db = getFirestore(app);
const collectionRef = doc(db, "doc", "doc1");

export default function ApplyJob({position,company,id,close}) {
  const [urlImage, setUrlImage] = React.useState("");
  const [candidate_id, setCandidate_id] = React.useState("");
  const [infor, setInfor] = React.useState({
    cv_url:"",
    content:"",
    candidate_id:"",
    job_id:""
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.candidate.data);
  useEffect(() => {
    setInfor({ ...infor, candidate_id: user?.id, job_id: id });
  },[user]);
  useEffect(() => {
    dispatch(candidateAsync())
  },[dispatch])

  //firebase
  const changeImage = (e) => {
    let file = e.target.files[0];
    const imageRef = ref(storage, `images/${file.name}`); 
    uploadBytes(imageRef, file).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        console.log(url);
        setUrlImage(url);
        setInfor({ ...infor, cv_url: url}); 
      });
    }).catch((error) => {
      console.error("Upload error:", error); 
    });
  };
    // lay thong tin user

  const getChange = (e) => {
    setInfor({ ...infor, [e.target.name]: e.target.value });
  }

 

  const sendInfor = async () => {
    console.log(infor);
    try {
      const result = await publicAxios.post('/api/v2/jobs/applyJob',infor);
      close(result.data.message,true)
    } catch (error) {
      close(error.response.data.message,false)
    }
  }
  
 
  return (
    <>
    <div className='applyJob__container'>
        <div className='applyJob__back' >
            <span class="material-symbols-outlined">
            arrow_back
            </span>
            <p>Quay lại</p>
        </div>
        <div className='applyJob__content'>
            <h2>Công ty {company?.name} tuyển dụng vị trí {position}</h2>
            <div className='applyJob__content__input'>
              <input
                value={user?.name}
               type="text" placeholder='Tên của bạn' />
            </div>
            <div className='applyJob__content__inputImage'>
              <p className='applyJob__content__inputImage__text'><strong>CV của bạn</strong></p>
              <div className='applyJob__content__inputImage__image'>
                <div className='applyJob__content__inputImage__image--top'>
                  <div className='applyJob__content__inputImage__image--top__circle'>
                    <div className='applyJob__content__inputImage__image--top__circle--inner'>
                    </div>
                  </div>
                  <div className='applyJob__content__inputImage__image--top__text'>
                    <p>Tải lên CV mới</p>
                  </div>

                </div>
                <div className='applyJob__content__inputImage__image--middle'>
                    <input 
                     type="file"
                     name="cv_url"
                     onChange={changeImage}
                     autoFocus
                     />
                </div>
                <div className='applyJob__content__inputImage__image--bottom'>
                    <p>We accept .doc .docx, .pdf files, no password protected, up to 3MB</p>
                </div>

              </div>
              <div className='applyJob__content__inputImage__skill'>
              <p className='applyJob__content__inputImage__skill__text'><strong>Mô tả bản thân</strong></p>
              <p className='applyJob__content__inputImage__skill__textbot'>Kĩ năng, các dự án bạn đã làm hoặc những điều bạn cảm thấy phù hợp với công việc này?</p>
              <textarea 
              className='applyJob__content__inputImage__skill__textarea' 
              placeholder='Kĩ năng, dự án...' name="content"  id="" cols="58" rows="3"
              value={infor.content}
              onChange={getChange}
              ></textarea>
              <p className='applyJob__content__inputImage__skill__textunder'>Dưới 500 từ</p>
              </div>
            </div>
            <div className='applyJob__content__button' onClick={sendInfor}>
              Gửi thông tin
            </div>
        </div>
    </div>
    
    
    
    </>
  )
}
