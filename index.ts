import express, {Express,Router,Request,Response} from 'express'
import axios from "axios";

const app:Express = express()
app.all('*',(req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*')
    next()
})
const router = express.Router()

app.use('/api',router)

router.get('/list',async (req:Request,res:Response)=>{
    const result = await axios.post('https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=chinaDayList,chinaDayAddList,cityStatis,provinceCompare')
    res.json(
        {
            data:result.data
        }
    )
})

app.listen(3333,()=>{
    console.log('http://localhost:3333')
})