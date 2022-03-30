export const CREATE_HISTORY = `mutation MyMutation($user_email: String = "19mandal97@gmail.com", $correct: Int = 10, $unattempted: Int = 10, $wrong: Int = 10) {
  insert_history(objects: {user_email: $user_email, correct: $correct, unattempted: $unattempted, wrong: $wrong}) {
    returning {
      score
      user_email
    }
  }
}`;
