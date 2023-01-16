import React from 'react';
import "../../Css/ErrorPage.css"
import $ from "jquery";
const ErrorPage = () => {
  
  $(document).mousemove(function (event) {
    $('.torch').css({
      'top': event.pageY,
      'left': event.pageX
    });
  });

  return (
    <div className='ErrorPage'>
      <div className="text">
        <h1>404</h1>
        <h2>Uh, Ohh</h2>
        <h3>Sorry we cant find what you are looking for 'cuz its so dark in here</h3>
      </div>
      <div className="torch"></div>
    </div>
  );
}

export default ErrorPage;
