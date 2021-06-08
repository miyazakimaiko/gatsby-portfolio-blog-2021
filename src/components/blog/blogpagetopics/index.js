import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'
import './blogpagetopics.css'

export default () => (
    <StaticQuery
    query={graphql`
        query BlogPageTopicsQuery {
            allMarkdownRemarkTopic {
                edges {
                    node {
                        title
                        slug
                    }
                }
            }
        }
    `}
    render={data => (
        <aside id="sidebar">
            <div className="blog-nav">
                <h5 className="blog-nav-title">Topics</h5>
                <ul className="blog-nav-list">
                {data.allMarkdownRemarkTopic.edges.map(edge => (
                    <li>
                        <Link to={`/${edge.node.slug}/`}>{edge.node.title}</Link>
                    </li>
                ))}
                </ul>
                <hr/>
            </div>
        </aside>
    )}
  />
)