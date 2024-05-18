"use client";
import React, { useState } from "react";
import { PageTitle, SubTitle } from "../common/typography.component";
import { useTranslation } from "react-i18next";
import { Icon } from "@iconify/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import PrimaryButton from "../common/PrimaryButton";
import PaypalPaymentGateway from "./paypalPaymentGateway";
import PaymentDialog from "./paymentDialog";

const style = {
  backgroundImage: `linear-gradient(to right,
                  rgba(0,0,0, 0.8),
                  rgba(0,0,0, 0.8)), url(/assets/images/coffee-bg.jpg)`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right center",
  // minHeight: 300,
  width: "100%",
  objectFit: "cover",
};

function BuyMeACoffee() {
  const { t } = useTranslation();
  const [count, setCount] = useState(1);
  let [isOpen, setIsOpen] = useState(true);

  function close() {
    setIsOpen(false);
  }

  const handleSubmit = (e) => {
    e.preventdefault();
  };
  console.log(isOpen, "open");
  return (
    <>
      <div>
        <div
          className="w-full flex flex-col justify-center lg:min-h-screen md:min-h-[80vh] min-h-[60vh]"
          style={style}
        >
          {" "}
          <div className=" container flex flex-col gap-1">
            <PageTitle
              text={t("Buy A Coffee")}
              className="text-white font-semibold"
            />
            <p className="text-secondary">
              {t(
                "Buy me a coffee and support my creative work. A supporter is worth a thousand followers."
              )}
            </p>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="shadow-lg bg-white dark:bg-black rounded-lg lg:w-[60%] md:w-[70%] w-full m-auto py-5 px-8 md:my-20 my-10">
          <div className="flex flex-col gap-5 ">
            <div className="flex flex-row items-center gap-1">
              <SubTitle
                text={t("Buy Himanshu Sharma a coffee")}
                className="font-semibold"
              />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Icon icon="ph:question-light" fontSize={20} />
                  </TooltipTrigger>
                  <TooltipContent className="dark:bg-white bg-black max-w-[300px] text-center py-2">
                    <small className="text-white dark:text-black">
                      {t(
                        "Support Himanshu Sharma directly. You'll be taken to a 'thank you page' after the payment."
                      )}
                    </small>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="flex flex-row md:gap-5 gap-2 items-center px-5 py-3 bg-gray-100 border border-secondary rounded-lg">
              <img src="/assets/images/coffee-img.png" height={50} width={50} />
              <b className="text-2xl text-gray-400">X</b>
              <div
                className={`h-[50px] w-[50px] rounded-full  flex items-center justify-center border border-secondary text-xl font-semibold cursor-pointer hover:border-yellow-600 ${
                  count == 1 ? "text-white bg-secondary" : "text-secondary"
                }`}
                onClick={() => setCount(1)}
              >
                1
              </div>
              <div
                className={`h-[50px] w-[50px] rounded-full  flex items-center justify-center border border-secondary text-xl font-semibold cursor-pointer hover:border-yellow-600 ${
                  count == 3 ? "text-white bg-secondary" : "text-secondary"
                }`}
                onClick={() => setCount(3)}
              >
                3
              </div>
              <div
                className={`h-[50px] w-[50px] rounded-full  flex items-center justify-center border border-secondary text-xl font-semibold cursor-pointer hover:border-yellow-600 ${
                  count == 5 ? "text-white bg-secondary" : "text-secondary"
                }`}
                onClick={() => setCount(5)}
              >
                5
              </div>
              <input
                placeholder="10"
                className="h-[50px] w-[50px] rounded-lg border border-slate-300 text-center px-2 font-semibold"
                value={count}
                required
                min="1"
                type="number"
                onChange={(e) => setCount(e.target.value)}
              />
            </div>
            <form
              className="flex flex-col gap-4 "
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                placeholder={t("Name or @yoursocial")}
                className="py-2 font-semibold rounded-lg border border-gray-400  px-2 pl-4"
              />
              <textarea
                placeholder={t("Say something nice")}
                rows={3}
                className="py-2 font-medium rounded-lg border border-gray-400  px-2 pl-4 "
              />
              <div className="flex gap-2 items-center">
                <input
                  id="default-checkbox"
                  type="checkbox"
                  value=""
                  placeholder="sdsd"
                  className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded  cursor-pointer dark:border-gray-600 dark:bg-white"
                />
                <label className="small dark:text-white text-black">
                  {t("Make this message private")}
                </label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Icon
                        icon="ph:question-light"
                        fontSize={20}
                        className="text-slate-500 hover:text-black dark:text-white"
                      />
                    </TooltipTrigger>
                    <TooltipContent className="dark:bg-white bg-black max-w-[300px] text-center py-2">
                      <small className="text-white dark:text-black">
                        {t(
                          "The message will be visible to you and the creator only"
                        )}
                      </small>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div onClick={() => setIsOpen(true)}>
                <PrimaryButton
                  text={` ${t("Support")} $${Number(count)}`}
                  className="font-medium"

                  // type="submit"
                />
              </div>
            </form>
          </div>
          {/* <div className="mt-5">
            <PaypalPaymentGateway amount={count} />
          </div> */}
        </div>
      </div>
      <PaymentDialog isOpen={isOpen} close={close} count={count} />
    </>
  );
}

export default BuyMeACoffee;
