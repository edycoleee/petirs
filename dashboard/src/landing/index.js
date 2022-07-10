import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";

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

const featuredPosts = [
  {
    id: "1",
    title: "Petirs Workshop",
    date: "31 Maret 2022",
    description: "Belajar dan Kumpul Bersama Anggota Petirs",
    image:
      "https://firebasestorage.googleapis.com/v0/b/petirsid1.appspot.com/o/petirsSolo.jpg?alt=media&token=baa8f691-c776-4c07-a4eb-1860d001bb40",
    imageLabel: "Image Text",
  },
  {
    id: "2",
    title: "Webinar Berkelanjutan",
    date: "Setiap Jumat jam 13.00",
    description: "Webinar Berkelanjutan Materi Seputar IT RS",
    image:
      "https://firebasestorage.googleapis.com/v0/b/petirsid1.appspot.com/o/petirsWebinar1.jpg?alt=media&token=b2e1fe9b-b5db-48a3-b352-20b8f8f5dbe8",
    imageLabel: "Image Text",
  },
];

function IndexLanding() {
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
        <FeaturedPost posts={featuredPosts} />
      </main>
      <Footer title="" description="2022 © Petirs - All Rights Reserved." />
    </>
  );
}

export default IndexLanding;
