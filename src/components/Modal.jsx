/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

const Modal = ({ showModal, setShowModal, idData, imgData }) => {
  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Fiver Gig Image Bundle</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-3 flex-auto">
                  <div className="modal-container">
                    <div className="right-img">
                      <p className="my-4 text-slate-500 text-lg leading-relaxed">
                        <img src={imgData} alt="" />
                      </p>
                    </div>
                    <div className="left-content">
                      <div className="id-content">
                        <span>Image Bundle Id: <b>#2025-#{idData}</b></span>
                      </div>
                      <h2>এই গিগ ইমেজ বান্ডেলটি আপনি ব্যবহার করতে পারেন। দয়া করে নিচে দেয়া আমাদের হোয়াটসঅ্যাপ এ যোগাযোগ করুন, আমরা আপনাকে ইমেজ ফাইল গুলো আপনার ইমেইলে মেইল করে দিবো। এই গিগ ইমেজ বান্ডেলটির দাম পড়বে মাত্র ৫০ টাকা। আমাদের হোয়াটসঅ্যাপ এ আপনার ইমেল এবং ইমেজ বান্ডেলটির আইডি লিখে মেসেজ করুন। ধন্যবাদ।</h2>
                    </div>
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <a
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                    href='https://wa.me/+8801318717478'
                    target="_blank" rel="noreferrer"
                  >
                    Message Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
