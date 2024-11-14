import React from "react";
import $ from "jquery";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";

const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
});

const handleClick = () => {
  console.log("Close button has been clicked");
  $(".Notifications").hide();
};

function Notifications({ displayDrawer, listNotifications }) {
  return (
    <>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer && (
        <div className="Notifications">
          <button
            style={{
              color: "#3a3a3a",
              fontWeight: "bold",
              background: "none",
              border: "none",
              fontSize: "15px",
              position: "absolute",
              right: "1px",
              top: "1px",
              cursor: "pointer",
            }}
            aria-label="Close"
            onClick={handleClick}
          >
            <img
              src={closeIcon}
              alt="close-button"
              width="30px"
              style={{ position: "relative", margin: "10px" }}
            />
          </button>
          <p id="notification-title">Here is the list of notifications</p>
          <ul>
            { listNotifications.length === 0 ? (
              <NotificationItem type="default" value="New course available" />
            ) : (
                listNotifications.map(({id, __html, type, value}) => (
                <NotificationItem
                  key={id}
                  type={type}
                  html={__html}
                  value={value}
                />
                ))
            )}

            {/* <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            /> */}
          </ul>
        </div>
      )}
    </>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
export default Notifications;
