import { gql } from '@apollo/client'

const GET_BLOGS = gql`
  query {
    posts {
      author {
        name
        picture {
          url
        }
      }
      slug
      title
      coverFile {
        url
      }
    }
  }
`

const GET_AUTHORS = gql`
  query {
    authors {
      id
      name
      slug
      picture {
        url
      }
    }
  }
`

const GET_AUTHOR = gql`
  query getauthor($slug: String!) {
    author(where: { slug: $slug }) {
      about {
        html
      }
      name
      id
      picture {
        url
      }
      slug
      posts {
        title
        slug
        id
        coverFile {
          url
        }
      }
    }
  }
`

const GET_BLOG = gql`
  query getblog($slug: String!) {
    post(where: { slug: $slug }) {
      author {
        name
        picture {
          url
        }
      }
      coverFile {
        url
      }
      descriptionPost {
        html
      }
      id
      slug
      title
    }
  }
`

const GET_COMMENTS = gql`
  query getcomments($slug: String!) {
    comments(where: {post: {slug: $slug}}) {
    id
    name
    comment
  }
  }
`

export { GET_BLOGS, GET_AUTHORS, GET_AUTHOR, GET_BLOG , GET_COMMENTS }
