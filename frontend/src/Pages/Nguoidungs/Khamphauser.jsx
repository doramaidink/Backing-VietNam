
import React, { useEffect, useState } from 'react';
import Header from '../../UI/Nguoidungs/Headers/HeaderTaiKhoankhampha'
import Footer from '../../UI/Nguoidungs/Footer'
import ContentKhamphauser from '../../UI/Nguoidungs/ComntentKhamphauser'

 const Khampha = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser =
      JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(localStorage.getItem("authUser")) ||
      JSON.parse(localStorage.getItem("currentUser"));

    if (savedUser) {
      setUser(savedUser);
    }
  }, []);
  return (
    <div>
        <Header user={user}/>
        <div style={{ height: "20px" }}></div>
        <ContentKhamphauser user={user}/>
        <Footer/>
    </div>
  )
}
export default Khampha;