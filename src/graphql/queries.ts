import { gql } from "@apollo/client";

export const FETCH_BOARDS = gql`
  query fetchBoards(
    $page: Int
    $search: String
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchBoards(
      page: $page
      search: $search
      startDate: $startDate
      endDate: $endDate
    ) {
      _id
      writer
      title
      contents
      likeCount
      images
      createdAt
    }
  }
`;

// 검색 결과가 모두 몇 개인지 받아 페이지의 마지막 번호를 계산해요.
export const FETCH_BOARDS_COUNT = gql`
  query fetchBoardsCount(
    $search: String
    $startDate: DateTime
    $endDate: DateTime
  ) {
    fetchBoardsCount(search: $search, startDate: $startDate, endDate: $endDate)
  }
`;

// 좋아요가 많은 게시글을 조회해 메인 위쪽 카드에 사용해요.
export const FETCH_BOARDS_OF_THE_BEST = gql`
  query fetchBoardsOfTheBest {
    fetchBoardsOfTheBest {
      _id
      writer
      title
      contents
      likeCount
      images
      createdAt
    }
  }
`;

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      likeCount
      dislikeCount
      images
      createdAt
    }
  }
`;

// 게시글 한 개에 작성된 댓글 목록을 조회해요.
export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!, $page: Int) {
    fetchBoardComments(boardId: $boardId, page: $page) {
      _id
      writer
      contents
      rating
      createdAt
    }
  }
`;

export const FETCH_TRAVELPRODUCTS = gql`
  query fetchTravelproducts($page: Int, $search: String) {
    fetchTravelproducts(page: $page, search: $search) {
      _id
      name
      remarks
      price
      tags
      images
      pickedCount
      seller {
        name
      }
    }
  }
`;

export const FETCH_TRAVELPRODUCTS_I_SOLD = gql`
  query fetchTravelproductsISold($page: Int, $search: String) {
    fetchTravelproductsISold(page: $page, search: $search) {
      _id
      name
      price
      soldAt
      createdAt
      buyer {
        name
      }
    }
  }
`;

export const FETCH_TRAVELPRODUCTS_I_PICKED = gql`
  query fetchTravelproductsIPicked($page: Int, $search: String) {
    fetchTravelproductsIPicked(page: $page, search: $search) {
      _id
      name
      price
      createdAt
      seller {
        name
      }
    }
  }
`;

export const FETCH_TRAVELPRODUCTS_COUNT_I_SOLD = gql`
  query fetchTravelproductsCountISold {
    fetchTravelproductsCountISold
  }
`;

export const FETCH_TRAVELPRODUCTS_COUNT_I_PICKED = gql`
  query fetchTravelproductsCountIPicked {
    fetchTravelproductsCountIPicked
  }
`;

export const FETCH_POINT_TRANSACTIONS = gql`
  query fetchPointTransactions($page: Int, $search: String) {
    fetchPointTransactions(page: $page, search: $search) {
      _id
      amount
      balance
      status
      statusDetail
      createdAt
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_LOADING = gql`
  query fetchPointTransactionsOfLoading($page: Int, $search: String) {
    fetchPointTransactionsOfLoading(page: $page, search: $search) {
      _id
      impUid
      amount
      balance
      createdAt
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_BUYING = gql`
  query fetchPointTransactionsOfBuying($page: Int, $search: String) {
    fetchPointTransactionsOfBuying(page: $page, search: $search) {
      _id
      amount
      balance
      createdAt
      travelproduct {
        name
        seller {
          name
        }
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_OF_SELLING = gql`
  query fetchPointTransactionsOfSelling($page: Int, $search: String) {
    fetchPointTransactionsOfSelling(page: $page, search: $search) {
      _id
      amount
      balance
      createdAt
      travelproduct {
        name
      }
    }
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_LOADING = gql`
  query fetchPointTransactionsCountOfLoading {
    fetchPointTransactionsCountOfLoading
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_BUYING = gql`
  query fetchPointTransactionsCountOfBuying {
    fetchPointTransactionsCountOfBuying
  }
`;

export const FETCH_POINT_TRANSACTIONS_COUNT_OF_SELLING = gql`
  query fetchPointTransactionsCountOfSelling {
    fetchPointTransactionsCountOfSelling
  }
`;

export const FETCH_TRAVELPRODUCT = gql`
  query fetchTravelproduct($travelproductId: ID!) {
    fetchTravelproduct(travelproductId: $travelproductId) {
      _id
      name
      remarks
      contents
      price
      tags
      images
      pickedCount
      createdAt
      seller {
        name
      }
      travelproductAddress {
        address
        addressDetail
        lat
        lng
      }
    }
  }
`;

export const FETCH_TRAVELPRODUCT_QUESTIONS = gql`
  query fetchTravelproductQuestions($travelproductId: ID!, $page: Int) {
    fetchTravelproductQuestions(
      travelproductId: $travelproductId
      page: $page
    ) {
      _id
      contents
      createdAt
      user {
        name
      }
    }
  }
`;

export const FETCH_TRAVELPRODUCT_QUESTION_ANSWERS = gql`
  query fetchTravelproductQuestionAnswers($questionId: ID!, $page: Int) {
    fetchTravelproductQuestionAnswers(
      travelproductQuestionId: $questionId
      page: $page
    ) {
      _id
      contents
      createdAt
      user {
        name
      }
    }
  }
`;

export const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
      userPoint {
        amount
      }
    }
  }
`;
