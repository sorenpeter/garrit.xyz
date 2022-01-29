import { useState, useLayoutEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Meta from "./Meta";

export default function Layout({
  siteTitle,
  siteDescription,
  children,
}) {
  return (
    <section className={`layout`}>
      <Meta siteTitle={siteTitle} siteDescription={siteDescription} />
      <Header siteTitle={siteTitle} />
      <main className="content container">{children}</main>
      <Footer />
    </section>
  );
}
