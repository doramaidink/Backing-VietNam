import React, {useEffect, useState} from "react";
import Header from '../../UI/Nguoidungs/Headers/Header'
import Footer from '../../UI/Nguoidungs/Footer'
import ContentTrangchu from '../../UI/Nguoidungs/ContentTrangchu'
import ChatBot from '../../ChatBot'
import axios from "axios";

 const Trangchu = () => {
   const [data, setData] = useState({
      diaDiemnoibat: []
   });
    useEffect(() =>{
      diaDiemNoiBat();
    },[]);
    const diaDiemNoiBat = async () => {
      try {
        const res = await axios.get('http://backing-vietnam-bpko.onrender.com/');
        setData(res.data);
      } catch (error) {
        console.error('loi:', error);
      }
    } ;    
  return (
    <div>
        <Header/>
        <ContentTrangchu data = {data}/>
        <Footer/>
        <ChatBot/>
    </div>
  )
}
export default Trangchu;
