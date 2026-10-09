import React from "react";
import MultipageNavbar from "@/components/Layout/MultipageNavbar";
import Footer from "@/components/Layout/Footer";
import SubscribeForm from "@/components/Common/SubscribeForm";
import PageTitle from "@/components/Common/PageTitle";

export default function Team() {
  return (
    <>
      <MultipageNavbar />

      <PageTitle
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Team"
      />

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            <p>
              88&apos;s Technologies Inc. is an independent software company
              based in Coquitlam, British Columbia, Canada.
            </p>
          </div>
        </div>
      </div>

      <SubscribeForm />

      <Footer />
    </>
  );
}
