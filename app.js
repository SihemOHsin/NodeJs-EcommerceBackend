const express=require('express');
const mongoose =require("mongoose")
const dotenv =require('dotenv')

dotenv.config()
const app = express();
//BodyParser Middleware
app.use(express.json());

const cors=require('cors')
const scategorieRouter =require("./routes/scategorie.route")
const categorieRouter =require("./routes/categorie.route")
const articleRouter =require("./routes/article.route")
const userRouter=require("./routes/users.route")


app.use(express.static(__dirname + '/'));
app.use('/api/scategories', scategorieRouter);
app.use('/api/categories', categorieRouter);
app.use('/api/articles', articleRouter);
app.use('/api/users', userRouter);
app.use(cors());

mongoose.set("strictQuery", false);
// Connexion à la base données
//
mongoose.connect(process.env.DATABASECLOUD,{
useNewUrlParser: true,
useUnifiedTopology: true
})
.then(() => {console.log("Connexion à la base de données réussie");
}).catch(err => {
console.log('Impossible de se connecter à la base de données', err);
process.exit();
});
//
app.get("/",(req,res)=>{
res.send("bienvenu sur mon site");
});
app.listen(process.env.PORT, () => {
console.log(`Server is listening on port ${process.env.PORT}`); });
