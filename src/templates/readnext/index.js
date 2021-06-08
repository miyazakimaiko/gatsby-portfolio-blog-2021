import React from 'react';
import { graphql, Link } from 'gatsby';
import './readnext.css';

export default () => (
    <StaticQuery
    query={graphql`
        query ReadNextQuery ($relatedFilePaths: [String]) {
            relatedArticles: allContentfulBlog (
                limit: 6
                filter: {
                    topics: { in: $relatedFilePaths }
                }
            )
            {
                edges {
                    node {
                        id
                        slug
                        title
                        featuredImage {
                            fluid(maxWidth: 300, quality: 85) {
                                src
                                ...GatsbyContentfulFluid
                            }
                        }
                        topics {
                            title
                            slug
                        }
                    }
                }
            }
        }
        `}
        render={data => (
            <section class="post-recommendation-section">
                <h4>READ NEXT</h4>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="arrow-icon" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/></svg>
                <hr />
                <div class="posts-container">
                {data.allContentfulBlog.edges.map(edge => (
                    <div class="single-post">
                        <div class="post-image-containter">
                            <a href=""><div class="image"></div></a>
                        </div>
                        <div class="post-detail">
                            <h5 class="title">
                                <a href="">{edge.node.title}</a>
                            </h5>
                            <p class="topic">Software Development</p>
                            <p class="topic">Agile</p>
                            <p class="topic">Scrum</p>
                        </div>
                    </div>
                ))}
                </div>
            </section> 
        )}
    />
)