import React from 'react';
import '../CSS/Chat.css'; 

import Navbar from './Navbar';
const Chat = () => {
  return (
   <div>
	<Navbar/>
	<div className="container-fluid h-100">
      <div className="row justify-content-center">
        {/* Left side with contacts */}
        <div className="col-md-4 col-xl-4 chat">
        <div className="card mb-sm-3 mb-md-0 contacts_card">
					<div className="card-header">
						<div className="input-group">
							<input type="text" placeholder="Search..." name="" className="form-control search" />
							<div className="input-group-prepend">
								<span className="input-group-text search_btn"><i className="fas fa-search"></i></span>
							</div>
						</div>
					</div>
					<div className="card-body contacts_body">
						<ul className="contacts">
							<li className="active">
								<div className="d-flex bd-highlight">
									<div className="img_cont">
										<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
											className="rounded-circle user_img" />
										<span className="online_icon"></span>
									</div>
									<div className="user_info">
										<span>Khalid Charif</span>
										{/* <!-- <p>Online</p> --> */}
									</div>
								</div>
							</li>
							<li>
								<div className="d-flex bd-highlight">
									<div className="img_cont">
										<img src="https://2.bp.blogspot.com/-8ytYF7cfPkQ/WkPe1-rtrcI/AAAAAAAAGqU/FGfTDVgkcIwmOTtjLka51vineFBExJuSACLcBGAs/s320/31.jpg"
											className="rounded-circle user_img"/>
										<span className="online_icon offline"></span>
									</div>
									<div className="user_info">
										<span>Chaymae Naim</span>
										{/* <!-- <p>Left 7 mins ago</p> --> */}
									</div>
								</div>
							</li>
							<li>
								<div className="d-flex bd-highlight">
									<div className="img_cont">
										<img src="https://i.pinimg.com/originals/ac/b9/90/acb990190ca1ddbb9b20db303375bb58.jpg"
											className="rounded-circle user_img" />
										<span className="online_icon"></span>
									</div>
									<div className="user_info">
										<span>Sami Rafi</span>
										{/* <!-- <p>Online</p> --> */}
									</div>
								</div>
							</li>
							<li>
								<div className="d-flex bd-highlight">
									<div className="img_cont">
										<img src="https://avatars.hsoubcdn.com/ed57f9e6329993084a436b89498b6088?s=256"
											className="rounded-circle user_img" />
										<span className="online_icon offline"></span>
									</div>
									<div className="user_info">
										<span>Hassan Agmir</span>
										{/* <!-- <p>Left 30 mins ago</p> --> */}
									</div>
								</div>
							</li>
							<li>
								<div className="d-flex bd-highlight">
									<div className="img_cont">
										<img src="https://static.turbosquid.com/Preview/001214/650/2V/boy-cartoon-3D-model_D.jpg"
											className="rounded-circle user_img" />
										<span className="online_icon offline"></span>
									</div>
									<div className="user_info">
										<span>Abdou Chatabi</span>

									</div>
								</div>
							</li>
						</ul>
					</div>
					<div className="card-footer"></div>
				</div>

        </div>

        {/* Right side with chat */}
        <div className="col-md-8 col-xl-8 chat">
          {/* <div className="card">
            <div className="card-header msg_head">
            </div>
            <div className="card-body msg_card_body">
            </div>
            <div className="card-footer">
            </div>
          </div> */}
          				<div className="card">
					<div className="card-header msg_head">
						<div className="d-flex bd-highlight">
							<div className="img_cont">
								<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg"
									className="rounded-circle user_img" />
								<span className="online_icon"></span>
							</div>
							<div className="user_info">
								<span>khalid Charif</span>

							</div>
							<div className="video_cam">

							</div>
						</div>
						<span id="action_menu_btn"><i className="fas fa-ellipsis-v"></i></span>
						<div className="action_menu">
							<ul>
								<li><i className="fas fa-user-circle"></i> View profile</li>

								<li><i className="fas fa-ban"></i> Block</li>
							</ul>
						</div>
					</div>
					<div className="card-body msg_card_body">
						<div className="d-flex justify-content-start mb-4">

							<div className="msg_cotainer">
								Hi, how are you samim?
								{/* <!-- <span className="msg_time">8:40 AM, Today</span> --> */}
							</div>
						</div>
						<div className="d-flex justify-content-end mb-4">
							<div className="msg_cotainer_send">
								Hi Khalid i am good tnx how about you?
								{/* <!-- <span className="msg_time_send">8:55 AM, Today</span> --> */}
							</div>

						</div>
						<div className="d-flex justify-content-start mb-4">

							<div className="msg_cotainer">
								I am good too, thank you for your chat template
								{/* <!-- <span className="msg_time">9:00 AM, Today</span> --> */}
							</div>
						</div>
						<div className="d-flex justify-content-end mb-4">
							<div className="msg_cotainer_send">
								You are welcome
								{/* <!-- <span className="msg_time_send">9:05 AM, Today</span> --> */}
							</div>

						</div>
						<div className="d-flex justify-content-start mb-4">

							<div className="msg_cotainer">
								I am looking for your next templates
								{/* <!-- <span className="msg_time">9:07 AM, Today</span> --> */}
							</div>
						</div>
						<div className="d-flex justify-content-end mb-4">
							<div className="msg_cotainer_send">
								Ok, thank you have a good day
								{/* <!-- <span className="msg_time_send">9:10 AM, Today</span> --> */}
							</div>

						</div>
						<div className="d-flex justify-content-start mb-4">

							<div className="msg_cotainer">
								Bye, see you
								{/* <!-- <span className="msg_time">9:12 AM, Today</span> --> */}
							</div>
						</div>
					</div>
					<div className="card-footer">
						<div className="input-group">
							<div className="input-group-append">
								<span className="input-group-text attach_btn"><i className="fas fa-paperclip"></i></span>
							</div>
							<textarea name="" className="form-control type_msg"
								placeholder="Type your message..."></textarea>
							<div className="input-group-append">
								<span className="input-group-text send_btn"><i className="fas fa-location-arrow"></i></span>
							</div>
						</div>
					</div>
				</div>

        </div>
      </div>
    </div>
   </div>
  );
};


export default Chat;
