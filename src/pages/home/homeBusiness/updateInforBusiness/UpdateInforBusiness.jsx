import React from 'react';
import Header from '../../../../components/header/Header';
import FormSearch from '../../../../components/formSearch/FormSearch';
import Footer from '../../../../components/footer/Footer';
import map from '../../../../assets/images/map.jpeg';
import './updateInfoBusinis.scss';

export default function UpdateInforBusiness() {
  const [companyDetail, setCompanyDetail] = React.useState({
    nameCompany: 'FPT Software',
    address:
      'Đường D1, Khu Công Nghệ Cao, Phường Tân Phú, Quận 9, Thành phố Hồ Chí Minh',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/FPT_Software_Logo.png',
    describe: [
      'Velstar is a Shopify Plus agency, and we partner with brands to help them grow, we also do the same with our people!',
      "Here at Velstar, we don't just make websites, we create exceptional digital experiences that consumers love. Our team of designers, developers, strategists, and creators work together to push brands to the next level. From Platform Migration, User Experience & User Interface Design, to Digital Marketing, we have a proven track record in delivering outstanding eCommerce solutions and driving sales for our clients.",
      'The role will involve translating project specifications into clean, test-driven, easily maintainable code. You will work with the Project and Development teams as well as with the Technical Director, adhering closely to project plans and delivering work that meets functional & non-functional requirements. You will have the opportunity to create new, innovative, secure and scalable features for our clients on the Shopify platform',
      "Want to work with us? You're in good company!",
    ],
    policy: [
      'Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on',
      '3+ years of experience in back-end development working either with multiple smaller projects simultaneously or large-scale applications',
      'Experience with HTML, JavaScript, CSS, PHP, Symphony and/or Laravel',
      'Working regularly with APIs and Web Services (REST, GrapthQL, SOAP, etc)',
      'Have experience/awareness in Agile application development, commercial off-the-shelf software, middleware, servers and storage, and database management.',
      'Familiarity with version control and project management systems (e.g., Github, Jira)',
      'Great troubleshooting and analytical skills combined with the desire to tackle challenges head-on',
      'Ambitious and hungry to grow your career in a fast-growing agency',
    ],
    web: 'https://fptsoftware.com/',
    typeCompany: 'OutSource',
  });
  const [ListJob, setListJob] = React.useState([
    {
      Id: 1,
      title: 'Fresher Java Developer',
      type: 'Full-time',
      salary: '2000$',
      location: 'HCM, TP. HCM',
      logo: 'https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png',
      companyName: 'Google',
    },
    {
      Id: 2,
      title: 'Fresher Java Developer',
      type: 'Full-time',
      salary: '2000$',
      location: 'HCM, TP. HCM',
      logo: 'https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png',
      companyName: 'Google',
    },
    {
      Id: 3,
      title: 'Fresher Java Developer',
      type: 'Full-time',
      salary: '2000$',
      location: 'HCM, TP. HCM',
      logo: 'https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png',
      companyName: 'Google',
    },
    {
      Id: 4,
      title: 'Fresher Java Developer',
      type: 'Full-time',
      salary: '2000$',
      location: 'HCM, TP. HCM',
      logo: 'https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png',
      companyName: 'Google',
    },
    {
      Id: 5,
      title: 'Fresher Java Developer',
      type: 'Full-time',
      salary: '2000$',
      location: 'HCM, TP. HCM',
      logo: 'https://cdn.pixabay.com/photo/2017/01/19/09/11/logo-google-1991840_1280.png',
      companyName: 'Google',
    },
  ]);
  const [ListUser, setListUser] = React.useState([
    {
      id: 1,
      name: 'Nguyen Van A',
      avarta:
        'https://img.freepik.com/premium-vector/man-character_665280-46970.jpg',
      type: 'Fresher',
      field: 'Front-end',
      skill: ['ReactJs', 'NodeJs'],
      language: ['N2', 'Ielts 7.0'],
      address: 'Ha Noi,Viet Nam',
    },
    {
      id: 2,
      name: 'Nguyen Van A',
      avarta:
        'https://img.freepik.com/premium-vector/man-character_665280-46970.jpg',
      type: 'Fresher',
      field: 'Front-end',
      skill: ['ReactJs', 'NodeJs'],
      language: ['N2', 'Ielts 7.0'],
      address: 'Ha Noi,Viet Nam',
    },
    {
      id: 3,
      name: 'Nguyen Van A',
      avarta:
        'https://img.freepik.com/premium-vector/man-character_665280-46970.jpg',
      type: 'Fresher',
      field: 'Front-end',
      skill: ['ReactJs', 'NodeJs'],
      language: ['N2', 'Ielts 7.0'],
      address: 'Ha Noi,Viet Nam',
    },
  ]);
  return (
    <>
      <div>
        <div className="user-ListJob-title">
          <p>
            <span>Trang chủ / Thông tin doanh nghiệp /</span> Doanh nghiệp của
            tôi{' '}
          </p>
        </div>
        <div className="user-companyView" style={{ marginBottom: '24px',width:"100vw",padding:"0 7vw" }}>
          <div className="user-companyView-info">
            <div className="user-companyView-info-company">
              <div className="user-companyView-info-company-logo">
                <img width={96} src={companyDetail.logo} />
              </div>
              <div style={{ marginLeft: '24px' }}>
                <p className="user-companyView-info-company-name">
                  {companyDetail.nameCompany}
                </p>
                <p style={{ fontSize: '14px', color: '#5E6670' }}>
                  <span>
                    <i
                      style={{ color: 'black', marginRight: '8px' }}
                      class="fa-solid fa-user"
                    ></i>{' '}
                    200-550 nhân viên
                  </span>{' '}
                  <span style={{ marginLeft: '32px' }}>
                    {' '}
                    <i
                      style={{ color: 'red', marginRight: '8px' }}
                      class="fa-solid fa-heart"
                    ></i>{' '}
                    100 người theo dõi
                  </span>
                </p>
                <p style={{ marginLeft: '24px' }}>
                  <span className="user-companyView-info-company-type">
                    {companyDetail.typeCompany}
                  </span>{' '}
                  <span className="user-companyView-info-company-verified">
                    verified
                  </span>
                </p>
                <p className="user-companyView-info-company-web">
                  {companyDetail.web}
                </p>
              </div>
            </div>
            <div className="user-companyView-info-feature">
              <button>Chỉnh sửa</button>
            </div>
          </div>
        </div>
        <div className='user-companyView-describeMap' style={{ display: 'flex', width: '1320px', margin: '0 auto',marginBottom: '100px' }}>
          <div className="user-companyView-describe">
            <p style={{ fontWeight: '500', fontSize: '18px', color: 'black' }}>
              Mô tả về công ty{' '}
              <span>
                <i
                  style={{ color: 'red', marginLeft: '8px' }}
                  class="fa-regular fa-pen-to-square"
                ></i>
              </span>
            </p>
            {companyDetail.describe.map((item, index) => {
              return (
                <p style={{ marginBottom: '16px' }} key={index}>
                  {item}
                </p>
              );
            })}
            <p style={{ fontWeight: '500', fontSize: '18px', color: 'black' }}>
              Chính sách
            </p>
            {companyDetail.policy.map((item, index) => {
              return <li key={index}>{item}</li>;
            })}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: '100px',
              }}
            >
              
            </div>
          </div>
          <div className="user-companyView-orther">
            <div className="user-companyView-orther-local">
              <p className="user-companyView-orther-title">
                {' '}
                <i class="fa-regular fa-compass"></i> Địa chỉ công ty
              </p>
              <p className="user-companyView-orther-address">
                {companyDetail.address}
              </p>
            </div>
            <div className="user-companyView-orther-map">
              <p>
                <i class="fa-regular fa-map"></i> Xem trên Maps
              </p>
              <img src={map} alt="" />
            </div>
            <div className='user-companyView-orther-social-container'
              style={{
                padding: '32px',
                width: '100%',
                height: '140px',
                border: '2px solid #E7F0FA',
                borderRadius: '8px',
              }}
            >
              <p
                style={{
                  fontWeight: '500',
                  height: '28px',
                  fontSize: '18px',
                  color: 'black',
                }}
              >
                chia sẻ thông tin công ty đến mọi người:
              </p>
              <div className="user-companyView-orther-social">
                <p style={{ width: '150px', height: '40px' }}>
                  <i class="fa-solid fa-link"></i> Coppy links
                </p>
                <p>
                  <i class="fa-brands fa-linkedin"></i>
                </p>
                <p>
                  <i class="fa-brands fa-square-facebook"></i>
                </p>
                <p>
                  <i class="fa-brands fa-twitter"></i>
                </p>
                <p>
                  <i class="fa-regular fa-envelope"></i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      
    </>
  );
}
