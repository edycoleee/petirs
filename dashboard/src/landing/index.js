import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import { getEvent } from "../repository/dataEvent";

const sections = [
  { title: "Profile", url: "#" },
  { title: "Kegiatan", url: "#" },
  { title: "Lainnya", url: "#" },
];

const mainFeaturedPost = {
  title: "PETIRS",
  description: "Perkumpilan Tenaga Informasi Rumahsakit",
  //image: 'https://source.unsplash.com/random',
  image:
    "https://firebasestorage.googleapis.com/v0/b/petirsid1.appspot.com/o/arnold-francisca-nPhl2x4fk2s-unsplash.jpg?alt=media&token=d8c7f35b-f054-4cab-8918-de044d5866a0",
  imageText: "main image description",
  linkText: "Continue reading…",
};



function IndexLanding() {
  let dataEvents = getEvent();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header
          title="Perkumpilan Tenaga Informasi Rumahsakit"
          sections={sections}
        />
      </Container>
      <main>
        <MainFeaturedPost post={mainFeaturedPost} />
        <FeaturedPost posts={dataEvents} />
      </main>
      <Footer title="" description="2022 © Petirs - All Rights Reserved." />
    </>
  );
}

export default IndexLanding;
