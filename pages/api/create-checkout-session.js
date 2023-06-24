const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

export default async (req, res) => {
  const { items, email } = req.body

  const modifiedItems = items.map((item) => { })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_rates: [""],
    shipping_address_collection: {
      allowed_countries: ["GB", "US"]
    },
    line_items: modifiedItems,
    mode: 'payment',
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email,
      images: JSON.stringify(items.map((item) => item.image))
    },
  })

  res.status(200).json({
    id: session.id,
  })
}
