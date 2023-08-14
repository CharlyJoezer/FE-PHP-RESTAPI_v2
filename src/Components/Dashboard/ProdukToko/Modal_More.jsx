import { useState } from "react";
import css from "./Modal_More.module.css";
import { Link, useNavigate } from "react-router-dom";
import BASEURL from "../../../Utils/baseURL";
import { Cookie } from "../../../Auth/Cookies";
import Loading from "../../Loading/Loading";
import Popup from "../../Popup/Popup";

export const Modal_More = (props) => {
  const product = props.data
  const [deleteModal, setDeleteModal] = useState({ show: false, id: product.id_product });
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [popup = {
    show: false,
    status: null,
    message: null,
    refresh: false,
  }, setPopup] = useState([])
  return (
    <>
      {loading && <Loading />}
      {popup.show && <Popup status={popup.status} message={popup.message} refresh={popup.refresh}/>}
      <div className={css.container_modal_more}>
        <div
          className={css.modal}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div
            style={{
              width: "8%",
              height: "5px",
              borderRadius: "10px",
              backgroundColor: "grey",
              margin: "0 auto",
            }}
          ></div>
          <div className={css.header_text}>Pengaturan Produk</div>
          <div className={css.list_setting}>
            <Link
              to={"/shop/dashboard/produk/edit/"+product.id_product}
              className={css.link_edit_detail_product}
            >
              Edit Detail Prouk
            </Link>
            <div
              className={css.delete_product}
              onClick={() => {
                setDeleteModal({ show: true, id: product.id_product });
              }}
            >
              Hapus Produk
            </div>
          </div>
        </div>
      </div>
      {deleteModal.show && (
        <div
          className={css.container_modal_delete}
          onClick={(e) => {
            e.stopPropagation();
            setDeleteModal({ show: false, id: null });
          }}
        >
          <form
            className={css.modal_delete}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onSubmit={(e) => {
              e.preventDefault();
              (async () => {
                try{
                  setPopup({show:false, status: null, message: null, refresh: false})
                  setLoading(true)
                  const token = Cookie('itemku_token')
                  const url = BASEURL()+'/api/shop/dashboard/produk-toko'
                  const request = await fetch(url, {
                    method: 'DELETE',
                    headers: {
                      Authorization: token,
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({product : deleteModal.id})
                  })
                  const response = await request.json()
                  if(request.status === 200){
                    setPopup({show: true, status: 'Success', message: 'Product berhasil dihapus!', refresh: true})
                  }else if(request.status === 400){
                    setLoading(false)
                    setPopup({show: true, status: 'Failed', message: 'Gagal menghapus product!'})
                  }else if(request.status === 409){
                    setLoading(false)
                    setPopup({show: true, status: 'Failed', message: response.message})
                  }else if(request.status === 403){
                    navigate('/login')
                  }else{
                    throw new Error("500")
                  }
                }catch(error){
                  setPopup({show: true, status: 'Failed', message: 'Server sedang bermasalah!'})
                }
              })()
            }}
          >
            <div className={css.modal_delete_text}>
              Apakah Kamu yakin untuk menghapus produk ini ?
            </div>
            <div className={css.list_action_btn}>
              <button
                className={css.delete_cancel}
                type="reset"
                onClick={() => setDeleteModal({ show: false, id: null })}
              >
                Batalkan
              </button>
              <button className={css.delete_confirm} type="submit">
                Ya
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};
