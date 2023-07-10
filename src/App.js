
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from './ảnh CV.jpg';
import './fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { faPhone, faEnvelope, faCircleInfo, faLocationDot } from '@fortawesome/free-solid-svg-icons';



function App() {
  return (
    <div className="Profile" style={{width: "60%", display: "flex", marginLeft: "20%"}}>
      <div style={{width: "33%", padding: '20px', backgroundColor: "#353a3adb"}}>
        <img src={image} alt='ảnh Cv' style={{width: '80%', margin: 'auto'}}/>
        <div className='Name' style={{color: "#ec8f00", marginTop: '8px', fontSize: '30px', display: 'flex', fontWeight: '600'}}>Lưu Mạnh Tân</div>
        <div style={{color: "#ec8f00", marginTop: '8px', fontSize: '16px', display: 'flex', fontWeight: '500'}}>FRONT-END DEVELOPER</div>

        <div className='Info' style={{color: "#fff", marginTop: '8px', fontSize: '12px'}}>
          <div style={{color: "#ec8f00", marginTop: '8px', fontSize: '16px', fontWeight: '500'}}>Thông tin cá nhân</div>
          <div className='Phone' style={{marginTop: '8px', display: 'flex'}}>
            <FontAwesomeIcon icon={faPhone}/>
            <div>0916642906</div>
          </div>
          <div className='Gmail' style={{marginTop: '8px', display: 'flex'}}>
            <FontAwesomeIcon icon={faEnvelope} />
            <div>manhtanluu@gmail.com</div>
          </div>
          <div className='Github' style={{marginTop: '8px', display: 'flex'}}>
            <FontAwesomeIcon icon={faCircleInfo} />
            <div>https://github.com/dynamite2810</div>
          </div>
          <div className='Location' style={{marginTop: '8px', display: 'flex'}}>
            <FontAwesomeIcon icon={faLocationDot} />
            <div>Dịch Vọng Hậu, Cầu Giấy, Hà Nội</div>
          </div>
        </div>

        <div className="Skill" style={{color: "#ec8f00", marginTop: '8px', fontSize: '16px'}}>
          <div style={{fontWeight: '500'}}>Các kỹ năng</div>
          <div className='Specialized' style={{marginTop: '20px'}}> Chuyên ngành
            <div style={{color: '#fff', fontSize: '12px'}}>HTML, CSS, JS (ES6), TS, ReactJS, NextJS, Redux Toolkit, Tailwind</div>
          </div>
          <div className='English' style={{marginTop: '20px'}}> Tiếng Anh
            <div style={{color: '#fff', fontSize: '12px'}}>Nghe, đọc hiểu ở mức cơ bản</div>
          </div>
          <div className='Other' style={{marginTop: '20px'}}> Kỹ năng mềm khác
            <div style={{color: '#fff', fontSize: '12px'}}>Có thể chơi một số môn thể thao như cầu lông, bóng bàn, bida ... <br></br> Biết lắng nghe, ham học hỏi</div>
          </div>
        </div>
      </div>
      <div className='Container' style={{backgroundColor: '#eee', padding: '20px'}}>
        <div className='Target'>
          <div style={{color: "#ec8f00", fontSize: '20px', fontWeight: '600'}}>MỤC TIÊU NGHỀ NGHIỆP</div>
          <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '500', marginLeft: '30px', marginTop: '20px'}}>- Mong muốn được làm việc trong môi trường làm việc năng động, chuyên nghiệp</div>
          <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '500', marginLeft: '30px', marginTop: '5px'}}>- Hoàn thiện các kỹ năng để trở thành fullstack developer</div>
        </div>

        <div className='Education'>
          <div style={{color: "#ec8f00", fontSize: '18px', fontWeight: '600', marginTop: '30px'}}>HỌC VẤN</div>
          <div style={{display: 'flex', justifyContent: 'space-between', color: '#14abe2', fontSize: '14px', fontWeight: '700', marginLeft: '10px', marginTop: '20px'}}>
            <div>CÔNG NGHỆ THÔNG TIN</div>
            <div>2019 - 2023</div>
          </div>
          <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '700', marginLeft: '10px', marginTop: '10px'}}>Trường Đại học Công Nghệ - ĐHQGHN</div>
        </div>

        <div className='Experience'>
          <div style={{color: "#ec8f00", fontSize: '18px', fontWeight: '600', marginTop: '30px'}}>KINH NGHIỆM LÀM VIỆC</div>
          <div style={{display: 'flex', justifyContent: 'space-between', color: '#14abe2', fontSize: '14px', fontWeight: '600', marginLeft: '10px', marginTop: '20px'}}>
            <div>THỰC TẬP SINH</div>
            <div>20/4/2023 - 6/7/2023</div>
          </div>
          <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '700', marginLeft: '10px', marginTop: '10px'}}>AVEO Global</div>
          <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '400', marginLeft: '10px', marginTop: '20px'}}>Làm dự án E-commerce bằng TypeScript, NextJS, Redux, Tailwind, Ant Design</div>
          <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '700', marginLeft: '10px', marginTop: '20px'}}>Link demo: https://kinkin-management.ddns.net</div>
        </div>

        <div className='Project'>
          <div style={{color: "#ec8f00", fontSize: '18px', fontWeight: '600', marginTop: '30px'}}>DỰ ÁN</div>
          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', color: '#14abe2', fontSize: '14px', fontWeight: '600', marginLeft: '10px', marginTop: '20px'}}>
              <div style={{color: '#ec8f00', fontWeight: '700'}}>WEBSITE CLONE SHOPEE</div>
              <div>10/2022 - 11/2022</div>
            </div>
            <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '400', marginLeft: '10px', marginTop: '10px'}}>Website clone shopee sử dụng HTML, CSS và Responsive</div>
            <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '700', marginLeft: '10px', marginTop: '20px'}}>Link github: https://github.com/dynamite2810/Shopee-Clone </div>
          </div>

          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', color: '#14abe2', fontSize: '14px', fontWeight: '600', marginLeft: '10px', marginTop: '20px'}}>
              <div style={{color: '#ec8f00', fontWeight: '700'}}>WEBSITE TODO-LIST</div>
              <div>6/12/2022 - 9/12/2022</div>
            </div>
            <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '400', marginLeft: '10px', marginTop: '10px'}}>Website sử dụng HTML, CSS, JS giúp thêm, sửa, xoá Todo List</div>
            <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '700', marginLeft: '10px', marginTop: '20px'}}>Link github: https://github.com/dynamite2810/TodoList</div>
          </div>

          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', color: '#14abe2', fontSize: '14px', fontWeight: '600', marginLeft: '10px', marginTop: '20px'}}>
              <div style={{color: '#ec8f00', fontWeight: '700'}}>WEBSITE NGHE NHẠC</div>
              <div>3/1/2023 - 6/1/2023</div>
            </div>
            <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '400', marginLeft: '10px', marginTop: '10px'}}>Website nghe nhạc sử dụng HTML, CSS, JS </div>
            <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '700', marginLeft: '10px', marginTop: '20px'}}>Link github: https://github.com/dynamite2810/Music-Player </div>
          </div>

          <div>
            <div style={{display: 'flex', justifyContent: 'space-between', color: '#14abe2', fontSize: '14px', fontWeight: '600', marginLeft: '10px', marginTop: '20px'}}>
              <div style={{color: '#ec8f00', fontWeight: '700'}}>REDUX PHOTO</div>
              <div>8/4/2023 - 13/4/2023</div>
            </div>
            <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '400', marginLeft: '10px', marginTop: '10px'}}>Sử dụng Redux để thêm, sửa, xoá album ảnh </div>
            <div style={{color: '#14abe2', fontSize: '14px', fontWeight: '700', marginLeft: '10px', marginTop: '20px'}}>Link demo: https://dynamite-photo.surge.sh/</div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
