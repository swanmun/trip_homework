"use client";

import { useMutation } from "@apollo/client/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { TOGGLE_TRAVELPRODUCT_PICK } from "@/graphql/mutations";
import styles from "./styles.module.css";

type ProductCardProps = {
  id: string;
  image: string;
  title: string;
  description: string;
  tag: string;
  writer: string;
  price: string;
  pickedCount: number;
};

export default function ProductCard({
  id,
  image,
  title,
  description,
  tag,
  writer,
  price,
  pickedCount: initialPickedCount,
}: ProductCardProps) {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [pickedCount, setPickedCount] = useState(initialPickedCount);
  const [togglePick, { loading }] = useMutation<{
    toggleTravelproductPick: number;
  }>(TOGGLE_TRAVELPRODUCT_PICK);

  const handleBookmark = async () => {
    try {
      const result = await togglePick({
        variables: { travelproductId: id },
      });

      setPickedCount(result.data?.toggleTravelproductPick ?? pickedCount);
      setIsBookmarked((previous) => !previous);
    } catch {
      alert("북마크는 로그인 후 이용할 수 있어요.");
    }
  };

  return (
    <article className={styles.card}>
      <div className={styles.imageBox}>
        <Link href={`/travelproducts/${id}`}>
          <img
            className={styles.productImage}
            src={image}
            alt={title}
          />
        </Link>

        <button
          className={`${styles.bookmarkButton} ${isBookmarked ? styles.active : ""}`}
          type="button"
          disabled={loading}
          onClick={handleBookmark}
          aria-label={isBookmarked ? "북마크 해제" : "북마크 추가"}
          aria-pressed={isBookmarked}
        >
          <Image src="/icons/bookmark.svg" alt="" width={22} height={22} />
          <span>{pickedCount}</span>
        </button>
      </div>

      <Link className={styles.textBox} href={`/travelproducts/${id}`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className={styles.tag}>{tag}</span>

        <div className={styles.bottomRow}>
          <div className={styles.writer}>
            <span className={styles.avatar}>
              <Image src="/icons/person.svg" alt="" width={18} height={18} />
            </span>
            <span>{writer}</span>
          </div>
          <strong>{price}</strong>
        </div>
      </Link>
    </article>
  );
}