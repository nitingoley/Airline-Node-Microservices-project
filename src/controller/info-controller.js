const info = (req , res)=>{
    return res.json({
        message: "API controller working",
        sucess: true , 
        error: {},
        data: {},
    })
}

module.exports = {
    info
}