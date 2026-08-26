"use client";

import styles from "./styles.module.css";

const menus = [
  "거래내역&북마크",
  "포인트 사용 내역",
  "비밀번호 변경",
];

export default function MyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.screen}>
        <div className={styles.container}>
          <h1 className={styles.pageTitle}>마이 페이지</h1>

          <section className={styles.infoSection}>
            <h2 className={styles.sectionTitle}>내 정보</h2>

            <div className={styles.userRow}>
              <div className={styles.profile}>
                <div className={styles.profileImage}>사</div>
                <span>김상훈</span>
              </div>

              <p className={styles.point}>23,000 P</p>
            </div>

            <nav className={styles.menuList} aria-label="내 정보 메뉴">
              {menus.map((menu) => (
                <button
                  key={menu}
                  type="button"
                  className={styles.menuButton}
                >
                  <span>{menu}</span>
                  <span aria-hidden="true">›</span>
                </button>
              ))}
            </nav>
          </section>
          <section className={styles.productsSection}>
            <h2 className={styles.sectionTitle}>나의 상품</h2>

            <nav className={styles.productTabs} aria-label="상품 메뉴">
              <button type="button" className={styles.activeTab}>
                나의 상품
              </button>

              <button type="button">
                북마크
              </button>
            </nav>
          </section>
          <section className={styles.searchSection}>
            <div className={styles.searchWrapper}>
              <label className={styles.searchBox}>
                <span aria-hidden="true">⌕</span>

                <input
                  type="search"
                  placeholder="필요한 내용을 검색해 주세요."
                />
  
              </label>
              <button type="button" className={styles.searchButton}>
                검색
              </button>
            </div>
          </section>
          <section className={styles.boardSection}>
            <div className={styles.boardHeader}>
              <span>번호</span>
              <span>상품 명</span>
              <span>판매가격</span>
              <span>날짜</span>
            </div>

            <div className={styles.boardRow}>
              <span>243</span>
              <span>파라다이스 호텔 제주</span>
              <span>326,000원</span>
              <span>2024.12.16</span>
            </div>

            <div className={styles.boardRow}>
              <span>242</span>
              <span>파라다이스 호텔 제주</span>
              <span>326,000원</span>
              <span>2024.12.16</span>
            </div>

            <div className={styles.boardRow}>
              <span>241</span>
              <span>파라다이스 호텔 제주</span>
              <span>326,000원</span>
              <span>2024.12.16</span>
            </div>

            <div className={styles.boardRow}>
              <span>240</span>
              <span>파라다이스 호텔 제주</span>
              <span>326,000원</span>
              <span>2024.12.16</span>
            </div>

            <div className={styles.boardRow}>
              <span>239</span>
              <span>파라다이스 호텔 제주</span>
              <span>326,000원</span>
              <span>2024.12.16</span>
            </div>

            <div className={styles.boardRow}>
              <span>238</span>
              <span>파라다이스 호텔 제주</span>
              <span>326,000원</span>
              <span>2024.12.16</span>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}