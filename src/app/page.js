"use client";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "../../next-i18next.config";
import HomePage from "@/view/home-page/HomePage";

function Index() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <HomePage />
      </I18nextProvider>
    </>
  );
}

export default Index;
