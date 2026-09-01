"use client";

import { useQuery } from "@apollo/client/react";
import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent } from "react";

import HeroBanner from "@/components/home/hero-banner";
import { FETCH_TRAVELPRODUCTS } from "@/graphql/queries";
import type { Travelproduct } from "@/types/travelproduct";

import styles from "./styles.module.css";

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

function getImageUrl(images?: string[]) {
  const image = images?.find((item) => item !== "");

  if (!image) {
    return "/images/a.png";
  }

  if (image.startsWith("http")) {
    return image;
  }

  return `https://storage.googleapis.com/${image}`;
}

export default function TravelProductsPage() {
  const [keyword, setKeyword] = useState("");

  const { data, loading, error, refetch } = useQuery<{
    fetchTravelproducts: Travelproduct[];
  }>(FETCH_TRAVELPRODUCTS, {
    variables: {
      page: 1,
      search: "",
    },
    ssr: false,
  });

  const products = data?.fetchTravelproducts ?? [];
  const recommendedProducts = products.slice(0, 2);

  function onSubmitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    void refetch({
      page: 1,
      search: keyword,
    });
  }

  return (
    <main className={styles.page}>
      <HeroBanner />

      <div className={styles.container}>
        <section className={styles.recommendSection}>
          <h1 className={styles.sectionTitle}>
            2026 끝여름 낭만있게 마무리 하고 싶다면?
          </h1>

          <div className={styles.recommendList}>
            {recommendedProducts.map((product) => (
              <Link
                key={product._id}
                href={`/travelproducts/${product._id}`}
                className={styles.recommendCard}
              >
                <Image
                  src={getImageUrl(product.images)}
                  alt={product.name}
                  fill
                  className={styles.cardImage}
                  unoptimized
                />

                <div className={styles.cardDark} />

                <span className={styles.bookmark}>
                  ♡ {product.pickedCount}
                </span>

                <div className={styles.recommendText}>
                  <h2>{product.name}</h2>
                  <p>{product.remarks}</p>
                  <strong>{product.price.toLocaleString()}원</strong>
                </div>
              </Link>
            ))}

            {loading && (
              <p className={styles.loadingText}>
                추천 숙박권을 불러오고 있어요...
              </p>
            )}

            {!loading && !error && recommendedProducts.length === 0 && (
              <p className={styles.loadingText}>
                추천 숙박권이 없습니다.
              </p>
            )}
          </div>
        </section>

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

        <section className={styles.productsSection}>
          <h2 className={styles.sectionTitle}>
            여기에서만 예약할 수 있는 숙소
          </h2>

          <div className={styles.tabs}>
            <button type="button" className={styles.activeTab}>
              예약 가능한 숙소
            </button>

            <button type="button">예약 마감 숙소</button>
          </div>

          <form className={styles.searchArea} onSubmit={onSubmitSearch}>
            <input
              type="text"
              placeholder="YYYY. MM. DD - YYYY. MM. DD"
            />

            <input
              type="text"
              value={keyword}
              onChange={(event) => setKeyword(event.target.value)}
              placeholder="제목을 검색해 주세요."
            />

            <button type="submit" className={styles.searchButton}>
              검색
            </button>

            <Link className={styles.sellButton} href="/travelproducts/new">
              숙박권 판매하기
            </Link>
          </form>

          <div className={styles.categoryList}>
            {categories.map((category) => (
              <button type="button" key={category}>
                <span className={styles.categoryIcon}>⌂</span>
                <span>{category}</span>
              </button>
            ))}
          </div>

          <div className={styles.productGrid}>
            {loading && (
              <p className={styles.loadingText}>
                숙박권을 불러오고 있어요...
              </p>
            )}

            {error && (
              <p className={styles.loadingText}>
                숙박권을 불러오지 못했어요. API 연결을 확인해 주세요.
              </p>
            )}

            {!loading && !error && products.length === 0 && (
              <p className={styles.loadingText}>
                등록된 숙박권이 없습니다.
              </p>
            )}

            {products.map((product) => (
              <Link
                key={product._id}
                href={`/travelproducts/${product._id}`}
                className={styles.productCard}
              >
                <div className={styles.productImage}>
                  <Image
                    src={getImageUrl(product.images)}
                    alt={product.name}
                    fill
                    className={styles.cardImage}
                    unoptimized
                  />

                  <span className={styles.bookmark}>
                    ♡ {product.pickedCount}
                  </span>
                </div>

                <h3>{product.name}</h3>

                <p className={styles.hashtags}>
                  {product.tags?.join(" ") ?? ""}
                </p>

                <div className={styles.productBottom}>
                  <span>
                    ● {product.seller?.name ?? "판매자"}
                  </span>

                  <strong>
                    {product.price.toLocaleString()}원
                  </strong>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}