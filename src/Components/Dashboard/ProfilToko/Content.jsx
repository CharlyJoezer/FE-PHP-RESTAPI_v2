import { useRef, useState } from "react";
import css from "./Content.module.css";
import BASEURL from "../../../Utils/baseURL";
import { Cookie } from "../../../Auth/Cookies";
import Loading from "../../Loading/Loading"
import Popup from "../../Popup/Popup"

export const Content = (props) => {
  const dataShop = props.data
  const inputFile = useRef(null);
  const imageShop = useRef(null);
  const [isImageChange, setIsImageChange] = useState(false);
  const [loading, setLoading] = useState(false)
  const [popup = {
    show: false,
    status: null,
    message: null,
    refresh: false
  }, setPopup] = useState([])

  function handleClickChangeImage(){
    const input = inputFile.current;
    input.click();
  }

  return (
    <>
      {loading && <Loading />}
      {popup.show && <Popup status={popup.status} message={popup.message} />}
      <div className={css.container_content}>
        <div className={css.box_profil}>
          <div className={css.wrapper_image_shop}>
            <img
              ref={imageShop}
              onClick={handleClickChangeImage}
              className={css.image_shop}
              src={BASEURL()+'/api/image/shop/'+dataShop.image}
              alt="profil-toko"
            />
            <svg
              onClick={handleClickChangeImage}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#aaaaa"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12V11.5C20 10.9477 20.4477 10.5 21 10.5C21.5523 10.5 22 10.9477 22 11.5V12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2H12.5C13.0523 2 13.5 2.44772 13.5 3C13.5 3.55228 13.0523 4 12.5 4H12Z"
                  fill="#555"
                ></path>{" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2156 2.82088C17.7412 2.29528 18.4541 2 19.1974 2C19.9407 2 20.6535 2.29528 21.1791 2.82088C21.7047 3.34648 22 4.05934 22 4.80265C22 5.54596 21.7047 6.25883 21.1791 6.78443L20.396 7.56757C20.0055 7.9581 19.3723 7.9581 18.9818 7.56757L16.4324 5.01824C16.0419 4.62771 16.0419 3.99455 16.4324 3.60402L17.2156 2.82088ZM15.0182 6.43245C14.6277 6.04192 13.9945 6.04192 13.604 6.43245L9.14269 10.8938C9.01453 11.0219 8.92362 11.1825 8.87966 11.3583L8.02988 14.7575C7.94468 15.0982 8.04453 15.4587 8.29291 15.7071C8.54129 15.9555 8.90178 16.0553 9.24256 15.9701L12.6417 15.1204C12.8175 15.0764 12.9781 14.9855 13.1062 14.8573L17.5676 10.396C17.9581 10.0055 17.9581 9.37231 17.5676 8.98179L15.0182 6.43245Z"
                  fill="#555"
                ></path>{" "}
              </g>
            </svg>
          </div>
          <div className={css.biodata_shop}>
            <div className={css.name_shop}>{dataShop.name}</div>
            <div className={css.status_shop}>Status Toko : {dataShop.status}</div>
          </div>
        </div>
        <form className={css.form_image_shop} onSubmit={(e)=>{
          e.preventDefault();
          setLoading(true)
          setPopup({show: false, status: null, message: null})
          const data = Object.fromEntries(
            new FormData(e.target).entries()
          );
          (async () => {
            try{
              const token = Cookie('itemku_token')
              const url = BASEURL()+'/api/shop/dashboard/profil-toko?_method=PATCH'
              const formData = new FormData()
              formData.append('image_shop', data['image_shop'])
              const request = await fetch(url, {
                method : "POST",
                headers : {
                  'Authorization' : token
                },
                body : formData
              })

              const response = await request.json()
              if(request.status === 200){
                setLoading(false)
                setPopup({show: true, status: 'Success', message: 'Profil diperbarui!'})
                setIsImageChange(false);
              }else if(request.status === 400){
                setLoading(false)
                const errorMsg = response['data']['image_shop'][0]
                if(response['data']['image_shop'].length > 0){
                  setPopup({show: true, status: 'Failed', message: errorMsg})
                }else{
                  setPopup({show: true, status: 'Failed', message: 'Gagal memperbarui Profil!'})
                }
              }else if(request.status === 500){
                setLoading(false)
                throw new Error()
              }

            }catch(error){
              setPopup({show: true, status: 'Failed', message: 'Server sedang bermasalah!'})
            }
          })()

        }}>
          <input
            type="file"
            ref={inputFile}
            name="image_shop"
            accept=".jpg, .jpeg, .png"
            onChange={(event) => {
              const selectedFile = event.target.files[0];
              setIsImageChange(true);
              if (selectedFile) {
                const reader = new FileReader();
                const preview = imageShop.current
                reader.onload = function () {
                    preview.src = reader.result
                };

                reader.readAsDataURL(selectedFile);
              }
            }}
            visbility="hidden"
          />
          {isImageChange && (
            <button className={css.save_edit_btn} type="submit">
              Simpan Perubahan
            </button>
          )}
        </form>
      </div>
    </>
  );
};

export default Content;
