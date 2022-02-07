import { useRef, useState, useEffect } from "react";

import "./style.css";

export default function User() {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState();
  const fileInputRef = useRef();

  // console.log("preview " + preview);

  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    } else {
      setPreview(null);
    }
  }, [image]);

  return (
    <div>
      <div className="row user-container">
        <h3 className="user-heading">User Information</h3>
        <div className="col-sm-6 col-md-5 col-lg-6">
          <form className="user-form">
            {preview ? (
              <img
                className="user-image"
                src={preview}
                onClick={() => {
                  setImage(null);
                  setPreview(null);
                }}
                alt="user prifile pic"
              />
            ) : (
              <button
                id="user-btn"
                onClick={(event) => {
                  event.preventDefault();
                  fileInputRef.current.click();
                }}
              >
                Add Image
              </button>
            )}
            <input
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              accept="image/*"
              onChange={(event) => {
                const file = event.target.files[0];

                setImage(file);
              }}
            />
          </form>
        </div>
        <div className="col-sm-6 col-md-5 col-lg-6 user-info">
          <p>User Name: </p>
          <p>Mobile: </p>
        </div>
        <div className="row">
          <div className="col">
            <button className="btn btn-success user-logout">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
