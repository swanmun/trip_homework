'use client'

import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './styles.module.css'

type ImageItem = {
  id: number
  file: File
  preview: string
}

export default function BoardNewPage() {
  const [images, setImages] = useState<ImageItem[]>([])

  function handleImageChange(event: ChangeEvent<HTMLInputElement>) {
    const files = Array.from(event.target.files ?? []).slice(0, 3 - images.length)

    const nextImages = files.map((file, index) => ({
      id: Date.now() + index,
      file,
      preview: URL.createObjectURL(file),
    }))

    setImages((current) => [...current, ...nextImages])
    event.target.value = ''
  }

  function removeImage(id: number) {
    setImages((current) => {
      const image = current.find((item) => item.id === id)
      if (image) URL.revokeObjectURL(image.preview)
      return current.filter((item) => item.id !== id)
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    // 여기에서 API 호출 또는 Server Action을 연결하세요.
  }

  return (
    <main className={styles.page}>
      <div className={styles.screen}>
        <div className={styles.container}>
          <h1 className={styles.title}>게시물 등록</h1>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.authorRow}>
              <div className={styles.field}>
                <label htmlFor="author">작성자 <span>*</span></label>
                <input id="author" name="author" placeholder="작성자 이름을 입력해 주세요." required />
              </div>
              <div className={styles.field}>
                <label htmlFor="password">비밀번호 <span>*</span></label>
                <input id="password" name="password" type="password" placeholder="비밀번호를 입력해 주세요." required />
              </div>
            </div>

            <div className={styles.section}>
              <label htmlFor="title">제목 <span>*</span></label>
              <input id="title" name="title" placeholder="제목을 입력해 주세요." required />
            </div>

            <div className={styles.section}>
              <label htmlFor="content">내용 <span>*</span></label>
              <textarea id="content" name="content" placeholder="내용을 입력해 주세요." required />
            </div>

            <div className={styles.section}>
              <label>주소</label>
              <div className={styles.addressSearch}>
                <input className={styles.postcode} name="postcode" placeholder="01234" inputMode="numeric" />
                <button type="button" className={styles.searchButton}>우편번호 검색</button>
              </div>
              <input name="address" placeholder="주소를 입력해 주세요." />
              <input name="detailAddress" placeholder="상세주소" />
            </div>

            <div className={styles.section}>
              <label htmlFor="youtube">유튜브 링크</label>
              <input id="youtube" name="youtube" type="url" placeholder="링크를 입력해 주세요." />
            </div>

            <div className={styles.section}>
              <label>사진 첨부</label>
              <div className={styles.imageList}>
                {images.map((image) => (
                  <div className={styles.imageBox} key={image.id}>
                    <img src={image.preview} alt="업로드 미리보기" />
                    <button type="button" onClick={() => removeImage(image.id)} aria-label="사진 삭제">×</button>
                  </div>
                ))}

                {images.length < 3 && (
                  <label className={styles.uploadBox}>
                    <span className={styles.plus}>+</span>
                    <span>클릭해서 사진 업로드</span>
                    <input type="file" accept="image/*" multiple onChange={handleImageChange} hidden />
                  </label>
                )}
              </div>
            </div>

            <div className={styles.actions}>
              <button type="button" className={styles.cancelButton}>취소</button>
              <button type="submit" className={styles.submitButton}>등록하기</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}