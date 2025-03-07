"use client";

import { useState, useEffect } from "react";
import { GB, GH } from 'country-flag-icons/react/3x2'


function ConverterForm() {

  const [sendAmount, setSendAmount] = useState<string>('1');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [fee, setFee] = useState<number>(0);
  const [recipientGets, setRecipientGets] = useState<number>(0);


  async function fetchRate() {
    const response = await fetch("https://api.exchangerate-api.com/v4/latest/GBP");
    const data = await response.json();
    return data.rates["GHS"];
  }

  useEffect(() => {

    fetchRate().then((rate) => {
      setExchangeRate(rate);
    });
  }, []);

  useEffect(() => {

    if (exchangeRate !== null && sendAmount !== '') {
      const amount = parseFloat(sendAmount);
      const calculatedFee = amount * 0.01;
      setFee(calculatedFee);

      const recipient = amount * exchangeRate;
      setRecipientGets(recipient);
    } else {
      setFee(0);
      setRecipientGets(0);
    }
  }, [sendAmount, exchangeRate]);

  const totalToPay = sendAmount ? parseFloat(sendAmount) + fee : 0;
  const amountWeConvert = sendAmount ? parseFloat(sendAmount) : 0;

  return (
    <section >

      <div className="text-start md:text-center py-12 px-6 md:px-12">

        <h1 className='font-medium text-3xl md:text-4xl text-darkblue'>We are on a mission to reduce the cost of sending <br />
          money to Africa at an average cost of 1%</h1>

      </div>



      <div className="flex flex-col-reverse md:flex-row items-start gap-12 max-w-6xl w-full px-4 md:px-16">
        <div className="w-full flex-1">
          <div className="w-full md:max-w-sm bg-white p-2 md:p-6">

            <div className="mb-4">
              <label htmlFor="sendAmount" className="block text-gray-700 mb-1">
                You send
              </label>
              <div className="flex items-center border border-gray-100 border-1 rounded-md overflow-hidden">
                <input
                  id="sendAmount"
                  type="number"
                  value={sendAmount}
                  onChange={(e) => setSendAmount(e.target.value)}
                  className="w-full text-darkblue px-3 py-4 focus:outline-none"
                />
                <div className="bg-darkblue text-white px-6 py-4 flex items-center gap-2">
                  <GB title="United Kingdom" className="size-8" />

                  <h1>
                    GBP
                  </h1>

                </div>
              </div>
            </div>


            <p className="text-gray-500 mb-4">
              {fee.toFixed(2)} GBP Fee
            </p>

            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Recipient Gets</label>
              <div className="flex items-centerborder border-gray-100 border-1 rounded-md overflow-hidden">
                <input
                  type="number"
                  value={recipientGets.toFixed(2)}
                  readOnly
                  className="w-full px-3 py-4 bg-white text-darkblue focus:outline-none"
                />
                <div className="bg-darkblue text-white px-6 py-4 flex items-center gap-2">
                  <GH title="Ghana" className="size-8" />

                  <h1>
                    GHS
                  </h1>

                </div>
              </div>
            </div>




            <div className="flex justify-between mb-1 text-gray-600">
              <span>Amount we’ll convert</span>
              <span>Guaranteed rate (1 hrs)</span>

            </div>

            <div className="flex justify-between mb-1 text-gray-600">
              <span>{amountWeConvert.toFixed(2)}</span>
              <span>£1 / GH₵{exchangeRate?.toFixed(2)}</span>
            </div>

            <div className="flex justify-between mb-1 text-gray-600">
              <span>Total to Pay</span>
              <span>Average duration</span>

            </div>

            <div className="flex justify-between mb-4 text-gray-600">

              <span>{totalToPay.toFixed(2)} GBP</span>
              <span>Instant</span>
            </div>

            <button
              type="button"
              className="w-full py-3 bg-darkblue text-white font-semibold rounded-md hover:bg-darkblue/50"
            >
              Get started for free
            </button>
          </div>


        </div>



        <div className="flex-1">
          <div className="p-2 md:p-6">
            <h3 className="text-navy text-base font-medium">Why Bomba?</h3>
            <h2 className="mt-2 text-4xl font-bold text-blue-900 leading-tight">
              Send & Receive money on your own terms
            </h2>
            <p className="mt-4 text-gray-600 max-w-md">
              Bomba provides you the luxury of sending money at rates that suit you.
              You can easily send and swap money between GBP, USD, NGN and up to 20
              other African countries using Bomba’s <span className="font-semibold">Swap</span> and
              <span className="font-semibold"> Express</span> services. Beat bank rates, save time
              and gain more.
            </p>
          </div>
        </div>



      </div>



    </section>

  );
}
export default ConverterForm;