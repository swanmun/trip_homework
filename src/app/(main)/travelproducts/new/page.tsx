'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './styles.module.css'

type ImageItem = { id: number; preview: string; file: File }

export default function SellPage() {
  const [images, setImages] = useState<ImageItem[]>([])

  function handleImages(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []).slice(0, 1)
    if (!files[0]) return

    const file = files[0]
    setImages([{ id: Date.now(), file, preview: URL.createObjectURL(file) }])
    event.target.value = ''
  }

  function removeImage() {
    if (images[0]) URL.revokeObjectURL(images[0].preview)
    setImages([])
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // FormData를 이용해 API 또는 Server Action으로 전송하세요.
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1 className={styles.title}>숙박권 판매하기</h1>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.section}>
            <label htmlFor="productName">상품명 <span>*</span></label>
            <input id="productName" name="productName" placeholder="상품명을 입력해 주세요." required />
          </div>

          <div className={styles.section}>
            <label htmlFor="price">판매 금액 <span>*</span></label>
            <input id="price" name="price" type="number" min="0" placeholder="상품을 판매할 금액을 입력해 주세요. (단위: 원)" required />
          </div>

          <div className={styles.section}>
            <label htmlFor="description">상품 설명 <span>*</span></label>
            <div className={styles.editor}>
              <div className={styles.toolbar} aria-hidden="true">
                <span>B</span><span><i>I</i></span><span><u>U</u></span><span>A₁</span>
                <span>≡</span><span>☷</span><span>☰</span><span>¶</span><span>↪</span><span>▧</span><span>◉</span><span>↕</span>
              </div>
              <textarea id="description" name="description" placeholder="내용을 입력해 주세요." required />
            </div>
          </div>

          <div className={styles.section}>
            <label htmlFor="salePrice">판매 가격 <span>*</span></label>
            <input id="salePrice" name="salePrice" type="number" min="0" placeholder="판매 가격을 입력해 주세요. (단위: 원)" required />
          </div>

          <div className={styles.section}>
            <label htmlFor="tags">태그 입력</label>
            <input id="tags" name="tags" placeholder="태그를 입력해 주세요." />
          </div>

          <div className={styles.addressSection}>
            <div className={styles.addressFields}>
              <label>주소 <span>*</span></label>
              <div className={styles.postcodeRow}>
                <input name="postcode" placeholder="01234" inputMode="numeric" />
                <button type="button">우편번호 검색</button>
              </div>
              <input name="detailAddress" placeholder="상세주소를 입력해 주세요." />
              <label htmlFor="latitude">위도(LAT)</label>
              <input id="latitude" name="latitude" placeholder="주소를 먼저 입력해 주세요." readOnly />
              <label htmlFor="longitude">경도(LNG)</label>
              <input id="longitude" name="longitude" placeholder="주소를 먼저 입력해 주세요." readOnly />
            </div>

            <div className={styles.mapArea}>
              <label>상세 위치</label>
              <div className={styles.mapPlaceholder}>주소를 먼저 입력해 주세요.</div>
            </div>
          </div>

          <div className={styles.section}>
            <label>사진 첨부</label>
            <div className={styles.imageArea}>
              {images.length === 0 ? (
                <label className={styles.uploadBox}>
                  <span className={styles.plus}>+</span>
                  <span>클릭해서 사진 업로드</span>
                  <input type="file" accept="image/*" onChange={handleImages} hidden />
                </label>
              ) : (
                <div className={styles.previewBox}>
                  <img src={images[0].preview} alt="상품 이미지 미리보기" />
                  <button type="button" onClick={removeImage}>×</button>
                </div>
              )}
            </div>
          </div>

          <div className={styles.actions}>
            <button type="button" className={styles.cancelButton}>취소</button>
            <button type="submit" className={styles.submitButton}>등록하기</button>
          </div>
        </form>
      </div>
    </main>
  )
}