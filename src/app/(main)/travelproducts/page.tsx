import Image from "next/image";
import HeroBanner from "@/components/home/hero-banner";
import styles from "./styles.module.css";

const recommendedProducts = [
  {
    id: 1,
    image: "/images/stay-1.png",
    title: "포항 : 당장 가고 싶은 숙소",
    description: "살어리 살어리랏다 청산에 살어리랏다",
    price: "32,900원",
  },
  {
    id: 2,
    image: "/images/stay-2.png",
    title: "강릉 : 마음까지 깨끗해지는 하얀 숙소",
    description: "강릉의 푸른 바다와 함께하는 특별한 하루",
    price: "32,900원",
  },
];

const products = [
  {
    id: 1,
    image: "/images/stay-1.png",
    title: "살어리 살어리랏다 청산에 살어리랏다",
    hashtags: "#강릉 여행 #숙소 추천 #바다",
    price: "32,900원",
  },
  {
    id: 2,
    image: "/images/stay-1.png",
    title: "바다를 보며 쉬어가는 감성 숙소",
    hashtags: "#오션뷰 #감성 숙소 #여행",
    price: "32,900원",
  },
  {
    id: 3,
    image: "/images/stay-1.png",
    title: "조용한 휴식을 위한 특별한 숙소",
    hashtags: "#조용한 숙소 #힐링 #휴식",
    price: "32,900원",
  },
  {
    id: 4,
    image: "/images/stay-1.png",
    title: "이번 주말 떠나기 좋은 숙소",
    hashtags: "#주말 여행 #국내 여행 #호텔",
    price: "32,900원",
  },
  {
    id: 5,
    image: "/images/stay-1.png",
    title: "여유롭게 머물기 좋은 숙소",
    hashtags: "#여유 #휴가 #추천 숙소",
    price: "32,900원",
  },
  {
    id: 6,
    image: "/images/stay-1.png",
    title: "친구와 떠나는 주말 여행 숙소",
    hashtags: "#친구 여행 #주말 #숙박권",
    price: "32,900원",
  },
  {
    id: 7,
    image: "/images/stay-1.png",
    title: "따뜻한 분위기의 감성 숙소",
    hashtags: "#감성 #숙소 #힐링 여행",
    price: "32,900원",
  },
  {
    id: 8,
    image: "/images/stay-1.png",
    title: "나만 알고 싶은 조용한 숙소",
    hashtags: "#숨은 숙소 #조용한 여행",
    price: "32,900원",
  },
];

const categories = [
  "1인 전용",
  "아파트",
  "호텔",
  "캠핑",
  "룸 서비스 가능",
  "불멍",
  "반신욕&스파",
  "바다 위 숙소",
];

export default function TravelProductsPage() {
  return (
    <main className={styles.page}>
      {/* 메인 페이지에서 쓰는 바다 배너를 그대로 사용 */}
      <HeroBanner />

      <div className={styles.container}>
        {/* 추천 숙소 */}
        <section className={styles.recommendSection}>
          <h1 className={styles.sectionTitle}>
            2024 끝여름 낭만있게 마무리 하고 싶다면?
          </h1>

          <div className={styles.recommendList}>
            {recommendedProducts.map((product) => (
              <article className={styles.recommendCard} key={product.id}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={styles.cardImage}
                />

                <div className={styles.cardDark} />

                <div className={styles.recommendText}>
                  <h2>{product.title}</h2>
                  <p>{product.description}</p>
                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 중간 프로모션 배너 */}
        <section className={styles.promotion}>
          <div className={styles.promotionText}>
            <span>‘솔로트립’ 독점 숙소</span>

            <h2>
              천만 관객이 사랑한
              <br />
              특별한 숙소 특가 예약
            </h2>
          </div>
        </section>

        {/* 상품 목록 */}
        <section className={styles.productsSection}>
          <h2 className={styles.sectionTitle}>
            여기에서만 예약할 수 있는 숙소
          </h2>

          <div className={styles.tabs}>
            <button type="button" className={styles.activeTab}>
              예약 가능한 숙소
            </button>

            <button type="button">
              예약 마감 숙소
            </button>
          </div>

          <div className={styles.searchArea}>
            <input
              type="text"
              placeholder="YYYY. MM. DD - YYYY. MM. DD"
            />

            <input
              type="text"
              placeholder="제목을 검색해 주세요."
            />

            <button type="button" className={styles.searchButton}>
              검색
            </button>

            <button type="button" className={styles.sellButton}>
              숙박권 판매하기
            </button>
          </div>

          <div className={styles.categoryList}>
            {categories.map((category) => (
              <button type="button" key={category}>
                <span className={styles.categoryIcon}>⌂</span>
                <span>{category}</span>
              </button>
            ))}
          </div>

          <div className={styles.productGrid}>
            {products.map((product) => (
              <article className={styles.productCard} key={product.id}>
                <div className={styles.productImage}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className={styles.cardImage}
                  />

                  <span className={styles.bookmark}>♡ 24</span>
                </div>

                <h3>{product.title}</h3>

                <p className={styles.hashtags}>
                  {product.hashtags}
                </p>

                <div className={styles.productBottom}>
                  <span>● 남는트립</span>
                  <strong>{product.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}