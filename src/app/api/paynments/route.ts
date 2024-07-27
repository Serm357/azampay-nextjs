import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import azampay from "azampay";
import { AzamPay } from "azampay/lib/modules/azampay";
import { PostCheckOut, TokenPayload, TokenResponse } from "azampay/lib/shared/interfaces/base.interface";

const BaseUrl = "https://sandbox.azampay.co.tz"; // sand box

const authPayload = {
  apiKey: "X-API-KEY",
  appName: "test-store-1",
  clientId: "bb83f519-dec6-4b24-ab56-0844598aa535",
  clientSecret:
    "ENwTHCBxkcK0ee8jzzRWM9YcmeuEj2ScV0U8VQAMVyKHkJgq8KymqM+7s5i+1Le6DHz4j/2w4erwYnwZ5zPi2ynM4GvAWhr/8o5HN3tQpXPMhID821nKeSqDojtUF+OLmIMbBbB+jaPzhnwrC7jLexLdvusj50LCZckOyFHxtKc8a/G3ObGw8NvEwEW40IzMak6hrDzTkGKE3k+h3ATGwc81Ke0AzXZ6xM0lYnuCmrI8UkneIYcZjamzPsIRzu4JWjSEYeilrtYX+Zl0F6/7iy9i7IM8kjZu3n8P65DCTzPU9JBmUXOzbZEnwu5V9ecWxqfAIn6CaiSiNXogtLaMB2uHMdPzVRGDLWXq/k9MLIayRre2eEyi7N/EtQD9rNPZwUGvvbOjBsyL05eFTZw2zPusjRuL47IKD2D3CG/T4wcicgMKY2bF5kmHlsDw/vpsiDcP+18LMz+t8xiJpouZYT60Pz2zhLzHqYLWjZANwhJWNgyVLrVAceipNQtRwWXhPFvWSFSH44bsQG5cbwJIrVsuiZfCAAN73agxMCBAcE1MQaeA0gJtVxTRZtP7XVfI2979/EKZmpFYJZkTzW6qr4+FpY4gaddh8J8WCOJ+a0NsD8S/5cZT+UU+LhjhGncdEbaHyko5gZ9h6T1yfP+rijtI7XK1fzJrtysI8hO5N98=",
};

export async function POST() {
  const payload: PostCheckOut = {
    amount: "1000",
    currency: "TZS",
    externalId: "Salum-user-1",
    appName: "test-store-11",
    clientId: "bb83f519-dec6-4b24-ab56-0844598aa535",
    vendorId: uuidv4(),
    language: "en",
    vendorName: "TeststoreVendorName",
    redirectFailURL: "http://localhost:3000/fail",
    redirectSuccessURL: "http://localhost:3000/success",
    requestOrigin:
      "http://localhost:3000/",
      // "https://3000-idx-azam-pay-1720550329728.cluster-blu4edcrfnajktuztkjzgyxzek.cloudworkstations.dev/",
    cart: { items: [{ name: "Shoes" }] },
  };

  const token = await azampay.getToken(authPayload);
//     const checkout = token.postCheckout(payload)
// const resp= checkout
// console.log(resp)

console.log(token.statusCode + "ln 40");

const instance = new azampay.instance({
  // @ts-ignore
  accessToken: token?.data.accessToken,
  apiKey: "X-API-KEY",
});
const resp = await instance.postCheckout(payload);
const data = await resp
console.log(resp);

  return new Response("resp");
}
