const express = require("express")
require('dotenv').config()
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const cors = require("cors")
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const port = process.env.PORT || 5000

// middleWire
app.use(cors())
app.use(express.json())


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.dmnxhxd.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();


        const menuCollection = client.db("bistroDB").collection("menu")
        const reviewCollection = client.db("bistroDB").collection("reviews")
        const cartCollection = client.db("bistroDB").collection("carts")
        const userCollection = client.db("bistroDB").collection("users")
        const reservationCollection = client.db("bistroDB").collection("reservations")

        app.get('/menu', async (req, res) => {
            const result = await menuCollection.find().toArray()
            res.send(result)
        })

        app.get('/reviews', async (req, res) => {
            const result = await reviewCollection.find().toArray()
            res.send(result)
        })

        //cart system

        app.post('/carts', async (req, res) => {
            const item = req.body;
            // console.log(item);
            const result = await cartCollection.insertOne(item)
            res.send(result);
        })

        //specific cart data

        app.get('/carts', async (req, res) => {
            let query = {}
            if (req.query?.email) {
                query = { email: req.query.email }
            }
            // console.log(query)
            const result = await cartCollection.find(query).toArray();
            res.send(result)
        })

        //get whole cart data
        app.get('/carts', async (req, res) => {
            const cursor = cartCollection.find()
            const result = await cursor.toArray()
            // console.log(result)
            res.send(result)
        })


        //users 

        app.post('/users', async (req, res) => {
            const userInfo = req.body
            // console.log(userInfo)
            const query = { email: userInfo.email }
            const existingUser = await userCollection.findOne(query)
            if (existingUser) return res.send({ message: 'user already exists' })
            const result = await userCollection.insertOne(userInfo)
            res.send(result)
        })

        app.get('/users', async (req, res) => {
            let query = {}
            if (req.query?.email) {
                query = { email: req.query.email }
            }
            const result = await userCollection.find(query).toArray()
            res.send(result);
        })


        //post menu

        app.post('/menu', async (req, res) => {
            const menu = req.body
            // console.log('ok')
            const result = await menuCollection.insertOne(menu)
            res.send(result)
        })

        // reservations 

        app.post('/reservations', async (req, res) => {
            const reservation = req.body
            console.log(reservation)
            const result = await reservationCollection.insertOne(reservation)
            res.send(result)
        })

        app.get('/reservations', async (req, res) => {
            const result = await reservationCollection.find().toArray()
            res.send(result)
        })


        //stripe 

        app.post('/create-checkout-session', async (req, res) => {
            // Ensure you have the expected data structure in req.body
            const items = req.body;
            console.log(items)
        
            try {
                const line_items = items.map(item => {
                    // Use the item data from req.body to create line items
                    return {
                        price_data: {
                            currency: 'usd',
                            product_data: {
                                name: item.itemName,
                            },
                            unit_amount: parseInt(item.itemPrice)*100, // Convert price to cents
                        },
                        quantity: item.quantity, // Specify the quantity for each item
                    };
                });
        
                const session = await stripe.checkout.sessions.create({
                    line_items,
                    payment_method_types: ['card'],
                    mode: 'payment',
                    success_url: 'http://localhost:3000/success',
                    cancel_url: 'http://localhost:3000/error',
                });
        
                res.json({ url: session.url });
            } catch (e) {
                console.error(e); // Log the error for debugging
                res.status(500).json({ error: e.message });
            }
        });
        
        
        










        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");

    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}

run().catch(console.dir);


app.get('/', (req, res) => {
    res.send("bistro-boss server running")
})

app.listen(port, () => {
    console.log("Bistro Boss Port : ", port)
})