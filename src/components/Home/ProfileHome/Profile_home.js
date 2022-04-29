import React from "react";
import calendar from "../../../images/calendar.png";

const HomeProfile = () => {
  return (
    <div className="profileHome">
      <div className="myProfile">
        <p id="myProfile_paragraph">My Profile</p>
        <button className="button_setting_card">
          <div className="little_circle1 black"></div>
          <div className="little_circle2 black"></div>
        </button>

        <div className="profile_name_and_photo">
          <div className="circle_photo"></div>
          <div className="name_and_rank">
            <p>Sophia Muller</p>
            <p>Beginner</p>
          </div>
        </div>
      </div>

      <div className="invitation">
        <div>
          <p id="top_text_invitation">Invitation</p>
          <button className="button_setting_card">
            <div className="little_circle1 black"></div>
            <div className="little_circle2 black"></div>
          </button>
        </div>

        <div className="all_invitations">
          <div className="circle_photo_invitation">
            <div className="circle_photo_first_invitation"></div>
            <div className="right_text_invitation">
              <p>Jane Cooper</p>
              <p>Invited you Yoga</p>
            </div>
          </div>

          <div className="circle_photo_invitation">
            <div className="circle_photo_second_invitation"></div>
            <div className="right_text_invitation">
              <p>Jane Cooper</p>
              <p>Invited you Yoga</p>
            </div>
          </div>

          <div className="circle_photo_invitation">
            <div className="circle_photo_third_invitation"></div>
            <div className="right_text_invitation">
              <p>Jane Cooper</p>
              <p>Invited you Yoga</p>
            </div>
          </div>
        </div>
      </div>

      <div className="add_task">
        <p id="header_add_task">Add Task</p>
        <div className="calendar">
          <div className="text_calendar">
            <p>Plan your day by now</p>
            <button>+</button>
          </div>

          <img src={calendar} alt="test"></img>
        </div>
      </div>
    </div>
  );
};

export default HomeProfile;
