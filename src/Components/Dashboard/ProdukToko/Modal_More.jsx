import { useState } from "react";
import css from "./Modal_More.module.css";
import { Link } from "react-router-dom";

export const Modal_More = () => {
  const [deleteModal, setDeleteModal] = useState({ show: false, id: "test" });
  return (
    <>
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
              to="/shop/dashboard/produk/edit"
              className={css.link_edit_detail_product}
            >
              Edit Detail Prouk
            </Link>
            <div
              className={css.delete_product}
              onClick={() => {
                setDeleteModal({ show: true, id: "test" });
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
              console.log(deleteModal.id);
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
