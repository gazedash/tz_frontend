// @flow
import React, { Component } from "react";
import styled from "styled-components";
// geo: lat, lng
const Address = ({ item: { street, suite, city, zipcode, geo } }) => (
  <Name>
    <H6>
      <Attr>address: </Attr>
      {city}
    </H6>
    <H6>{street}</H6>
    <H6>{suite}</H6>
    <H6>{zipcode}</H6>
    {/* JSON.stringify(geo) */}
  </Name>
);
const Company = ({ item: { name, catchPhrase, bs } }) => (
  <Name>
    <H6>
      <Attr>company: </Attr>
      {name}
    </H6>
    <H6>{catchPhrase}</H6>
    <H6>{bs}</H6>
  </Name>
);
const Card = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);
`;
const Name = styled.div`
  display: flex;
`;
const H6 = styled.h6`
  margin: 10px;
`;
const H5 = styled.h5`
  margin: 10px;
`;
const Attr = styled.span`
  font-weight: normal;
`;
const A = styled.a`
 text-decoration: none; 
`
const UserCard = ({
  onClick,
  item: { id, name, username, email, address, phone, website, company }
}) => (
  <Card
    onClick={e => id => {
      e.stopPropagation();
      onClick(id);
    }}
  >
    <Name>
      <H5>{name}</H5> <H6>{username}</H6>
    </Name>
    <Name>
      <H6>
        <Attr>e-mail: </Attr>
        <A href={"mailto:" + email}>{email}</A>
      </H6>
      <H6>
        <Attr>phone: </Attr>
        <A href={"tel:" + phone}>{phone}</A>
      </H6>
      <H6>
        <Attr>website: </Attr>
        <A href={"https://" + website}>{website}</A>
      </H6>
    </Name>
    <Address item={address} />
    <Company item={company} />
  </Card>
);

export default UserCard;
