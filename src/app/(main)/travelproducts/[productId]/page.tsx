import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.css";

type ProductDetailPageProps = {
  params: Promise<{
    productId: string;
  }>;
};

const product = {
  title: "포항 : 숙박권 명이 여기에 들어갑니다",
  description: "모던한 분위기의 감도높은 숙소",
  mainImage: "/images/stay-1.png",
  thumbnailImages: [
    "/images/stay-1.png",
    "/images/stay-2.png",
    "/images/stay-1.png",
  ],
  price: "32,500원",
  seller: "김효주",
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { productId } = await params;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.topBar}>
          <Link href="/travelproducts" className={styles.backLink}>
            ← 숙박권 목록으로
          </Link>

          <span className={styles.productNumber}>
            상품 번호: {productId}
          </span>
        </div>

        <section className={styles.productTop}>
          <div className={styles.gallery}>
            <div className={styles.mainImage}>
              <Image
                src={product.mainImage}
                alt={product.title}
                fill
                priority
                sizes="(max-width: 780px) 100vw, 65vw"
                className={styles.image}
              />
            </div>

            <div className={styles.thumbnailList}>
              {product.thumbnailImages.map((image, index) => (
                <div className={styles.thumbnail} key={`${image}-${index}`}>
                  <Image
                    src={image}
                    alt={`${product.title} 사진 ${index + 1}`}
                    fill
                    sizes="100px"
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
          </div>

          <aside className={styles.purchaseCard}>
            <h1 className={styles.title}>{product.title}</h1>

            <p className={styles.description}>
              {product.description}
            </p>

            <div className={styles.price}>{product.price}</div>

            <ul className={styles.noticeList}>
              <li>숙박권은 구매 후 바로 사용할 수 있습니다.</li>
              <li>상세 이용 안내는 상품 설명을 확인해 주세요.</li>
            </ul>

            <button type="button" className={styles.purchaseButton}>
              구매하기
            </button>

            <div className={styles.sellerBox}>
              <span className={styles.sellerLabel}>판매자</span>
              <div className={styles.sellerInfo}>
                <div className={styles.sellerImage}>김</div>
                <span>{product.seller}</span>
              </div>
            </div>
          </aside>
        </section>

        <section className={styles.descriptionSection}>
          <h2>상세 설명</h2>

          <p>
            살어리 살어리랏다 청산에 살어리랏다.
            <br />
            아름다운 공간에서 편안하게 쉬어갈 수 있는 숙소입니다.
            <br />
            바쁜 일상에서 잠시 벗어나 여유로운 시간을 보내보세요.
          </p>

          <p>
            이용에 필요한 안내사항을 확인해 주세요.
            <br />
            숙박 일정과 이용 방법은 구매 후 안내됩니다.
          </p>

          <p>
            가볍게 떠나고 싶은 여행이라면
            <br />
            이 숙박권으로 특별한 하루를 만들어 보세요.
          </p>
        </section>

        <section className={styles.locationSection}>
          <h2>상세 위치</h2>

          <div className={styles.mapPlaceholder}>
            지도가 들어갈 자리
          </div>
        </section>

        <section className={styles.inquirySection}>
          <label htmlFor="inquiry">문의하기</label>

          <textarea
            id="inquiry"
            placeholder="문의사항을 입력해 주세요."
          />

          <div className={styles.inquiryBottom}>
            <span>0/100</span>
            <button type="button">문의 하기</button>
          </div>
        </section>

        <section className={styles.commentSection}>
          <article className={styles.comment}>
            <div className={styles.commentProfile}>김</div>

            <div>
              <strong>김효주</strong>
              <p>
                실제로 잘 이용하고 왔어요. 공간도 깔끔하고 좋았습니다.
              </p>
              <time>2024.11.11</time>
            </div>
          </article>

          <article className={styles.comment}>
            <div className={styles.commentProfile}>박</div>

            <div>
              <strong>박민수</strong>
              <p>
                사진과 실제 숙소가 비슷해서 만족스러웠습니다.
              </p>
              <time>2024.11.11</time>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}