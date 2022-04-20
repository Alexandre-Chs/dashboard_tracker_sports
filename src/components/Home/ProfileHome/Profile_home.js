import React from "react";

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
          <p>Invitation</p>
          <button className="button_setting_card">
            <div className="little_circle1 black"></div>
            <div className="little_circle2 black"></div>
          </button>
        </div>

        <div>
          <div className="circle_photo_invitation">
            <div>
              <p>Jane Cooper</p>
              <p>Invited you Yoga</p>
            </div>
          </div>

          <div className="circle_photo_invitation">
            <div>
              <p>Jane Cooper</p>
              <p>Invited you Yoga</p>
            </div>
          </div>

          <div className="circle_photo_invitation">
            <div>
              <p>Jane Cooper</p>
              <p>Invited you Yoga</p>
            </div>
          </div>
        </div>
      </div>

      <div className="add_task">
        <p>Add task</p>
      </div>
    </div>
  );
};

export default HomeProfile;
