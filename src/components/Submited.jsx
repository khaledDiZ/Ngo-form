import React from "react";

const submited = require("../img/submit.png");

const Submited = () => (
  <>
    <div className="not-container">
      <img className="submit" src={submited} alt="submit" />
    </div>
    <div>
      <h2 className="submit-header">تم تسجيل طلبك</h2>
    </div>
  </>
);

export default Submited;
