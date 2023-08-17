import BASEURL from "../../Utils/baseURL";
import css from "./Content.module.css";
import { Link } from "react-router-dom";
import {toRupiah} from "../../Utils/toRupiahFormat"

const Content = (props) => {
  const product = props.product;
  return (
    <>
      <div className={css.container_content}>
        <div className={css.product_image}>
          <img
            src={BASEURL()+'/api/image/product/'+product.gambar_produk}
            alt="test"
          />
        </div>
        <div className={css.product_about}>
          <div className={css.product_name}>{product.nama_produk}</div>
          <div className={css.product_category}>{product.kategori_produk}</div>
          <div className={css.product_price}>
            Rp {toRupiah(product.harga_produk.toString())} <span>/ 1 {product.tipe_kategori_produk}</span>
          </div>

          <div className={css.product_statistic}>
            <div className={css.statistic_item}>
              <img src="/assets/icon/min_pembelian.png" alt="minimal_pembelian" />
              <div>Minimal Pembelian</div>
              <span>{product.min_pembelian}</span>
            </div>
            <div className={css.statistic_item}>
              <img src="/assets/icon/transaction_success.png" alt="transaction_success" />
              <div>Transaksi Sukses</div>
              <span>{product.transaksi_berhasil}</span>
            </div>
            <div className={css.statistic_item}>
              <img src="/assets/icon/duration_transaction.png" alt="duration_transaction" />
              <div>Waktu Pengiriman</div>
              <span>{product.durasi_transaksi}</span>
            </div>
          </div>

          <div className={css.hor_line}></div>

          <div className={css.shop_about_wrapper}>
            <div className={css.header}>Profil Toko</div>
            <Link className={css.shop_about}>
              <img
                src={BASEURL()+'/api/image/shop/'+product.gambar_toko}
                alt="shop"
              />
              <div className={css.shop_profil}>
                <div className={css.shop_profil_name}>Lopix Store</div>
                <div className={css.shop_profil_active}>
                  {product.status_toko}
                </div>
              </div>
            </Link>
          </div>

          <div className={css.hor_line}></div>

          <div className={css.product_desc}>
            <div className={css.desc_header}>Deskripsi Produk</div>
            <div className={css.desc_content}>
              {product.desk_produk}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
