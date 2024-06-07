import express from 'express'
import fetch from "node-fetch"
import "dotenv/config"
import path from "path"


const PORT = 8081
const PAYPAL_CLIENT_ID = 'Ab7FfAV8fgViNdpy7guRDWcLK26WTHBsD9oblX6Tt5CAl1zo0u96mT3tDfMcYKI28il7Nk1SFH6gC4f2'
const PAYPAL_CLIENT_SECRET = 'EATM7wBO4PIxwQ_Nu4VJ4KezrYj_Ad8vNNbSC5AW82d3O3FG9NAKGe2PH4Tzw-cb9_LHxXDqIbZOhplI'


const base = "https://api-m.sandbox.paypal.com"
const app = express()

app.use(express.static("client"))
app.use(express.json())


const generateAccessToken = async () => {
  try {
    if (!PAYPAL_CLIENT_ID || !PAYPAL_CLIENT_SECRET) {
      throw new Error("MISSING_API_CREDENTIALS")
    }
    const auth = Buffer.from(
      PAYPAL_CLIENT_ID + ":" + PAYPAL_CLIENT_SECRET,
    ).toString("base64")
    const response = await fetch(`${base}/v1/oauth2/token`, {
      method: "POST",
      body: "grant_type=client_credentials",
      headers: {
        Authorization: `Basic ${auth}`,
      },
    })

    const data = await response.json()
    return data.access_token
  } catch (error) {
    console.error("Failed to generate Access Token:", error)
  }
}


const createOrder = async (cart) => {

  console.log(
    "shopping cart information passed from the frontend createOrder() callback:",
    cart,
  )

  const accessToken = await generateAccessToken()
  const url = `${base}/v2/checkout/orders`
  const payload = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: `${cart?.totalPrice}`,
        },
      },
    ],
  }
  console.log('payload', { ...payload })
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,

    },
    method: "POST",
    body: JSON.stringify(payload),
  })

  return handleResponse(response)
}


const captureOrder = async (orderID) => {
  const accessToken = await generateAccessToken()
  const url = `${base}/v2/checkout/orders/${orderID}/capture`

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,

    },
  })

  return handleResponse(response)
}

async function handleResponse (response) {
  try {
    const jsonResponse = await response.json()
    return {
      jsonResponse,
      httpStatusCode: response.status,
    }
  } catch (err) {
    const errorMessage = await response.text()
    throw new Error(errorMessage)
  }
}

app.post("/api/orders", async (req, res) => {
  try {

    const { cart } = req.body
    console.log('cart:', cart)
    const { jsonResponse, httpStatusCode } = await createOrder(cart)
    res.status(httpStatusCode).json(jsonResponse)
  } catch (error) {
    console.error("Failed to create order:", error)
    res.status(500).json({ error: "Failed to create order." })
  }
})

app.post("/api/orders/:orderID/capture", async (req, res) => {
  try {

    const { orderID } = req.params
    console.log('orderID:', orderID)
    const { jsonResponse, httpStatusCode } = await captureOrder(orderID)
    res.status(httpStatusCode).json(jsonResponse)
  } catch (error) {
    console.error("Failed to create order:", error)
    res.status(500).json({ error: "Failed to capture order." })
  }
})


app.listen(PORT, () => {
  console.log(`Node server listening at http://localhost:${PORT}/`)
})
