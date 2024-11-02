import React, { useState } from "react";
import Header from "../../components/HeaderFooter/Navbar";
import Footer from "../../components/HeaderFooter/Footer";
import ProfilePic from "../../assets/profile-pic.png";
import ProfileData from "../../components/ItemBox/Data/DataBox";
import "./Profile.css";

const ProfilePage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "Jonathan Maverick",
    phone: "08123456789",
    email: "jonathan.sip@gmail.com",
    birthDate: "1 Januari 2004",
  });

  const handleInputChange =
    (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [field]: e.target.value });
    };

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="content-mobile" id="content-profile">
            <div id="profile-picture">
              <div id="picture">
                <img src={ProfilePic} alt="" />
              </div>
            </div>
            <div id="personal-info">
              <div>
                <ProfileData
                  label="Nama Lengkap"
                  value={formData.name}
                  inputOnChange={handleInputChange("name")}
                />
                <ProfileData
                  label="Nomor Telepon"
                  value={formData.phone}
                  inputOnChange={handleInputChange("phone")}
                />
                <ProfileData
                  label="Email"
                  value={formData.email}
                  inputOnChange={handleInputChange("email")}
                />
                <ProfileData
                  label="Tanggal Lahir"
                  value={formData.birthDate}
                  inputOnChange={handleInputChange("birthDate")}
                />
              </div>
              <div id="save-data">
                <button type="submit">Save</button>
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
