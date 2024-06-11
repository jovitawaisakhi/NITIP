import React from 'react';
import Header from '../../components/HeaderFooter/Navbar';
import Footer from '../../components/HeaderFooter/Footer';
import ProfilePic from '../../assets/profile-pic.png';
import ProfileData from '../../components/ItemBox/Data/DataBox';
import './Profile.css';

const ProfilePage: React.FC = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container'>

                    <div className='content-mobile' id='content-profile'>

                        <div id='profile-picture'>
                            <div id='picture'>
                                <img src={ProfilePic} alt="" />
                            </div>
                        </div>

                        <div id='personal-info'>
                            <div>
                                <ProfileData label={"Nama Lengkap"} data={"Jonathan Maverick"} />
                                <ProfileData label={"Nomor Telepon"} data={"08123456789"} />
                                <ProfileData label={"Email"} data={"jonathan.sip@gmail.com"} />
                                <ProfileData label={"Tanggal Lahir"} data={"1 Januari 2004"} />
                            </div>
                            <div id='save-data'>
                                <button type='submit'>Save</button>
                            </div>
                        </div>
                        
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ProfilePage;