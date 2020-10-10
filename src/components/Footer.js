import React from "react";
import styled from "styled-components";
import { useStaticQuery, Link, graphql } from "gatsby";

// const Footer = ({ children }) => {...}
// export default Footer

const FooterGroup = styled.div`
  background: #f1f3f5;
  padding: 50px 0;
  display: grid;
  row-gap: 20px;
`;
const Text = styled.p`
  font-size: 24px;
  font-weight: 600;
  color: #486791;
  max-width: 500px;
  margin: 0 auto 12px auto;
  text-align: center;
`;
const Button = styled.button`
  background: linear-gradient(90deg, rgb(32, 14, 97), rgb(100, 7, 109));
  box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
  border-radius: 30px;
  color: white;
  border: none;
  padding: 16px 60px;
  font-size: 20px;
  font-weight: 600;
  justify-self: center;
  transition: 1s all cubic-bezier(0.2, 0.8, 0.2, 1);

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
    transform: translateY(-4px);
  }
`;
const LinkGroup = styled.div`
  width: 560px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 12px;
  column-gap: 72px;
  transition: 1s all cubic-bezier(0.2, 0.8, 0.2, 1);

  a {
    text-decoration: none;
    transition: 0.8s;
    color: rgb(100, 7, 109);
  }

  a:hover {
    color: black;
  }

  a:visited {
    color: rgb(100, 7, 109);
  }
`;

const FooterRefs = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #486791;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
`;

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulLink(sort: { fields: [createdAt], order: ASC }) {
          edges {
            node {
              title
              url
            }
          }
        }
      }
    `
  );
  return (
    <FooterGroup>
      <Text>
        Rand's most widely known contributions to design are his corporate
        identities.
      </Text>
      <Button>DESIGN</Button>
      <LinkGroup>
        {data.allContentfulLink.edges.map((edge, index) => (
          <a href={edge.node.url} key={index}>
            {" "}
            {edge.node.title}{" "}
          </a>
        ))}
      </LinkGroup>
      <FooterRefs>
        Text is available under the Creative Commons Attribution-ShareAlike
        License, Wikipedia® is a registered trademark of the Wikimedia
        Foundation, Inc., a non-profit organization.
      </FooterRefs>
    </FooterGroup>
  );
};
