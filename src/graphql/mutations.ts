import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(createUserInput: $input) {
      _id
      email
      name
    }
  }
`;

export const LOGIN_USER = gql`
  mutation loginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      accessToken
    }
  }
`;

// refresh token 쿠키를 이용해 새로운 access token을 받아요.
export const RESTORE_ACCESS_TOKEN = gql`
  mutation restoreAccessToken {
    restoreAccessToken {
      accessToken
    }
  }
`;

// 서버의 refresh token 쿠키까지 함께 지워요.
export const LOGOUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

export const CREATE_BOARD = gql`
  mutation createBoard($input: CreateBoardInput!) {
    createBoard(createBoardInput: $input) {
      _id
    }
  }
`;

export const CREATE_TRAVELPRODUCT = gql`
  mutation createTravelproduct($input: CreateTravelproductInput!) {
    createTravelproduct(createTravelproductInput: $input) {
      _id
    }
  }
`;

export const DELETE_TRAVELPRODUCT = gql`
  mutation deleteTravelproduct($travelproductId: ID!) {
    deleteTravelproduct(travelproductId: $travelproductId)
  }
`;

// 북마크를 추가하거나 해제하고 변경된 북마크 개수를 받아요.
export const TOGGLE_TRAVELPRODUCT_PICK = gql`
  mutation toggleTravelproductPick($travelproductId: ID!) {
    toggleTravelproductPick(travelproductId: $travelproductId)
  }
`;

export const LIKE_BOARD = gql`
  mutation likeBoard($boardId: ID!) {
    likeBoard(boardId: $boardId)
  }
`;

export const DISLIKE_BOARD = gql`
  mutation dislikeBoard($boardId: ID!) {
    dislikeBoard(boardId: $boardId)
  }
`;

export const CREATE_BOARD_COMMENT = gql`
  mutation createBoardComment($boardId: ID!, $input: CreateBoardCommentInput!) {
    createBoardComment(boardId: $boardId, createBoardCommentInput: $input) {
      _id
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($boardCommentId: ID!, $password: String) {
    deleteBoardComment(boardCommentId: $boardCommentId, password: $password)
  }
`;

export const UPDATE_BOARD_COMMENT = gql`
  mutation updateBoardComment(
    $boardCommentId: ID!
    $password: String
    $input: UpdateBoardCommentInput!
  ) {
    updateBoardComment(
      boardCommentId: $boardCommentId
      password: $password
      updateBoardCommentInput: $input
    ) {
      _id
    }
  }
`;

export const CREATE_TRAVELPRODUCT_QUESTION = gql`
  mutation createTravelproductQuestion(
    $travelproductId: ID!
    $contents: String!
  ) {
    createTravelproductQuestion(
      travelproductId: $travelproductId
      createTravelproductQuestionInput: { contents: $contents }
    ) {
      _id
    }
  }
`;

export const CREATE_TRAVELPRODUCT_QUESTION_ANSWER = gql`
  mutation createTravelproductQuestionAnswer(
    $questionId: ID!
    $contents: String!
  ) {
    createTravelproductQuestionAnswer(
      travelproductQuestionId: $questionId
      createTravelproductQuestionAnswerInput: { contents: $contents }
    ) {
      _id
    }
  }
`;

export const UPDATE_TRAVELPRODUCT_QUESTION_ANSWER = gql`
  mutation updateTravelproductQuestionAnswer(
    $answerId: ID!
    $contents: String!
  ) {
    updateTravelproductQuestionAnswer(
      travelproductQuestionAnswerId: $answerId
      updateTravelproductQuestionAnswerInput: { contents: $contents }
    ) {
      _id
    }
  }
`;

export const DELETE_TRAVELPRODUCT_QUESTION_ANSWER = gql`
  mutation deleteTravelproductQuestionAnswer($answerId: ID!) {
    deleteTravelproductQuestionAnswer(travelproductQuestionAnswerId: $answerId)
  }
`;
