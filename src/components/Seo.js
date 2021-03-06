/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function Seo({ description, lang, meta, title }) {
  const {
    allMarkdownRemark: {
      edges: [
        {
          node: {
            frontmatter: { aboutSite, seoKeywords }
          }
        }
      ]
    }
  } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                aboutSite {
                  author
                  year
                  linkToAuthor
                  title
                  description
                }
                seoKeywords
              }
            }
          }
        }
      }
    `
  )
  const metaDescription = description || aboutSite.description
  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={`%s | ${aboutSite.title}`}
      meta={(seoKeywords.length > 0
        ? [
          {
            name: 'keywords',
            content: seoKeywords.join(', ')
          }
        ]
        : []
      ).concat(meta)}
    >
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
      />
      <meta name="Description" content={metaDescription} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={'website'} />
      <meta name="twitter:card" content={'summary'} />
      <meta name="twitter:creator" content={aboutSite.author} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={metaDescription} />
      <link
        href="https://fonts.googleapis.com/css?family=Amatic+SC&display=swap:200,400"
        rel="stylesheet"
      />
    </Helmet>
  )
}

Seo.defaultProps = {
  lang: 'sk',
  meta: [],
  keywords: [],
  description: ''
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired
}

export default Seo
