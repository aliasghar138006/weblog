import { gql } from '@apollo/client'

const SEND_COMMENT = gql`
  mutation sendcomment(
    $name: String!
    $email: String!
    $comment: String!
    $slug: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        comment: $comment
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`

export { SEND_COMMENT }
