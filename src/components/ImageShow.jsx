import { useEffect } from "react";
import { useState } from "react";
import Modal from "./Modal";
import mainImgData from '../../data/imageFile.json'

const ImageShow = () => {
  const [loadImage, setLoadImage] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [imgData, setImgData] = useState();
  const [idData, setIdData] = useState();

  useEffect(() => {
    setLoadImage(mainImgData)
  }, []);
  // modal details handler

  const modalHandler = (url, id) => {
    setShowModal(true)
    setImgData(url)
    setIdData(id)
  }
  return (
    <>
      <div className="main-container">
        <div className="image-container">
          {loadImage.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.url} alt="" onClick={() => modalHandler(item.url, item.id)} />
                <div>
                  <button
                    className="bg-emerald-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 mt-5"
                    type="button"
                    onClick={() => modalHandler(item.url, item.id)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          imgData={imgData}
          idData={idData}
        />
      </div>
    </>
  );
};

export default ImageShow;
