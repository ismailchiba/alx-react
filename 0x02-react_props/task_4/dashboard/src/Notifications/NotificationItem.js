import React from "react";
import PropTypes from "prop-types";

function NotificationItem({type ="default" , html, value}) {
      return (
         <li data-notification-type = {type} 
         {...(html ? { dangerouslySetInnerHTML: {__html: html }} : {})}
         >
         {value}
         </li>
      );
};

NotificationItem.propTypes = {
      type: PropTypes.string,
      __html: PropTypes.shape({
         html: PropTypes.string
      }),
      value: PropTypes.string
};



export default NotificationItem;

