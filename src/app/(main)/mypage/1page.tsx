"use client";

// import Image from "next/image";
// import HeroBanner from "@/components/home/hero-banner";
import { useState } from "react";
import styles from "./styles.module.css";

export default function MyPage() {
  const [activeMenu, setActiveMenu] = useState("거래내역&북마크");
  const menus = ["거래내역&북마크", "포인트 사용 내역", "비밀번호 변경"];

  return (
    <main className={styles.page}>
      {/* <HeroBanner /> */}
      <div className={styles.container}>
        <section className={styles.myInfoSection}>
          <h2>마이페이지</h2>
          <div className={styles.myInfo}>
            <p>내정보</p>
            <p>김상훈</p>
            <p>23,000 p</p>
            <nav
              aria-label="내정보 메뉴"
              style={{ display: "flex", flexDirection: "column", gap: 8 }}
            >
              {menus.map((menu) => (
                <button
                  key={menu}
                  type="button"
                  onClick={() => setActiveMenu(menu)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    width: "100%",
                    padding: "12px 16px",
                    border: 0,
                    borderRadius: 6,
                    backgroundColor:
                      activeMenu === menu ? "#f1f1f1" : "transparent",
                    textAlign: "left",
                    cursor: "pointer",
                  }}
                >
                  <span>{menu}</span>
                  <span aria-hidden="true">&gt;</span>
                </button>
              ))}
            </nav>
          </div>
        </section>
        <section className={styles.myProductsSection}>
          <p>나의 상품</p>
          <p>북마크</p>
        </section>
        <section className={styles.searchSection}>검색</section>
        <label className={styles.searchBox}>
          <span>⌕</span>
          <input placeholder="필요한 내용을 검색해 주세요." />
        </label>
        <div className={styles.boardSection}>게시판</div>
      </div>
    </main>
  );
}

// export default function TravelProductsPage() {
//   return (
//     <main className={styles.page}>
//       {/* 메인 페이지에서 쓰는 바다 배너를 그대로 사용 */}
//       <HeroBanner />

//       <div className={styles.container}>
//         {/* 추천 숙소 */}
//         <section className={styles.recommendSection}>
//           <h1 className={styles.sectionTitle}>
//             2024 끝여름 낭만있게 마무리 하고 싶다면?
//           </h1>

//           <div className={styles.recommendList}>
//             {recommendedProducts.map((product) => (
//               <article className={styles.recommendCard} key={product.id}>
//                 <Image
//                   src={product.image}
//                   alt={product.title}
//                   fill
//                   className={styles.cardImage}
//                 />

//                 <div className={styles.cardDark} />
//                 <span className={styles.bookmark}>♡ 24</span>
//                 <div className={styles.recommendText}>
//                   <h2>{product.title}</h2>
//                   <p>{product.description}</p>
//                   <strong>{product.price}</strong>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>

//         {/* 중간 프로모션 배너 */}
//         <section className={styles.promotion}>
//           <div className={styles.promotionText}>
//             <span>‘솔로트립’ 독점 숙소</span>

//             <h2>
//               천만 관객이 사랑한
//               <br />
//               특별한 숙소 특가 예약
//             </h2>
//           </div>
//         </section>

//         {/* 상품 목록 */}
//         <section className={styles.productsSection}>
//           <h2 className={styles.sectionTitle}>
//             여기에서만 예약할 수 있는 숙소
//           </h2>

//           <div className={styles.tabs}>
//             <button type="button" className={styles.activeTab}>
//               예약 가능한 숙소
//             </button>

//             <button type="button">예약 마감 숙소</button>
//           </div>

//           <div className={styles.searchArea}>
//             <input type="text" placeholder="YYYY. MM. DD - YYYY. MM. DD" />

//             <input type="text" placeholder="제목을 검색해 주세요." />

//             <button type="button" className={styles.searchButton}>
//               검색
//             </button>

//             <button type="button" className={styles.sellButton}>
//               숙박권 판매하기
//             </button>
//           </div>

//           <div className={styles.categoryList}>
//             {categories.map((category) => (
//               <button type="button" key={category}>
//                 <span className={styles.categoryIcon}>⌂</span>
//                 <span>{category}</span>
//               </button>
//             ))}
//           </div>

//           <div className={styles.productGrid}>
//             {products.map((product) => (
//               <article className={styles.productCard} key={product.id}>
//                 <div className={styles.productImage}>
//                   <Image
//                     src={product.image}
//                     alt={product.title}
//                     fill
//                     className={styles.cardImage}
//                   />

//                   <span className={styles.bookmark}>♡ 24</span>
//                 </div>

//                 <h3>{product.title}</h3>

//                 <p className={styles.hashtags}>{product.hashtags}</p>

//                 <div className={styles.productBottom}>
//                   <span>● 남는트립</span>
//                   <strong>{product.price}</strong>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
