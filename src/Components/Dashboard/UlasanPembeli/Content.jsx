import css from "./Content.module.css";

const Content = () => {
  function fiveStar(star) {
    if (star == 5) {
      return (
        <>
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star.png" alt="star" />
        </>
      );
    } else if (star == 4) {
      return (
        <>
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star_off.png" alt="star" />
        </>
      );
    } else if (star == 3) {
      return (
        <>
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star_off.png" alt="star" />
          <img src="/assets/icon/star_off.png" alt="star" />
        </>
      );
    } else if (star == 2) {
      return (
        <>
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star_off.png" alt="star" />
          <img src="/assets/icon/star_off.png" alt="star" />
          <img src="/assets/icon/star_off.png" alt="star" />
        </>
      );
    } else if (star == 1) {
      return (
        <>
          <img src="/assets/icon/star.png" alt="star" />
          <img src="/assets/icon/star_off.png" alt="star" />
          <img src="/assets/icon/star_off.png" alt="star" />
          <img src="/assets/icon/star_off.png" alt="star" />
          <img src="/assets/icon/star_off.png" alt="star" />
        </>
      );
    }
  }
  return (
    <>
      <div className={css.container_content}>
        <div className={css.rating_toko_text}>Rating Toko</div>
        <div className={css.rate_shop_info}>
          <div className={css.average_star}>
            <img src="/assets/icon/star.png" alt="star" />
            <div>4.9/5.0</div>
          </div>
          <div className={css.all_star_rating}>
            <div className={css.star_5}>
              {fiveStar(5)}
              <span>0</span>
            </div>
            <div className={css.star_4}>
              {fiveStar(4)}
              <span>0</span>
            </div>
            <div className={css.star_3}>
              {fiveStar(3)}
              <span>0</span>
            </div>
            <div className={css.star_2}>
              {fiveStar(2)}
              <span>0</span>
            </div>
            <div className={css.star_1}>
              {fiveStar(1)}
              <span>0</span>
            </div>
          </div>
        </div>

        <div className={css.list_rating}>
          <div className={css.rating_item}>
            <div className={css.username_and_date}>
              <span className={css.name}>CCGV</span>
              <span className={css.date}>12 Juli 2023 20:06:09 WIB</span>
            </div>
            <div className={css.stars_rating}>{fiveStar(1)}</div>
            <div className={css.product_and_category}>
              <div>
                Ulasan untuk
                <span className={css.name_product}>
                  {" "}
                  AKUN BARU CUSTOM NAME
                </span>{" "}
                dari <span className={css.category}>Growtopia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
