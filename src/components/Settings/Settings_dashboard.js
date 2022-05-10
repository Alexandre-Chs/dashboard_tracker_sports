import React from "react";

const Settings_dashboard = () => {
  return (
    <div className="container_settings_content">
      <div className="users_settings">
        <h4>Account Settings</h4>
        <p id="paragraph_settings">
          Here you can change the email address you use on website and your
          password
        </p>

        <div className="input_block_settings">
          <label>Email address</label>
          <div className="input_settings">
            <div className="label_settings">
              <input type="text" id="users" name="users" placeholder="contact@tracker.com"></input>
            </div>
            <div>
              <button>CHANGE</button>
            </div>
          </div>
        </div>

        <div className="input_block_settings">
          <label>Password</label>
          <div className="input_settings">
            <div className="label_settings_password">
              <input type="password" id="password_current" name="password" placeholder="Current password"></input>
              <input type="password" id="password_new" name="password" placeholder="New password"></input>
              <input type="password" id="password_confirm" name="password" placeholder="Confirm password"></input>
            </div>
            <div>
              <button>UPDATE</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Settings_dashboard;
