import css from "./Modal_Edit.module.css";
import { useState } from "react";
import { toRupiah } from "../../../Utils/toRupiahFormat";
import Counter from "../../Counter"
import BASEURL from "../../../Utils/baseURL";
import { Cookie } from "../../../Auth/Cookies";
import Loading from "../../Loading/Loading";
import Popup from "../../Popup/Popup"
import { useNavigate } from "react-router-dom";

export const Modal_Edit = (props) => {
  const { data } = props;
  const [price, setPrice] = useState(data.price);
  const [loading, setLoading] = useState(false)
  const [popup = {
    show: false,
    status: null,
    message: null,
    refresh: false,
  }, setPopup] = useState([])
  const navigate = useNavigate()
  return (
    <>
      {loading && <Loading />}
      {popup.show && <Popup status={popup.status} message={popup.message} refresh={popup.refresh}/>}
      <div className={css.container_modal_edit}>
        <form
          className={css.modal}
          onSubmit={(event) => {
            event.preventDefault();
            setLoading(true)
            const dataForm = Object.fromEntries(
              new FormData(event.target).entries()
            );
            (async () => {
              try{
                const token = Cookie('itemku_token')
                const url = BASEURL()+"/api/shop/dashboard/produk-toko?_method=PATCH"
                const request = await fetch(url, {
                  method: 'POST',
                  headers: {
                    Authorization : token,
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    'product': data.product,
                    'price': dataForm['edit_price'].replace(/\./g, ""),
                    'stock': dataForm['edit_stock'],
                  })
                })
                const response = await  request.json()
                if(request.status === 200){
                  setPopup({show: true, status: 'Success', message: 'Product berhasil diperbarui!', refresh: true})
                }else if(request.status === 403){
                  navigate('/login')
                }else if(request.status === 400){
                  setLoading(false)
                  setPopup({show: true, status: 'Failed', message: 'Product gagal diperbarui!'})
                }else{
                  throw new Error()
                }
              }catch(error){
                setPopup({show: true, status: 'Failed', message: 'Product gagal diperbarui!'})
              }

            })()
          }}
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
          <div className={css.header_text}>Edit Stok dan Harga</div>
          <div className={css.name_product}>{data.name}</div>
          <div className={css.category_product}>{data.category}</div>
          <div className={css.wrapper_input_price}>
            <span>Rp.</span>
            <input
              type="text"
              placeholder="0"
              name="edit_price"
              value={toRupiah(price)}
              onChange={(event) => {
                const changeFormat = event.target.value.replace(/\./g, "");
                setPrice(toRupiah(changeFormat))
              }}
            />
          </div>
          <div className={css.wrapper_input_stock}>
            <span>Stock Produk</span>
            <Counter nameInput="edit_stock" number={data.stock} />
          </div>
          <button className={css.btn_confirm} type="submit">
            Simpan Perubahan
          </button>
        </form>
      </div>
    </>
  );
};
