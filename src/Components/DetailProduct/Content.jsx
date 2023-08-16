import css from "./Content.module.css";
import { Link } from "react-router-dom";

const Content = (props) => {
  const product = props.product;
  return (
    <>
      <div className={css.container_content}>
        <div className={css.product_image}>
          <img
            src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F202325%2Fgssphrlpip6a7swcf46tbw.jpg&w=1033&q=75"
            alt="test"
          />
        </div>
        <div className={css.product_about}>
          <div className={css.product_name}>AKUN BARU + CUSTOM NAME</div>
          <div className={css.product_category}>Growtopia</div>
          <div className={css.product_price}>
            Rp 5000 <span>/ 1 Product</span>
          </div>

          <div className={css.product_statistic}>
            <div className={css.statistic_item}>
              <img src="/assets/icon/min_pembelian.png" alt="minimal_pembelian" />
              <div>Minimal Beli:</div>
              <span>1</span>
            </div>
            <div className={css.statistic_item}>
              <img src="/assets/icon/transaction_success.png" alt="transaction_success" />
              <div>Transaksi Sukses:</div>
              <span>2999</span>
            </div>
            <div className={css.statistic_item}>
              <img src="/assets/icon/duration_transaction.png" alt="duration_transaction" />
              <div>Waktu Pengiriman:</div>
              <span>20 menit</span>
            </div>
          </div>

          <div className={css.hor_line}></div>

          <div className={css.shop_about_wrapper}>
            <div className={css.header}>Profil Toko</div>
            <Link className={css.shop_about}>
              <img
                src="https://imgop.itemku.com/?url=https%3A%2F%2Fd1x91p7vw3vuq8.cloudfront.net%2Fitemku-upload%2F20211013%2Fp0el1iqv1se7abjmy6l4np.png&w=48&q=75"
                alt="shop"
              />
              <div className={css.shop_profil}>
                <div className={css.shop_profil_name}>Lopix Store</div>
                <div className={css.shop_profil_active}>
                  Aktif 20 menit lalu
                </div>
              </div>
            </Link>
          </div>

          <div className={css.hor_line}></div>

          <div className={css.product_desc}>
            <div className={css.desc_header}>Deskripsi Produk</div>
            <div className={css.desc_content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              tempora quod reiciendis ut atque quia aliquid, vero voluptatibus
              mollitia explicabo. Fuga corporis minima deserunt illo amet error,
              laboriosam debitis fugiat consectetur voluptate id vel eveniet
              pariatur ab assumenda labore blanditiis porro consequatur dolor!
              Et tenetur ab amet, dolore minima aspernatur quisquam tempore
              sapiente fugiat facere harum rerum, odit consequatur praesentium
              ex eaque non pariatur sed nihil accusantium cum deleniti corrupti.
              Mollitia tempore voluptatibus enim corrupti provident similique
              voluptatem eveniet obcaecati vero odit necessitatibus odio fugit,
              ut placeat soluta assumenda nemo at veniam cumque recusandae. Aut
              temporibus porro ratione sequi facilis?
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
